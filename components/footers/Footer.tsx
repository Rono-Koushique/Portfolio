import React from "react";
import BirdsEye from "./BirdsEye";
import Copyright from "./Copyright";
import VertAnime from "../extras/VertAnime";

type Props = {};

export default function Footer({}: Props) {
    return (
        <footer className="relative">
            <div className="absolute top-0 left-1/2 -translate-y-1/2">
                <VertAnime />
            </div>
            <BirdsEye />
            <Copyright />
        </footer>
    );
}
