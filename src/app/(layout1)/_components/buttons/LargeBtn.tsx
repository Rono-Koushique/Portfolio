import React, { MouseEventHandler } from "react";

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text: string;
};

export default function LargeBtn({ onClick, text }: Props) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className="font-arial text-lg lg:text-xl font-bold px-8 py-4 lg:px-10 lg:py-5 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 rounded-md shadow-[0_2px_14px_0] shadow-teal-600/40 hover:shadow-teal-500/40 transition duration-200 ease-in-out"
        >
            {text}
        </button>
    );
}
