"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { FC, useEffect, useState } from "react";


const MyTZTimeViewer: FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [hhmm, aa] = time.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit"
    }).split(" ");
    const isNight = time.getHours() >= 18 || time.getHours() < 6;

    const svgIconProps: SvgIconProps = { fontSize: "inherit", sx: { verticalAlign: "middle" } };
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    return (
        <Stack direction="column">
            <Typography variant="body2" fontWeight="bold">
                {isNight ? <NightsStayIcon {...svgIconProps} /> : <LightModeIcon {...svgIconProps} />}&nbsp;
                {hhmm}&nbsp;
                <Box component="small" color="text.secondary">{aa}</Box>
            </Typography>
            <Typography variant="caption" color="text.secondary">America/Toronto</Typography>
        </Stack>
    );
}

export default MyTZTimeViewer;
