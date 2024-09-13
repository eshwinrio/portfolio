import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import { PaperProps } from "@mui/material/Paper/Paper";
import Typography from "@mui/material/Typography";
import { Dayjs } from "dayjs";
import { FC } from "react";

export interface TimelineEntry {
    readonly type: "work" | "education";
    readonly orgName: string;
    readonly location: string;
    readonly logo?: string;
    readonly role: string;
    readonly start: Dayjs;
    readonly end?: Dayjs;
}

interface ExperienceCardProps extends Omit<PaperProps, "children"> {
    readonly data: TimelineEntry;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ data, sx, ...props }) => {
    return (
        <Paper elevation={0} sx={{ p: 2, ...sx }} {...props}>
            <Typography variant="body1" fontWeight="bold">{data.orgName}</Typography>
            <Typography variant="caption" display="block">{data.role}</Typography>
            <Typography variant="caption" color="GrayText" display="block"><LocationOnIcon fontSize="inherit" /> {data.location}</Typography>
            <Typography variant="caption" color="GrayText">{data.start.format("MMM YYYY")} - {data.end ? data.end.format("MMM YYYY") : "Present"}</Typography>
        </Paper>
    );
};

export default ExperienceCard;
