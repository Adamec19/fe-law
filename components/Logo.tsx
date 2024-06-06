import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";

type LogoProps = BoxProps & {};

export default function Logo({ ...props }: LogoProps) {
    return (
        <Box {...props}>
            <Link
                href="/"
                fontSize="lg"
                fontWeight="bold"
                color="primary.300"
                textDecoration="none"
                sx={{
                    _hover: {
                        textDecoration: "none",
                    },
                }}
            >
                <Image alt="logo" src="/favicon.png" width={50} height={50} />
            </Link>
        </Box>
    );
}
