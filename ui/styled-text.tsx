"use client";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";

export interface StyledTextProps {}

const StyledText: FC<PropsWithChildren<StyledTextProps>> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box component="span" sx={{ color: "transparent", backgroundClip: "text", backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})` }}>
      {children}
    </Box>
  );
};

export default StyledText;
