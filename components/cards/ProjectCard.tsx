import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    img: StaticImageData;
    title: string;
    subtitle: string;
};

export default function ProjectCard({ img, title, subtitle }: Props) {
    return (
        <div className="h-[26rem] bg-slate-300 relative cursor-pointer group">
            <Image
                className="w-full h-full object-cover"
                src={img}
                priority={false}
                sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 25vw,
                    25vw"
                alt=""
            />
            <div
                className="bg-neutral-100 w-3/4 absolute bottom-0 left-0 px-10 py-6 
                    flex flex-col gap-1
                    group-hover:bg-rose-700 transition duration-500 ease-in-out"
            >
                <h2
                    className="text-2xl text-neutral-800 font-roboCon font-semibold 
                        group-hover:text-white transition duration-500 ease-in-out"
                >
                    {title}
                </h2>
                <p
                    className="text-rose-700 text-sm
                        group-hover:text-white transition duration-500 ease-in-out"
                >
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
