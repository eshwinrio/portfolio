"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Chip, { ChipProps } from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";


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
        <Fade in={isInView}>
            <Chip
                label="Let's go!" icon={<AutoAwesomeIcon sx={{ pl: 0.5 }} />}
                component={Link} ref={ref}
                clickable href="/personal"
                {...props}
            />
        </Fade>
    )
}

export default PersonalSectionNavigator;
