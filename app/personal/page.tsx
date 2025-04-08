import AnimeCarouselCard from "@/ui/card-anime-carousel";
import GameCarouselCard from "@/ui/card-game-carousel";
import MusicCarouselCard from "@/ui/card-music-carousel";
import Section from "@/ui/Section";
import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";


export default function PersonalHome() {
    return (
        <main>
            <Section id="introduction">
                <Toolbar />
                <Container maxWidth="sm" sx={{ py: 4 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={12}>
                            <MusicCarouselCard variant="outlined" />
                        </Grid2>
                        <Grid2 xs={12} sm={6}>
                            <AnimeCarouselCard variant="outlined" />
                        </Grid2>
                        <Grid2 xs={12} sm={true}>
                            <GameCarouselCard variant="outlined" sx={{ height: "100%" }} />
                        </Grid2>
                    </Grid2>
                </Container>
            </Section>
            <Section>
                <Container sx={{ height: "calc(100vh - calc(56px * 4))" }}>
                    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }} gap={2}>
                        <Image src="/images/stickers/2b43db23-f895-48b3-a61a-340159ad2234.gif" width={96} height={96} unoptimized alt="Ganyu busy at coding" />
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
