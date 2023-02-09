import React from "react";
import { Icon } from "@iconify/react";

type Props = {
    href: string;
    icon: string;
};

export default function SocialIcon({ href, icon }: Props) {
    return (
        <div className="group">
            <Icon className="text-4xl text-neutral-500 cursor-pointer 
                        group-hover:text-rose-700 transition duration-300 " icon={icon} />
        </div>
    );
}
