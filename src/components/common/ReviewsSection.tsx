'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';
import { Arrow } from '@/components/ui/icons';

export default function ReviewsSection() {
    const swiperRef = useRef<any>(null);

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    return (
        <section className="w-full max-w-[1321px] mx-auto mt-12 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
                Відгуки
            </h2>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={24}
                slidesPerView={2.5}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2.5,
                    },
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                }}
                modules={[Pagination]}
                className="!pb-24"
            >
                {[1, 2, 3].map((n) => (
                    <SwiperSlide key={n}>
                        <div
                            className="bg-white mt-[20px] rounded-2xl card-shadow p-[20px] flex flex-col h-full max-w-[490px] mx-auto">
                            <div className="flex items-center relative justify-between">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/assets/images/partners/atb.png"
                                        alt="АТБ"
                                        width={60}
                                        height={32}
                                        className="object-contain h-[80px] w-[100px]"
                                    />
                                    <div className="font-semibold text-base md:text-lg">
                                        Маркетинг-відділ мережі &quot;АТБ&quot;
                                    </div>
                                    <span
                                        className="text-xs md:top-[5px] top-[5px] right-[25px] absolute text-gray-500">
                    15.03.2023
                  </span>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-[#00000033] my-[12px]"></div>
                            <div className="text-sm md:text-base mb-4">
                                Все чітко, оперативно та з урахуванням наших побажань. Дякуємо
                                за професіоналізм!
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <div
                                    className="w-full h-[300px] bg-[#E5E5E5] rounded-xl flex items-center justify-center text-lg text-black/80">
                                    Відео
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex justify-center max-w-[100px] mx-auto items-center gap-4 mt-8">
                    <button
                        className="text-[32px] text-[var(--color-purple)] rotate-180 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-2"
                        onClick={goPrev}
                        aria-label="Попередня сторінка"
                    >
                        <Arrow/>
                    </button>

                    <div className="custom-pagination flex"/>

                    <button
                        className="text-[32px] text-[var(--color-purple)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-2"
                        onClick={goNext}
                        aria-label="Наступна сторінка"
                    >
                        <Arrow/>
                    </button>
                </div>
            </Swiper>

        </section>
    );
}
