import dayjs from "@/lib/dayjs";
import SchoolIcon from "@mui/icons-material/School";
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
import { FC } from "react";
import ExperienceCard, { TimelineEntry } from "./experience-card";


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
        <Typography component="h3" variant="h4">
          <Box component="span" color="GrayText">My</Box> Battle Records
        </Typography>
        <Timeline position="alternate">
          {timeline.map((experience, index) => (
            <TimelineItem key={index} sx={{ "&:before": { display: "none" } }}>
              <TimelineOppositeContent sx={{ m: "auto 0" }}>
                <Typography variant="body2">{experience.start.format("MMM YYYY")}</Typography>
                <Typography variant="body2" color="GrayText">{dayjs.duration(experience.start.diff()).humanize(true)}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={experience.type === "work" ? "primary" : "success"}>
                  {experience.type === "work" ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard data={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default SectionTimeline;
