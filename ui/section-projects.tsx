import GithubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { FC } from "react";
import NpmJsIcon from "./icons/NpmJs";
import ProjectCard from "./project-card";


const SectionProjects: FC = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={6} md={4}>
                <ProjectCard title="@genshin-toolkit/parser" subtitle="NPM parsing library" href="https://www.npmjs.com/package/@genshin-toolkit/parser">
                    <Box sx={{
                        position: "relative",
                        aspectRatio: "auto 1920 / 1080",
                        width: "100%", height: "auto",
                        backgroundColor: "#CB3837",
                        color: "#fff",
                    }}>
                        <NpmJsIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                    </Box>
                </ProjectCard>
            </Grid2>
            <Grid2 xs={6} md={4}>
                <ProjectCard title="Kaya HR" subtitle="Interactive Dashboard" href="https://github.com/eshwinrio/kaya-hr">
                    <Box sx={{
                        position: "relative",
                        aspectRatio: "auto 1920 /1080",
                        width: "100%", height: "auto",
                        backgroundColor: "#24292E",
                        color: "#FFF",
                    }}>
                        <GithubIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                    </Box>
                </ProjectCard>
            </Grid2>
            <Grid2 xs={12} sm={6}>
                <ProjectCard title="Razor Console" subtitle="Interactive Dashboard" href="https://console.razordigitalsolutions.com">
                    <Image
                        src="/console-razordigitalsolutions.jpeg"
                        alt="Razor Admin Panel"
                        width={1920} height={1200}
                        style={{ width: "100%", height: "auto" }}
                    />
                </ProjectCard>
            </Grid2>
            <Grid2 xs={12} sm={6}>
                <ProjectCard title="Razor Digital Solutions" subtitle="Business Website" href="https://razordigitalsolutions.com">
                    <Image
                        src="/razordigitalsolutions.jpeg"
                        alt="Razor Digital Solutions"
                        width={1920} height={1200}
                        style={{ width: "100%", height: "auto" }}
                    />
                </ProjectCard>
            </Grid2>
        </Grid2>
    );
}

export default SectionProjects;
