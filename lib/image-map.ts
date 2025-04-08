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
    "album_cover_hanae_kamisama_hajimemashita",
    "album_cover_hanae_show_girl",
    "anime_poster_alya_sometimes_hides_her_feelings_in_russian",
    "anime_poster_attack_on_titan",
    "anime_poster_chunibyo_demo_koe_ga_shitai",
    "anime_poster_class_no_daikirai_na_joshi_to_kekkon_suru_koto_ni_natta",
    "anime_poster_kaicho_wa_maid_sama",
    "anime_poster_kamisama_hajimemashita",
    "anime_poster_kimi_no_todoke",
    "anime_poster_kono_kaisha_ni_suki_na_hito_ga_imasu",
    "anime_poster_love_chunibyo_and_other_delusions",
    "anime_poster_sousou_no_frieren",
    "anime_poster_taishou_otome_otogibanashi",
    "anime_poster_uchi_no_kaisha_no_chiisai_senpai",
    "eshwin_rio_pfp",
    "razor_digital_solutions_og_art",
    "game_banner_zzz_astra_and_snap",
    "game_banner_zzz_hyper_commision",
    "game_banner_zzz_qingyi_crimson_pierces_the_twilight",
] as const;
export type ImageKey = (typeof imageKeyList)[number];
export type ImageMap = Record<ImageKey, ImageProps>;

