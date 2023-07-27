import React from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[];
};

export default function FormError({ children }: Props) {
    return <p className="text-3-4 text-orange-500 ml-2">* {children}</p>;
}
