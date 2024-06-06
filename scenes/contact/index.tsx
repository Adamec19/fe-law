"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
    return (
        <Flex
            maxW="864px"
            margin="0 auto"
            minH="100vh"
            direction="column"
            p={{
                base: "120px 16px 80px",
                md: "120px 32px 80px",
                lg: "120px 32px 80px",
                "2xl": "120px 0 80px",
            }}
        >
            <Heading as="h1">Ozvěte se nám</Heading>
            <Flex mt="24px">
                <Heading
                    as="h3"
                    fontWeight={400}
                    fontSize="22px"
                    textAlign="center"
                >
                    V případě dotazů nás kontaktujte na e-mail{" "}
                    <Link
                        href="mailto:registrace@poznejadvokaty.cz"
                        color="primary.500"
                        fontWeight={800}
                        textDecoration="underline"
                    >
                        registrace@poznejadvokaty.cz
                    </Link>
                    .
                </Heading>
            </Flex>
            <Flex mt="24px" direction="column" gap="6px">
                <Heading as="h4" fontSize="22px" mb="6px">
                    Kontakt na autora projektu:
                </Heading>

                <Text fontWeight={500}>JUDr. Irena Valíčková,</Text>
                <Text fontStyle="italic">
                    Valíček & Valíčková, advokátní kancelář, s.r.o.
                </Text>
                <Flex gap="6px">
                    <Text fontWeight={500}>E-mail:</Text>
                    <Link href="mailto:valickova@brno-advokatnikancelar.cz">
                        valickova@brno-advokatnikancelar.cz
                    </Link>
                </Flex>
                <Flex gap="6px">
                    <Text fontWeight={500}>Telefon:</Text>
                    <Link href="tel:+420770685603">+420 770 685 603</Link>
                </Flex>
            </Flex>
        </Flex>
    );
}
