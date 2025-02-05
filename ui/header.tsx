import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import Brand from "./brand";
import MyTZTimeViewer from "./mytz-time-viewer";
import { PaletteModeToggleIconButton } from "./palette-mode-toggle";


const Header: FC<AppBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Brand />
                    <MyTZTimeViewer />
                    <PaletteModeToggleIconButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
