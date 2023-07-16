import React from "react";
import Hamburger from "./buttons/Hamburger";

const navLinks = [
    {
        title: "home",
    },
    {
        title: "about",
    },
    {
        title: "projects",
    },
    {
        title: "skills",
    },
];

type Props = {};

export default function Header({}: Props) {
    return (
        <nav className="absolute top-0 left-0 w-full">
            <div className="w-full max-w-screen-2xl h-20 flex items-center justify-between mx-auto px-10 text-white">
                <div>
                    <h1 className="text-2xl font-montez font-bold text-neutral-100 tracking-wide">
                        K rahman
                    </h1>
                </div>
                <div className="lg:hidden">
                    <Hamburger />
                </div>
                <div className="hidden lg:flex">
                    {navLinks.map((navLink) => {
                        return <NavLink title={navLink.title} key={navLink.title} />;
                    })}
                </div>
            </div>
        </nav>
    );
}

type NavLinkProps = {
    title: string;
    link?: string;
};

function NavLink({ title, link }: NavLinkProps) {
    return (
        <div className="px-6 py-3 rounded hover:bg-neutral-900 hover:text-teal-300 hover:cursor-pointer transition duration-150 ease-in-out">
            <span className="capitalize font-poppins text-sm font-bold tracking-wider">
                {title}
            </span>
        </div>
    );
}
