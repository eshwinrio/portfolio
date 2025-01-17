import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import HoyoLabIcon from "./hoyolab-svg-icon"; // Assuming you have a custom icon component


const SocialButtonsStack: React.FC = () => {
    return (
        <Stack direction="row">
            <IconButton LinkComponent={Link} href="https://www.linkedin.com/in/eshwinrio/" target="_blank">
                <LinkedIn />
            </IconButton>
            <IconButton LinkComponent={Link} href="https://github.com/eshwinrio/" target="_blank">
                <GitHub />
            </IconButton>
            <IconButton LinkComponent={Link} href="https://www.hoyolab.com/accountCenter/postList?id=196611072" target="_blank">
                <HoyoLabIcon />
            </IconButton>
        </Stack>
    );
};

export default SocialButtonsStack;
