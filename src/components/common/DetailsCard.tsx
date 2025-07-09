import React from 'react'
import Image from 'next/image';
import {regionLabels} from '@/utils/constants';
import {CardCartIcon, TrashBinIcon} from '@/utils/icons';
import {useCart} from '@/context/CartContext';
import {CardItem} from '@/types';

export const DetailsCard = ({billboard}: {billboard: CardItem}) => {
    const { addToCart, removeFromCart, isInCart } = useCart();
    const inCart = isInCart(billboard.id);

    return (
      <div
          className="bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-stretch">
          <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                  src={billboard.img}
                  alt={billboard.city}
                  width={420}
                  height={260}
                  className="rounded-xl object-cover w-full h-60 md:h-72"
              />
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-between">
              <div className="flex flex-row-reverse items-start justify-between mb-2">
                  {inCart ? (
                      <button
                          onClick={() => removeFromCart(billboard.id)}
                          className="w-12 h-8 cursor-pointer"
                          type="button"
                          aria-label="Видалити з кошика"
                      >
                          <TrashBinIcon />
                      </button>
                  ) : (
                      <button
                          onClick={() => addToCart(billboard)}
                          className="w-12 h-8 cursor-pointer rounded-full border-2 border-[var(--color-purple)] flex items-center justify-center bg-white text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-colors"
                          type="button"
                          aria-label="Додати до кошика"
                      >
                          <CardCartIcon />
                      </button>
                  )}
                  <div className="flex flex-col gap-2 text-base md:text-lg">
                      <div>
                          <b>Область</b>{' '}
                          <span className="ml-2">
                                        {regionLabels[billboard.region] ||
                                            billboard.region}
                                    </span>
                      </div>
                      <div>
                          <b>Місто</b>{' '}
                          <span className="ml-2">
                                        {billboard.city}
                                    </span>
                      </div>
                      <div>
                          <b>Адреса</b>{' '}
                          <span className="ml-2">
                                        {billboard.address}
                                    </span>
                      </div>
                      <div>
                          <b>Розмір</b>{' '}
                          <span className="ml-2">6x3</span>
                      </div>
                      <div>
                          <b>Сторона</b>{' '}
                          <span className="ml-2">A</span>
                      </div>
                      <div>
                          <b>Тип</b>{' '}
                          <span className="ml-2">Відеоборд</span>
                      </div>
                      <div>
                          <b>Код</b>{' '}
                          <span className="ml-2">26779</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}