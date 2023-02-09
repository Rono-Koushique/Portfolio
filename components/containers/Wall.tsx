import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

export default function Wall({ children, className }: Props) {
    return (
        <div className={`w-full ${className ? className : ""}`}>{children}</div>
    );
}
