"use client";

import HeadingSection from "@/components/HeadingSection";
import MotionButton from "@/components/MotionButton";
import { Grid, Text, Flex, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";

export default function Intro() {
    return (
        <Flex bgColor="#f0f7ef">
            <Grid
                templateColumns={{ md: "1fr 1fr", base: "1fr" }}
                gap={6}
                maxW="1280px"
                mx="auto"
                alignItems="center"
                justifyItems="center"
                p={{
                    base: "94px 16px 0",
                    md: "80px 32px 42px",
                    lg: "80px 32px 0",
                    "2xl": "80px 0",
                }}
            >
                <Flex align="start" direction="column">
                    <HeadingSection
                        as="h1"
                        textAlign="left"
                        fontSize={{ base: "32px", md: "48px" }}
                    >
                        Den otevřených dvěří České advokacie
                    </HeadingSection>
                    <Text p={{ base: "8px 0 32px", md: "8px 0 32px" }}>
                        Ve dnech{" "}
                        <Text as="span" fontWeight="500">
                            3. – 4. 10. 2024
                        </Text>{" "}
                        se otevřou dveře k novým příležitostem! Studenti
                        právnických fakult, advokátní koncipienti i advokáti
                        mají možnost zavítat do advokátních kanceláří, které jim
                        poodkryjí podobu a praxi současné advokacie.
                    </Text>

                    <Stack
                        direction={{ base: "column", md: "row" }}
                        w={{ base: "100%", md: "auto" }}
                    >
                        <MotionButton
                            buttonText="Advokátní kanceláře"
                            size="lg"
                            linkProps={{
                                href: "/advokatni-kancelare",
                            }}
                        />
                        <MotionButton
                            buttonText="Návštěvníci"
                            variant="outline"
                            size="lg"
                            linkProps={{
                                href: "/navstevnici",
                            }}
                        />
                    </Stack>
                </Flex>
                <Image
                    src="/hero.png"
                    alt="ilustrační obrázek"
                    objectFit="cover"
                    width={600}
                    height={600}
                />
            </Grid>
        </Flex>
    );
}
