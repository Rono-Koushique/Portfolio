import React from "react";

type Props = {
    text: string;
    onClick: Function;
};

export default function PrimaryBtn({ text, onClick }: Props) {
    return (
        <button
            className="bg-rose-500 text-white px-8 py-4 w-fit 
                    hover:bg-rose-700 active:bg-rose-400
                    transition duration-300 ease-in-out"
            onClick={() => onClick()}
        >
            {text}
        </button>
    );
}
