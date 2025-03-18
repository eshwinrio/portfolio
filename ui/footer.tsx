import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Brand from "./brand";
import MaterialUIIcon from "./icons/MaterialUI";
import NextJsIcon from "./icons/NextJs";


export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 4 }}>
            <Container>
                <Stack alignItems="center">
                    <Brand variant="body1" gutterBottom />
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 4 }}>
                        Build version: {process.env.NEXT_PUBLIC_BUILD_VERSION} | Built with&nbsp;
                        <NextJsIcon fontSize="inherit" sx={{ verticalAlign: "middle" }} aria-label="Next.js" />
                        &nbsp;&amp;&nbsp;
                        <MaterialUIIcon fontSize="inherit" sx={{ verticalAlign: "middle" }} aria-label="Material-UI" />
                    </Typography>
                    <Chip
                        variant="outlined"
                        clickable
                        component="a"
                        href="https://github.com/eshwinrio/portfolio"
                        size="small"
                        icon={<GitHubIcon fontSize="inherit" />}
                        label="Source"
                    />
                </Stack>
            </Container>
        </Box>
    );
}
