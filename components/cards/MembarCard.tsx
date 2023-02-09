import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {
    src: string;
    name: string;
    post: string;
};

export default function MembarCard({ src, name, post }: Props) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-52 aspect-square rounded overflow-hidden relative">
                <Image
                    className="object-cover"
                    src={`/images/team/${src}`}
                    fill={true}
                    sizes="(max-width: 768px) 50vw,
                            (max-width: 1200px) 30vw,
                            30vw"
                    priority={false}
                    alt=""
                />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mt-4">
                {name}
            </h3>
            <h4 className="text-sm text-rose-700">{post}</h4>
            <div className="flex gap-2 mt-3">
                <div className="p-2 bg-neutral-100 rounded-full">
                    <Icon className="text-neutral-500" icon="mdi:github" />
                </div>
                <div className="p-2 bg-neutral-100 rounded-full">
                    <Icon
                        className="text-neutral-500"
                        icon="ant-design:twitter-circle-filled"
                    />
                </div>
                <div className="p-2 bg-neutral-100 rounded-full">
                    <Icon
                        className="text-neutral-500"
                        icon="ic:baseline-facebook"
                    />
                </div>
                <div className="p-2 bg-neutral-100 rounded-full">
                    <Icon className="text-neutral-500" icon="mdi:linkedin" />
                </div>
            </div>
        </div>
    );
}
