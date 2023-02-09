import { Icon } from "@iconify/react";
import React from "react";

type Props = {
    children: React.ReactNode[];
    show: number;
};

export default function Carousel({ children, show }: Props) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [length, setLength] = React.useState(children && children.length);

    function next() {
        if (currentIndex < length - show) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    }
    function previous() {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button
                    onClick={previous}
                    className="carousel-nav-btn-wrapper left-0"
                >
                    <Icon
                        className="carousel-nav-btn-icon"
                        icon="mdi:arrow-left"
                    />
                </button>
                <div className="carousel-content-wrapper">
                    <div
                        className={`carousel-content show-${show}`}
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / show)
                            }%)`,
                        }}
                    >
                        {children}
                    </div>
                </div>
                <button
                    onClick={next}
                    className="carousel-nav-btn-wrapper right-0"
                >
                    <Icon
                        className="carousel-nav-btn-icon"
                        icon="mdi:arrow-right"
                    />
                </button>
            </div>
        </div>
    );
}