const imageMap: ImageMap = {
    album_cover_hanae_kamisama_hajimemashita: {
        path: "/images/5e32695f-0fe4-498c-953d-08f296a5ae54.jpg",
        alt: "Hanae Kamisama Hajimemashita",
        width: 640,
        height: 640,
        tags: ["anime", "artist", "hanae", "album"],
    },
    album_cover_hanae_show_girl: {
        path: "/images/0564f166-9adc-4c12-81a0-ae81c2ef308e.jpg",
        alt: "Hanae Show Girl Art",
        width: 500,
        height: 500,
        tags: ["anime", "artist", "hanae", "album"],
    },
    anime_poster_kimi_no_todoke: {
        path: "/images/de1b87d5-bdeb-4736-9451-02f70f307a3f.jpg",
        alt: "Kimi no Todoke Poster",
        width: 679,
        height: 1002,
        tags: ["anime", "poster", "kimi_no_todoke"],
    },
    anime_poster_kamisama_hajimemashita: {
        path: "/images/3ff29cc8-3b1c-44c6-a51f-85e2a85f8d6d.jpg",
        alt: "Kamisama Hajimemashita Poster",
        width: 640,
        height: 927,
        tags: ["anime", "poster", "kamisama_hajimemashita"],
    },
    anime_poster_alya_sometimes_hides_her_feelings_in_russian: {
        path: "/images/fcd076da-3e92-47f2-8cbd-9e50cee7685e.jpg",
        alt: "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san Poster",
        width: 1920,
        height: 2711,
        tags: [
            "anime",
            "poster",
            "tokidoki_bosotto_russia_go_de_dereru_tonari_no_alya_san",
            "alyasan",
        ],
    },
    anime_poster_attack_on_titan: {
        path: "/images/5153262c-1912-4a3e-9f44-320cf9081a0f.jpg",
        alt: "Attack on Titan Poster",
        width: 375,
        height: 500,
        tags: ["anime", "poster", "attack_on_titan"],
    },
    anime_poster_chunibyo_demo_koe_ga_shitai: {
        path: "/images/906881d5-d013-4d99-b50d-6cd6470b4d61.jpg",
        alt: "Chunibyo demo Koi ga Shitai Poster",
        width: 680,
        height: 961,
        tags: ["anime", "poster", "chunibyo_demo_koi_ga_shitai"],
    },
    anime_poster_class_no_daikirai_na_joshi_to_kekkon_suru_koto_ni_natta: {
        path: "/images/5cfa1123-f3fc-4905-bf9e-d75e090d6628.jpg",
        alt: "Class no Daikirai na Joshi to Kekkon suru Koto ni Natta Poster",
        width: 2000,
        height: 3000,
        tags: [
            "anime",
            "poster",
            "class_no_daikirai_na_joshi_to_kekkon_suru_koto_ni_natta",
        ],
    },
    anime_poster_kaicho_wa_maid_sama: {
        path: "/images/7f32d87f-b754-4fcc-b349-ca26c84b08bc.jpg",
        alt: "Kaicho wa Maid Sama Poster",
        width: 968,
        height: 1431,
        tags: ["anime", "poster", "kaicho_wa_maid_sama"],
    },
    anime_poster_kono_kaisha_ni_suki_na_hito_ga_imasu: {
        path: "/images/cfa7b376-fe04-44c7-a435-124917570a49.jpg",
        alt: "Kono Kaisha ni Suki na Hito ga Imasu Poster",
        width: 905,
        height: 1280,
        tags: ["anime", "poster", "kono_kaisha_ni_suki_na_hito_ga_imasu"],
    },
    anime_poster_love_chunibyo_and_other_delusions: {
        path: "/images/56d74663-c181-4347-9b61-6a50940ec3c0.jpg",
        alt: "Love Chunibyo and Other Delusions Poster",
        width: 640,
        height: 960,
        tags: ["anime", "poster", "love_chunibyo_and_other_delusions"],
    },
    anime_poster_taishou_otome_otogibanashi: {
        path: "/images/a5873f6d-17c7-4a67-883c-419f7dfd8547.jpg",
        alt: "Taishou Otome Otogibanashi Poster",
        width: 1029,
        height: 1500,
        tags: ["anime", "poster", "taishou_otome_otogibanashi"],
    },
    anime_poster_uchi_no_kaisha_no_chiisai_senpai: {
        path: "/images/3ff29cc8-3b1c-44c6-a51f-85e2a85f8d6d.jpg",
        alt: "Kamisama Hajimemashita Poster",
        width: 640,
        height: 927,
        tags: ["anime", "poster", "kamisama_hajimemashita"],
    },
    anime_poster_sousou_no_frieren: {
        path: "/images/a0d9c68f-dbee-4ba6-b070-d7ed582cf8ad.jpg",
        alt: "Sousou no Frieren Poster",
        width: 2000,
        height: 3000,
        tags: ["anime", "poster", "sousou_no_frieren"],
    },
    eshwin_rio_pfp: {
        path: "/images/3c845729-582c-4096-9656-1269fac96732.jpg",
        alt: "Eshwin Rio",
        width: 851,
        height: 851,
        priority: true,
        tags: ["profile", "pfp"],
    },
    game_banner_zzz_qingyi_crimson_pierces_the_twilight: {
        path: "/images/34d29f4c-e576-4f7e-b373-dcce3724129d.jpg",
        alt: "Qingyi Crimson Pierces the Twilight",
        width: 1200,
        height: 675,
        tags: ["anime", "game", "zenless_zone_zero"],
    },
    game_banner_zzz_hyper_commision: {
        path: "/images/50644711-c967-4649-9d07-2188b2412b63.jpeg",
        alt: "Hyper Commisions Art",
        width: 1920,
        height: 1080,
        tags: ["anime", "game", "zenless_zone_zero", "belle", "wise"],
    },
    game_banner_zzz_astra_and_snap: {
        path: "/images/d48c83e7-867b-4e1e-bf55-60d2b3b5f834.jpeg",
        alt: "Astra and Snap",
        width: 3840,
        height: 2160,
        tags: ["anime", "game", "zenless_zone_zero", "astra_yao", "snap"],
    },
    razor_digital_solutions_og_art: {
        path: "/images/625a9c30-85c4-4f9b-a0e4-51c1c6281e21.png",
        alt: "Razor Digital Solutions OG Art",
        width: 900,
        height: 473,
        tags: ["business", "agency", "digital"],
    },
};

export default imageMap;
