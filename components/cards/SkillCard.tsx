import React from "react";
import { Icon } from "@iconify/react";

type Props = {
    icon: string;
    title: string;
};

export default function SkillCard({ icon, title }: Props) {
    return (
        <div className="flex flex-col items-center gap-3 shadow flex-grow rounded-md px-4 py-3">
            <Icon className="text-3xl" icon={icon} />
            <p className="text-xs text-neutral-700 text-center leading-none">{title}</p>
        </div>
    );
}
