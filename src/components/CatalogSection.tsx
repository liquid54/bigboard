'use client';
import React, { useState, useEffect } from 'react';
import SelectDropdown from '@/components/ui/SelectDropdown';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import CustomCheckbox from './ui/CustomCheckbox';
import cards from './catalog-cards-data';
import Link from 'next/link';
import {Arrow} from '@/components/ui/icons';
import TopPopup from '@/components/common/TopPopup';
import {useCart} from '@/context/CartContext';
import {CardCartIcon, TrashBinIcon} from '@/utils/icons';
import {cities, regions} from '@/utils/constants';


interface CatalogSectionProps {
    expanded?: boolean;
}

export default function CatalogSection({
                                           expanded = false,
                                       }: CatalogSectionProps) {
    const [region, setRegion] = useState('dnp');
    const [city, setCity] = useState('dnipro');
    const [page, setPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [nearby, setNearby] = useState(false);
    const perPage = isMobile ? 3 : 6;
    const [showPopup, setShowPopup] = useState(false);

    const { addToCart, isInCart, removeFromCart } = useCart();


    const filteredCards = cards.filter(
        (card) =>
            card.region === region &&
            (!city ||
                card.city ===
                cities[region].find((c) => c.value === city)?.label)
    );
    const totalPages = Math.ceil(filteredCards.length / perPage);
    const pagedCards = filteredCards.slice(
        (page - 1) * perPage,
        page * perPage
    );

    useEffect(() => {
        setPage(1);
    }, [region, city]);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);



    return (
        <>
            <section className="w-full max-w-[1321px] mx-auto mt-22 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                    Каталог
                </h2>
                {expanded ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4">
                            <SelectDropdown
                                options={regions}
                                value={region}
                                onChange={(v) => {
                                    setRegion(v);
                                    setCity(cities[v][0].value);
                                }}
                                placeholder="Область"
                                className="w-full"
                            />
                            <SelectDropdown
                                options={cities[region]}
                                value={city}
                                onChange={setCity}
                                placeholder="Місто"
                                className="w-full"
                            />
                            <SelectDropdown
                                options={[{ label: 'Тип', value: 'type' }]}
                                value={''}
                                onChange={() => {}}
                                placeholder="Тип"
                                className="w-full"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[40px] mb-8">
                            <SelectDropdown
                                options={[{ label: 'Сторона', value: 'side' }]}
                                value={''}
                                onChange={() => {}}
                                placeholder="Сторона"
                                className="w-full"
                            />
                            <div className="flex items-center w-full bg-white border rounded-2xl px-4 h-[48px]">
                                <span className="flex-1 font-medium">
                                    Білборди поруч
                                </span>
                                <CustomCheckbox
                                    checked={nearby}
                                    onChange={(e) =>
                                        setNearby(e.target.checked)
                                    }
                                />
                            </div>
                            <Button
                                className="w-full h-[48px] md:h-auto md:w-full bg-[var(--color-purple)] text-white rounded-2xl text-base md:text-lg"
                                variant="purple"
                                onClick={() => setShowPopup(true)}
                            >
                                Пошук
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center mb-8">
                            <SelectDropdown
                                options={regions}
                                value={region}
                                onChange={(v) => {
                                    setRegion(v);
                                    setCity(cities[v][0].value);
                                }}
                                placeholder="Оберіть область"
                                className="w-full md:!max-w-[403px] md:flex-1 min-w-0"
                            />
                            <SelectDropdown
                                options={cities[region]}
                                value={city}
                                onChange={setCity}
                                placeholder="Оберіть місто"
                                className="w-full  md:!max-w-[403px] md:flex-1 min-w-0"
                            />
                            <Button
                                className="w-full md:flex-1 !max-w-[403px] min-w-0 py-3 px-5 rounded-2xl text-base md:text-lg"
                                variant="purple"
                            >
                                Пошук
                            </Button>
                        </div>
                    </>
                )}
                <div
                    className={`grid ${
                        isMobile ? 'grid-cols-1' : 'md:grid-cols-3'
                    } gap-6`}
                >
                    {pagedCards.map((card) => {
                        const inCart = isInCart(card.id)
                        return (
                            <div
                                key={card.id}
                                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full"
                            >
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                                    <Image
                                        src={card.img}
                                        alt={card.city}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative flex-1 flex flex-col gap-1 mb-4">
                                <span className="font-semibold text-lg">
                                    м.{card.city}
                                </span>
                                    <span className="text-sm text-black/80">
                                    {card.address}
                                </span>
                                    <div className={'absolute top-0 right-[0]'}>
                                    {inCart ? (
                                        <button
                                            onClick={() => removeFromCart(card.id)}
                                            className="!w-12 !h-8 cursor-pointer"
                                            type="button"
                                            aria-label="Видалити з кошика"
                                        >
                                            <TrashBinIcon />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(card)}
                                            className="!w-12 !h-8 cursor-pointer rounded-full border-2 border-[var(--color-purple)] flex items-center justify-center bg-white text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-colors"
                                            type="button"
                                            aria-label="Додати до кошика"
                                        >
                                            <CardCartIcon />
                                        </button>
                                    )}
                                </div>
                                </div>
                                <Link
                                    href={`/catalog/${card.id}`}
                                    className="mt-2 block w-full"
                                >
                                    <Button variant="purple" className="w-full">
                                        Детальніше
                                    </Button>
                                </Link>
                            </div>
                        )})}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            className="text-[32px] text-[var(--color-purple)] translate rotate-[180deg] cursor-pointer disabled:opacity-[0.5] disabled:cursor-not-allowed  px-2"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            aria-label="Попередня сторінка"
                        >
                            <Arrow/>
                        </button>
                        <div className="flex gap-3">
                            {Array.from({ length: totalPages }).map((_, n) => (
                                <button
                                    key={n}
                                    className={`w-4 h-4 rounded-full ${
                                        page === n + 1
                                            ? 'bg-[var(--color-purple)]'
                                            : 'bg-gray-300'
                                    } transition`}
                                    onClick={() => setPage(n + 1)}
                                    aria-label={`Сторінка ${n + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="text-[32px] text-[var(--color-purple)] cursor-pointer disabled:opacity-[0.5] disabled:cursor-not-allowed px-2"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            aria-label="Наступна сторінка"
                        >
                            <Arrow/>
                        </button>
                    </div>
                )}
            </section>
            <CallToActionSection />
            <TopPopup isOpen={showPopup} onClose={() => setShowPopup(false)}>
                <div className={'flex items-center justify-center flex-col gap-[30px] '}>
                    <Image
                        src="/assets/icons/popup-icon.svg"
                        alt="search icon"
                        width={117}
                        height={117}
                        className="object-contain h-[117px] w-[117px]"
                    />
                    <p className={'max-w-[948px] text-[18px] text-center text-black'}>Не переживайте, якщо не знайшли потрібний білборд — просто залиште заявку, і ми зробимо все за вас! <br/> Ми щодня працюємо з сотнями локацій, тому знайти ідеальну — це наша справа</p>
                    <Button variant="purple" className="w-full mt-[20px] max-w-[728px]">
                        Залишити заявку
                    </Button>
                </div>
            </TopPopup>
        </>
    );
}

function CallToActionSection() {
    return (
        <section className="w-full mt-16 px-0">
            <div
                className="w-full"
                style={{
                    backgroundImage: "url('/assets/images/bg.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="max-w-[1321px] mx-auto px-4 md:px-0">
                    <div className="rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch justify-between py-10 md:py-16 px-4 md:px-0">
                        <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-[4px]">
                            <h2 className="text-[32px] md:text-[64px] font-bold text-white">
                                Почни вже зараз!
                            </h2>
                            <p className="text-white text-base md:text-lg max-w-xl">
                                Зв&apos;яжіться з нами і ми допоможемо Вам
                                розмістити рекламу
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
                            <Button
                                variant="white"
                                className="text-black text-xl md:text-2xl  md:max-w-[413px] font-bold px-10 py-4 rounded-2xl md:rounded-2xl min-w-[220px] md:min-w-[260px] shadow-md"
                                onClick={() => {
                                    const leadForm =
                                        document.getElementById('lead-form');
                                    leadForm?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                            >
                                Зв&apos;язатись
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
