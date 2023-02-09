import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en"  className='scroll-smooth'>
            <Head>
                <meta
                    name="description"
                    content="Portfolio website of Rono Koushique, a web developer showcasing his skills and experience in web development."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
