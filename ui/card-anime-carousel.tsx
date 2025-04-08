import imageMap, { imageKeyList } from "@/lib/image-map";
import Card, { CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import ImageCarousel from "./image-carousel";


const imageList = imageKeyList
    .filter(key => key.startsWith("anime_poster_"))
    .map(key => ({
        src: imageMap[key].path,
        alt: imageMap[key].alt,
    }));
const duration = 5400;

const AnimeCarouselCard: FC<CardProps> = (props) => {
    return (
        <Card {...props}>
            <CardActionArea LinkComponent={Link}>
                <Stack direction="row">
                    <CardMedia sx={{ height: { xs: 256 } }}>
                        <ImageCarousel
                            sx={{ aspectRatio: "2 / 3", height: "100%" }}
                            duration={duration}
                            imageList={imageList}
                        />
                    </CardMedia>
                    <CardContent sx={{
                        transform: "rotateZ(-90deg) translateX(-256px)",
                        transformStyle: "preserve-3d",
                        transformOrigin: "left top",
                        width: 256,
                        height: "calc(100% - 170.666px)",
                    }}>
                        <Typography variant="body2" fontWeight="bold" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Anime
                        </Typography>
                        <Typography variant="body2" color="text.secondary" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Shonen, Seinen, and Shoujo
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    );
}

export default AnimeCarouselCard;
