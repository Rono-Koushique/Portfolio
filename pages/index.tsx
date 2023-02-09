import React from "react";
import Head from "next/head";
import Header from "@/components/navigation/Header";
import Footer from "@/components/footers/Footer";
import navlinks from "@/components/navigation/navlinks";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import VertAnime from "@/components/extras/VertAnime";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import ClientReview from "@/components/sections/ClientReview";
import MyTeam from "@/components/sections/MyTeam";
import Newsletter from "@/components/sections/Newsletter";
import News from "@/components/sections/News";
import LetsTalk from "@/components/sections/LetsTalk";

export default function Home() {
    const [sticky, setSticky] = React.useState<boolean>(false);
    const [currentSection, setCurrentSection] = React.useState<string>(
        navlinks[0].href
    );

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            scrollPosition > 150 ? setSticky(true) : setSticky(false);

            navlinks.forEach((section) => {
                const element = document.getElementById(section.href);
                const height = window.screen.height;
                const elementPosition = element?.offsetTop;

                if (
                    elementPosition &&
                    scrollPosition >= elementPosition - height / 3
                ) {
                    setCurrentSection(section.href);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Rono Koushique</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className="min-h-screen flex flex-col gap-20 w-full">
                <Header currentSection={currentSection} sticky={sticky} />
                <Hero />
                <AboutMe />
                <VertAnime />
                <Services />
                <VertAnime />
                <Projects />
                <VertAnime />
                <ClientReview />
                <VertAnime />
                <MyTeam />
                <Newsletter />
                <News />
                <VertAnime />
                <LetsTalk />
                <Footer />
            </main>
        </>
    );
}
