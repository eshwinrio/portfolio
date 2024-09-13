import SectionIntroduction from "@/ui/section-introduction";
import SectionProjects from "@/ui/section-projects";
import SectionTimeline from "@/ui/section-timeline";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { FC } from "react";

const Separator: FC = () => (
    <Container maxWidth="md" sx={{ py: 8 }}>
        <Divider />
    </Container>
);

export default function Home() {
    return (
        <main>
            <SectionIntroduction />
            <SectionTimeline />
            <Separator />
            <SectionProjects />
        </main>
    );
}
