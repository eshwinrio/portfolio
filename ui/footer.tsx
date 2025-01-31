import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import MaterialUIIcon from "./icons/MaterialUI";
import NextJsIcon from "./icons/NextJs";


export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "background.paper", py: 2 }}>
            <Container>
                <Grid2 container spacing={2}>
                    <Grid2 xs={12} sm={6} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                        <Typography variant="body2" color="text.secondary">
                            &copy; Eshwin Rio | Full Stack Developer | 2021
                        </Typography>
                    </Grid2>
                    <Grid2 xs={12} sm={6} sx={{ textAlign: { xs: "center", sm: "right" } }}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            Built with&nbsp;
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
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    );
}
