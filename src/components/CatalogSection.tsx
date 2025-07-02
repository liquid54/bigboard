'use client';
import { useState, useEffect } from 'react';
import SelectDropdown from '@/components/ui/SelectDropdown';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const regions = [
    { label: 'Дніпропетровська область', value: 'dnp' },
    { label: 'Київська область', value: 'kyiv' },
    { label: 'Львівська область', value: 'lviv' },
];
const cities: Record<string, { label: string; value: string }[]> = {
    dnp: [
        { label: 'Дніпро', value: 'dnipro' },
        { label: 'Кривий Ріг', value: 'kriviy' },
    ],
    kyiv: [
        { label: 'Київ', value: 'kyiv' },
        { label: 'Біла Церква', value: 'bc' },
    ],
    lviv: [
        { label: 'Львів', value: 'lviv' },
        { label: 'Дрогобич', value: 'drohobych' },
    ],
};
const cards = [
    {
        id: 1,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.png',
    },
    {
        id: 2,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.png',
    },
    {
        id: 3,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.png',
    },
    {
        id: 4,
        city: 'Дніпро',
        address: 'Заводська Набережна Вул., 4 - Червоний Камінь Вул., В Центр',
        img: '/assets/images/catalog/1.png',
    },
    {
        id: 5,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.png',
    },
    {
        id: 6,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.png',
    },
];

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
    const perPage = isMobile ? 3 : 6;
    const totalPages = Math.ceil(cards.length / perPage);
    const pagedCards = cards.slice((page - 1) * perPage, page * perPage);

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
            <section className="w-full max-w-6xl mx-auto mt-16 px-4 md:px-0">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
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
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 border-2 rounded"
                                />
                            </div>
                            <Button
                                className="w-full h-[48px] md:h-auto md:w-full bg-[var(--color-purple)] text-white rounded-2xl text-base md:text-lg"
                                variant="purple"
                            >
                                Пошук
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8">
                            <SelectDropdown
                                options={regions}
                                value={region}
                                onChange={(v) => {
                                    setRegion(v);
                                    setCity(cities[v][0].value);
                                }}
                                placeholder="Оберіть область"
                                className="w-full md:max-w-xs md:flex-1 min-w-0"
                            />
                            <SelectDropdown
                                options={cities[region]}
                                value={city}
                                onChange={setCity}
                                placeholder="Оберіть місто"
                                className="w-full md:max-w-xs md:flex-1 min-w-0"
                            />
                            <Button
                                className="w-full md:flex-1 min-w-0 py-3 px-5 rounded-2xl text-base md:text-lg"
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
                    {pagedCards.map((card) => (
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
                                <button
                                    className="absolute top-0 right-0 w-12 h-8 rounded-full border-2 border-[var(--color-purple)] flex items-center justify-center bg-white text-[var(--color-purple)] hover:bg-[var(--color-purple)] hover:text-white transition-colors"
                                    type="button"
                                    aria-label="Додати до кошика"
                                >
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 26 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.80722 26C7.09156 26 6.47912 25.7456 5.96992 25.2369C5.46071 24.7281 5.20568 24.1158 5.20481 23.4C5.20394 22.6841 5.45898 22.0722 5.96992 21.5644C6.48086 21.0565 7.09329 20.8017 7.80722 20.8C8.52114 20.7982 9.13401 21.053 9.64581 21.5644C10.1576 22.0757 10.4122 22.6876 10.4096 23.4C10.407 24.1124 10.1524 24.7247 9.64581 25.2369C9.13921 25.7491 8.52635 26.0034 7.80722 26ZM20.8192 26C20.1036 26 19.4911 25.7456 18.9819 25.2369C18.4727 24.7281 18.2177 24.1158 18.2168 23.4C18.216 22.6841 18.471 22.0722 18.9819 21.5644C19.4929 21.0565 20.1053 20.8017 20.8192 20.8C21.5332 20.7982 22.146 21.053 22.6578 21.5644C23.1696 22.0757 23.4242 22.6876 23.4216 23.4C23.419 24.1124 23.1644 24.7247 22.6578 25.2369C22.1512 25.7491 21.5384 26.0034 20.8192 26ZM5.46505 2.6H24.6578C25.1566 2.6 25.5361 2.8223 25.7963 3.2669C26.0566 3.7115 26.0674 4.16086 25.8289 4.61499L21.2096 12.935C20.971 13.3683 20.6514 13.7041 20.2506 13.9425C19.8498 14.1808 19.4105 14.3 18.9325 14.3H9.23854L7.80722 16.9H22.1204C22.4891 16.9 22.7984 17.0248 23.0482 17.2744C23.298 17.524 23.4225 17.8325 23.4216 18.2C23.4208 18.5674 23.2959 18.8764 23.0469 19.1269C22.7979 19.3773 22.4891 19.5017 22.1204 19.5H7.80722C6.83131 19.5 6.09397 19.0723 5.59517 18.2169C5.09638 17.3615 5.07469 16.5108 5.53011 15.665L7.28674 12.48L2.60241 2.6H1.30121C0.932533 2.6 0.623714 2.4752 0.374751 2.2256C0.125787 1.976 0.000871955 1.66746 4.4869e-06 1.3C-0.000862981 0.932532 0.124052 0.623999 0.374751 0.3744C0.625449 0.1248 0.934267 0 1.30121 0H3.41566C3.65421 0 3.88192 0.065 4.09879 0.195C4.31566 0.325 4.47831 0.509166 4.58674 0.747499L5.46505 2.6Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <Button variant="purple">Детальніше</Button>
                        </div>
                    ))}
                </div>
                {cards.length > perPage && (
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button
                            className="text-[32px] text-[var(--color-purple)] disabled:text-gray-300 px-2"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            aria-label="Попередня сторінка"
                        >
                            &lt;
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
                            className="text-[32px] text-[var(--color-purple)] disabled:text-gray-300 px-2"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            aria-label="Наступна сторінка"
                        >
                            &gt;
                        </button>
                    </div>
                )}
            </section>
            <CallToActionSection />
        </>
    );
}

function CallToActionSection() {
    return (
        <section
            className="w-full mt-16 mb-8 px-0"
            style={{
                backgroundImage: "url('/assets/images/bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-center justify-between py-10 md:py-16 gap-8 md:gap-0">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Почни вже зараз!
                        </h2>
                        <p className="text-lg md:text-2xl text-white">
                            Звʼяжіться з нами і ми допоможемо Вам розмістити
                            рекламу
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end w-full">
                        <a href="#contact" className="block w-full md:w-auto">
                            <button className="w-full md:w-[320px] h-[56px] bg-white text-black rounded-2xl text-lg md:text-2xl font-medium transition hover:bg-gray-100">
                                Звʼязатись
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
