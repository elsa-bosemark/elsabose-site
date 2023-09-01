import { useState } from 'react';

export default function G2Card({ faqItems }) {

    return (
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqItems.map((item, index) => (
                <div key={index} className="border p-4 rounded-md">
                    <div className="w-full text-left font-semibold">
                        {item.question}</div>
                    <div className="mt-2">{item.answer}</div>
                </div>
            ))}
        </div>
    );
}

