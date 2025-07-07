'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface TopPopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function TopPopup({ isOpen, onClose, children }: TopPopupProps) {
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center">
            <div
                ref={popupRef}
                className="relative bg-white shadow-lg rounded-2xl w-full max-w-[1096px] mx-4 py-[50px] p-[12px]"
            >
                <button
                    onClick={onClose}
                    aria-label="Закрити"
                    className="absolute top-[30px] right-[30px] cursor-pointer"
                >
                    <Image
                        src="/assets/icons/close-popup.svg"
                        alt="АТБ"
                        width={38}
                        height={38}
                        className="object-contain h-[38px] w-[38px]"
                    />
                </button>

                {children}
            </div>
        </div>,
        document.body
    );
}
