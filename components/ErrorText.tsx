import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type ErrorTextProps = TextProps & {
    children?: ReactNode;
};

export default function ErrorText({ children, ...props }: ErrorTextProps) {
    return (
        <Text variant="errorInput" {...props}>
            {children}
        </Text>
    );
}
