"use client";

import { Link } from "@chakra-ui/next-js";
import { Divider, Grid, Heading, List, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Stack backgroundColor="#3f3f3f" as="footer" justifyContent="center">
            <Stack
                maxW="1280px"
                width="100%"
                m="32px auto 0"
                px={{
                    base: "16px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "unset",
                }}
            >
                <Stack>
                    <Heading
                        textColor="white"
                        fontSize="18px"
                        w="fit-content"
                        pb="8px"
                    >
                        Kontakt:
                    </Heading>
                    <List
                        display="flex"
                        justifyContent="space-between"
                        flexDirection={{ base: "column", xl: "row" }}
                        gap="16px"
                    >
                        <Grid
                            flex={1}
                            pr="1px"
                            as="li"
                            alignContent="flex-start"
                            gridTemplateRows="fit-content"
                            gridTemplateColumns={{
                                base: "50px 1fr",
                                xl: "50px 1fr 1fr",
                            }}
                            gridTemplateAreas={{
                                base: `
                        "NAME NAME"
                        "TEXT EMAIL"

                        `,
                                xl: `
                        "NAME NAME NAME"
                        "TEXT EMAIL EMAIL"
                        `,
                            }}
                            borderRight={{ xl: "1px solid gray" }}
                        >
                            <Text textColor="white" gridArea="NAME" mr="6px">
                                JUDr. Irena Valíčková, MBA, advokátka - garant
                                projektu{" "}
                            </Text>
                            <Text textColor="white" gridArea="TEXT">
                                E-mail:
                            </Text>
                            <Link
                                w="fit-content"
                                gridArea="EMAIL"
                                textColor="white"
                                href="mailto:valickova@brno-advokatnikancelar.cz"
                            >
                                valickova@brno-advokatnikancelar.cz
                            </Link>
                        </Grid>
                        <Grid
                            flex={1}
                            as="li"
                            pr="1px"
                            gridTemplateColumns={{
                                base: "50px 1fr",
                                xl: "50px 1fr 1fr",
                            }}
                            alignContent="flex-start"
                            gridTemplateAreas={{
                                base: `
                        "NAME NAME"
                        "TEXT EMAIL"
                        `,
                                xl: `
                        "NAME NAME NAME"
                        "TEXT EMAIL EMAIL"
                        `,
                            }}
                            borderRight={{ xl: "1px solid gray" }}
                        >
                            <Text textColor="white" gridArea="NAME">
                                JUDr. Ondřej Trubač, Ph.D., LL.M., advokát -
                                garant za ČAK
                            </Text>
                            <Text textColor="white" gridArea="TEXT">
                                E-mail:
                            </Text>
                            <Link
                                w="fit-content"
                                gridArea="EMAIL"
                                textColor="white"
                                href="mailto:brno@cak.cz"
                            >
                                brno@cak.cz
                            </Link>
                        </Grid>
                        <Grid
                            flex={1}
                            as="li"
                            pr="1px"
                            alignContent="flex-start"
                            gridTemplateColumns={{
                                base: "50px 1fr",
                                xl: "50px 1fr 1fr",
                            }}
                            gridTemplateAreas={{
                                base: `
                        "NAME NAME"
                        "TEXT EMAIL"
                        `,
                                xl: `
                        "NAME NAME NAME"
                        "TEXT EMAIL EMAIL"
                        `,
                            }}
                        >
                            <Text textColor="white" gridArea="NAME">
                                Doc. JUDr. Ing. Michal Radvan, Ph.D., proděkan
                                pro zahraniční a vnější vztahy Právnické fakulty
                            </Text>
                            <Text textColor="white" gridArea="TEXT">
                                E-mail:
                            </Text>
                            <Link
                                w="fit-content"
                                gridArea="EMAIL"
                                textColor="white"
                                href="mailto:Michal.Radvan@law.muni.cz"
                            >
                                Michal.Radvan@law.muni.cz
                            </Link>
                        </Grid>
                    </List>
                </Stack>
                <Divider pt="8px" pb="16px" />
                <Text m="0 auto" textColor="white" pt="8px" pb="16px">
                    © 2024 Martin Adamec
                </Text>
            </Stack>
        </Stack>
    );
}
