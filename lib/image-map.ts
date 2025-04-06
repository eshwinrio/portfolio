export interface ImageProps {
  readonly path: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly priority?: boolean;
  readonly style?: React.CSSProperties;
  readonly tags?: string[];
}

export const imageKeyList = [
    "eshwin_rio_pfp",
    "hanae_kamisama_hajimemashita_art",
    "star_rail_herta_screwlum",
    "zzz_qingyi_crimson_pierces_the_twilight_wallpaper",
    "zzz_astra_yao_pfp",
    "star_rail_topaz_birthday_art",
    "razor_digital_solutions_og_art",
    "star_rail_march_7th_birthday_art",
    "zzz_hyper_commision_art",
    "genshin_impact_shenhe",
    "zzz_astra_and_snap",
    "genshin_impact_raiden_shogun",
    "genshin_impact_keqing",
] as const;
export type ImageKey = typeof imageKeyList[number];
export type ImageMap = Record<ImageKey, ImageProps>;

const imageMap: ImageMap = {
    eshwin_rio_pfp: {
        path: "/images/3c845729-582c-4096-9656-1269fac96732.jpg",
        alt: "Eshwin Rio",
        width: 851,
        height: 851,
        priority: true,
        tags: ["profile", "pfp"],
    },
    hanae_kamisama_hajimemashita_art: {
        path: "/images/5e32695f-0fe4-498c-953d-08f296a5ae54.jpg",
        alt: "Hanae Kamisama Hajimemashita",
        width: 640,
        height: 640,
        tags: ["anime", "artist", "album"],
    },
    star_rail_herta_screwlum: {
        path: "/images/9c406159-7544-479e-996f-eef43d2d5804.png",
        alt: "Herta Star Rail",
        width: 1810,
        height: 1810,
        tags: ["anime", "game", "star_rail"],
    },
    zzz_qingyi_crimson_pierces_the_twilight_wallpaper: {
        path: "/images/34d29f4c-e576-4f7e-b373-dcce3724129d.jpg",
        alt: "Qingyi Crimson Pierces the Twilight",
        width: 1200,
        height: 675,
        tags: ["anime", "game", "zenless_zone_zero"],
    },
    zzz_astra_yao_pfp: {
        path: "/images/47d924ca-58e5-4f98-aeaf-bc3566f4d7e9.jpeg",
        alt: "Astra Yao",
        width: 400,
        height: 400,
        tags: ["anime", "game", "zenless_zone_zero"],
    },
    star_rail_topaz_birthday_art: {
        path: "/images/94a5c75d-d55d-4de6-9b22-a5b48b0dd7bf.png",
        alt: "Topaz Birthday Art",
        width: 1600,
        height: 1600,
        tags: ["anime", "game", "star_rail", "topaz", "numby", "himeko", "asta"],
    },
    razor_digital_solutions_og_art: {
        path: "/images/625a9c30-85c4-4f9b-a0e4-51c1c6281e21.png",
        alt: "Razor Digital Solutions OG Art",
        width: 900,
        height: 473,
        tags: ["business", "agency", "digital"],
    },
    star_rail_march_7th_birthday_art: {
        path: "/images/27727af7-4b74-46d5-bb98-3439b3e8e40b.png",
        alt: "March 7th Birthday Art",
        width: 2160,
        height: 2160,
        tags: ["anime", "game", "star_rail", "march_7th"],
    },
    zzz_hyper_commision_art: {
        path: "/images/50644711-c967-4649-9d07-2188b2412b63.jpeg",
        alt: "Hyper Commisions Art",
        width: 1920,
        height: 1080,
        tags: ["anime", "game", "zenless_zone_zero", "belle", "wise"],
    },
    genshin_impact_shenhe: {
        path: "/images/aaa23642-75d2-46db-84c0-62b1a182bcce.jpg",
        alt: "Shenhe Genshin Impact",
        width: 2500,
        height: 2500,
        tags: ["anime", "game", "genshin_impact", "shenhe"],
    },
    zzz_astra_and_snap: {
        path: "/images/d48c83e7-867b-4e1e-bf55-60d2b3b5f834.jpeg",
        alt: "Astra and Snap",
        width: 3840,
        height: 2160,
        tags: ["anime", "game", "zenless_zone_zero", "astra_yao", "snap"],
    },
    genshin_impact_raiden_shogun: {
        path: "/images/ee3e292d-8062-4a10-87c3-cb8dc7d11d7d.jpg",
        alt: "Raiden Shogun Genshin Impact",
        width: 3000,
        height: 3000,
        tags: ["anime", "game", "genshin_impact", "raiden_shogun"],
    },
    genshin_impact_keqing: {
        path: "/images/f530493c-348b-4d02-937c-970719b4adc0.jpg",
        alt: "Keqing Genshin Impact",
        width: 2407,
        height: 2407,
        tags: ["anime", "game", "genshin_impact", "keqing"],
    },
};

export default imageMap;
