import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Stack, { StackProps } from "@mui/material/Stack";
import Link from "next/link";
import { FC } from "react";
import HoyoLabIcon from "./icons/Hoyolab";


const socialLinks = [
    {
        href: "https://www.linkedin.com/in/eshwinrio/",
        icon: <LinkedInIcon />,
        title: "LinkedIn"
    },
    {
        href: "https://github.com/eshwinrio/",
        icon: <GitHubIcon />,
        title: "GitHub"
    },
    {
        href: "https://www.hoyolab.com/accountCenter/postList?id=196611072",
        icon: <HoyoLabIcon />,
        title: "HoyoLab"
    }
];

export interface SocialButtonsStackProps extends StackProps {
    readonly iconButtonProps?: IconButtonProps;
}

const SocialButtonsStack: FC<SocialButtonsStackProps> = ({ iconButtonProps, ...stackProps }) => {
    return (
        <Stack direction="row" {...stackProps}>
            {socialLinks.map((link, index) => (
                <IconButton
                    key={index}
                    component={Link}
                    href={link.href}
                    title={link.title}
                    target="_blank"
                    {...iconButtonProps}
                >
                    {link.icon}
                </IconButton>
            ))}
        </Stack>
    );
};

export default SocialButtonsStack;
