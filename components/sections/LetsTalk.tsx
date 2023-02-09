import React from "react";
import Wall from "../containers/Wall";
import Image from "next/image";
import HorzAnime from "../extras/HorzAnime";
import Shape4 from "public/images/shape4.svg";
import PrimaryBtn from "../buttons/PrimaryBtn";

type Props = {};

export default function LetsTalk({}: Props) {
    return (
        <section id="contact">
            <Wall>
                <div className="max-w-screen-lg mx-auto px-2">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="uppercase text-rose-600 font-bold text-sm">
                            LET&apos;S TALK
                        </h4>
                        <h4 className="text-4xl text-neutral-800 font-black text-center leading-[128%]">
                            Get in Touch
                        </h4>
                        <div className="mt-4">
                            <HorzAnime />
                        </div>
                        <div className="w-full flex flex-col mt-10 gap-12">
                            <div className="w-full flex items-center gap-8">
                                <div className="w-[48%]">
                                    <Image
                                        className="w-full h-full object-cover"
                                        src={Shape4}
                                        alt=""
                                    />
                                </div>
                                <div className="w-[52%]">
                                    <form>
                                        <div className="grid grid-cols-2 gap-4 talk">
                                            <input placeholder="Your name" />
                                            <input placeholder="Your email" />
                                            <input
                                                className="col-span-2"
                                                placeholder="Your subject"
                                            />
                                            <textarea
                                                className="col-span-2 h-[14rem]"
                                                placeholder="Your message"
                                            />
                                            <div className="col-span-2 flex gap-2 items-center">
                                                <input type="checkbox" />
                                                <p className="text-sm text-neutral-500">
                                                    By checking this you agree
                                                    to our{" "}
                                                    <span className="text-rose-500">
                                                        Terms
                                                    </span>{" "}
                                                    &{" "}
                                                    <span className="text-rose-500">
                                                        Privacy policy
                                                    </span>
                                                </p>
                                            </div>
                                            <PrimaryBtn
                                                text="Send message"
                                                onClick={() => {}}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wall>
        </section>
    );
}
