import React from "react";
import Wall from "../containers/Wall";
import HorzAnime from "../extras/HorzAnime";
import Team from "@/data/Team.json";
import MembarCard from "../cards/MembarCard";
import Carousel from "../containers/Carousel";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        // slidesToSlide: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 3,
        // slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        // slidesToSlide: 1,
    },
};

type Props = {};

export default function MyTeam({}: Props) {
    const members = Team.team;
    return (
        <section id="team">
            <Wall>
                <div className="max-w-screen-xl mx-auto px-2">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            MEET OUR EXPERTS
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            Our Team
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full flex flex-col mt-10 gap-12">
                            <Carousel show={4}>
                                {members.map((data, idx) => {
                                    return (
                                        <MembarCard
                                            key={data.name}
                                            src={data.img}
                                            name={data.name}
                                            post={data.post}
                                        />
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
