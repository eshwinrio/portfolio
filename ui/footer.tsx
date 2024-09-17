import { GitHub, LinkedIn } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <Box component="footer">
            <Container maxWidth="md">
                <Toolbar disableGutters sx={{ justifyContent: "center" }}>
                    <Stack alignItems="center">
                        <Typography variant="body2">
                            Eshwin Rio
                        </Typography>
                        <Stack direction="row" color="GrayText">
                            <IconButton size="small" color="inherit" LinkComponent={Link} href="https://www.linkedin.com/in/eshwinrio/" target="_blank">
                                <LinkedIn fontSize="inherit" />
                            </IconButton>
                            <IconButton size="small" color="inherit" LinkComponent={Link} href="https://github.com/eshwinrio/" target="_blank">
                                <GitHub fontSize="inherit" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default Footer;
