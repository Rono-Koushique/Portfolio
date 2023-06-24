"use client";
import { Icon } from "@iconify/react";
import React from "react";

type Props = {
    technology: Technology;
    key: number;
};

export default function TechnologyCard({ technology, key }: Props) {
    return (
        <div
            key={key}
            className="flex flex-col items-center p-4 rounded-md shadow-xl shadow-teal-700/30"
        >
            <h2 className="mt-2 text-sm font-medium leading-snug text-teal-500">
                {technology.title}
            </h2>
        </div>
    );
}
