import dayjs from "@/lib/dayjs";
import GithubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { FC } from "react";
import NpmJsIcon from "./icons/NpmJs";
import ProjectCard from "./project-card";


const SectionProjects: FC = () => {
    return (
        <Grid2 container spacing={4}>
            <Grid2 xs={12} sm={6} md={4}>
                <ProjectCard
                    data={{
                        title: "@genshin-toolkit/parser",
                        description: "A tool for parsing game data.",
                        link: "https://www.npmjs.com/package/@genshin-toolkit/parser",
                        start: dayjs("2024-06-14"),
                        role: "Owner",
                        tech: ["Rust", "TypeScript", "Next.js", "TailwindCSS", "Trpc", "Prisma", "Postgres", "Redis", "Docker", "CI/CD"],
                    }}
                    media={(
                        <Box sx={{
                            position: "relative",
                            aspectRatio: "auto 1920 /1200",
                            width: "100%", height: "auto",
                            backgroundColor: "#CB3837",
                            color: "#fff",
                        }}>
                            <NpmJsIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                        </Box>
                    )}
                />
            </Grid2>
            <Grid2 xs={12} sm={6} md={4}>
                <ProjectCard
                    data={{
                        title: "Kaya HR",
                        description: "A tool for managing HR data.",
                        link: "https://github.com/eshwinrio/kaya-hr",
                        start: dayjs("2024-06-14"),
                        role: "Owner",
                        tech: ["Rust", "TypeScript", "Next.js", "TailwindCSS", "Trpc", "Prisma", "Postgres", "Redis", "Docker", "CI/CD"],
                    }}
                    media={(
                        <Box sx={{
                            position: "relative",
                            aspectRatio: "auto 1920 /1200",
                            width: "100%", height: "auto",
                            backgroundColor: "#24292E",
                            color: "#FFF",
                        }}>
                            <GithubIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                        </Box>
                    )}
                />
            </Grid2>
            <Grid2 xs={12} sm={6}>
                <ProjectCard
                    data={{
                        title: "Razor - Admin Panel",
                        description: "Privileged access to manage Razor Web",
                        link: "https://console.razordigitalsolutions.com",
                        start: dayjs("2024-07-07"),
                        role: "Owner",
                        tech: ["Wordpress", "Elementor", "WooCommerce", "PHP", "MySQL", "AWS", "Cloudflare", "Git", "CI/CD"],
                    }}
                    media={(
                        <Image
                            src="/console-razordigitalsolutions.jpeg"
                            alt="Razor Admin Panel"
                            width={1920} height={1200}
                            style={{ width: "100%", height: "auto" }}
                        />
                    )}
                />
            </Grid2>
            <Grid2 xs={12} sm={6}>
                <ProjectCard
                    data={{
                        title: "Razor Digital Solutions",
                        description: "Razor Digital Solutions - Official site",
                        link: "https://razordigitalsolutions.com",
                        start: dayjs("2024-03-01"),
                        role: "Owner",
                        tech: ["Wordpress", "Elementor", "WooCommerce", "PHP", "MySQL", "AWS", "Cloudflare", "Git", "CI/CD"],
                    }}
                    media={(
                        <Image
                            src="/razordigitalsolutions.jpeg"
                            alt="Razor Digital Solutions"
                            width={1920} height={1200}
                            style={{ width: "100%", height: "auto" }}
                        />
                    )}
                />
            </Grid2>
        </Grid2>
    );
}

export default SectionProjects;
