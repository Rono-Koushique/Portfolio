import React from "react";
import Wall from "../containers/Wall";

type Props = {};

export default function Copyright({}: Props) {
    return (
        <Wall className="bg-neutral-900">
            <div className="max-w-screen-2xl mx-auto content">
                <div className="flex justify-between items-center px-2 py-4">
                    <p className="!mb-0 !text-sm">
                        Copyright @ Milian. All Rights Reserved
                    </p>
                    <div className="flex gap-2">
                        <p className="!mb-0 !text-sm">Terms & Conditions</p>
                        <p className="!mb-0 !text-sm">-</p>
                        <p className="!mb-0 !text-sm">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </Wall>
    );
}
