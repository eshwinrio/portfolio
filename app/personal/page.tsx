import Section from "@/ui/Section";
import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";


export default function PersonalHome() {
    return (
        <main>
            <Section id="introduction">
                <Toolbar />
                <Container sx={{ height: "calc(100vh - calc(56px * 4))" }}>
                    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }} gap={2}>
                        <Image src="/cbd429e4aeb207be5ca385877731f117.gif" width={96} height={96} unoptimized alt="Ganyu busy at coding" />
                        <StyledText component="h2" variant="h6" textAlign="center">
                            <Box fontWeight="bold" display="block">Staging Content</Box>
                            <Box component="small" color="text.secondary">Please wait until the next release!</Box>
                        </StyledText>
                    </Stack>
                </Container>
            </Section>
        </main>
    );
}
