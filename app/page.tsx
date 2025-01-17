import SectionIntroduction from "@/ui/section-introduction";
import SectionProjects from "@/ui/section-projects";
import SectionTimeline from "@/ui/section-timeline";
import Container, { ContainerProps } from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { FC } from "react";


const Separator: FC<ContainerProps> = props => (
    <Container {...props}>
        <Divider />
    </Container>
);

export default function Home() {
    return (
        <main>
            <SectionIntroduction />
            <SectionTimeline />
            <SectionProjects />
            <Separator sx={{ pt: 8, pb: 2 }} />
        </main>
    );
}
