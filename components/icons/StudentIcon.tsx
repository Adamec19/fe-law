import { CSSProperties } from "react";

type StudentIconProps = {
    color?: string;
    size?: number;
    onClick?: () => void;
    style?: CSSProperties;
};

export default function StudentIcon({ size = 18 }: StudentIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Icons"
            height={size}
            width={size}
            version="1.1"
            viewBox="0 0 32 32"
        >
            <style></style>
            <path d="M31 26c-.6 0-1-.4-1-1V12c0-.6.4-1 1-1s1 .4 1 1v13c0 .6-.4 1-1 1z" />
            <path d="M16 21c-.2 0-.3 0-.5-.1l-15-8c-.3-.2-.5-.5-.5-.9s.2-.7.5-.9l15-8c.3-.2.6-.2.9 0l15 8c.3.2.5.5.5.9s-.2.7-.5.9l-15 8c-.1.1-.2.1-.4.1z" />
            <path d="M17.4 22.6c-.4.3-.9.4-1.4.4s-1-.1-1.4-.4L6 18.1V22c0 3.1 4.9 6 10 6s10-2.9 10-6v-3.9l-8.6 4.5z" />
        </svg>
    );
}
