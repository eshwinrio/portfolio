import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC } from "react";
import Brand from "./brand";
import MyTZTimeViewer from "./mytz-time-viewer";
import { PaletteModeToggleIconButton } from "./palette-mode-toggle";
import PersonalModeExitIconButton from "./personal-mode-exit-iconButton";


const Header: FC<AppBarProps> = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid2 container alignItems="center" sx={{ width: "100%" }}>
                    <Grid2 sm={4} sx={{ display: { xs: "none", sm: "block" } }}>
                        <Brand />
                    </Grid2>
                    <Grid2 xs={true} sm={4} sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "center" } }}>
                        <MyTZTimeViewer />
                    </Grid2>
                    <Grid2 xs="auto" sm={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <PersonalModeExitIconButton />
                        <PaletteModeToggleIconButton edge="end" />
                    </Grid2>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
