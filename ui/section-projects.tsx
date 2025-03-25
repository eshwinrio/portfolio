import GithubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { FC } from "react";
import BunIcon from "./icons/Bun";
import MaterialUIIcon from "./icons/MaterialUI";
import NextJsIcon from "./icons/NextJs";
import NodeJsIcon from "./icons/NodeJs";
import OpenCVIcon from "./icons/OpenCV";
import PostgresIcon from "./icons/Postgres";
import PythonIcon from "./icons/Python";
import RazorDigitalSolutionsIcon from "./icons/RazorDigitalSolutions";
import ProjectCard from "./project-card";


const SectionProjects: FC = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 xs={6} md={4}>
                <ProjectCard
                    title="Room Surveillance"
                    subtitle="Motion activated video recorder"
                    href="https://github.com/eshwinrio/room-surveillance"
                    tags={[
                        { label: "Python", icon: <PythonIcon fontSize="inherit" /> },
                        { label: "OpenCV", icon: <OpenCVIcon fontSize="inherit" /> },
                    ]}
                >
                    <Box sx={{
                        position: "relative",
                        aspectRatio: "auto 900 / 473",
                        width: "100%", height: "auto",
                        backgroundColor: "#24292E",
                        color: "#FFF",
                    }}>
                        <GithubIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                    </Box>
                </ProjectCard>
            </Grid2>
            <Grid2 xs={6} md={4}>
                <ProjectCard
                    title="Genshin-Toolkit Parser"
                    subtitle="Genshin Impact data parser"
                    href="https://github.com/eshwinrio/genshin-toolkit-parser"
                    tags={[
                        { label: "Node.js", icon: <NodeJsIcon fontSize="inherit" /> },
                        { label: "Bun", icon: <BunIcon fontSize="inherit" /> },
                    ]}
                >
                    <Box sx={{
                        position: "relative",
                        aspectRatio: "auto 900 / 473",
                        width: "100%", height: "auto",
                        backgroundColor: "#24292E",
                        color: "#FFF",
                    }}>
                        <GithubIcon fontSize="large" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                    </Box>
                </ProjectCard>
            </Grid2>
            <Grid2 xs={6} md={4}>
                <ProjectCard
                    title="Razor Digital Solutions"
                    subtitle="Business website"
                    href="https://razordigitalsolutions.com"
                    tags={[
                        { label: "Next.js", icon: <NextJsIcon fontSize="inherit" /> },
                        { label: "PostgreSQL", icon: <PostgresIcon fontSize="inherit" /> },
                        { label: "MUI", icon: <MaterialUIIcon fontSize="inherit" /> },
                    ]}
                >
                    <Image
                        src="/razor_digital_og_root.png"
                        width={900}
                        height={473}
                        alt="Razor Digital brand banner"
                        style={{ display: "block", width: "100%", height: "auto", }}
                    />
                </ProjectCard>
            </Grid2>
        </Grid2>
    );
}

export default SectionProjects;
