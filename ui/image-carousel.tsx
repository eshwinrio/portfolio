"use client";

import { useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import Image, { ImageProps } from "next/image";
import { FC, useEffect, useState } from "react";


export interface ImageCarouselProps extends BoxProps {
    readonly imageList: ImageProps[];
    readonly duration?: number;
}

const ImageCarousel: FC<ImageCarouselProps> = ({
    imageList = [],
    duration = 5000,
    ...props
}) => {
    const [index, setIndex] = useState(0);
    const { transitions } = useTheme();

    useEffect(() => {
        if (imageList.length === 0) {
            return;
        }
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        }, duration);
        return () => clearInterval(interval);
    }, [duration, imageList.length]);
    
    if (!imageList || imageList.length === 0) {
        return null;
    }
    
    return (
        <Box {...props} sx={{ ...props.sx, position: "relative" }}>
            {imageList.map((image, i) => (
                <Image key={i}
                    {...image}
                    alt={image.alt || "Image carousel"}
                    fill
                    priority={i === 0}
                    style={{
                        ...image.style,
                        display: "block",
                        position: "absolute",
                        objectFit: "cover",
                        objectPosition: "top",
                        borderRadius: "inherit",
                        overflow: "hidden",
                        opacity: i === index ? 1 : 0,
                        transform: i === index ? "scale(1)" : "scale(0.95)",
                        transition: transitions.create(["opacity", "transform"], {
                            duration: transitions.duration.standard,
                            easing: transitions.easing.easeInOut,
                        }),
                    }} />
            ))}
        </Box>
    );
}

export default ImageCarousel;
