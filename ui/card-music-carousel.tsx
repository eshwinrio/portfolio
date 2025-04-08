import imageMap, { imageKeyList } from "@/lib/image-map";
import { BORDER_RADIUS } from "@/lib/theme";
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
    .filter(key => key.startsWith("album_cover_"))
    .map(key => ({
        src: imageMap[key].path,
        alt: imageMap[key].alt,
    }));
const duration = 7700;

const MusicCarouselCard: FC<CardProps> = ({ sx, ...props }) => {
    return (
        <Card {...props} sx={{ cursor: "pointer", ...sx }}>
            <CardActionArea LinkComponent={Link} href="/interests">
                <Stack direction="row" spacing={2}>
                    <CardMedia>
                        <ImageCarousel
                            sx={{
                                aspectRatio: "1 / 1",
                                height: 96,
                                borderRadius: `${BORDER_RADIUS}px`,
                            }}
                            duration={duration}
                            imageList={imageList}
                        />
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1, overflow: "hidden", px: .5 }}>
                        <Typography variant="body2" fontWeight="bold" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Music
                        </Typography>
                        <Typography variant="body2" color="text.secondary" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" sx={{ maxWidth: "100%" }}>
                            Various artists and albums
                        </Typography>
                    </CardContent>
                </Stack>
            </CardActionArea>
        </Card>
    );
}

export default MusicCarouselCard;
