"use client";
import React from "react";
import { motion } from "framer-motion";
import HorzAnime from "../_components/extra/HorzAnime";

type Props = {
    areasOfWork: Area[];
};

export default async function AreasOfWork({ areasOfWork }: Props) {
    return (
        <section className="flex flex-col py-20">
            <div className="flex flex-col text-white font-roboto font-normal px-10">
                <h4 className="section-subtitle">Area of work</h4>
                <h3 className="mt-2 section-title">Expertise</h3>
                <div className="mt-4">
                    <HorzAnime />
                </div>
            </div>
            <div className="flex flex-col gap-14 text-white font-roboto font-normal mt-8 px-10">
                {areasOfWork &&
                    areasOfWork.map((area: Area, idx: number) => {
                        return <AreaCard area={area} key={idx} />;
                    })}
            </div>
        </section>
    );
}

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

type CardProps = {
    area: Area;
};

function AreaCard({ area }: CardProps) {
    return (
        <div>
            <h1 className="font-semibold">{area.title}</h1>
            <ul className="mt-4 text-lg font-light leading-loose text-neutral-300 list-disc">
                {area.description.map((title, idx: number) => {
                    return (
                        <li className="ml-4" key={idx}>
                            {title}
                        </li>
                    );
                })}
            </ul>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-4 flex flex-wrap gap-2 relative"
            >
                {area.technologies.map((technology, idx: number) => {
                    return <TechnologyCard technology={technology} key={idx} />;
                })}
            </motion.div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                            additional components                           */
/* -------------------------------------------------------------------------- */

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

type TechnologyCardProps = {
    technology: Technology;
};

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <motion.div
            variants={itemVariant}
            className="flex flex-col items-center px-4 py-3.5 rounded-md border-2 border-teal-900"
        >
            <h2 className="font-medium leading-snug text-teal-500">
                {technology.title}
            </h2>
        </motion.div>
    );
}
