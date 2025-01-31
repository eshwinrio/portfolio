import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC } from "react";

const education = [
    {
        alt: "Conestoga College",
        src: "/conestoga.jpg",
        primary: "Web Development @ Conestoga College",
        secondary: "January 2023 - April 2024"
    },
    {
        alt: "Visvesvaraya Technological University",
        src: "/vtu.jpeg",
        primary: "Bachelors (Computer Science & Engineering) @ VTU",
        secondary: "August 2016 - October 2020"
    },
    {
        alt: "Excellent Science & Commerce PU College",
        src: "/excellent.jpg",
        primary: "STEM - Computer Science @ Excellent PU College",
        secondary: "June 2014 - May 2016"
    }
];

const experience = [
    {
        alt: "Datamatics Digital Ltd.",
        src: "/Datamatics-Responsive-Logo.png",
        primary: "Consultant Developer @ Datamatics Digital Ltd.",
        secondary: "April 2021 - September 2022"
    },
    {
        alt: "Techjini Digital",
        src: "/techjini.jpg",
        primary: "Trainee - Fullstack (MERN) @ Techjini Digital",
        secondary: "February 2021 - April 2021"
    },
    {
        alt: "Hewlett Packard Enterprises",
        src: "/hpe_pri_grn_pos_rgb.png",
        primary: "Internship - Android Application Development with Core Java @ Hewlett Packard Enterprises",
        secondary: "April 2019 - August 2019"
    }
];

const TimelineItem: FC<{ item: { alt: string, src: string, primary: string, secondary: string } }> = ({ item }) => (
    <ListItem disableGutters>
        <ListItemAvatar>
            <Avatar
                variant="rounded"
                alt={item.alt}
                src={item.src}
                sx={{ backgroundColor: "background.paper" }}
            />
        </ListItemAvatar>
        <ListItemText
            primary={(
                <>
                    {item.primary.split("@")[0]}@&nbsp;
                    <Box component="b">{item.primary.split("@")[1]}</Box>
                </>
            )}
            primaryTypographyProps={{ variant: "body1" }}
            secondary={item.secondary}
            secondaryTypographyProps={{ variant: "caption" }}
        />
    </ListItem>
);

export default function ProfessionalJourney() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 md={6}>
                <Typography component="h2" variant="h5" fontWeight="bold">Experience</Typography>
                <List sx={{ mt: 2 }}>
                    {experience.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </List>
            </Grid2>
            <Grid2 md={6}>
                <Typography component="h2" variant="h5" fontWeight="bold" color="text.secondary">Education</Typography>
                <List sx={{ mt: 2 }}>
                    {education.map((item, index) => (
                        <TimelineItem key={index} item={item} />
                    ))}
                </List>
            </Grid2>
        </Grid2>
    );
}
