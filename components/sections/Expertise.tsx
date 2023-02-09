import React from "react";
import Wall from "../containers/Wall";
import ExpCard from "../cards/ExpCard";
import Exper from "@/data/Expertise.json";

type Props = {};

export default function Expertise({}: Props) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-center gap-8">
                {Exper.expertise.map((data, idx) => {
                    return (
                        <ExpCard
                            key={`exper-${idx}`}
                            icon={data.icon}
                            title={data.title}
                            text={data.text}
                        />
                    );
                })}
            </div>
        </div>
    );
}
