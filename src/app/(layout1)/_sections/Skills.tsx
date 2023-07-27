"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import backgroundImage from "@/asset/image/mail-bg.jpg";
import React from "react";

type Props = {
    skills: Skill[];
};

export default function Skills({ skills }: Props) {
    return (
        <section className="flex relative pb-36 lg:pb-40">
            <div className="absolute top-0 left-0 w-full h-full scale-x-[-1] overflow-hidden">
                <Image
                    className="object-cover -hue-rotate-15"
                    src={backgroundImage}
                    alt=""
                    fill={true}
                />
            </div>
            <div className="z-10 px-5 mg:px-10 lg:px-14 xl:px-20 w-full max-w-screen-2xl mx-auto -mt-44">
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full bg-neutral-900 rounded-lg mg:rounded-2xl shadow-2xl shadow-black">
                    {skills &&
                        skills.map((skill, idx) => {
                            return (
                                <Card skill={skill} key={`skill-card-${idx}`} idx={idx} />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

type CardProps = {
    skill: Skill;
    idx: number;
};

function Card({ skill, idx }: CardProps) {
    return (
        <div
            className={`px-7 py-12 lg:px-12 lg:py-20 flex flex-col mg:items-center mg:text-center ${
                idx !== 0 ? "border-t lg:border-t-0 lg:border-l-2 border-neutral-950" : ""
            } text-neutral-300`}
            key={skill.title}
        >
            <Icon className="text-5xl text-teal-500" icon={skill.icon} />
            <span className="mt-4 font-arial text-teal-500 text-3xl font-bold">
                {skill.title}
            </span>
            <span className="mt-6 font-poppins text-3-4">{skill.description}</span>
            <span className="mt-12 font-arial text-white text-xl font-bold">
                Technologies
            </span>
            <span className="mt-4 font-poppins text-3-4">
                {skill.technologies
                    .map((technology) => {
                        return technology;
                    })
                    .join(", ")}
            </span>
            <span className="mt-12 font-arial text-white text-xl font-bold">
                Other Skills
            </span>
            <ul className="mt-4 flex flex-col gap-1 font-poppins text-3-4 list-disc mg:list-none ml-5 mg:ml-0">
                {skill.extra.map((text, idx) => {
                    return <li key={`extra-${idx}`}>{text}</li>;
                })}
            </ul>
        </div>
    );
}
