"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
    return (
        <div>
            <Link
                href="/"
                className="group bg-gray-900 text-white px-7 py-3 absolute top-10 left-10 p-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
                <BsArrowLeft className="opacity-70 group-hover:translate-x-1 transition" />
                {" "}Go Back
            </Link>

        </div>
    );
}
