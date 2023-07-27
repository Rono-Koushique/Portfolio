import React from "react";
import Hamburger from "../_components/buttons/Hamburger";

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

export default function Navbar({}: Props) {
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
        <div className="px-6 py-3 border-b-2 border-transparent hover:border-neutral-300 cursor-pointer transition duration-150 ease-in-out">
            <span className="capitalize font-poppins text-sm font-bold tracking-wider">
                {title}
            </span>
        </div>
    );
}
