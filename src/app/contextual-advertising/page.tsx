'use client';

import Button from '@/components/ui/Button';
import ImageSlider from '@/components/common/ImageSlider';
import ReviewsSection from '@/components/common/ReviewsSection';
import Image from 'next/image';
import LeadForm from '@/components/forms/LeadForm';

export default function ContextualAdvertisingPage() {
    const images = ['/assets/images/works/works1.png', '/assets/images/works/works1.png', '/assets/images/works/works1.png'];

    return (
        <div>

            <main className="w-full">
                <div
                    className="w-full pt-16"
                    style={{
                        backgroundImage: "url('/assets/images/bg.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="max-w-[1321px] mx-auto px-4 md:px-0">
                        <div
                            className="rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch justify-between py-10 md:py-16 px-4 md:px-0">
                            <div
                                className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-[4px]">
                                <h2 className="text-[36px] font-bold text-white">
                                    Розробка дизайну під ключ
                                </h2>
                                <p className="text-white text-base md:text-[20px] text-[16px] max-w-xl">
                                    Ми створюємо ефективні та привабливі дизайни білбордів, які привертають увагу з
                                    перших секунд!
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
                                <Button
                                    variant="white"
                                    className="text-black text-xl md:text-2xl  md:max-w-[513px] font-bold px-10 py-4 rounded-2xl md:rounded-2xl min-w-[220px] md:min-w-[260px] shadow-md"
                                    onClick={() => {
                                        const leadForm =
                                            document.getElementById('lead-form');
                                        leadForm?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    Зв&apos;язатись з нами
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className={'mt-[60px] max-w-[1440px] mx-auto md:px-[60px] px-[20px]'}>
                <div className={'max-w-[1440px] mx-auto md:px-[60px] px-[20px] flex flex-col items-center md:items-start md:justify-start justify-center'}>
                    <p className={'md:text-[36px] text-start text-[20px] text-black font-[600]'}>Наші роботи</p>
                    <p className={'md:text-[20px] md:text-start text-center text-[16px] text-black font-[500]'}>Пропонуємо комплексну розробку дизайну зовнішньої реклами, яка працює на результат. Ми створюємо яскраві, помітні та продумані макети білбордів з урахуванням вашої цільової аудиторії, локації розміщення та маркетингових цілей. </p>
                </div>
                <div>
                    <ImageSlider images={images}/>
                </div>
            </section>
            <ReviewsSection/>
            <section className="w-full max-w-[1321px] mx-auto mt-12 px-4 md:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
                    Наші переваги
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <span
                            className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-4.svg"
                                alt="Гнучке ціноутворення"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Досвід у зовнішній рекламі                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            Ми знаємо, що працює на площинах, і вміємо адаптувати дизайн під будь-яке розміщення.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span
                            className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-5.svg"
                                alt="Точність до метра"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Яскраві макети
                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            Ми створюємо креативи, які виділяються серед конкурентів і привертають увагу з першого погляду.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <span
                            className="flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-purple)] mb-2">
                            <Image
                                src="/assets/icons/advantage-6.svg"
                                alt="Досвід, що говорить"
                                width={64}
                                height={64}
                            />
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mb-1">
                            Швидкі терміни
                        </h3>
                        <p className="text-sm md:text-base text-black/80 max-w-xs">
                            Ми цінуємо ваш час і готові створити макет уже за одну добу після узгодження технічного завдання.
                        </p>
                    </div>
                </div>
            </section>
            <section id="contact">
                <LeadForm/>
            </section>
        </div>
    );
}