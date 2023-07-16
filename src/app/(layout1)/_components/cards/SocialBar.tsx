import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type Props = {
    socials: Social[];
};

const sideBarVariant = {
    hidden: {
        x: "-100%",
        y: "-50%",
    },
    show: {
        x: "0%",
        y: "-50%",
        transition: {
            duration: 0.75,
            type: "tween",
            ease: "easeOut",
        },
    },
};

export default function SocialBar({ socials }: Props) {
    return (
        <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-0 social-bar flex-col hidden lg:flex"
            variants={sideBarVariant}
            initial="hidden"
            animate="show"
        >
            {socials &&
                socials.map((social) => {
                    return (
                        <div
                            className="w-14 bg-black aspect-square flex items-center justify-center text-4xl text-teal-800 hover:cursor-pointer hover:text-teal-500 ease-in-out p-1 before:contents-[''] z-auto relative before:duration-150 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[inherit] before:-z-10 hover:before:shadow-[0_0_16px] hover:before:shadow-teal-500 social-bar-link"
                            key={social.title}
                        >
                            <Icon icon={social.icon} />
                        </div>
                    );
                })}
        </motion.div>
    );
}
