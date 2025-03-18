import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC, ReactElement } from "react";
import AwsIcon from "./icons/AWS";
import BashIcon from "./icons/Bash";
import BootstrapIcon from "./icons/Bootstrap";
import Css3Icon from "./icons/Css3";
import DockerIcon from "./icons/Docker";
import ExpressJsIcon from "./icons/ExpressJs";
import FigmaIcon from "./icons/Figma";
import GitIcon from "./icons/Git";
import GithubActionsIcon from "./icons/GithubActions";
import Html5Icon from "./icons/Html5";
import JavaIcon from "./icons/Java";
import JavascriptIcon from "./icons/Javascript";
import JQueryIcon from "./icons/jQuery";
import KotlinIcon from "./icons/Kotlin";
import MaterialUIIcon from "./icons/MaterialUI";
import NextJsIcon from "./icons/NextJs";
import NodeJsIcon from "./icons/NodeJs";
import PythonIcon from "./icons/Python";
import ReactJsIcon from "./icons/ReactJs";
import TailwindIcon from "./icons/Tailwind";
import TypescriptIcon from "./icons/Typescript";
import VSCodeIcon from "./icons/VSCode";
import TechStackTray from "./TechStackTray";


export interface SkillMetrics {
    readonly title: string;
    readonly icon: ReactElement<SvgIconProps, "svg">;
    readonly level: "beginner" | "intermediate" | "advanced";
}

export interface Service {
    readonly title: string;
    readonly skills: Record<string, SkillMetrics[]>;
}

const srvDevelopment: Service = {
    title: "Languages & Runtimes",
    skills: {
        "Languages & Runtimes": [
            { icon: <NodeJsIcon />, title: "Node.js", level: "advanced" },
            { icon: <TypescriptIcon />, title: "TypeScript", level: "advanced" },
            { icon: <JavascriptIcon />, title: "JavaScript", level: "advanced" },
            { icon: <PythonIcon />, title: "Python", level: "advanced" },
            { icon: <KotlinIcon />, title: "Kotlin", level: "intermediate" },
            { icon: <BashIcon />, title: "Bash", level: "intermediate" },
            { icon: <JavaIcon />, title: "Java", level: "advanced" },
            { icon: <Html5Icon />, title: "HTML5", level: "advanced" },
        ],
        "Frameworks & IDEs": [
            { icon: <ReactJsIcon />, title: "React.js", level: "advanced" },
            { icon: <NextJsIcon />, title: "Next.js", level: "advanced" },
            { icon: <ExpressJsIcon />, title: "Express.js", level: "advanced" },
            { icon: <JQueryIcon />, title: "jQuery", level: "advanced" },
            { icon: <VSCodeIcon />, title: "VS Code", level: "advanced" },
        ],
    },
};

const srvDesign: Service = {
    title: "Design Libraries & Tools",
    skills: {
        "Editors/Tools": [
            { icon: <FigmaIcon />, title: "Figma", level: "advanced" },
        ],
        "UI Libraries": [
            { icon: <MaterialUIIcon />, title: "Material-UI", level: "advanced" },
            { icon: <TailwindIcon />, title: "Tailwind CSS", level: "advanced" },
            { icon: <Css3Icon />, title: "CSS3", level: "advanced" },
            { icon: <BootstrapIcon />, title: "Bootstrap", level: "advanced" },
        ],
    },
};

const srvDeployment: Service = {
    title: "Deployment & Version Control",
    skills: {
        "Deployment platforms": [
            { icon: <DockerIcon />, title: "Docker", level: "advanced" },
            { icon: <AwsIcon />, title: "AWS", level: "intermediate" },
        ],
        "Version Control & CI-CD": [
            { icon: <GitIcon />, title: "Git", level: "advanced" },
            { icon: <GithubActionsIcon />, title: "GitHub Actions", level: "advanced" },
        ],
    },
};

interface CardSkillMetricsProps extends CardProps {
    readonly service: Service;
}

const CardSkillMetrics: FC<CardSkillMetricsProps> = ({ service, ...props }) => {
    return (
        <Card elevation={0} {...props}>
            <CardHeader
                title={service.title}
                titleTypographyProps={{ variant: "body1", fontWeight: "bold" }}
                sx={{
                    "& .MuiCardHeader-content": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            />
            <CardContent sx={{ p: "0px !important" }}>
                <List dense disablePadding>
                    {Object.entries(service.skills).map(([title, skills], i, array) => (
                        <TechStackTray divider={i < array.length - 1} key={i} title={title} skills={skills} />
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

const ServicesOverview: FC = () => {
    return (
        <Grid2 container spacing={4}>
            <Grid2 xs={12} md={4}>
                <CardSkillMetrics service={srvDevelopment} />
            </Grid2>
            <Grid2 xs={12} sm={6} md={4}>
                <CardSkillMetrics service={srvDesign} />
            </Grid2>
            <Grid2 xs={12} sm={6} md={4}>
                <CardSkillMetrics service={srvDeployment} />
            </Grid2>
        </Grid2>
    );
}

export default ServicesOverview;
