import dayjs from "@/lib/dayjs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC } from "react";
import ProjectCard from "./project-card";
import StyledText from "./styled-text";


const SectionProjects: FC = () => {
    return (
        <Box id="projects" component="section" sx={{ py: 16 }}>
            <Container>
                <StyledText variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                    Showcase
                </StyledText>
                <Grid2 container spacing={4} sx={{ mt: 4 }}>
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
                            media="/tapestry_of_spirit_and_flame_1920_1200.jpg"
                            width={1920} height={1200}
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
                            media="/1691899212466.jpeg"
                            width={1332.8} height={833}
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
                            media="/console-razordigitalsolutions.jpeg"
                            width={1690} height={1053}
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
                            media="/razordigitalsolutions.jpeg"
                            width={1690} height={1053}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default SectionProjects;
