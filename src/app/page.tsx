import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Home() {
    return (
        <main
            className="relative min-h-[calc(100vh-80px)] flex flex-col sm:flex-row items-stretch justify-between bg-[var(--color-bg)] overflow-hidden"
            style={{
                backgroundImage: "url('/assets/images/bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="absolute inset-0 opacity-90 z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}
            />
            <div className="relative z-10 flex flex-1 flex-col justify-center pt-30 sm:pt-0 pl-6 md:pl-12 gap-8 max-w-[600px]">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Реклама на <br /> білбордах по <br /> всій Україні
                </h1>
                <Button variant="white" className="max-w-xs">
                    Каталог
                </Button>
                <span className="text-white/80 text-lg pt-4">
                    Працюємо з 2015 року
                </span>
            </div>
            <div className="relative z-10 flex flex-1 items-center sm:items-end justify-center pr-0">
                <div className="relative w-full max-w-[706px] aspect-[706/555] h-auto flex items-center justify-center">
                    <Image
                        src="/assets/images/bilboard.png"
                        alt="Білборд"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 706px"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] flex flex-col items-center">
                        <span className="text-xl md:text-4xl text-[var(--color-purple)] font-bold text-center drop-shadow-md">
                            ТУТ МОЖЕ БУТИ
                            <br />
                            ВАША РЕКЛАМА
                        </span>
                        <Button
                            variant="purple"
                            className="max-w-xs w-full mt-6"
                        >
                            Залишити заявку
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
