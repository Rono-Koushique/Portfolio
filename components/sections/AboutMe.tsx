import React from "react";
import Wall from "../containers/Wall";
import HorzAnime from "../extras/HorzAnime";
import Skills from "./Skills";
import Experience from "./Experience";

type Props = {};

export default function AboutMe({}: Props) {
    return (
        <section id="about">
            <Wall>
                <div className="max-w-screen-lg mx-auto px-2 mt-12">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            About Me
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            The forefront of Software &<br />
                            Web Development
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full flex flex-col mt-10 gap-12">
                            <Skills />
                            <hr />
                            <Experience />
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
