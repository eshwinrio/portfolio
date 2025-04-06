import ImageCarousel from "@/ui/image-carousel";
import Section from "@/ui/Section";
import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";


export default function PersonalHome() {
    return (
        <main>
            <Section id="introduction">
                <Toolbar />
                <Container maxWidth="sm" sx={{ py: 4 }}>
                    <Grid2 container spacing={2}>
                        <Grid2 xs={6}>
                            <Card>
                                <CardActionArea LinkComponent={Link} href="/interests">
                                    <CardMedia>
                                        <ImageCarousel
                                            sx={{ aspectRatio: "1 / 1", width: "100%" }}
                                            imageList={[
                                                {
                                                    src: "/images/5e32695f-0fe4-498c-953d-08f296a5ae54.jpg",
                                                    alt: "Hanae",
                                                },
                                            ]} />
                                    </CardMedia>
                                    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="body2" component="h2" color="text.secondary">
                                            Music
                                        </Typography>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Card>
                                <CardActionArea LinkComponent={Link} href="/interests">
                                    <CardMedia>
                                        <ImageCarousel
                                            sx={{ aspectRatio: "1 / 1", width: "100%" }}
                                            imageList={[
                                                {
                                                    src: "/images/5e32695f-0fe4-498c-953d-08f296a5ae54.jpg",
                                                    alt: "Hanae",
                                                },
                                            ]} />
                                    </CardMedia>
                                    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="body2" component="h2" color="text.secondary">
                                            Anime
                                        </Typography>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Card>
                                <CardActionArea LinkComponent={Link} href="/interests">
                                    <CardMedia>
                                        <Grid2 container>
                                            
                                            {/* Genshin Impact Carousel */}
                                            <Grid2 xs={4}>
                                                <ImageCarousel
                                                    sx={{ aspectRatio: "1 / 1", width: "100%" }}
                                                    duration={4600}
                                                    imageList={[
                                                        {
                                                            src: "/images/aaa23642-75d2-46db-84c0-62b1a182bcce.jpg",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/ee3e292d-8062-4a10-87c3-cb8dc7d11d7d.jpg",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/f530493c-348b-4d02-937c-970719b4adc0.jpg",
                                                            alt: "Hanae",
                                                        },
                                                    ]} />
                                            </Grid2>

                                            {/* Star Rail Carousel */}
                                            <Grid2 xs={4}>
                                                <ImageCarousel
                                                    sx={{ aspectRatio: "1 / 1", width: "100%" }}
                                                    duration={4300}
                                                    imageList={[
                                                        {
                                                            src: "/images/9c406159-7544-479e-996f-eef43d2d5804.png",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/94a5c75d-d55d-4de6-9b22-a5b48b0dd7bf.png",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/27727af7-4b74-46d5-bb98-3439b3e8e40b.png",
                                                            alt: "Hanae",
                                                        },
                                                    ]} />
                                            </Grid2>

                                            {/* Zenless Zone Zero Carousel */}
                                            <Grid2 xs={4}>
                                                <ImageCarousel
                                                    sx={{ aspectRatio: "1 / 1", width: "100%" }}
                                                    duration={4900}
                                                    imageList={[
                                                        {
                                                            src: "/images/34d29f4c-e576-4f7e-b373-dcce3724129d.jpg",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/47d924ca-58e5-4f98-aeaf-bc3566f4d7e9.jpeg",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/50644711-c967-4649-9d07-2188b2412b63.jpeg",
                                                            alt: "Hanae",
                                                        },
                                                        {
                                                            src: "/images/d48c83e7-867b-4e1e-bf55-60d2b3b5f834.jpeg",
                                                            alt: "Hanae",
                                                        },
                                                    ]} />
                                            </Grid2>
                                        </Grid2>
                                    </CardMedia>
                                    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="body2" component="h2" color="text.secondary">
                                            Games
                                        </Typography>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
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
