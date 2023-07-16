import "./globals.css";
import { Poppins, Montez } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

const montez = Montez({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-montez",
});

export const metadata = {
    title: "Rono Koushique",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} ${montez.variable}`}>
            <body>{children}</body>
        </html>
    );
}
