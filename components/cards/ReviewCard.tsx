import { Icon } from "@iconify/react";
import React from "react";

type Props = {
    review: string;
    name: string;
    post: string;
};

export default function ReviewCard({ review, name, post }: Props) {
    return (
        <div className="flex flex-col items-center text-rose-600">
            <Icon className="text-6xl" icon="icomoon-free:quotes-left" />
            <p className="italic text-neutral-500 font-medium leading-relaxed mt-5">{review}</p>
            <h3 className="text-lg text-neutral-900 font-semibold mt-5">{name}</h3>
            <h4 className="text-rose-700 font-medium text-sm mt-1">{post}</h4>
        </div>
    );
}
