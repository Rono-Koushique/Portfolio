"use client";
import React from "react";
import { motion } from "framer-motion";
import HorzAnime from "../_components/extra/HorzAnime";
import Image from "next/image";
import SmallBtn from "../_components/buttons/SmallBtn";

// framer motion animation variant
const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

type Props = {
    recentWorks: Work[];
};

export default function RecentWorks({ recentWorks }: Props) {
    return (
        <section className="py-36 lg:py-40">
            <div className="flex flex-col px-5 mg:px-10 lg:px-14 xl:px-20 w-full max-w-screen-2xl mx-auto text-white items-center font-roboto font-normal">
                <h4 className="section-subtitle font-poppins">A few of my</h4>
                <h3 className="section-title mt-2 font-arial">Recent Works</h3>
                <div className="mt-6">
                    <HorzAnime />
                </div>
                <div className="flex flex-col gap-20 xl:gap-28 text-white mt-20 w-full">
                    {recentWorks &&
                        recentWorks.map((work: Work, idx: number) => {
                            return <WorkCard work={work} key={idx} />;
                        })}
                </div>
            </div>
        </section>
    );
}

// framer motion animation variant
const itemVariant = {
    hidden: { opacity: 0, y: "2rem" },
    show: {
        opacity: 1,
        y: "0rem",
        transition: {
            duration: 0.75,
            type: "tween",
            ease: "easeOut",
        },
    },
};

type CardProps = {
    work: Work;
};

function WorkCard({ work }: CardProps) {
    return (
        <div className="relative w-full flex flex-col xl:flex-row items-center gap-10 xl:gap-14">
            <div className="relative w-full xl:w-[54%] aspect-[16/9] rounded-md overflow-hidden">
                <Image
                    className="object-contain object-top"
                    fill={true}
                    src={work.imgLink}
                    alt={work.title}
                />
            </div>
            <div className="relative z-10 flex flex-col xl:w-[42%] items-center gap-6 xl:items-start xl:text-left text-center">
                <h1 className="font-arial text-white text-2xl font-bold leading-none">
                    {work.title}
                </h1>
                <p className="font-poppins text-3-4">{work.description}</p>
                <div>
                    <SmallBtn text="View Live" />
                </div>
            </div>
        </div>
    );
}
