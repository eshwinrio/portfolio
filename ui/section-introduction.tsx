"use client";

import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";


const Section = styled(Box)(() => ({
    height: "100vh",
    display: "flex",
    alignItems: "center",
}));

const SectionIntroduction: FC = () => {
    return (
        <Section component="section">
            <Container maxWidth="md">
                <Box sx={{ mb: 2 }}>
                    <Typography variant="overline" textTransform="none" gutterBottom>Hello visitor ✌️</Typography>
                    <Typography component="h1" variant="h3" gutterBottom lineHeight={0.9}>
                        <Box component="span" color="GrayText">I&apos;m</Box> Eshwin Rio<br />
                        <Box component="small" color="GrayText" fontWeight="bold">Pinto</Box>
                    </Typography>
                    <Typography component="p" variant="body1" gutterBottom>
                        I&apos;m a full-stack developer based in Kitchener, ON🍁
                    </Typography>
                    <Typography component="p" variant="body1" color="GrayText">
                        I like building applications for the modern web.<br/>
                        I use NodeJS, NextJS, ReactJS, Prisma, and many others, with TypeScript.<br/>
                    </Typography>
                </Box>
                <Stack direction="row" alignItems="center" spacing={1} color="Highlight">
                    <Chip
                        label="Résumé" icon={<ArticleIcon />}
                        component={Link} href="https://docs.google.com/document/d/1PzizUfVycO_FnsR-FnMThzuCfHAH3-qX4_d0MXr37XU/edit?usp=sharing" target="_blank" 
                        clickable
                    />
                </Stack>
            </Container>
        </Section >
    );
}

export default SectionIntroduction;
