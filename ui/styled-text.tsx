"use client";

import { useTheme } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { FC, PropsWithChildren } from "react";


export interface StyledTextProps extends TypographyProps { }

const StyledText: FC<PropsWithChildren<StyledTextProps>> = ({ sx, ...props }) => {
    const theme = useTheme();

    return (
        <Typography
            sx={{
                color: "transparent",
                backgroundClip: "text",
                backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                ...sx,
            }}
            {...props}
        />
    );
};

export default StyledText;
