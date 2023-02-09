import React from "react";

type Props = {};

export default function BrandLogo({}: Props) {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-rose-900 rounded-full h-9 aspect-square flex items-center justify-center">
                <p className="text-3xl font-bold text-white">R</p>
            </div>
            <p className="text-2xl font-roboCon font-bold text-gray-800 tracking-wider">
                Koushique
            </p>
        </div>
    );
}
