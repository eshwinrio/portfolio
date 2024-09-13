"use client";

import { useThemeContext } from "@/lib/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Tooltip } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { FC } from "react";

interface PaletteModeToggleProps extends IconButtonProps { }

export const PaletteModeToggleIconButton: FC<PaletteModeToggleProps> = props => {
    const { mode, toggleColorMode } = useThemeContext();
    const buttonTitle = `Toggle palette mode to ${mode === "light" ? "dark" : "light"}`;
    return (
        <Tooltip title={buttonTitle}>
            <IconButton
                {...props}
                aria-label={buttonTitle}
                aria-haspopup="false"
                aria-expanded={mode === "light"}
                aria-pressed={mode === "light"}
                onClick={toggleColorMode}
            >
                {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Tooltip>
    );
};
