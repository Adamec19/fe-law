"use client";

import HeadingSection from "@/components/HeadingSection";
import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import CardAvatar from "./components/CardAvatar";
import { Link } from "@chakra-ui/next-js";

export default function AboutProject() {
    return (
        <Flex
            maxW="842px"
            position="relative"
            direction="column"
            margin="0 auto"
            minH="100vh"
            p={{
                base: "120px 16px 80px",
                md: "120px 32px 80px",
                lg: "120px 32px 80px",
                "2xl": "120px 0 80px",
            }}
        >
            <HeadingSection>O projektu</HeadingSection>
            <Heading as="h3" fontSize="24px" mb="16px">
                Dny otevřených dveří české advokacie
            </Heading>
            <Text>
                Dovoluji si vám představit projekt, který vznikl s cílem otevřít
                dveře české advokacie mladší generaci a ukázat jí, jaká dnes
                advokacie v praxi vlastně je. Změnila se? Čím se odlišuje od
                doby před několika dekádami? Jak vypadá výkon této profese v
                různých oblastech práva?
            </Text>
            <Text mt="16px">
                Od mladších kolegů často slýchám, že advokacie již není tak
                atraktivní jako dříve a prakticky neví, jak navázat vhodná
                spojení s advokátními kancelářemi. Na druhé straně vidím své
                kolegy advokáty, kteří si přejí doplnit svůj tým o energii
                motivovaných koncipientů, praktikantů či dalších advokátů, ale
                bezúspěšně. Advokáti, kteří jíž chtějí z důvodu odchodu do penze
                předat kancelář mladším generacím, často nemají nástupce.
                Myšlenka projektu stojí na propojení těchto dvou skupin bez
                ohledu na to, kde na své cestě se v tuto chvíli nachází.
            </Text>
            <Text mt="16px">
                K účasti zveme všechny subjekty od malých butikových kanceláří
                po velké hráče s mezinárodním přesahem. Vážíme si každého, kdo
                je ochoten přivítat zájemce na přátelské návštěvě, ukázat jim
                autentické prostředí české advokacie, představit jim volné
                pracovní pozice, či navázat nové spolupráce.
            </Text>
            <Text mt="16px">
                Studenti právnických fakult mají možnost seznámit se s tím, co
                advokacie obnáší, ale i se současnou podobou právního prostředí
                a se specifiky jednotlivých právních odvětví. Advokátním
                koncipientům dávají Dny otevřených dveří české advokacie
                příležitost poznat způsob práce dalších advokátních kanceláří a
                vzájemně sdílet zkušenosti, advokátům pak dává možnost k
                navázání nových pracovních vztahů.
            </Text>
            <Text mt="16px">
                Tato neformální společenská událost bude doplněna o zajímavý
                doprovodný program.
            </Text>
            <Text mt="16px">
                Věřím, že se nám podaří udělat dobrý krok pro rozvoj české
                advokacie, posilování vzájemných kolegiálních vazeb a přeji si,
                abychom tímto prvním ročníkem zahájili každoroční tradici.
            </Text>
            <Flex pt="16px" pb={{ base: "32px", md: "64px" }}>
                <Text fontWeight={800}>
                    JUDr. Irena Valíčková, MBA, advokátka
                </Text>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="center"
                align="center"
                gap="16px"
            >
                <CardAvatar
                    alt="Trubač"
                    src="/trubac.png"
                    position="top"
                    name="JUDr. Ondřej Trubač, Ph.D., LL.M.,"
                    subtitle="garant za Českou advokátní komoru"
                />
                <CardAvatar
                    alt="Valíčková"
                    position="80% 12%"
                    src="/valickova.png"
                    size="200px"
                    name="JUDr. Irena Valíčková, MBA,"
                    subtitle="advokátka kanceláře Valíček & Valíčková, autor projektu"
                />
                <CardAvatar
                    alt="Radvan"
                    position="80% 23%"
                    src="/radvan.png"
                    name="Doc. JUDr. Ing. Michal Radvan, Ph.D.,"
                    subtitle="garant za Právnickou fakultu Masarykovy univerzity"
                />
            </Flex>
            <Flex pt={{ base: "32px", md: "64px" }} direction="column">
                <Heading as="h3" fontSize="24px">
                    Sponzor
                </Heading>
                <Text m={{ base: "16px 0 24px", md: "16px 0 42px" }}>
                    Náklady spojené s tímto projektem nese advokátní kancelář
                    Valíček & Valíčková. Projekt je možno podpořit tak, že
                    advokání kanceláře mohou finančně pomoci projektu{" "}
                    <Link
                        fontWeight={800}
                        href="/#help"
                        color="primary.500"
                        textDecoration="underline"
                    >
                        Domov pro Julii
                    </Link>
                    . Kanceláře, které podpoří tento projekt, náslědně budou
                    uvedeny jako sponzoři této akce.
                </Text>
                <Flex>
                    <Image
                        alt="Valíček & Valíčková, advokátní kancelář, s.r.o."
                        src="/logo-valicek.svg"
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
