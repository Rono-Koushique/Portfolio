import React from "react";

type Props = {};

const men = ["rono", "sany", "sakib"];

export default function page({}: Props) {
    const children = men.map((man) => {
        return (
            <div
                className="w-14 aspect-square rounded bg-neutral-800 hover:shadow-[0_0_20px] hover:shadow-emerald-500 cursor-pointer"
                key={man}
            >
                {man}
            </div>
        );
    });
    return (
        <div className="top-0 left-0 w-full min-h-screen bg-black flex items-center justify-center">
            <div className="flex flex-col gap-1 relative">{children}</div>
        </div>
    );
}
