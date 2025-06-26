import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
    title: 'Modern Expo',
    description: 'Modern Expo application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className="">
                <Header />
                {children}
            </body>
        </html>
    );
}
