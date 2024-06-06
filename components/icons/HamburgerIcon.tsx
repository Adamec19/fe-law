import { CSSProperties } from "react";

type HamburgerIconProps = {
    color?: string;
    size?: number;
    onClick?: () => void;
    style?: CSSProperties;
};

export default function HamburgerIcon({
    color = "black",
    size = 24,
    onClick,
    style,
}: HamburgerIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 12.7 12.7"
            fill={color}
            onClick={onClick}
            style={style}
        >
            <path d="M2.822 2.822v1.411h7.056v-1.41zm0 2.822v1.412h7.056V5.644zm0 2.823v1.41h7.056v-1.41z" />
        </svg>
    );
}
