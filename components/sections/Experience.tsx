import React from "react";
import { Icon } from "@iconify/react";
import Exps from "@/data/Experience.json";
import ExperCard from "../cards/ExperCard";
import Wall from "../containers/Wall";
import PrimaryBtn from "../buttons/PrimaryBtn";

type Props = {};

export default function Experience({}: Props) {
    const exps = Exps.exp;
    return (
        <div className="grid grid-cols-2 gap-8">
            {/* left side */}
            <div className="flex gap-4">
                <div>
                    <div className="h-14 aspect-square rounded-full flex items-center justify-center border-2">
                        <Icon
                            className="bg-transparent text-2xl text-rose-700"
                            icon="bi:bar-chart-steps"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-neutral-800 mt-1">
                        Experience
                    </h2>
                    <hr className="w-16" />
                    <p className="text-neutral-400 leading-loose">
                        I have extensive experience in web development, having
                        completed and collaborated on multiple projects for
                        clients both locally and internationally. I am able to
                        work effectively in a team environment, and have a
                        proven track record of delivering high-quality, on-time
                        results.
                    </p>
                    <div className="flex gap-3 mt-3">
                        <PrimaryBtn text="Hire Me" onClick={() => {}} />
                        <button className="border border-rose-400 text-neutral-900 px-6 py-3">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="flex flex-col h-full items-center gap-4">
                {exps.map((data, idx) => {
                    return (
                        <ExperCard
                            key={`exp-${idx}`}
                            companyTitle={data["company-title"]}
                            description={data.description}
                        />
                    );
                })}
            </div>
        </div>
    );
}
