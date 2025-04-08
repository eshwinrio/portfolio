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
    .filter(key => key.startsWith("game_banner_"))
    .map(key => ({
        src: imageMap[key].path,
        alt: imageMap[key].alt,
    }));
const duration = 8200;

const GameCarouselCard: FC<CardProps> = (props) => {
    return (
        <Card {...props}>
            <CardActionArea LinkComponent={Link} sx={{ height: "100%" }} href="/interests">
                <Stack>
                    <CardMedia>
                        <ImageCarousel
                            sx={{ aspectRatio: "16 / 10", width: "100%" }}
                            duration={duration}
                            imageList={imageList}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body2" fontWeight="bold" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Games
                        </Typography>
                        <Typography variant="body2" color="text.secondary" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Popular Hoyo Titles
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    );
}

export default GameCarouselCard;
