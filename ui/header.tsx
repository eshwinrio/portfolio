import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import MyTZTimeViewer from "./mytz-time-viewer";
import { PaletteModeToggleIconButton } from "./palette-mode-toggle";


const Header: FC<AppBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                        Eshwin <Box component="span" color="Highlight">Rio</Box>
                    </Typography>
                    <MyTZTimeViewer />
                    <PaletteModeToggleIconButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
