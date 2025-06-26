import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className="antialiased bg-[var(--color-bg)] ">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
