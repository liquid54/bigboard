'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {CardItem} from '@/types';

const CART_KEY = 'cart_items';


interface CartContextType {
    cart: CardItem[];
    addToCart: (item: CardItem) => void;
    removeFromCart: (id: string) => void;
    isInCart: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CardItem[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(CART_KEY);
        if (saved) {
            setCart(JSON.parse(saved));
        }
    }, []);

    const addToCart = (item: CardItem) => {
        setCart((prev) => {
            if (prev.some((i) => i.id === item.id)) return prev;
            const updated = [...prev, item];
            localStorage.setItem(CART_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prev) => {
            const updated = prev.filter((i) => i.id !== id);
            localStorage.setItem(CART_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const isInCart = (id: string) => {
        return cart.some((i) => i.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within a CartProvider');
    return ctx;
};
