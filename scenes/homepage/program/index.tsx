"use client";

import {
    Stack,
    Text,
    Heading,
    List,
    ListItem,
    ListIcon,
    Grid,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ArrowRightIcon, MinusIcon } from "@chakra-ui/icons";
import HeadingSection from "@/components/HeadingSection";

export default function Program() {
    return (
        <Stack
            maxW="1280px"
            margin={{ base: "40px auto", md: "60px auto" }}
            spacing={0}
            px={{
                base: "16px",
                md: "32px",
                lg: "32px",
                xl: "32px",
                "2xl": "unset",
            }}
        >
            <HeadingSection>Doprovodný program</HeadingSection>
            <Heading as="h3" fontSize="22px" textAlign={{ md: "center" }}>
                Tento program zajišťují garanti projektu.
            </Heading>
            <Text
                textAlign={{ md: "center" }}
                mt={{ base: "6px", md: "6px" }}
                mb={{ base: "16px", md: "16px" }}
            >
                Program jednotlivých kanceláří naleznete v sekci zapojené{" "}
                <Link
                    href="#lawOffices"
                    color="primary.500"
                    fontWeight={800}
                    textDecoration="underline"
                >
                    advokátní kanceláře
                </Link>
                .
            </Text>
            <Heading
                as="h4"
                fontSize="24px"
                borderBottom="1px solid"
                borderBottomColor="primary.500"
                w={{ base: "fit-content" }}
                pr="16px"
            >
                čtvrtek 3.10.2024
            </Heading>
            <Grid
                gap="32px"
                gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gridTemplateRows={{ base: "1fr", md: "1fr" }}
            >
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading as="h3" fontSize="18px" position="relative">
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            boxSize="32px"
                        />
                        Den otevřených dveří České advokátní komory v Brně a
                        Praze
                    </Heading>

                    <Text pt="8px"> Místo konání:</Text>
                    <List>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Česká advokátní komora, nám. Svobody 84/15, 602
                                00 Brno-střed
                            </Text>
                        </ListItem>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Česká advokátní komora, Kaňkův palác (hlavní
                                budova), Národní 16, Praha
                            </Text>
                        </ListItem>
                    </List>
                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading as="h3" fontSize="18px" position="relative">
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            fontSize="32px"
                        />
                        Advokacie pohledem advokátního koncipienta a
                        začínajícího advokáta
                    </Heading>

                    <Text pt="8px">Místo konání:</Text>
                    <List>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Právnická fakulta MU, Veveří 70, Brno
                            </Text>
                        </ListItem>
                    </List>
                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading as="h3" fontSize="18px" position="relative">
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            fontSize="32px"
                        />
                        Advokacie pohledem advokátního koncipienta a
                        začínajícího advokáta
                    </Heading>

                    <Text pt="8px">Místo konání:</Text>
                    <List>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Právnická fakulta Univerzity Palackého v
                                Olomouci, 17. listopadu 930/8, 779 00 Olomouc 9
                            </Text>
                        </ListItem>
                    </List>
                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading as="h3" fontSize="18px" position="relative">
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            fontSize="32px"
                        />
                        Advokátní networking v Brně
                    </Heading>
                    <Text fontStyle="italic" p="8px 0 0" flex={1}>
                        od 18 hodin. Setkání bude neformální, za účelem navázání
                        kontaktů. Budou pozváni zajímaví hosté.
                    </Text>

                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
            </Grid>
            <Heading
                as="h4"
                fontSize="24px"
                mt="64px"
                pr="16px"
                borderBottom="1px solid"
                borderBottomColor="primary.500"
                w={{ base: "fit-content" }}
            >
                pátek 4.10.2024
            </Heading>
            <Grid
                gap="32px"
                gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gridTemplateRows={{ base: "1fr", md: "1fr" }}
            >
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading
                        as="h3"
                        fontSize="18px"
                        position="relative"
                        flex={1}
                    >
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            fontSize="32px"
                        />
                        Advokacie pohledem advokátního koncipienta a
                        začínajícího advokáta
                    </Heading>

                    <Text pt="8px">Místo konání:</Text>
                    <List>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Právnická fakulta Univerzity Karlovy, nám.
                                Curieových 7, 116 40 Staré Město
                            </Text>
                        </ListItem>
                    </List>
                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
                <Stack
                    p={{ base: "16px", md: "32px" }}
                    boxShadow="xl"
                    spacing={0}
                    borderRadius="8px"
                >
                    <Heading
                        as="h3"
                        fontSize="18px"
                        position="relative"
                        flex={1}
                    >
                        <ArrowRightIcon
                            display={{ base: "none", md: "block" }}
                            position="absolute"
                            left="-44px"
                            color="primary.300"
                            fontSize="32px"
                        />
                        Advokacie pohledem advokátního koncipienta a
                        začínajícího advokáta
                    </Heading>

                    <Text pt="8px">Místo konání:</Text>
                    <List>
                        <ListItem
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <ListIcon>
                                <MinusIcon color="primary.300" />
                            </ListIcon>
                            <Text fontSize="14px">
                                Fakulta právnická - Západočeská Univerzita v
                                Plzni, sady Pětatřicátníků 320/14, 301 00 Plzeň
                                3
                            </Text>
                        </ListItem>
                    </List>
                    <Text fontStyle="italic" flex={1} pt="16px">
                        Program bude upřesněn.
                    </Text>
                </Stack>
            </Grid>
        </Stack>
    );
}
