"use client"
import React from 'react'
import {DetailsCard} from '@/components/common/DetailsCard';
import {useCart} from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Cart() {
    const { cart } = useCart();


    return (
        <div>
            <section
                className="w-full bg-[var(--color-purple)] bg-[url('/assets/images/bg.svg')] bg-cover bg-center pt-22 md:pt-28 py-12 md:py-20 text-white text-center">
                <h1 className="text-2xl md:text-4xl text-center font-bold mb-3">
                    Корзина
                </h1>
            </section>

            <div className="max-w-[1320px] mx-auto px-5 py-10">
                <Link
                    href={"/catalog"}
                    className="text-gray-400 mb-[30px]  text-base mb-4 flex items-center gap-[10px]"
                >
                    <Image
                        src={'/assets/icons/arrow-left.svg'}
                        alt={'back button'}
                        width={12}
                        height={22}
                    /> Назад
                </Link>
                {cart.length > 0 ? (
                    <div className="flex items-center flex-col gap-[20px] w-full justyfy-center">
                        {cart.map((item) => (
                            <div key={item.id} className="w-full">
                                <DetailsCard billboard={item}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg text-gray-600">Корзина порожня</p>
                )}
                <div className={'mx-auto mt-[30px] flex items-center justify-center'}>
                    <Button
                        variant="purple"
                        className="mt-2 text-white max-w-[600px] text-lg md:text-xl font-bold py-3 rounded-xl"
                    >
                        Оформити замовлення
                    </Button>
                </div>
                <div className={'mx-auto flex items-center flex-col md:mt-[70px] mt-[40px] justify-center'}>
                    <p className={'text-black text-[22px] font-[600]'}>Бажаєте додати ще товарів?</p>
                    <Link
                        href="/catalog"
                        className="text-[var(--color-purple)] text-[18px] hidden md:block underline  mt-2 md:mt-4 w-fit"
                    >
                        Перейти до каталогу
                    </Link>
                </div>
            </div>
        </div>
    );
}
