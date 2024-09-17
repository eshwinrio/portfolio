import JsonLdInjector from "@/lib/jsonld-injector";
import PortfolioThemeProvider from "@/lib/theme";
import Header from "@/ui/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Eshwin Rio",
    description: "A passionate web developer specializing in creating innovative, responsive applications with Next.js, React, and TypeScript. Explore my journey, transforming ideas into digital experiences that inspire. Let's build the future together!",
    openGraph: {
        title: "Eshwin Rio - Web Developer | Building Responsive, Innovative Applications",
        description: "A passionate web developer specializing in creating innovative, responsive applications with Next.js, React, and TypeScript.",
        url: "https://eshwinrio.vercel.app",
        siteName: "Eshwin Rio - Portfolio",
        images: [
            {
                url: "https://eshwinrio.vercel.app/raiden-yae-01.jpeg",
                width: 500,
                height: 500,
                alt: "A captivating Genshin Impact fan art illustration, showcasing vibrant character design.",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Eshwin Rio - Web Developer | Building Responsive, Innovative Applications",
        description: "A passionate web developer specializing in creating responsive and innovative applications with Next.js, React, and TypeScript.",
        images: {
            url: "https://eshwinrio.vercel.app/raiden-yae-01.jpeg",
            alt: "Genshin Impact fan art illustration, showcasing vibrant character design."
        },
    },
    keywords: [
        "Web Development",
        "Front-End Developer",
        "Next.js Developer",
        "React Developer",
        "TypeScript",
        "Responsive Web Design",
        "Portfolio Website",
        "Innovative Applications",
        "Creative Coding",
        "Full Stack Development",
        "JavaScript",
        "UI/UX Design",
        "Professional Portfolio",
        "Web Developer Portfolio",
        "Eshwin Rio",
        "Web Development Projects",
        "App Development",
        "SEO Optimized Websites",
        "Web Technologies",
        "User-Centered Design"
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <JsonLdInjector />
                <AppRouterCacheProvider>
                    <PortfolioThemeProvider>
                        <Header />
                        {children}
                    </PortfolioThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
