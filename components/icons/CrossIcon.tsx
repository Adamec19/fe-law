import { CSSProperties } from "react";

type CrossIconProps = {
    color?: string;
    size?: number;
    onClick?: () => void;
    style?: CSSProperties;
};

export default function CrossIcon({
    color = "#000000",
    onClick,
    size = 24,
    style,
}: CrossIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox={`0 0 24 24`}
            onClick={onClick}
            style={style}
        >
            <path
                fill={color}
                d="M6.995 7.006a1 1 0 0 0 0 1.415l3.585 3.585-3.585 3.585a1 1 0 1 0 1.414 1.414l3.585-3.585 3.585 3.585a1 1 0 0 0 1.415-1.414l-3.586-3.585 3.586-3.585a1 1 0 0 0-1.415-1.415l-3.585 3.585L8.41 7.006a1 1 0 0 0-1.414 0Z"
            />
        </svg>
    );
}
