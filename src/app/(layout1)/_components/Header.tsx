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
            <div className="w-full h-20 flex items-center justify-between mx-auto px-10 text-white">
                <div>
                    <h1 className="text-lg font-bold text-neutral-100 tracking-wide uppercase">
                        K Rahman
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
        <div className="px-6 hover:text-teal-300 hover:cursor-pointer transition duration-150 ease-in-out">
            <span className="uppercase text-sm font-bold tracking-wider">{title}</span>
        </div>
    );
}
