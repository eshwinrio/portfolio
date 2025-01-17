import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC } from "react";


const SectionTimeline: FC = () => {
    return (
        <Box id="timeline" component="section" sx={{ py: 16 }}>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 md={6}>
                        <Typography component="h2" variant="h4">Experience</Typography>
                        <List sx={{ mt: 2 }}>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Datamatics Digital Ltd."
                                        src="/Datamatics-Responsive-Logo.png"
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            Consultant Developer @&nbsp;
                                            <Box component="b">Datamatics Digital Ltd.</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="April 2021 - September 2022"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Techjini Digital"
                                        src="/techjini.jpg"
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            Trainee - Fullstack (MERN) @&nbsp;
                                            <Box component="b">Techjini Digital</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="February 2021 - April 2021"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Hewlett Packard Enterprises"
                                        src="/hpe_pri_grn_pos_rgb.png"
                                        slotProps={{ img: { sx: { p: 0.2, objectFit: "contain"} } }}
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            Internship - Android Application Development with Core Java @&nbsp;
                                            <Box component="b">Hewlett Packard Enterprises</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="April 2019 - August 2019"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 md={6}>
                        <Typography component="h2" variant="h4">Education</Typography>
                        <List sx={{ mt: 2 }}>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Conestoga College"
                                        src="/conestoga.jpg"
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            Web Development @&nbsp;
                                            <Box component="b">Conestoga College</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="January 2023 - April 2024"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Visvesvaraya Technological University"
                                        src="/vtu.jpeg"
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            Bachelors (Computer Science & Engineering) @&nbsp;
                                            <Box component="b">VTU</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="August 2016 - October 2020"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        alt="Excellent Science & Commerce PU College"
                                        src="/excellent.jpg"
                                        sx={{ backgroundColor: "background.paper" }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={(
                                        <>
                                            STEM - Computer Science @&nbsp;
                                            <Box component="b">Excellent PU College</Box>
                                        </>
                                    )}
                                    primaryTypographyProps={{ variant: "body1" }}
                                    secondary="June 2014 - May 2016"
                                    secondaryTypographyProps={{ variant: "caption" }}
                                />
                            </ListItem>
                        </List>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default SectionTimeline;
