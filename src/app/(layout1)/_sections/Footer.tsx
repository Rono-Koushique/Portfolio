import React from "react";

type Props = {
    socials: Social[];
};

export default async function Footer({ socials }: Props) {
    return (
        <section className="py-8 border-t-[3px] border-neutral-500/10">
            <div className="flex flex-col items-center gap-4 px-10 text-white">
                <div className="flex gap-6">
                    {socials &&
                        socials.map((social: Social, idx: number) => {
                            return (
                                <div key={idx}>
                                    <h1 className="text-neutral-400 font-semibold">
                                        {social.title}
                                    </h1>
                                </div>
                            );
                        })}
                </div>
                <h2 className="text-neutral-600">
                    © 2023 All rights reserved.
                </h2>
            </div>
        </section>
    );
}
