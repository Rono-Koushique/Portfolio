"use client";
import React, { useState } from "react";

type Props = {};

export default function Hamburger({}: Props) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-7 h-5 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
                <Bar />
                <Bar />
                <Bar />
                {/* <div
                    className={`relative top-0 w-full h-[15%] bg-teal-300 rounded-full duration-200 ease-in-out ${
                        open ? "scale-x-[1.35] rotate-45 top-1/2 -translate-y-1/2" : ""
                    }`}
                />
                <div
                    className={`w-full h-1 bg-teal-300 rounded-full duration-200 ease-in-out ${
                        open ? "translate-x-full" : ""
                    }`}
                />
                <div
                    className={`relative bottom-0 w-full h-1 bg-teal-300 rounded-full duration-200 ease-in-out ${
                        open ? "scale-x-[1.35] -rotate-45 bottom-1/2 translate-y-1/2" : ""
                    }`}
                /> */}
            </div>
        </div>
    );
}

function Bar({ addClass }: { addClass?: string }) {
    return (
        <div
            className={`w-full h-[2px] bg-teal-300 rounded-full duration-200 ease-in-out ${addClass}`}
        />
    );
}
