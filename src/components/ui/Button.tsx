import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'white' | 'purple';
    children: React.ReactNode;
}

export const Button = ({
    variant = 'white',
    children,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-2xl font-semibold text-2xl py-6 w-full transition',
                variant === 'white' &&
                    'bg-white text-black shadow-md active:btn-white-active',
                variant === 'purple' &&
                    'bg-purple text-white active:btn-purple-active',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
