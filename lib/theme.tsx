"use client";

import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { alpha, ThemeProvider } from "@mui/material/styles";
import { Raleway } from "next/font/google";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const DRAWER_WIDTH = 280;
export const BORDER_RADIUS = 4;

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
    const [mode, setMode] = useState<PaletteMode>("dark");
    const toggleColorMode = setMode.bind(this, (prevMode) => (prevMode === "light" ? "dark" : "light"));

    const theme = createTheme({
        palette: {
            mode,
            background: {
                default: mode === "light" ? "#F5F5F5" : "#1E1B1D",
                paper: mode === "light" ? "#FFF" : "#030303",
            },
            text: {
                primary: mode === "light" ? "#1E1B1D" : "#FFF",
                secondary: mode === "light" ? "#6750A4" : "#CCC2DC",
                disabled: mode === "light" ? "#1E1B1D" : "#999999",
            },
            primary: {
                main: "#6750A4",
                light: "#65558F",
                dark: "#D0BCFE",
                contrastText: "#fff",
            },
            secondary: {
                main: "#958DA5",
                light: "#625B71",
                dark: "#CCC2DC",
                contrastText: "#fff",
            },
            error: {
                main: "#E46962",
                light: "#B3261E",
                dark: "#F2B8B5",
                contrastText: "#fff",
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
                    elevation: 0,
                },
                styleOverrides: {
                    root: {
                        boxShadow: "none",
                        backdropFilter: "saturate(120%) blur(12px)",
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        borderRadius: BORDER_RADIUS,
                        backgroundColor: alpha(theme.palette.background.default, 0.6),
                        backdropFilter: "saturate(120%) blur(7px)",
                    })
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
