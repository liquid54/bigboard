'use client';
import { useState } from 'react';
import Image from 'next/image';

const nav = [
    { label: 'Додаткові послуги', href: '#' },
    { label: 'Каталог', href: '#' },
    { label: 'Залишити заявку', href: '#' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="header-blur fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 py-4 bg-[var(--color-bg)]">
            <div className="font-bold text-white text-xl">Лого</div>
            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8">
                {nav.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-white text-lg font-medium hover:underline underline-offset-4 transition"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="flex gap-4 items-center text-white text-2xl">
                {/* Phone icon - only desktop */}
                <span className="cursor-pointer hidden md:inline">
                    <Image
                        src="/assets/icons/phone.svg"
                        alt="phone"
                        width={24}
                        height={24}
                    />
                </span>
                {/* Cart icon - always visible */}
                <span className="cursor-pointer">
                    <Image
                        src="/assets/icons/cart.svg"
                        alt="cart"
                        width={24}
                        height={24}
                    />
                </span>
                {/* User icon - only desktop */}
                <span className="cursor-pointer hidden md:inline">
                    <Image
                        src="/assets/icons/user.svg"
                        alt="user"
                        width={24}
                        height={24}
                    />
                </span>
                {/* Burger icon - only mobile */}
                <button
                    className="md:hidden ml-2"
                    aria-label="Відкрити меню"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src="/assets/icons/burger.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        style={{ filter: 'invert(1)' }}
                    />
                </button>
            </div>
            {/* Mobile menu overlay */}
            {open && (
                <div className="fixed inset-0 z-50 flex flex-col min-h-screen h-full w-full bg-gradient-to-br from-[#750DBE] to-[#4B0A7A]">
                    <div className="flex items-center justify-between px-4 py-4">
                        <div className="font-bold text-white text-xl">Лого</div>
                        <div className="flex gap-4 items-center">
                            <span>
                                <Image
                                    src="/assets/icons/cart.svg"
                                    alt="cart"
                                    width={28}
                                    height={28}
                                />
                            </span>
                            <button
                                aria-label="Закрити меню"
                                onClick={() => setOpen(false)}
                            >
                                <Image
                                    src="/assets/icons/close.svg"
                                    alt="close"
                                    width={32}
                                    height={32}
                                    style={{ filter: 'invert(1)' }}
                                />
                            </button>
                        </div>
                    </div>
                    <nav className="flex flex-col items-center justify-center flex-1 gap-10">
                        {nav.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-white text-2xl font-semibold"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex justify-center pb-8">
                        <a
                            href="tel:+380508886010"
                            className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-lg font-semibold shadow-md"
                        >
                            <Image
                                src="/assets/icons/phone.svg"
                                alt="phone"
                                width={22}
                                height={22}
                            />
                            + 050 888 6010
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
