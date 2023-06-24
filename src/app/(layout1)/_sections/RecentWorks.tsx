"use client";
import React from "react";
import { motion } from "framer-motion";
import HorzAnime from "../_components/extra/HorzAnime";
import Image from "next/image";

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
        <section className="flex flex-col py-20">
            <div className="flex flex-col text-white font-roboto font-normal px-10">
                <h4 className="section-subtitle">A few of my</h4>
                <h3 className="mt-2 section-title">Recent Works</h3>
                <div className="mt-4">
                    <HorzAnime />
                </div>
            </div>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col gap-6 text-white font-roboto font-normal mt-10 px-10"
            >
                {recentWorks &&
                    recentWorks.map((work: Work, idx: number) => {
                        if (idx === recentWorks.length - 1)
                            return (
                                <React.Fragment key={idx}>
                                    <WorkCard work={work} />
                                </React.Fragment>
                            );
                        return (
                            <React.Fragment key={idx}>
                                <WorkCard work={work} />
                                <div className="w-2 aspect-square rounded-full bg-neutral-700" />
                            </React.Fragment>
                        );
                    })}
            </motion.div>
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
        <motion.div variants={itemVariant} className="relative w-full">
            <div className="relative w-full aspect-[1/1] rounded-md overflow-hidden border-2 border-white shadow-[0_0_20px_-2px] shadow-teal-300/20">
                <Image
                    className="object-cover object-top"
                    fill={true}
                    src={work.imgLink}
                    alt={work.title}
                />
            </div>
            <div className="relative z-10 w-full flex flex-col items-start mt-2">
                <h1 className="mt-3 text-teal-400 leading-none">
                    www.{work.title.toLowerCase().replaceAll(" ", "")}.com
                </h1>
                <p className="mt-3 lowercase font-light leading-none">
                    {work.type}
                </p>
            </div>
        </motion.div>
    );
}
