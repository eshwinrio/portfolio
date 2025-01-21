import ArticleIcon from "@mui/icons-material/Article";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import SocialButtonsStack from "./social-buttons-stack";


export default function SectionIntroduction() {
    return (
        <Box component="section">
            <Toolbar />
            <Container sx={{ py: 12 }}>
                <Grid2 container spacing={2}>
                    <Grid2 md={6}>
                        <Box sx={{ mb: 2 }}>
                            <Avatar sx={{ width: 164, height: 164 }}>
                                <Image
                                    src="/20211225_172819-PFP.jpg"
                                    alt="Portrait of Eshwin Rio Pinto"
                                    width={164} height={164}
                                    style={{ width: "100%", height: "100%" }}
                                    aria-label="Portrait of Eshwin Rio Pinto"
                                />
                            </Avatar>
                        </Box>
                        <Typography component="h1" variant="h3" gutterBottom lineHeight={0.9}>
                            <Box component="small" fontWeight="bold" display="block">Eshwin Rio</Box>
                            <Box component="small" color="text.secondary">Pinto</Box>
                        </Typography>
                    </Grid2>
                    <Grid2 md={6}>
                        <Typography variant="h5" gutterBottom>
                            <Box component="b">Full-Stack Developer</Box><br />
                            <Box component="span" color="text.secondary">based in <Box component="b">Kitchener-Waterloo</Box>🍁</Box>
                        </Typography>
                        <Typography component="p" variant="body1" color="GrayText">
                            I build applications for the modern web.
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }} color="Highlight">
                            <Chip
                                label="Résumé" icon={<ArticleIcon />}
                                sx={{ cursor: "pointer", pl: .5 }}
                                component={Link} href="https://docs.google.com/document/d/e/2PACX-1vR8g87K8vtK3zN2TXzYXFZ-gyooEQJSpmKchpQchbl8DgTO4zbXkNm-_wGv3og4LyPbYydLw4G1ESa7/pub" target="_blank"
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
