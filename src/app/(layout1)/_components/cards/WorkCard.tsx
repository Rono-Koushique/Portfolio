"use client";
import Image from "next/image";
import React from "react";

type Props = {
    work: Work;
    key: number;
};

export default function WorkCard({ work, key }: Props) {
    return (
        <div key={key} className="relative w-full">
            <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden border-2 border-white shadow-[0_0_20px_-2px] shadow-teal-300/30">
                <Image
                    className="object-cover object-top"
                    fill={true}
                    src={work.imgLink}
                    alt={work.title}
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-start px-4 mt-2">
                <h1 className="mt-3 text-teal-400 leading-none">
                    www.{work.title.toLowerCase().replaceAll(" ", "")}.com
                </h1>
                <p className="mt-3 lowercase font-light leading-none">
                    {work.type}
                </p>
            </div>
        </div>
    );
}
