"use client";
import React from "react";
import Header from "../_components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerBg from "@/asset/image/banner-bg.jpg";
import SocialBar from "../_components/cards/SocialBar";

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
};

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

type Props = {
    socials: Social[];
};

export default function Banner({ socials }: Props) {
    return (
        <section className="relative flex overflow-hidden py-36 lg:py-40">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    className="object-cover -hue-rotate-30 brightness-[80%] contrast-[115%]"
                    src={bannerBg}
                    alt=""
                    fill={true}
                />
            </div>
            <Header />
            <SocialBar socials={socials} />
            <motion.div
                className="flex flex-col text-white font-normal w-full px-10 mg:items-center mg:text-center"
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.h3
                    variants={itemVariant}
                    className="font-poppins text-2xl leading-none tracking-wide"
                >
                    Hello, I&apos;m
                </motion.h3>
                <motion.h1
                    variants={itemVariant}
                    className="font-arial text-4xl mg:text-5xl xl:text-6xl font-bold mt-10 leading-tight"
                >
                    Koushiqur Rahman
                </motion.h1>
                <motion.p
                    variants={itemVariant}
                    className="font-poppins text-1 mt-8 mg:mt-14 md:max-w-[70vw] xl:max-w-3xl font-light"
                >
                    <span className="text-teal-300">A Web Developer, </span>
                    specializing in ReactJS, NextJS and other popular web frameworks and
                    creating beautiful, responsive websites that help businesses grow
                </motion.p>
                <motion.div variants={itemVariant} className="mt-16">
                    <button className="font-arial lg:text-xl font-bold px-8 py-4 bg-teal-600 hover:bg-teal-500 active:bg-teal-700 rounded-md shadow-[0_2px_14px_0] shadow-teal-600/40 hover:shadow-teal-500/40 transition duration-200 ease-in-out">
                        View Projects
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
