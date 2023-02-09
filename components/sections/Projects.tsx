import React from "react";
import Wall from "../containers/Wall";
import HorzAnime from "../extras/HorzAnime";
import WebDev from "public/images/webdev.png";
import Dbms from "public/images/dbms.png";
import Uiux from "public/images/uiux.png";
import MobApp from "public/images/mobApp.png";
import ProjectCard from "../cards/ProjectCard";

type Props = {};

const projectData = [
    {
        img: WebDev,
        title: "Websites",
        subtitle: "Responsive",
    },
    {
        img: Dbms,
        title: "Database",
        subtitle: "CMS service",
    },
    {
        img: Uiux,
        title: "UI/UX Design",
        subtitle: "Unique Designs",
    },
    {
        img: MobApp,
        title: "Mobile Apps",
        subtitle: "Android / IOS",
    },
];

export default function Projects({}: Props) {
    return (
        <section id="projects">
            <Wall>
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            Our Completed Projects
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            Recent Projects
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full flex flex-col mt-10 gap-12">
                            <div className="grid grid-cols-4 gap-6">
                                {projectData.map((data, idx) => {
                                    return (
                                        <ProjectCard
                                            key={`project-${idx}`}
                                            img={data.img}
                                            title={data.title}
                                            subtitle={data.subtitle}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
