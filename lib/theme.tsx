"use client";

import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Raleway } from "next/font/google";
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const DRAWER_WIDTH = 280;
export const BORDER_RADIUS = 8;

export interface PortfolioThemeProps {
    toggleColorMode: () => void;
    readonly mode: PaletteMode;
}

const PortfolioThemeContext = createContext<PortfolioThemeProps>({
    toggleColorMode: () => { },
    mode: "dark",
});

export const useThemeContext = () => useContext(PortfolioThemeContext);

const PortfolioThemeProvider: FC<PropsWithChildren> = props => {
    const [mode, setMode] = useState<PaletteMode>(new Date().getHours() > 6 && new Date().getHours() < 18 ? "light" : "dark");
    const toggleColorMode = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => setMode(mediaQuery.matches ? "dark" : "light");
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const theme = createTheme({
        palette: {
            mode,
            background: {
                default: mode === "light" ? "#F6F6F6" : "#2E2E2E", // darker background for dark mode
                paper: mode === "light" ? "#FFFFFF" : "#1E1E1E", // darker paper for dark mode
            },
            text: {
                primary: mode === "light" ? "#212121" : "#E0E0E0", // lighter text for dark mode
                secondary: mode === "light" ? "#757575" : "#B0BEC5",
                disabled: mode === "light" ? "#BDBDBD" : "#757575",
            },
            primary: {
                main: "#03A9F4",
                light: "#B3E5FC",
                dark: "#0288D1",
                contrastText: "#FFFFFF",
            },
            secondary: {
                main: "#FF4081",
                light: "#F8BBD0",
                dark: "#C51162",
                contrastText: "#FFFFFF",
            },
            error: {
                main: "#F44336",
                light: "#E57373",
                dark: "#D32F2F",
                contrastText: "#FFFFFF",
            },
        },
        breakpoints: {
            values: {
                xs: 320,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            }
        },
        typography: {
            fontFamily: raleway.style.fontFamily,
            fontWeightBold: 700,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
        },
        shape: {
            borderRadius: BORDER_RADIUS,
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    color: "transparent",
                    position: "fixed",
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                        boxShadow: "none",
                        backdropFilter: "saturate(120%) blur(12px)",
                    }
                }
            },
            MuiLink: {
                defaultProps: {
                    underline: "none",
                    color: "inherit",
                }
            },
        }
    });

    return (
        <PortfolioThemeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </PortfolioThemeContext.Provider>
    );
}

export default PortfolioThemeProvider;
