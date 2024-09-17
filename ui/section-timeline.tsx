import dayjs from "@/lib/dayjs";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SchoolIcon from "@mui/icons-material/School";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import WorkIcon from "@mui/icons-material/Work";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { FC } from "react";
import { TimelineEntry } from "./experience-card";


const timeline: Array<TimelineEntry> = [
    {
        type: "education",
        orgName: "Conestoga College",
        location: "Kitchener, ON",
        role: "Web Development (PG Degree Certificate)",
        start: dayjs("2023-01-14"),
        end: dayjs("2024-04-20"),
    },
    {
        type: "work",
        orgName: "Datamatics Digital Limited",
        location: "Bangalore, IN (Remote)",
        logo: "/Datamatics-Responsive-Logo.png",
        role: "Consultant Developer - Backend/Node.js",
        start: dayjs("2021-05-01"),
        end: dayjs("2022-09-30"),
    },
    {
        type: "work",
        orgName: "Techjini Digital",
        location: "Bangalore, IN",
        logo: "/Datamatics-Responsive-Logo.png",
        role: "Trainee - Fullstack (MERN)",
        start: dayjs("2021-02-01"),
        end: dayjs("2021-04-30"),
    },
    {
        type: "education",
        orgName: "Yenepoya Institute of Technology",
        location: "Mangalore, IN",
        role: "Bachelors (Computer Science & Engineering)",
        start: dayjs("2016-08-01"),
        end: dayjs("2020-10-30"),
    },
    {
        type: "education",
        orgName: "Excellent Science & Commerce PU College",
        location: "Mangalore, IN",
        role: "STEM - Computer Science",
        start: dayjs("2014-06-01"),
        end: dayjs("2016-05-30"),
    },
];

const SectionTimeline: FC = () => {
    return (
        <Box id="timeline" component="section">
            <Container maxWidth="md">
                <Typography component="h3" variant="h4">Timeline</Typography>
                <Timeline position="right">
                    <TimelineItem sx={{ "&:before": { display: "none" } }}>
                        <TimelineOppositeContent sx={{ flex: 0, flexBasis: "25%", m: "auto 0" }} />
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <TravelExploreIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Image src="https://media1.tenor.com/m/ffN-es3aN5cAAAAd/peepokc-kcpeepo.gif" alt="Looking for jobs" width={256} height={256} />
                        </TimelineContent>
                    </TimelineItem>
                    {timeline.map((experience, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{ flex: 0, flexBasis: "25%", m: "auto 0" }}>
                                {experience.start.format("MMM YYYY")}
                                <Typography variant="body2" color="GrayText">{dayjs.duration(experience.start.diff()).humanize(true)}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot color={experience.type === "work" ? "primary" : "success"}>
                                    {experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ my: 2 }}>
                                <Typography variant="body1" fontWeight="bold">{experience.orgName}</Typography>
                                <Typography variant="caption" display="block">{experience.role}</Typography>
                                <Typography variant="caption" color="GrayText" display="block">
                                    <LocationOnIcon fontSize="inherit" />&nbsp;
                                    {experience.location}
                                </Typography>
                                <Typography variant="caption" color="GrayText">{experience.start.format("MMM YYYY")} - {experience.end ? experience.end.format("MMM YYYY") : "Present"}</Typography>
                                {/* <ExperienceCard data={experience} /> */}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ flex: 0, flexBasis: "25%", m: "auto 0" }} />
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <QuestionMarkIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent sx={{ my: 2 }}>
                            <Image src="https://media1.tenor.com/m/73_DXIRhADQAAAAd/i-have-no-memory-of-it-number-five.gif" alt="I don't remember" width={256} height={256} />
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        </Box>
    );
}

export default SectionTimeline;
