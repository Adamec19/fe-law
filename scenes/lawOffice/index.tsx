"use client";

import {
    Flex,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
} from "@chakra-ui/react";

import HeadingSection from "@/components/HeadingSection";
import ContactForm from "./components/ContactForm";
import { CheckIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import ListLawOffice from "@/components/lawOffice/ListLawOffice";

export default function LawOffice() {
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
            <HeadingSection fontSize="32px">Advokátní kanceláře</HeadingSection>
            <Stack gap="16px">
                <Heading
                    as="h3"
                    fontSize="18px"
                    textAlign={{ base: "left", md: "center" }}
                >
                    Pro advokátní kanceláře či samostatné advokáty platí:
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
                            Zaregistrujte, prosím, svou advokátní kancelář.
                            Odkaz na formulář naleznete níže.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Uveďte časové rozmezí, během kterého je možné ve
                            dnech{" "}
                            <Text as="span" fontWeight={800}>
                                3. – 4. 10. 2024
                            </Text>{" "}
                            vaši kancelář navštívit.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Máte možnost rozšířit doprovodný program této akce.
                            Zajímavé téma, váš pohled na současnou advokacii, či
                            například neformální rozhovor s vaším týmem? Skvělý
                            způsob, jak zviditelnit vaši práci.
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Získáváte zdarma možnost nalézt nové posily vašeho
                            kolektivu, ale i možnost inzerovat na tomto webu{" "}
                            <Link
                                fontWeight={800}
                                href="/prehled-pracovnich-pozic"
                                color="primary.500"
                                textDecoration="underline"
                            >
                                volné pracovní pozice
                            </Link>
                            .
                        </Text>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} />
                        <Text>
                            Schválením registrace se objevíte v sekci Zapojené
                            &bdquo;advokátní kanceláře&ldquo;.
                        </Text>
                    </ListItem>
                </List>
                <Text
                    fontSize="18px"
                    fontWeight={500}
                    textAlign="left"
                    mb="16px"
                >
                    Moc děkujeme za vaše zapojení!
                </Text>
                <ContactForm />
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
