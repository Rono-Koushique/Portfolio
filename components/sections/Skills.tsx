import React from "react";
import Technology from "@/data/Technology.json";
import { Icon } from "@iconify/react";
import SkillCard from "../cards/SkillCard";

type Props = {};

export default function Skills({}: Props) {
    const technology = Technology.technology;

    return (
        <div className="grid grid-cols-2 gap-8">
            {/* left side */}
            <div className="flex gap-4">
                <div>
                    <div className="h-14 aspect-square rounded-full flex items-center justify-center border-2">
                        <Icon
                            className="bg-transparent text-4xl text-rose-700"
                            icon="dashicons:awards"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-neutral-800 mt-1">
                        Skills
                    </h2>
                    <hr className="w-16" />
                    <p className="text-neutral-400 leading-loose">
                        I am a skilled web developer, experienced in using
                        latest technologies to build dynamic and user-friendly
                        websites. Proficient in HTML, CSS, JavaScript, and PHP.
                        Up-to-date with the latest web development trends and
                        technologies.
                    </p>
                </div>
            </div>

            {/* right side */}
            <div className="grid grid-cols-4 gap-3">
                {technology.map((data, idx) => {
                    return (
                        <SkillCard
                            key={`skill-${idx}`}
                            icon={data.icon}
                            title={data.title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
