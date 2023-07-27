import React, { MouseEventHandler } from "react";

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    text: string;
};

export default function SmallBtn({ onClick, text }: Props) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className="font-arial font-bold px-8 py-4 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 rounded-md shadow-[0_2px_14px_0] shadow-teal-600/40 hover:shadow-teal-500/40 transition duration-200 ease-in-out"
        >
            {text}
        </button>
    );
}
