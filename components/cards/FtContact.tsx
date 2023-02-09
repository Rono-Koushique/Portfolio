import React from "react";
import { Icon } from "@iconify/react";

type Props = {
    icon: string;
    title: string;
    value: string;
};

export default function FtContact({ icon, title, value }: Props) {
    return (
        <div className="flex gap-4">
            <div
                className="bg-white h-fit p-2 rounded-full 
                        flex items-center justify-center"
            >
                <div className="h-fit aspect-square">
                    <Icon className="text-rose-500 text-lg" icon={icon} />
                </div>
            </div>
            <div className="flex flex-col">
                <p className="font-bold !text-neutral-500 !mb-0">{title}</p>
                <p className="!mb-0">{value}</p>
            </div>
        </div>
    );
}
