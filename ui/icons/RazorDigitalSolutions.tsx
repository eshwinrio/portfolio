import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { FC } from "react";


const RazorDigitalSolutionsIcon: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon viewBox="0 0 306 262" {...props}>
            <path d="M197.85 261.475C149.86 201.475 101.87 141.475 53.88 81.4747H107.88C156 141.515 204.13 201.565 252.25 261.605C234.12 261.565 215.99 261.515 197.85 261.475Z" fill="url(#paint0_linear_111_30)" />
            <g filter="url(#filter_for_head)">
                <path d="M54 81.4747H234C246.63 77.7547 254.1 65.6247 252 54.4747C250.38 45.8947 243.28 38.8147 234 36.4747H27L0 0.474694H234C266.09 -1.99531 294.53 22.3847 297 54.4747C299.47 86.5647 275.09 115.005 243 117.475L306 189.475H270L207 117.475H82.75C73.32 105.765 63 93.4747 54 81.4747Z" />
            </g>
            <defs>
                <filter id="filter_for_head" x="-6" y="-5.69763" width="318" height="201.172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_30" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_30" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_111_30" x1="82.56" y1="89.1247" x2="211.36" y2="239.995" gradientUnits="userSpaceOnUse">
                    <stop offset="0.02" stopColor="#020202" />
                    <stop offset="0.1" stopColor="#1F0101" />
                    <stop offset="0.38" stopColor="#294956" />
                    <stop offset="1" stopColor="#00D8FF" />
                </linearGradient>
            </defs>
        </SvgIcon>
    );
};

export default RazorDigitalSolutionsIcon;