"use client";

import HeadingSection from "@/components/HeadingSection";
import { Link } from "@chakra-ui/next-js";
import {
    Stack,
    Text,
    Flex,
    Heading,
    ListItem,
    List,
    ListIcon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import ListLawOffice from "@/components/lawOffice/ListLawOffice";

export default function Visitor() {
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
            <HeadingSection fontSize="32px">Návštěvníci</HeadingSection>
            <Stack gap="16px" flex={1}>
                <Heading
                    as="h3"
                    fontSize="18px"
                    m={{ md: "0 auto" }}
                    textAlign={{ base: "left", md: "center" }}
                    w={{ base: "100%", md: "80%" }}
                >
                    Pro studenty právnických fakult, advokátní koncipienty či
                    advokáty, kteří mají zájem navštívit jiné advokátní
                    kanceláře, platí:
                </Heading>
                <List
                    display="flex"
                    flexDirection="column"
                    pb="16px"
                    gap="16px"
                    sx={{
                        "& li": {
                            display: "flex",
                            alignItems: "center",
                        },
                        "& svg": {
                            color: "primary.500",
                        },
                    }}
                >
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            V sekci{" "}
                            <Link
                                href="/#lawOffices"
                                color="primary.500"
                                fontWeight={800}
                                textDecoration="underline"
                            >
                                Zapojené advokátní kanceláře
                            </Link>{" "}
                            si zvolte advokátní kanceláře, které chcete ve dnech
                            3. – 4. 10. 2024 navštívit.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text fontWeight={800}>
                            Návštěvu není třeba plánovat nebo registrovat
                            předem, stačí si zjistit u dané advokátní kanceláře
                            čas určený k návštěvám.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Zaujal vás některý bod z doprovodného programu dané
                            advokátní kanceláře? Své místo si, prosím,
                            rezervujte přímo s advokátní kanceláří, která jej
                            pořádá.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Nezapomeňte vzít s sebou svůj životopis, aby vás
                            měly advokátní kanceláře jak kontaktovat, pokud máte
                            zájem o navázání spolupráce.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Celá akce i doprovodný program jsou pro vás k
                            dispozici zdarma.
                        </Text>
                    </ListItem>
                </List>
                <Text
                    fontSize="18px"
                    fontWeight={500}
                    textAlign="left"
                    mb="16px"
                >
                    Hledáte zrovna práci? Podívejte se na{" "}
                    <Link
                        href="/prehled-pracovnich-pozic"
                        color="primary.500"
                        textDecoration="underline"
                        fontWeight={800}
                    >
                        nabídku pracovních pozic
                    </Link>
                    .
                </Text>
            </Stack>
            <Heading
                fontSize="32px"
                textAlign={{ base: "left", md: "center" }}
                mt={{ base: "16px", md: "32px" }}
            >
                Zapojené advokátní kanceláře
            </Heading>
            <ListLawOffice />
        </Flex>
    );
}
