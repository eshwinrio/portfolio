import Card, { CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip, { ChipProps } from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";


interface ProjectCardProps extends CardProps {
    readonly href?: string;
    readonly title: string;
    readonly subtitle: string;
    readonly tags: ChipProps[];
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
    tags,
    ...props
}) => {
    return (
        <Card elevation={16} {...props}>
            <ConditionalActionsArea href={href}>
                <CardMedia>{children}</CardMedia>
                <CardContent>
                    <Typography variant="body1" component="h3" fontWeight="bold" noWrap sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                    }}>{title}</Typography>
                    <Typography variant="body2" color="text.secondary" noWrap sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                    }}>{subtitle}</Typography>
                    <Stack direction="row" gap={0.5} flexWrap="wrap" sx={{ marginTop: 1 }}>
                        {tags && tags.map((tag, index) => (
                            <Chip
                                key={index}
                                size="small"
                                {...tag}
                                aria-label={tag.label?.toString() || `Tag ${index + 1}`}
                                role="listitem"
                            />
                        ))}
                    </Stack>
                </CardContent>
            </ConditionalActionsArea>
        </Card>
    );
};

export default ProjectCard;
