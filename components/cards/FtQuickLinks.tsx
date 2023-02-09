import React from "react";
import { Icon } from "@iconify/react";

type Props = {
    title: string;
};

export default function FtQuickLinks({ title }: Props) {
    return (
        <div className="flex items-center gap-4">
            <Icon
                className="text-rose-500 text-lg"
                icon="ic:outline-insert-link"
            />
            <p className="capitalize !text-neutral-500 !mb-0">{title}</p>
        </div>
    );
}
