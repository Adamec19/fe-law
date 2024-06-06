"use client";

import { Link, LinkProps } from "@chakra-ui/next-js";
import { ButtonProps, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

type MotionButtonProps = ButtonProps & {
    buttonText: string;
    linkProps?: LinkProps;
    variant?: ButtonProps["variant"];
};

export default function MotionButton({
    buttonText,
    linkProps,
    variant = "primary",
    ...props
}: MotionButtonProps) {
    if (linkProps?.href) {
        return (
            <Link
                scrollBehavior="smooth"
                textDecoration="none"
                w={linkProps.w ?? { base: "100%", md: "fit-content" }}
                {...linkProps}
            >
                <Button
                    as={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ scale: 1 }}
                    variant={variant}
                    {...props}
                >
                    {buttonText}
                </Button>
            </Link>
        );
    }

    return (
        <Button
            as={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 1 }}
            variant={variant}
            {...props}
        >
            {buttonText}
        </Button>
    );
}
