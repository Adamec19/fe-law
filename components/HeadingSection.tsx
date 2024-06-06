import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type HeadingSectionProps = HeadingProps & {
    children: ReactNode;
};

export default function HeadingSection({
    children,
    ...props
}: HeadingSectionProps) {
    return (
        <Heading
            textAlign={{ base: "left", md: "center" }}
            fontSize={{ base: "32px", md: "42px" }}
            mb={{ base: "16px", md: "32px" }}
            {...props}
        >
            {children}
        </Heading>
    );
}
