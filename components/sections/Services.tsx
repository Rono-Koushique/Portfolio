import React from "react";
import Wall from "../containers/Wall";
import HorzAnime from "../extras/HorzAnime";
import servicesData from "@/data/Services.json";
import ServiceCard from "../cards/ServiceCard";

type Props = {};

export default function Services({}: Props) {
    const services = servicesData.services;
    return (
        <section id="services">
            <Wall>
                <div className="max-w-screen-lg mx-auto px-2">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            What we do
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            Our Services
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full grid grid-cols-3 gap-8 mt-12">
                            {services.map((data, idx) => {
                                return (
                                    <ServiceCard
                                        key={`services-${idx}`}
                                        icon={data.icon}
                                        title={data.title}
                                        description={data.description}
                                        href={data.href}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
