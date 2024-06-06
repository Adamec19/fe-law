import { Stack, Heading } from "@chakra-ui/react";
import Image from "next/image";

import HeadingSection from "../../../components/HeadingSection";
import MotionButton from "../../../components/MotionButton";

export default function FreePlaces() {
    return (
        <Stack bgColor="#f0f7ef">
            <Stack
                maxW="1280px"
                margin={{ base: "40px auto", xl: "60px auto 20px" }}
                px={{
                    base: "16px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "unset",
                }}
            >
                <HeadingSection mb={0}>Volná pracovní místa</HeadingSection>
                <Stack
                    direction={{ base: "column-reverse", md: "row" }}
                    spacing={0}
                >
                    <Image
                        src="/3.png"
                        alt="ilustrační obrázek"
                        width={600}
                        height={600}
                        objectFit="cover"
                    />
                    <Stack pt={{ md: "20px" }} flex={1}>
                        <Heading
                            mt={{ md: "60px" }}
                            mb="32px"
                            fontSize={{ base: "18px", md: "22px" }}
                            fontStyle="italic"
                            fontWeight={400}
                        >
                            Advokátní kanceláře i samostatní advokáti mohou
                            prostřednictvím tohoto portálu zdarma uveřejnit
                            volné pracovní místo a využít možnosti vzájemného
                            propojení s potenciálními zájemci.
                        </Heading>

                        <Stack
                            direction={{ base: "column", xl: "row" }}
                            w={{ base: "100%" }}
                        >
                            <MotionButton
                                buttonText="Vložit inzerát"
                                size="lg"
                                linkProps={{
                                    href: "/vlozeni-pracovni-pozice",
                                }}
                            />
                            <MotionButton
                                buttonText="Volné pracovní pozice"
                                backgroundColor="inherit"
                                variant="outline"
                                size="lg"
                                linkProps={{
                                    href: "/prehled-pracovnich-pozic",
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
