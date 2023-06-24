import React from "react";
import Hamburger from "./buttons/Hamburger";

type Props = {};

export default function Header({}: Props) {
    return (
        <nav className="absolute top-0 left-0 w-full">
            <div className="w-full h-20 flex items-center justify-between mx-auto px-10 text-white">
                <div>
                    <h1 className="text-2xl font-semibold text-teal-50 ">Kr</h1>
                </div>
                <div>
                    <Hamburger />
                </div>
            </div>
        </nav>
    );
}
