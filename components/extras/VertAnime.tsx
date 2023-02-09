import React from "react";

type Props = {};

export default function VertAnime({}: Props) {
    return (
        <div className="w-[3px] h-16 mx-auto translate-x-[50%]">
            <div className="rotate-90 translate-x-[3px] origin-top-left w-16 h-[3px] overflow-x-hidden relative">
                <div className="h-full w-16 flex gap-0.5 opacity-80 animate-marquee whitespace-nowrap">
                    <div className="w-7 h-full bg-rose-500 rounded-r" />
                    <div className="w-2 h-full bg-rose-500 rounded" />
                    <div className="w-7 h-full bg-rose-500 rounded-l" />
                </div>
                <div className="absolute top-0 h-full w-16 flex gap-0.5 opacity-80 animate-marquee2 whitespace-nowrap">
                    <div className="w-7 h-full bg-rose-500 rounded-r" />
                    <div className="w-2 h-full bg-rose-500 rounded" />
                    <div className="w-7 h-full bg-rose-500 rounded-l" />
                </div>
            </div>
        </div>
    );
}
