"use client";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC, ReactElement, ReactNode, useEffect, useRef, useState } from "react";


interface VideoCardProps extends PaperProps {
    readonly sources: Array<ReactElement<HTMLVideoElement>>;
    readonly children?: ReactNode;
}

const VideoCard: FC<VideoCardProps> = ({ sources, children, ...props }) => {
    const ref = useRef<HTMLVideoElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;
        if (isActive) video.play();
        else video.pause();
    }, [isActive]);

    return (
        <Paper
            elevation={0}
            {...props}
            onMouseEnter={setIsActive.bind(null, true)}
            onMouseLeave={setIsActive.bind(null, false)}
            sx={{ ...props.sx, position: "relative" }}
        >
            <Box
                component="video"
                ref={ref}
                sx={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" }}
                muted
                loop
            >
                {sources}
            </Box>
            <Typography
                variant="h6"
                component="span"
                sx={{
                    position: "absolute",
                    bottom: 16, right: 16,
                    backdropFilter: "blur(7px)",
                    py: 0.5, px: 1,
                    borderRadius: "inherit",
                    fontWeight: "bold",
                    color: "inherit"
                }}
            >
                {children}
            </Typography>
        </Paper>
    );
};

const ServicesOverview: FC = () => {
    const { palette } = useTheme();
    return (
        <Grid2 container justifyContent="center" spacing={2}>
            <Grid2 xs={6} sm={4}>
                <VideoCard sx={{ color: palette.common.white }} sources={[
                    <source key={0} src="/bedrijfsfilmspecialist.nl/2887463-sd_960_540_25fps.mp4" type="video/mp4" media="(min-width: 320px)" />,
                    <source key={1} src="/bedrijfsfilmspecialist.nl/2887463-sd_640_360_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />,
                    <source key={2} src="/bedrijfsfilmspecialist.nl/2887463-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 1200px)" />,
                ]}>
                    Web Dev
                </VideoCard>
            </Grid2>
            <Grid2 xs={6} sm={4}>
                <VideoCard sx={{ color: palette.common.white }} sources={[
                    <source key={0} src="/campusproduction/8201290-sd_426_240_25fps.mp4" type="video/mp4" media="(min-width: 320px)" />,
                    <source key={1} src="/campusproduction/8201290-sd_960_540_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />,
                    <source key={2} src="/campusproduction/8201290-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 1200px)" />,
                ]}>
                    Technical<br /><Box component="small">Support</Box>
                </VideoCard>
            </Grid2>
            <Grid2 xs={6} sm={4}>
                <VideoCard sx={{ color: palette.common.white }} sources={[
                    <source key={0} src="/timamiroshnichenko/5377647-sd_426_240_25fps.mp4" type="video/mp4" media="(min-width: 320px)" />,
                    <source key={1} src="/timamiroshnichenko/5377647-sd_960_540_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />,
                    <source key={2} src="/timamiroshnichenko/5377647-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 1200px)" />,
                ]}>
                    DevOps
                </VideoCard>
            </Grid2>
        </Grid2>
    );
};

export default ServicesOverview;
