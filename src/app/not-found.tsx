'use client';

import Link from 'next/link';
import {useIsMobile} from '@/hooks/useMediaQuery';

export default function NotFound() {
    const isMobile = useIsMobile()
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <div
                className="w-full pt-[60px]"
                style={{
                    backgroundImage: "url('/assets/images/bg.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>

            <div
                className="relative flex-1 w-full"
                style={{
                    backgroundImage: isMobile ? "url('/assets/images/not-found-bg-mob.png')"  :"url('/assets/images/not-found-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    className={'absolute left-1/2 max-w-[670px] top-1/2 w-full p-[20px] flex items-center justify-center flex-col -translate-x-1/2 -translate-y-1/2'}>
                    <p className={'md:text-[96px] text-[#750DBE] font-[600] text-[64px]'}>404</p>
                    <p className={'md:text-[20px] text-black text-center font-[500] text-[16px]'}>Сторінку, яку ви
                        шукаєте, не знайдено. <br/> Можливо, вона вже зникла, змінила адресу або ніколи не існувала.</p>
                    <Link
                        href="/"
                   className="w-full bg-[var(--color-purple)] md:mt-[60px] mt-[24px] text-center text-white rounded-2xl text-base md:text-lg py-[20px] font-normal"

                >
                    На головну
                </Link>
            </div>
        </div>
</div>
)
    ;
}
