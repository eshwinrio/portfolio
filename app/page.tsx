import Section from "@/ui/Section";
import ProfessionalJourney from "@/ui/professional-journey";
import ProfileOverview from "@/ui/profile-overview";
import SectionProjects from "@/ui/section-projects";
import StyledText from "@/ui/styled-text";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";


export default function Home() {
    return (
        <main>
            <Section id="introduction" title="Introduction">
                <Toolbar />
                <Container sx={{ py: 12 }}>
                    <ProfileOverview />
                </Container>
            </Section>

            <Section id="career-timeline" title="Career Timeline" sx={{ py: 8 }}>
                <Container>
                    <ProfessionalJourney />
                </Container>
            </Section>

            <Section id="projects" title="Projects" sx={{ py: 8 }}>
                <Container>
                    <StyledText variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                        Showcase
                    </StyledText>
                    <SectionProjects />
                </Container>
            </Section>
        </main>
    );
}
