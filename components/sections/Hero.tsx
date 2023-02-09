import React from "react";
import Wall from "../containers/Wall";
import SocialLinks from "@/data/SocialLinks.json";
import { Icon } from "@iconify/react";
import SocialIcon from "../buttons/SocialIcon";
import Expertise from "./Expertise";

type Props = {};

export default function Hero({}: Props) {
    return (
        <section id="home">
            <Wall className="min-h-[90vh] flex items-center">
                <div className="max-w-screen-xl mx-auto">
                    <div className="custom-font-1 w-1/2 flex flex-col gap-4">
                        <h4 className="text-neutral-700">Hello I&apos;m</h4>
                        <h1 className="text-neutral-800">Rono Koushique</h1>
                        <h3 className="text-rose-700 font-bold">
                            Software & Web Developer
                        </h3>
                        <p className="text-neutral-500 leading-loose">
                            As a skilled web developer I offer web services
                            including web design, front-end and back-end
                            development, and e-commerce solutions. I deliver
                            exceptional results tailored to clients&apos;
                            specific needs on time and on budget.
                        </p>
                        <div className="flex gap-3 mt-4">
                            {SocialLinks.socialLinks.map((link, idx) => {
                                return (
                                    <SocialIcon
                                        key={`link-${idx}`}
                                        href=""
                                        icon={link.icon}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Wall>
            <Expertise />
        </section>
    );
}
