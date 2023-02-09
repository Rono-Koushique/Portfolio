import React from "react";
import Wall from "../containers/Wall";
import Image from "next/image";
import ClientImage from "@/public/images/client-pic.png";
import Shape from "@/public/images/shape2.svg";
import Shape3 from "@/public/images/shape3.svg";
import HorzAnime from "../extras/HorzAnime";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ClientReviewData from "@/data/ClientReview.json";
import ReviewCard from "../cards/ReviewCard";
import { Icon } from "@iconify/react";

type Props = {};

export default function ClientReview({}: Props) {
    const AllClientReviews = ClientReviewData["client-review"];
    const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);

    function next() {
        setCurrentImageIndex((prev) =>
            prev == AllClientReviews.length - 1
                ? AllClientReviews.length - 1
                : prev + 1
        );
    }

    function previous() {
        setCurrentImageIndex((prev) => (prev == 0 ? 0 : prev - 1));
    }

    return (
        <section id="clients">
            <Wall>
                <div className="max-w-screen-lg mx-auto px-2">
                    <div className="flex w-full gap-8">
                        {/* images & animations */}
                        <div className="w-[48%] h-fit relative">
                            <Image
                                className="w-full h-[34rem] object-cover contrast-[120%]"
                                src={ClientImage}
                                alt=""
                                sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    50vw"
                            />
                            <div className="w-fit h-fit absolute top-0 right-0 z-10 translate-x-[25%] translate-y-[-50%] ">
                                <Image
                                    className="w-40 aspect-square opacity-70
                                        saturate-0 brightness-0 origin-center animate-rotate"
                                    src={Shape}
                                    alt=""
                                />
                            </div>
                            <div className="h-20 aspect-square absolute top-0 left-16 z-10 -translate-y-1/2">
                                <Image
                                    className="h-20 aspect-square animate-float"
                                    src={Shape3}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-[52%] flex flex-col justify-center flex-grow">
                            <div className="flex flex-col items-center gap-3">
                                <h4 className="uppercase text-rose-600 font-bold text-sm">
                                    WHAT CLIENT SAYS ABOUT ME
                                </h4>
                                <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                                    My Clients
                                </h4>
                                <div className="mt-4">
                                    <HorzAnime />
                                </div>
                                <div className="w-full flex flex-col mt-10 gap-12">
                                    <div className="relative">
                                        <button
                                            className="absolute z-20 bottom-2 left-0 cursor-pointer"
                                            onClick={previous}
                                        >
                                            <Icon
                                                className={`text-3xl ${
                                                    currentImageIndex === 0
                                                        ? "text-neutral-300"
                                                        : "text-neutral-400"
                                                }`}
                                                icon="mdi:arrow-left"
                                            />
                                        </button>
                                        <button
                                            className="absolute z-20 bottom-2 right-0 cursor-pointer"
                                            onClick={next}
                                        >
                                            <Icon
                                                className={`text-3xl ${
                                                    currentImageIndex === AllClientReviews.length - 1
                                                        ? "text-neutral-300"
                                                        : "text-neutral-400"
                                                }`}
                                                icon="mdi:arrow-right"
                                            />
                                        </button>
                                        <Carousel
                                            selectedItem={currentImageIndex}
                                            showIndicators={false}
                                            showStatus={false}
                                            showArrows={false}
                                            showThumbs={false}
                                        >
                                            {AllClientReviews.map(
                                                (data, idx) => {
                                                    return (
                                                        <ReviewCard
                                                            key={`review-${idx}`}
                                                            review={data.review}
                                                            name={data.name}
                                                            post={data.post}
                                                        />
                                                    );
                                                }
                                            )}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
