import Card, { CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Dayjs } from "dayjs";
import Link from "next/link";
import { FC, ReactNode } from "react";


export interface Project {
    readonly title: string;
    readonly description: string;
    readonly link: string;
    readonly logo?: string;
    readonly role: string;
    readonly start: Dayjs;
    readonly end?: Dayjs;
    tech?: any;
}

interface ProjectCardProps extends Omit<CardProps, "children"> {
    readonly data: Project;
    readonly media: ReactNode;
}

const ProjectCard: FC<ProjectCardProps> = ({ data, media, ...props }) => {
    return (
        <Card elevation={16} {...props}>
            <CardActionArea LinkComponent={Link} href={data.link} target="_blank">
                <CardMedia>
                    {media}
                </CardMedia>
                <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold" noWrap sx={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{data.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;
