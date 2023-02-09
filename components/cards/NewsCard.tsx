import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    img: string;
    publishDate: string;
    title: string;
    body: string;
};

export default function NewsCard({ img, publishDate, title, body }: Props) {
    return (
        <div className="flex flex-col items-center w-full flex-grow bg-neutral-50 pb-1">
            <div className="w-full h-60 relative">
                <Image
                    className="contain-cover"
                    src={`/images/${img}`}
                    fill={true}
                    sizes="(max-width: 768px) 50vw,
                        (max-width: 1200px) 30vw,
                        30vw"
                    alt=""
                />
            </div>
            <div className="flex flex-col items-start w-full p-5">
                <div className="flex items-center gap-1">
                    <Icon
                        className="text-rose-500 opacity-90 text-xl"
                        icon="mdi:clock-time-nine"
                    />
                    <p className="text-sm text-neutral-500 leading-none">
                        {publishDate}
                    </p>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mt-6">
                    {title}
                </h3>
                <p className="text-neutral-600 mt-3">
                    {body.substring(0, 90)}...
                </p>
                <Link href="/" className="mt-6 relative">
                    <p className="text-rose-500 opacity-90 font-semibold">
                        Read More
                    </p>
                    <div className="w-10 h-px absolute bottom-0 left-0 bg-rose-600"></div>
                </Link>
            </div>
        </div>
    );
}
