import { Icon } from "@iconify/react";
import React from "react";

type Props = {
    icon: string;
    title: string;
    description: string;
    href: string;
};

export default function ServiceCard({ icon, title, description, href }: Props) {
    return (
        <div className="max-w-xs w-full h-full relative pt-10 cursor-pointer group">
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 aspect-square mx-auto flex items-center justify-center bg-neutral-200 rounded-full
                        group-hover:bg-rose-600/70 transition duration-500 ease-in-out"
            >
                <Icon
                    className="text-4xl text-rose-600 opacity-70 group-hover:text-white transition duration-500 ease-in-out"
                    icon={icon}
                />
            </div>
            <div
                className="w-full h-full pt-16 pb-6 px-6 gap-3 bg-neutral-100/80
                        flex flex-col items-center"
            >
                <h4
                    className="capitalize text-xl font-semibold text-gray-800 
                            group-hover:text-rose-600/70 transition duration-500 ease-in-out"
                >
                    {title}
                </h4>
                <p className="text-center text-neutral-500">{description}</p>
                <div className="border w-9 mt-auto aspect-square flex items-center justify-center rounded-full border-neutral-400">
                    <Icon
                        className="text-2xl text-neutral-500 
                                group-hover:text-rose-600/70 first-letter: transition duration-500 ease-in-out"
                        icon="ph:arrow-right-thin"
                    />
                </div>
            </div>
        </div>
    );
}
