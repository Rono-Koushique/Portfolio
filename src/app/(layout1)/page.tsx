import React from "react";
import Banner from "./_sections/Banner";
import AboutMe from "./_sections/AboutMe";
import RecentWorks from "./_sections/RecentWorks";
import Footer from "./_sections/Footer";
import fetchPageData from "./_utils/fetchPageData";
import Skills from "./_sections/Skills";

type Props = {};

function getPageData() {
    const data = fetchPageData();
    return data.results;
}

export default function Home({}: Props) {
    const { skills, recentWorks, socials } = getPageData();
    return (
        <main>
            <Banner socials={socials} />
            <AboutMe />
            <Skills skills={skills} />
            <RecentWorks recentWorks={recentWorks} />
            <Footer socials={socials} />
        </main>
    );
}
