import dayjs from "@/lib/dayjs";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC } from "react";
import ProjectCard from "./project-card";


const SectionProjects: FC = () => {
    return (
        <Box id="projects" component="section">
            <Container maxWidth="md">
                <Typography component="h3" variant="h4">
                    <Box component="span" color="GrayText">My</Box> Projects
                </Typography>
                <Grid2 container spacing={2} sx={{ mt: 4 }}>
                    <Grid2 xs={12} sm={6} md={5}>
                        <ProjectCard
                            data={{
                                title: "@genshin-toolkit/parser",
                                description: "A tool for parsing game data.",
                                image: "/raiden-yae-01.jpg",
                                link: "https://www.npmjs.com/package/@genshin-toolkit/parser",
                                start: dayjs("2024-06-14"),
                                role: "Owner",
                                tech: ["Rust", "TypeScript", "Next.js", "TailwindCSS", "Trpc", "Prisma", "Postgres", "Redis", "Docker", "CI/CD"],
                            }}
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={7}>
                        <ProjectCard
                            data={{
                                title: "Kaya HR",
                                description: "A demo project incorporating microservice architecture.",
                                image: "/kaya-hr-pr-list.jpeg",
                                link: "https://github.com/eshwinrio/kaya-hr",
                                start: dayjs("2024-06-14"),
                                role: "Owner",
                                tech: ["Rust", "TypeScript", "Next.js", "TailwindCSS", "Trpc", "Prisma", "Postgres", "Redis", "Docker", "CI/CD"],
                            }}
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={7}>
                        <ProjectCard
                            data={{
                                title: "Razor - Admin Panel",
                                description: "Privileged access to manage Razor Web",
                                image: "/razor-admin-snapshot-09-2024.png",
                                link: "https://razor-admin.vercel.app",
                                start: dayjs("2024-07-07"),
                                role: "Owner",
                                tech: ["Wordpress", "Elementor", "WooCommerce", "PHP", "MySQL", "AWS", "Cloudflare", "Git", "CI/CD"],
                            }}
                        />
                    </Grid2>
                    <Grid2 xs={12} sm={6} md={5}>
                        <ProjectCard
                            data={{
                                title: "Razor Digital Solutions",
                                description: "Razor Digital Solutions - Official site",
                                image: "/razor-digital-snapshot-09-2024.png",
                                link: "https://razordigitalsolutions.com",
                                start: dayjs("2024-03-01"),
                                role: "Owner",
                                tech: ["Wordpress", "Elementor", "WooCommerce", "PHP", "MySQL", "AWS", "Cloudflare", "Git", "CI/CD"],
                            }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default SectionProjects;
