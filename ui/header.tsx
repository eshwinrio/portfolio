import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import Brand from "./brand";
import MyTZTimeViewer from "./mytz-time-viewer";
import { PaletteModeToggleIconButton } from "./palette-mode-toggle";
import PersonalModeExitIconButton from "./personal-mode-exit-iconButton";


const Header: FC<AppBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Brand sx={{ display: { xs: "none", sm: "block" } }} />
                    <MyTZTimeViewer />
                    <div>
                        <PersonalModeExitIconButton />
                        <PaletteModeToggleIconButton />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
