import React from "react";
import TopHeader from "./TopHeader";
import MainNavbar from "./MainNavbar";
import StickyNavbar from "./StickyNavbar";

type Props = {
    currentSection?: string;
    sticky: boolean;
};

export default function Header({ currentSection, sticky }: Props) {
    return (
        <header>
            <TopHeader />
            <MainNavbar currentSection={currentSection} />
            <StickyNavbar currentSection={currentSection} sticky={sticky} />
        </header>
    );
}
