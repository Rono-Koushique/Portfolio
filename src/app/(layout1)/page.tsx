import React from "react";
import Banner from "./_sections/Banner";
import Services from "./_sections/Services";
import AboutMe from "./_sections/AboutMe";
import RecentWorks from "./_sections/RecentWorks";
import AreaOfWork from "./_sections/AreaOfWork";
import Footer from "./_sections/Footer";

type Props = {};

async function getPageData() {
    const res = await fetch("http://127.0.0.1:3000/api/page-data");
    const data = await res.json();
    return data.results;
}

export default async function Home({}: Props) {
    const { services, areasOfWork, recentWorks, socials } = await getPageData();

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
