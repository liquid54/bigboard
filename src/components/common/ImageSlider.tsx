'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { Arrow } from '@/components/ui/icons';
import { useRef } from 'react';
import type { Swiper as SwiperClass } from 'swiper';


interface ImageSliderProps {
    images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
    const isMobile = useIsMobile();
    const swiperRef = useRef<SwiperClass | null>(null);

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    if (isMobile) {
        return (
            <div className="flex mt-[20px] flex-col gap-4">
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        width={520}
                        height={348}
                        alt={`work ${index + 1}`}
                        className="w-full"
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={'mt-[40px]'}>
            <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper}
                spaceBetween={24}
                slidesPerView={2.5}
                breakpoints={{
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
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full">
                            <Image
                                src={src}
                                width={520}
                                height={348}
                                alt={`work ${index + 1}`}
                                className="w-full"
                            />
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex justify-center items-center max-w-[180px] mx-auto gap-4 mt-8">
                    <button
                        className="text-[32px] text-[var(--color-purple)] rotate-180 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-2"
                        onClick={goPrev}
                        aria-label="Попередня сторінка"
                    >
                        <Arrow/>
                    </button>

                    <div className="custom-pagination flex justify-center items-center w-[80px] h-[20px]"/>

                    <button
                        className="text-[32px] text-[var(--color-purple)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-2"
                        onClick={goNext}
                        aria-label="Наступна сторінка"
                    >
                        <Arrow/>
                    </button>
                </div>

            </Swiper>

        </div>
    );
}
