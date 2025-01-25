import Box from "@mui/material/Box";
import Card, { CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Dayjs } from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";


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
    readonly media: string;
    readonly height: number;
    readonly width: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ data, media, width, height, ...props }) => {
    return (
        <Card elevation={16} {...props}>
            <CardActionArea LinkComponent={Link} href={data.link} target="_blank">
                <Box sx={{ px: 2, pt: 2 }}>
                    <Image
                        src={media}
                        alt={data.title}
                        height={height} width={width}
                        style={{ width: "100%", height: "auto", borderRadius: 4 }}
                    />
                </Box>
                <CardContent>
                    <Typography variant="h6" component="h3" fontWeight="bold">{data.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{data.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;
