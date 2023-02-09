import React from "react";
import Wall from "../containers/Wall";
import BrandLogo from "../navigation/BrandLogo";

type Props = {};

export default function MainFooter({}: Props) {
    return (
        <footer>
            <Wall className="bg-rose-100">
                <div className="max-w-def grid grid-cols-3">
                    <div className="flex flex-col items-start">
                        <BrandLogo />
                    </div>
                </div>
            </Wall>
        </footer>
    );
}
