import React from "react";

type Props = {};

export default function HorzAnime({}: Props) {
    return (
        <div className="relative z-10 w-14 h-[4px] overflow-x-hidden">
            <div className="absolute z-20 top-0 left-0 h-full w-full flex gap-1 opacity-80 animate-marquee-right items-stretch">
                <div className="w-[40%] bg-teal-500 rounded-r-full" />
                <div className="w-[20%] bg-teal-500 rounded-full" />
                <div className="w-[40%] bg-teal-500 rounded-l-full" />
            </div>
            <div className="absolute z-20 top-0 left-0 h-full w-full flex gap-1 opacity-80 animate-marquee-left items-stretch">
                <div className="w-[40%] bg-teal-500 rounded-r-full" />
                <div className="w-[20%] bg-teal-500 rounded-full" />
                <div className="w-[40%] bg-teal-500 rounded-l-full" />
            </div>
        </div>
    );
}
