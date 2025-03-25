"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Chip, { ChipProps } from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import { keyframes } from "@mui/material/styles";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";


const pulseKeyframes = keyframes`
    0% { transform: scale(1) skew(0deg, 0deg); opacity: 1; }
    50% { transform: scale(1.1) skew(2deg, 2deg); opacity: 0.5; }
    100% { transform: scale(1) skew(0deg, 0deg); opacity: 1; }
`;

interface PersonalSectionNavigatorProps extends Omit<ChipProps, "ref"> { }

const PersonalSectionNavigator: FC<PersonalSectionNavigatorProps> = (props) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current || typeof window === undefined) return;
        const chip = ref.current;
        const intersectionObserver = new IntersectionObserver((entries) => {
            setIsInView(entries[0].isIntersecting);
        });
        intersectionObserver.observe(chip);
        return () => intersectionObserver.unobserve(chip);
    });

    return (
        <Fade in={isInView} timeout={{ enter: 1000 }}>
            <Chip
                label="Let's go!" icon={<AutoAwesomeIcon sx={{ pl: 0.5, animation: `${pulseKeyframes} 1s ease infinite` }} />}
                component={Link} ref={ref}
                clickable href="/personal"
                {...props}
            />
        </Fade>
    )
}

export default PersonalSectionNavigator;
