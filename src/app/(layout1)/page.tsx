import React from "react";
import Banner from "./_sections/Banner";
import Services from "./_sections/Services";
import AboutMe from "./_sections/AboutMe";
import RecentWorks from "./_sections/RecentWorks";
import AreaOfWork from "./_sections/AreaOfWork";
import Footer from "./_sections/Footer";
import fetchPageData from "./_utils/fetchPageData";

type Props = {};

function getPageData() {
    const data = fetchPageData();
    return data.results;
}

export default function Home({}: Props) {
    const { services, areasOfWork, recentWorks, socials } = getPageData();
    return (
        <main>
            <Banner />
            <Services services={services} />
            <AboutMe />
            <AreaOfWork areasOfWork={areasOfWork} />
            <RecentWorks recentWorks={recentWorks} />
            <Footer socials={socials} />
        </main>
    );
}
