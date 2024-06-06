import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/header/Navbar";
import TanStackProvider from "./providers/TanStackProvider";
import ChakraProvider from "./providers/ChakraProvider";

export const metadata: Metadata = {
    title: "Dny otevřených dveří české advokacie",
    description:
        "Projekt, který vznikl s cílem otevřít dveře české advokacie mladší generaci a ukázat jí, jaká dnes advokacie v praxi vlastně je.",
    icons: {
        icon: "/favicon.png",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <head>
                <link rel="shortcut icon" href="/favicon.png" />
            </head> */}
            <body>
                <TanStackProvider>
                    <ChakraProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </ChakraProvider>
                </TanStackProvider>
            </body>
        </html>
    );
}
