"use client";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";


interface AnimationState {
    open: boolean;
}

const FirstNameBlock = styled(Box)<AnimationState>(({ open, theme }) => ({
    color: theme.palette.text[open ? "secondary" : "primary"],
    transition: theme.transitions.create(["color"], {
        duration: theme.transitions.duration.standard,
    }),
}));

const LastNameBlock = styled(Box)<AnimationState>(({ theme, open }) => ({
    backgroundColor: theme.palette.text[open ? "primary" : "secondary"],
    color: theme.palette.background.default,
    padding: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius / 2,
    transition: theme.transitions.create(["background-color"], {
        duration: theme.transitions.duration.standard,
    }),
}));


const Brand: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} onMouseOver={setOpen.bind(null, true)} onMouseOut={setOpen.bind(null, false)}>
            <FirstNameBlock component="span" open={open}>Eshwin&nbsp;</FirstNameBlock>
            <LastNameBlock component="span" open={open}>Rio</LastNameBlock>
        </Typography>
    );
}

export default Brand;
