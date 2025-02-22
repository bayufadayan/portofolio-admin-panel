'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

interface CardCountProps {
    title: string;
    value: number;
    color: string;
    url: string;
    icon?: React.ReactNode;
}

const CardCount: React.FC<CardCountProps> = ({ title, value, color, url, icon }) => {
    const router = useRouter();

    return (
        <div
            className={`gap-3 p-5 bg-gradient-to-tr ${color} rounded-lg shadow-md flex items-center justify-between border-l-4 border-${color}-600 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out hover:cursor-pointer w-full sm:w-[calc(50%-32px)] md:w-[calc(33.333%-32px)]`}
            onClick={() => router.push(url)}
        >
            <div className='flex flex-col justify-between'>
                <h2 className={`text-md font-bold mb-2 text-white`}>
                    {title}
                </h2>
                <p className={`text-3xl font-bold text-white`}>
                    {value}
                </p>
            </div>
            {icon}
        </div>
    );
}

export default CardCount;
