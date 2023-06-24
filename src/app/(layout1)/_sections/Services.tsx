"use client";
import React from "react";
import HorzAnime from "../_components/extra/HorzAnime";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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

type Props = { services: Service[] };

export default function Services({ services }: Props) {
    return (
        <section className="flex py-20">
            <div className="flex flex-col text-white font-roboto font-normal px-10">
                <h4 className="section-subtitle">What I do</h4>
                <h3 className="mt-2 section-title">Services</h3>
                <div className="mt-4">
                    <HorzAnime />
                </div>
                <motion.div
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col mg:grid mg:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services &&
                        services.map((service: Service, idx: number) => {
                            return <ServiceCard service={service} key={idx} />;
                        })}
                </motion.div>
            </div>
        </section>
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

type ServiceCardProps = {
    service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
    return (
        <motion.div
            variants={itemVariant}
            className="rounded-xl border-2 shadow-[0_2px_16px_-4px] shadow-teal-500/50 border-teal-500/20 w-full group relative"
        >
            <div className="px-6 py-6">
                <Icon
                    className="text-[2rem] text-teal-500"
                    icon={service.icon}
                />
                <h1 className="mt-4 text-2xl sm:text-3xl text-teal-500 font-bold">
                    {service.title}
                </h1>
                <p className="mt-4 text-lg hover:underline hover:underline-offset-2 hover:cursor-pointer w-fit">
                    {service.projectCount} Projects
                </p>
                <p className="mt-4 text-sm leading-loose font-light text-neutral-300">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
}
