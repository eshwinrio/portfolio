import ArticleIcon from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import SocialButtonsStack from "./social-buttons-stack";

const SectionIntroduction: FC = () => {
    return (
        <Box component="section" sx={{ backgroundImage: "url(/rb_2148413572.png)", backgroundColor: "background.paper", backgroundSize: "cover" }}>
            <Toolbar />
            <Container sx={{ py: 12 }}>
                <Grid2 container spacing={2}>
                    <Grid2 md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Image src="/raiden-chibi.png" alt="Raiden Shogun Chibi" width={164} height={164} />
                        </Box>
                        <Typography component="h1" variant="h3" gutterBottom lineHeight={0.9}>
                            <Box component="small" fontWeight="bold" display="block">Eshwin Rio</Box>
                            <Box component="small" color="text.secondary">Pinto</Box>
                        </Typography>
                    </Grid2>
                    <Grid2 md={6}>
                        <Typography variant="h5" gutterBottom>
                            Full-Stack Developer<br />
                            <Box component="span" color="text.secondary">based in Kitchener-Waterloo🍁</Box>
                        </Typography>
                        <Typography component="p" variant="body1" color="GrayText">
                            I build applications for the modern web.
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }} color="Highlight">
                            <Chip
                                label="Résumé" icon={<ArticleIcon />}
                                sx={{ cursor: "pointer", pl: .5 }}
                                component={Link} href="https://docs.google.com/document/d/1PzizUfVycO_FnsR-FnMThzuCfHAH3-qX4_d0MXr37XU/edit?usp=sharing" target="_blank"
                                clickable
                            />
                            <SocialButtonsStack />
                        </Stack>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}

export default SectionIntroduction;
