"use client";

import NextImage from "next/image";
import { AspectRatio } from "@chakra-ui/react";

export default function BackgroundImage() {
    return (
        <>
            <AspectRatio
                ratio={430 / 123}
                position="absolute"
                top={0}
                w="100%"
                h={{ base: "384px", md: "574px" }}
                maxH="100%"
                mt="70px"
                display="block"
            >
                <NextImage
                    priority
                    quality={80}
                    src="/justice.webp"
                    alt="justice"
                    fill
                    style={{
                        filter: "brightness(0.5)",
                        objectFit: "cover",
                    }}
                />
            </AspectRatio>
        </>
    );
}
