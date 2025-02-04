import Card, { CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";


interface ProjectCardProps extends CardProps {
    readonly href?: string;
    readonly title: string;
    readonly subtitle: string;
}

const ConditionalActionsArea: FC<PropsWithChildren<{ href?: string }>> = ({ children, href }) => {
    return href ? (
        <CardActionArea LinkComponent={Link} href={href} target="_blank">
            {children}
        </CardActionArea>
    ) : (
        <>{children}</>
    );
};

const ProjectCard: FC<ProjectCardProps> = ({
    children,
    href,
    subtitle,
    title,
    ...props
}) => {
    return (
        <Card elevation={16} title={title} {...props}>
            <ConditionalActionsArea href={href}>
                <CardMedia>{children}</CardMedia>
                <CardContent>
                    <Typography variant="body1" component="h3" fontWeight="bold" noWrap
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >{title}</Typography>
                    <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
                </CardContent>
            </ConditionalActionsArea>
        </Card>
    );
};

export default ProjectCard;
