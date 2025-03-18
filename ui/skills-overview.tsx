import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import List from "@mui/material/List";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC, ReactElement } from "react";
import AndroidStudioIcon from "./icons/AndroidStudio";
import AwsIcon from "./icons/AWS";
import BashIcon from "./icons/Bash";
import BootstrapIcon from "./icons/Bootstrap";
import Css3Icon from "./icons/Css3";
import DockerIcon from "./icons/Docker";
import ExpressJsIcon from "./icons/ExpressJs";
import FedoraIcon from "./icons/Fedora";
import FigmaIcon from "./icons/Figma";
import GitIcon from "./icons/Git";
import GithubActionsIcon from "./icons/GithubActions";
import GraphQLIcon from "./icons/GraphQL";
import Html5Icon from "./icons/Html5";
import JavaIcon from "./icons/Java";
import JavascriptIcon from "./icons/Javascript";
import JiraIcon from "./icons/Jira";
import JQueryIcon from "./icons/jQuery";
import KotlinIcon from "./icons/Kotlin";
import MaterialUIIcon from "./icons/MaterialUI";
import MongoDBIcon from "./icons/MongoDB";
import MongooseIcon from "./icons/Mongoose";
import MySQLIcon from "./icons/MySQL";
import NextJsIcon from "./icons/NextJs";
import NodeJsIcon from "./icons/NodeJs";
import NpmJsIcon from "./icons/NpmJs";
import PostgresIcon from "./icons/Postgres";
import PostmanIcon from "./icons/Postman";
import PythonIcon from "./icons/Python";
import ReactJsIcon from "./icons/ReactJs";
import RedisIcon from "./icons/Redis";
import ReduxIcon from "./icons/Redux";
import SeleniumIcon from "./icons/Selenium";
import SequelizeIcon from "./icons/Sequelize";
import TailwindIcon from "./icons/Tailwind";
import TypescriptIcon from "./icons/Typescript";
import UbuntuIcon from "./icons/Ubuntu";
import VSCodeIcon from "./icons/VSCode";
import WebpackIcon from "./icons/Webpack";
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
        "Frameworks & Libraries": [
            { icon: <ReactJsIcon />, title: "React.js", level: "advanced" },
            { icon: <NextJsIcon />, title: "Next.js", level: "advanced" },
            { icon: <ExpressJsIcon />, title: "Express.js", level: "advanced" },
            { icon: <JQueryIcon />, title: "jQuery", level: "advanced" },
            { icon: <WebpackIcon />, title: "Webpack", level: "intermediate" },
            { icon: <GraphQLIcon />, title: "GraphQL", level: "advanced" },
        ],
        "Database & Storage": [
            { icon: <PostgresIcon />, title: "PostgreSQL", level: "intermediate" },
            { icon: <MongoDBIcon />, title: "MongoDB", level: "advanced" },
            { icon: <MySQLIcon />, title: "MySQL", level: "advanced" },
            { icon: <MongooseIcon />, title: "Mongoose ORM", level: "advanced" },
            { icon: <SequelizeIcon />, title: "Sequelize ORM", level: "advanced" },
            { icon: <RedisIcon />, title: "Redis", level: "advanced" },
        ]
    },
};

const srvDesign: Service = {
    title: "Development & Design",
    skills: {
        "IDEs & Editors": [
            { icon: <VSCodeIcon />, title: "VS Code", level: "advanced" },
            { icon: <AndroidStudioIcon />, title: "Android Studio", level: "advanced" },
            { icon: <FigmaIcon />, title: "Figma", level: "advanced" },
        ],
        "Operating Systems": [
            { icon: <UbuntuIcon />, title: "Ubuntu", level: "advanced" },
            { icon: <FedoraIcon />, title: "Fedora", level: "advanced" },
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
    title: "DevOps & QA",
    skills: {
        "Deployment platforms": [
            { icon: <DockerIcon />, title: "Docker", level: "advanced" },
            { icon: <AwsIcon />, title: "AWS", level: "intermediate" },
            { icon: <NpmJsIcon />, title: "NPM", level: "advanced" },
        ],
        "Version Control & CI-CD": [
            { icon: <GitIcon />, title: "Git", level: "advanced" },
            { icon: <GithubActionsIcon />, title: "GitHub Actions", level: "intermediate" },
            { icon: <JiraIcon />, title: "Atlassian Jira", level: "advanced" },
        ],
        "Testing & Automation": [
            { icon: <PostmanIcon />, title: "Postman", level: "advanced" },
            { icon: <SeleniumIcon />, title: "Selenium", level: "beginner" },
        ]
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

const SkillsOverview: FC = () => {
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

export default SkillsOverview;
