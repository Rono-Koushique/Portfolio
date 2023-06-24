"use client";
import React from "react";
import Header from "../_components/Header";
import { motion } from "framer-motion";

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

type Props = {};

export default function Banner({}: Props) {
    return (
        <section className="relative flex overflow-hidden py-20">
            <Header />
            <motion.div
                className="flex flex-col text-white font-roboto font-normal px-10"
                variants={containerVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.h3
                    variants={itemVariant}
                    className="text-2xl font-light mt-20"
                >
                    Hello, I&apos;m
                </motion.h3>
                <motion.h1
                    variants={itemVariant}
                    className="text-5xl font-bold mt-6 leading-tight"
                >
                    Koushiqur Rahman
                </motion.h1>
                <motion.p
                    variants={itemVariant}
                    className="text-2xl mt-6 text-teal-500"
                >
                    A Web Developer
                </motion.p>
                <motion.p
                    variants={itemVariant}
                    className="text-lg font-light leading-loose mt-6 text-neutral-300"
                >
                    specializing in ReactJS, NextJS and other popular web
                    frameworks and creating beautiful, responsive websites that
                    help businesses grow
                </motion.p>
                <motion.div variants={itemVariant} className="mt-10">
                    <button className="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 py-4 px-8 rounded shadow-[0_2px_14px_0] shadow-teal-500/40 hover:shadow-teal-400/40 tracking-wide transition duration-200 ease-in-out">
                        Download CV
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
