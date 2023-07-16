import React from "react";
import HorzAnime from "../_components/extra/HorzAnime";

type Props = {};

export default function AboutMe({}: Props) {
    return (
        <section className="flex py-36 pb-80">
            <div className="flex flex-col mg:items-center mg:text-center text-white font-roboto font-normal px-10 mx-auto">
                <h4 className="section-subtitle">Background</h4>
                <h3 className="mt-2 section-title">About Me</h3>
                <div className="mt-4">
                    <HorzAnime />
                </div>
                <p className="mt-8 text-[1.2rem] leading-[2] text-neutral-300 md:max-w-[70vw] xl:max-w-3xl">
                    I have been working as a web developer for three years. I am skilled
                    in using the MERN stack and have worked on various projects for both
                    work and personal purposes. I am from Bangladesh and recently finished
                    my studies at RUET. Besides coding, I enjoy reading books and I&apos;m
                    really passionate about solving Rubik&apos;s Cubes.
                </p>
            </div>
        </section>
    );
}
