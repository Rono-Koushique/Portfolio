import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import shape from "@/public/images/shape1.svg";

type Props = {
    icon: string;
    title: string;
    text: string;
};

export default function ExpCard({ icon, title, text }: Props) {
    return (
        <div className="cursor-pointer hover:-translate-y-3 transition delay-100  duration-500 ease-out relative">
            <div className="max-w-xs bg-neutral-100/80 px-8 py-9 flex flex-col gap-3 items-center">
                <Icon className="text-5xl text-rose-600 opacity-70" icon={icon} />
                <h4 className="capitalize text-xl font-semibold text-gray-800">
                    {title}
                </h4>
                <div className="h-[3px] flex gap-0.5 opacity-70">
                    <div className="w-4 h-full bg-rose-500 rounded" />
                    <div className="w-4 h-full bg-rose-500 rounded" />
                    <div className="w-4 h-full bg-rose-500 rounded" />
                </div>
                <p className="text-center text-neutral-500 mt-2">{text}</p>
            </div>
            <Image className="w-8 absolute right-2 bottom-2 opacity-70" src={shape} alt=""/>
        </div>
    );
}
