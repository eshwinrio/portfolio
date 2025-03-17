import ArticleIcon from "@mui/icons-material/Article";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "next/link";
import SocialButtonsStack from "./social-buttons-stack";


export default function ProfileOverview() {
    return (
        <Grid2 container spacing={2}>
            <Grid2 container alignItems="center" xs={12} md={6}>
                <Grid2>
                    <Box sx={{ mb: 2 }}>
                        <Avatar sx={{ aspectRatio: "1 / 1", width: { xs: 96, md: 124 }, height: "auto" }}>
                            <Image
                                src="/20211225_172819-PFP.jpg"
                                alt="Portrait of Eshwin Rio Pinto"
                                width={164} height={164}
                                style={{ width: "100%", height: "100%" }}
                                aria-label="Portrait of Eshwin Rio Pinto"
                            />
                        </Avatar>
                    </Box>
                </Grid2>
                <Grid2>
                    <Typography component="h1" variant="h3" gutterBottom lineHeight={0.9}>
                        <Box component="small" fontWeight="bold" display="block">Eshwin Rio</Box>
                        <Box component="small" color="text.secondary">Pinto</Box>
                    </Typography>
                </Grid2>
            </Grid2>
            <Grid2 xs={12} md={6}>
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
    );
}
