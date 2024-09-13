import { GitHub, LinkedIn } from "@mui/icons-material";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import HoyoLabIcon from "./hoyolab-svg-icon";

const Header: FC<AppBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Container maxWidth="md">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6">
                        Eshwin <Box component="span" color="Highlight">Rio</Box>
                    </Typography>
                    <Stack direction="row">
                        <IconButton LinkComponent={Link} href="https://www.linkedin.com/in/eshwinrio/" target="_blank">
                            <LinkedIn />
                        </IconButton>
                        <IconButton LinkComponent={Link} href="https://github.com/eshwinrio/" target="_blank">
                            <GitHub />
                        </IconButton>
                        <IconButton LinkComponent={Link} href="https://www.hoyolab.com/accountCenter/postList?id=196611072" target="_blank">
                            <HoyoLabIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
