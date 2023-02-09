import React from "react";
import { Icon } from "@iconify/react";
import Wall from "../containers/Wall";

type Props = {};

export default function TopHeader({}: Props) {
    return (
        <Wall className="bg-rose-900">
            <div className="flex items-center justify-between text-white 
                            max-w-screen-2xl mx-auto px-2">
                <div className="capitalize text-sm">Welcome to my portfolio</div>
                <div className="flex items-center">
                    <div className="thead-content">
                        <Icon className="icon" icon="material-symbols:call" />
                        <p className="info">+8801689798659</p>
                    </div>
                    <div className="thead-content">
                        <Icon className="icon" icon="ion:navigate" />
                        <p className="info">Dhaka, Bangladesh</p>
                    </div>
                    <div className="thead-content">
                        <Icon className="icon" icon="material-symbols:mail-sharp" />
                        <p className="info">ronokoushiquepm@gmail.com</p>
                    </div>
                </div>
            </div>
        </Wall>
    );
}
