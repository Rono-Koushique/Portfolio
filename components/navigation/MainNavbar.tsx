import React from "react";
import navlinks from "./navlinks";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

type Props = {
    currentSection?: string;
};

export default function MainNavbar({ currentSection }: Props) {
    const cs = currentSection ? currentSection : "";

    return (
        <nav>
            <div className="max-w-def flex items-center justify-between py-4">
                <BrandLogo />

                {/* navigation links */}
                <div className="flex items-center">
                    {navlinks.map((navlink) => {
                        return (
                            <Link
                                href={`#${navlink.href}`}
                                key={navlink.title}
                                className="mhead-link group"
                                scroll={false}
                            >
                                <p
                                    className="text group-hover:text-rose-700 
                                            transition duration-700 ease-in-out"
                                >
                                    {navlink.title}
                                </p>
                                <div
                                    className={`bg-rose-500 h-px w-full content-none transition origin-right duration-500 ease-out
                                            ${
                                                cs && cs === navlink.href
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:origin-left group-hover:scale-100"
                                            } `}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
