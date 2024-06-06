"use client";

import {
    TabList,
    TabPanel,
    TabPanels,
    Tabs as ChakraTabs,
    useMediaQuery,
    Heading,
    Text,
    Stack,
    List,
    ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Tab from "./components/Tab";
import HeadingSection from "../../../components/HeadingSection";
import LawOfficeIcon from "../../../components/icons/LawOfficeIcon";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MotionButton from "@/components/MotionButton";
import StudentIcon from "@/components/icons/StudentIcon";

type TabsProps = {
    indexSelected?: number;
};

export default function EventIntended({ indexSelected }: TabsProps) {
    const [tabIndex, setTabIndex] = useState(indexSelected);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    const handleTabChange = (index: number) => {
        setTabIndex(index);
    };

    useEffect(() => {
        setTabIndex(indexSelected);
    }, [indexSelected]);

    return (
        <Stack bgColor="#e9e9e9">
            <Stack
                maxW="1280px"
                margin={{
                    base: "40px auto",
                    md: "60px auto 60px",
                    xl: "60px auto 60px",
                }}
                px={{
                    base: "16px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "unset",
                }}
            >
                <HeadingSection>Komu je akce určena?</HeadingSection>
                <ChakraTabs
                    display="flex"
                    flexDirection="column"
                    variant="unstyled"
                    colorScheme="green"
                    height="max-content"
                    p={0}
                    gap="24px"
                    index={tabIndex}
                    defaultIndex={indexSelected}
                    onChange={(index) => handleTabChange(index)}
                >
                    <TabList
                        display="flex"
                        borderWidth="1px"
                        borderColor="grey.300"
                        borderRadius="full"
                        maxW={{ base: "100%", md: "932px" }}
                        w="100%"
                        margin="0 auto"
                    >
                        {[
                            { icon: <StudentIcon />, text: "NÁVŠTĚVNÍCI" },
                            {
                                icon: <LawOfficeIcon />,
                                text: "ADVOKÁTNÍ KANCELÁŘ",
                            },
                        ].map(({ icon, text }, index) => (
                            <Tab key={index} icon={icon} text={text} />
                        ))}
                    </TabList>
                    <TabPanels p={0}>
                        {[
                            {
                                id: 0,
                                type: "STUDENT",
                                title: "Studenti, koncipienti, advokáti",
                                descriptions: [
                                    "Studenti právnických fakult mohou využít otevřených dveří do advokátních kanceláří napříč Českou republikou a nahlédnout pod pokličku toho, jak ve skutečnosti dnešní advokacie vypadá.",
                                    "Advokátní koncipienti mají možnost poznat prostředí dalších advokátních kanceláří, navázat nové profesní vztahy a případně uvažovat o změně koncipientské praxe.",
                                    "Advokáti mohou využít příležitosti k přátelské návštěvě svých kolegů, rozšířit síť svých kontaktů a nalézt cestu k potenciální spolupráci.",
                                ],
                                img: "/1.png",
                            },
                            {
                                id: 1,
                                type: "LAW_OFFICE",
                                title: "Samostatní advokáti i advokátní kanceláře",
                                descriptions: [
                                    "Projekt je zdarma otevřen všem advokátním kancelářím bez ohledu na jejich velikost, specializaci či město, ve kterém působí, stejně jako samostatným advokátům. Mohou těžit z bezprostředního kontaktu se svými návštěvníky a zviditelnit své jméno a značku.",
                                ],
                                img: "/2.png",
                            },
                        ].map(
                            ({ title, descriptions, img, id, type }, index) => (
                                <TabPanel flex={1} key={id} p={0}>
                                    <motion.div
                                        initial={
                                            !isMobile && {
                                                opacity: 0.99,
                                                scale: 0.99,
                                            }
                                        }
                                        animate={
                                            !isMobile && index === tabIndex
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0.99, scale: 0.99 }
                                        }
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                        style={{
                                            display: "flex",
                                            flexDirection: isMobile
                                                ? "column"
                                                : "row",
                                            alignItems: isMobile
                                                ? "center"
                                                : "flex-start",
                                        }}
                                    >
                                        <Stack pt={{ md: "16px" }}>
                                            <Heading
                                                as="h2"
                                                fontSize="24px"
                                                mb="16px"
                                                maxW={{
                                                    base: "100%",
                                                    md: "555px",
                                                }}
                                            >
                                                {title}
                                            </Heading>
                                            <List
                                                display="flex"
                                                flexDirection="column"
                                                gap="16px"
                                            >
                                                {descriptions.map(
                                                    (description, index) => (
                                                        <ListItem
                                                            key={index}
                                                            display="flex"
                                                        >
                                                            <ChevronRightIcon
                                                                color="primary.300"
                                                                mt="6px"
                                                                boxSize="32px"
                                                                alignSelf="flex-start"
                                                            />
                                                            <Text>
                                                                {description}
                                                            </Text>
                                                        </ListItem>
                                                    )
                                                )}
                                            </List>
                                            {type === "STUDENT" ? (
                                                <Text mt="16px" mb="32px">
                                                    <Text
                                                        as="span"
                                                        fontWeight={800}
                                                    >
                                                        TIP:{" "}
                                                    </Text>
                                                    Společným cílem je
                                                    networking, přineste proto s
                                                    sebou své životopisy.
                                                    Návštěvu není potřeba předem
                                                    avizovat, účast na
                                                    doprovodném programu ano.
                                                </Text>
                                            ) : (
                                                <Text mt="16px" mb="32px">
                                                    Co nejvyšší počet zapojených
                                                    subjektů je klíčový pro
                                                    naplnění našeho cíle –
                                                    ukázat mladé generaci, že
                                                    advokacie je zajímavým a
                                                    dynamickým oborem, který má
                                                    co nabídnout. Zapojíte se
                                                    také?
                                                </Text>
                                            )}

                                            <MotionButton
                                                buttonText="Zapojit se"
                                                size="lg"
                                                linkProps={{
                                                    href:
                                                        type === "STUDENT"
                                                            ? "/navstevnici"
                                                            : "/advokatni-kancelare",
                                                }}
                                            />
                                        </Stack>

                                        <Image
                                            src={img}
                                            alt={title}
                                            objectFit="cover"
                                            width={400}
                                            height={400}
                                            style={{
                                                width: "100%",
                                            }}
                                        />
                                    </motion.div>
                                </TabPanel>
                            )
                        )}
                    </TabPanels>
                </ChakraTabs>
            </Stack>
        </Stack>
    );
}
