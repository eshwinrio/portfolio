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
            <Section id="introduction">
                <Toolbar />
                <Container sx={{ py: 12 }}>
                    <ProfileOverview />
                </Container>
            </Section>

            <Section id="career-timeline" sx={{ py: 8, backgroundColor: "background.paper" }}>
                <Container>
                    <ProfessionalJourney />
                </Container>
            </Section>

            <Section id="projects" sx={{ py: 8 }}>
                <Container>
                    <StyledText component="h2" variant="h5" textAlign="center" fontWeight="bold" sx={{ mb: 4 }}>
                        Showcase
                    </StyledText>
                    <SectionProjects />
                </Container>
            </Section>
        </main>
    );
}
