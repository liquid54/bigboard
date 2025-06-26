import Image from 'next/image';

const nav = [
    { label: 'Додаткові послуги', href: '#' },
    { label: 'Каталог', href: '#' },
    { label: 'Залишити заявку', href: '#' },
];

export default function Header() {
    return (
        <header className="header-blur fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4 bg-[var(--color-bg)]">
            <div className="font-bold text-white text-xl">Лого</div>
            <nav className="flex gap-8">
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
            <div className="flex gap-6 items-center text-white text-2xl">
                <span className="cursor-pointer">
                    <Image
                        src="assets/icons/phone.svg"
                        alt="phone"
                        width={24}
                        height={24}
                    />
                </span>
                <span className="cursor-pointer">
                    <Image
                        src="assets/icons/cart.svg"
                        alt="cart"
                        width={24}
                        height={24}
                    />
                </span>
                <span className="cursor-pointer">
                    <Image
                        src="assets/icons/user.svg"
                        alt="user"
                        width={24}
                        height={24}
                    />
                </span>
            </div>
        </header>
    );
}
