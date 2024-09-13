import Typography from "@mui/material/Typography";
import { Dayjs } from "dayjs";
import { FC } from "react";
import Card, { CardProps } from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";


export interface Project {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly link: string;
    readonly logo?: string;
    readonly role: string;
    readonly start: Dayjs;
    readonly end?: Dayjs;
    tech?: any;
}

interface ProjectCardProps extends Omit<CardProps, "children"> {
    readonly data: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ data, ...props }) => {
    return (
        <Card {...props}>
            <CardActionArea LinkComponent={Link} href={data.link} target="_blank">
                <CardMedia image={data.image} sx={{ height: 236 }} />
                <CardContent>
                    <Typography variant="h6">{data.title}</Typography>
                    <Typography variant="body2" color="GrayText">{data.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;
