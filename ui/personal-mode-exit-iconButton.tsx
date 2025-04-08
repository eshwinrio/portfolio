"use client";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";


const PersonalModeExitIconButton: FC = () => {
    const isPersonalModeActive = usePathname().startsWith("/personal");

    return (
        <Fade in={isPersonalModeActive} unmountOnExit>
            <Tooltip
                arrow
                title={
                    <Stack alignItems="center">
                        <Image
                            src="/images/stickers/d334ccbc-7308-48ad-ae1a-b7befa36c307.png"
                            width={64}
                            height={64}
                            alt=""
                            aria-hidden="true"
                        />
                        <Typography variant="body2">Exit personal mode?</Typography>
                    </Stack>
                }
            >
                <IconButton
                    component={Link}
                    href="/"
                    aria-label="Exit personal mode and return to professional portfolio"
                >
                    <SwapHorizIcon />
                </IconButton>
            </Tooltip>
        </Fade>
    );
};

export default PersonalModeExitIconButton;
