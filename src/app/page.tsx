import Button from '@/components/ui/Button';

export default function Home() {
    return (
        <main
            className="relative min-h-[calc(100vh-80px)] flex items-stretch pt-72 justify-center bg-[var(--color-bg)] overflow-hidden"
            style={{
                backgroundImage: "url('assets/images/bg.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="absolute inset-0  opacity-90 z-0"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }}
            />
            <div className="relative z-10 flex flex-1 flex-col justify-center pl-12 gap-8 max-w-[600px]">
                <h1 className="text-5xl font-bold text-white leading-tight">
                    Реклама на білбордах по всій Україні
                </h1>
                <Button variant="white" className="max-w-xs">
                    Каталог
                </Button>
                <span className="text-white/80 text-lg pt-4">
                    Працюємо з 2015 року
                </span>
            </div>
            <div className="relative z-10 flex flex-1 items-center justify-center pr-12">
                <div className="bg-white/90 rounded-2xl p-6 shadow-lg flex flex-col items-center max-w-[420px] w-full">
                    <div className="w-full h-[180px] bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                        <span className="text-2xl text-[var(--color-purple)] font-bold text-center">
                            ТУТ МОЖЕ БУТИ
                            <br />
                            ВАША РЕКЛАМА
                        </span>
                    </div>
                    <Button variant="purple" className="max-w-xs w-full">
                        Залишити заявку
                    </Button>
                </div>
            </div>
        </main>
    );
}
