import Section from "@/ui/Section";
import PersonalSectionNavigator from "@/ui/personal-section-navigator";
import ProfessionalJourney from "@/ui/professional-journey";
import ProfileOverview from "@/ui/profile-overview";
import SectionProjects from "@/ui/section-projects";
import ServicesOverview from "@/ui/services-overview";
import SkillsOverview from "@/ui/skills-overview";
import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";


export default function Home() {
    return (
        <main>
            <Section id="introduction">
                <Toolbar />
                <Container sx={{ py: 12 }}>
                    <ProfileOverview />
                </Container>
            </Section>

            <Section id="career-timeline" sx={{ py: 8, backgroundColor: "background.paper" }}>
                <Container>
                    <StyledText component="h2" variant="h5" fontWeight="bold" textAlign="center">
                        <Box fontWeight="bold" display="block">Professional Journey</Box>
                        <Box component="small" color="text.secondary">Organizations I&apos;ve Contributed To</Box>
                    </StyledText>
                    <ProfessionalJourney />
                </Container>
            </Section>

            <Section id="services" sx={{ py: 8 }}>
                <Container>
                    <StyledText component="h2" variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                        <Box fontWeight="bold" display="block">How I Can Help You</Box>
                        <Box component="small" color="text.secondary">
                            Building scalable web solutions, ensuring seamless operations, and providing expert technical support.
                        </Box>
                    </StyledText>
                    <ServicesOverview />
                </Container>
            </Section>

            <Section id="skills" sx={{ py: 8 }}>
                <Container>
                    <StyledText component="h2" variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                        <Box fontWeight="bold" display="block">Core Competencies</Box>
                        <Box component="small" color="text.secondary">Technical Skills & Toolset</Box>
                    </StyledText>
                    <SkillsOverview />
                </Container>
            </Section>

            <Section id="projects" sx={{ py: 8 }}>
                <Container>
                    <StyledText component="h2" variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                        Featured Work
                    </StyledText>
                    <SectionProjects />
                </Container>
            </Section>

            <Section id="personal-page-navigator" sx={{
                py: 8,
                backgroundImage: "url(/doodles-7251441_1280.png)",
                backgroundSize: "contain",
                backgroundBlendMode: "overlay",
                backgroundColor: "background.default",
            }}>
                <Container maxWidth="sm">
                    <Stack alignItems="center" gap={2}>
                        <Paper variant="outlined" sx={{ p: 1, background: "transparent", backdropFilter: "blur(4px)" }}>
                            <StyledText component="div" variant="h6" textAlign="center">
                                <Box fontWeight="bold" display="block">That’s a wrap on my professional journey!</Box>
                                <Box component="small" color="text.secondary">Curious about my personal interests? Step into my world!</Box>
                            </StyledText>
                        </Paper>
                        <Image src="/739b9901eddcb2b4a990e9ea4219b77a.gif" width={64} height={64} unoptimized alt="Fired up Mimo (HoyoLab Mascot)" />
                        <PersonalSectionNavigator sx={{ backdropFilter: "blur(4px)" }} />
                    </Stack>
                </Container>
            </Section>
        </main>
    );
}
