import React from "react";

type Props = {};

export default function Newsletter({}: Props) {
    return (
        <div className="w-full flex flex-col gap-6 py-20 items-center justify-start bg-neutral-700">
            <h2 className="uppercase font-black text-center leading-[128%] text-white text-[1.5rem]">
                Subscribe to our newsletter
            </h2>
            <form className="bg-white w-[36rem] flex h-fit rounded-l-full overflow-hidden">
                <input className="flex-grow outline-none px-6 py-4 text-sm"></input>
                <button className="text-sm h-full text-white font-medium tracking-wide 
                                bg-rose-500 px-6 py-4 rounded-l-full hover:bg-black hover:text-white
                                transition duration-300 ease-in-out">
                    SUBSCRIBE NOW
                </button>
            </form>
        </div>
    );
}
