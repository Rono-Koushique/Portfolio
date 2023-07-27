"use client";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImage from "@/asset/image/mail-bg.jpg";
import SocialBar from "../_components/cards/SocialBar";
import LargeBtn from "../_components/buttons/LargeBtn";

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
        <section className="relative py-36 lg:py-40">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image
                    className="object-cover -hue-rotate-15 brightness-90 contrast-[105%]"
                    src={backgroundImage}
                    alt=""
                    fill={true}
                />
            </div>
            <Navbar />
            <SocialBar socials={socials} />
            <motion.div
                className="flex flex-col text-white font-normal w-full lg:max-w-screen-xl mx-auto px-10 mg:items-center mg:text-center"
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
                    className="font-arial text-5xl xl:text-6xl font-bold mt-4 lg:mt-10 leading-tight"
                >
                    Koushiqur Rahman
                </motion.h1>
                <motion.p
                    variants={itemVariant}
                    className="font-poppins text-1 mt-10 mg:mt-14 font-light"
                >
                    <span className="text-orange-400">A Web Developer, </span>
                    specializing in ReactJS, NextJS and other popular web frameworks and
                    creating beautiful, responsive websites that help businesses grow
                </motion.p>
                <motion.div variants={itemVariant} className="mt-16">
                    <LargeBtn text="View Projects" />
                </motion.div>
            </motion.div>
        </section>
    );
}
