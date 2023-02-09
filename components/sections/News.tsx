import React from "react";
import AllNews from "@/data/News.json";
import Wall from "../containers/Wall";
import HorzAnime from "../extras/HorzAnime";
import NewsCard from "../cards/NewsCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

type Props = {};

export default function News({}: Props) {
    const allNews = AllNews.news;
    return (
        <section id="news">
            <Wall>
                <div className="max-w-screen-lg mx-auto px-2 mt-12">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            OUR BLOG
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            Latest News
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full flex flex-col mt-10 gap-12">
                            <div className="flex w-full justify-between gap-8">
                                {allNews.map((data, idx) => {
                                    return (
                                        <NewsCard
                                            key={`news-${idx}`}
                                            img={data.src}
                                            publishDate={data.publish_date}
                                            title={data.title}
                                            body={data.body}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-10">
                            <PrimaryBtn
                                text="View all posts"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
