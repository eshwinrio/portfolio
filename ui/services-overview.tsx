"use client";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper, { PaperProps } from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2";
import { FC, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";


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
            <Paper variant="outlined"
                sx={{
                    position: "absolute",
                    bottom: 0, right: 0,
                    background: "transparent",
                    backdropFilter: "blur(4px) brightness(0.5)",
                    py: 0.5, px: 1,
                    m: 1,
                    color: "inherit",
                    textAlign: "end"
                }}
            >
                {children}
            </Paper>
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
                    <Typography>Web Dev</Typography>
                </VideoCard>
            </Grid2>
            <Grid2 xs={6} sm={4}>
                <VideoCard sx={{ color: palette.common.white }} sources={[
                    <source key={0} src="/campusproduction/8201290-sd_426_240_25fps.mp4" type="video/mp4" media="(min-width: 320px)" />,
                    <source key={1} src="/campusproduction/8201290-sd_960_540_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />,
                    <source key={2} src="/campusproduction/8201290-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 1200px)" />,
                ]}>
                    <Typography>Technical Support</Typography>
                </VideoCard>
            </Grid2>
            <Grid2 xs={6} sm={4}>
                <VideoCard sx={{ color: palette.common.white }} sources={[
                    <source key={0} src="/timamiroshnichenko/5377647-sd_426_240_25fps.mp4" type="video/mp4" media="(min-width: 320px)" />,
                    <source key={1} src="/timamiroshnichenko/5377647-sd_960_540_25fps.mp4" type="video/mp4" media="(min-width: 768px)" />,
                    <source key={2} src="/timamiroshnichenko/5377647-hd_1920_1080_25fps.mp4" type="video/mp4" media="(min-width: 1200px)" />,
                ]}>
                    <Typography>DevOps</Typography>
                </VideoCard>
            </Grid2>
        </Grid2>
    );
};

export default ServicesOverview;
