"use client";

import { Stack, Text } from "@chakra-ui/react";

import HeadingSection from "@/components/HeadingSection";
import PresentIcon from "@/components/icons/PresentIcon";
import { Link } from "@chakra-ui/next-js";

export default function Help() {
    return (
        <Stack bgColor="#f0f7ef">
            <Stack
                scrollMarginY={{ base: "40px", md: "70px" }}
                id="help"
                maxW="960px"
                m="0 auto"
                textAlign="left"
                px={{
                    base: "16px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "unset",
                }}
                py="60px"
            >
                <HeadingSection mb="40px">Pomáhejme společně</HeadingSection>
                <Text>
                    Záleží nám na tom, abychom byli prospěšní společnosti kolem
                    nás. Nosným principem celého projektu je pomoci nastupující
                    generaci s výběrem budoucí kariérní dráhy a usnadnit jí
                    propojení s těmi, kteří se mohou stát nejen zaměstnavateli,
                    ale i celoživotními mentory. Chceme být u toho, když se i
                    seniorním advokátům podaří nalézt nejen nové členy týmu, ale
                    třeba i své budoucí nástupce.
                </Text>
                <Text>
                    Rádi bychom náš záměr pomáhat posunuli ještě o krok dále.
                    Celkové náklady na tento projekt jsou financovány advokátní
                    kanceláří Valíček & Valíčková, ale pokud považujete naši
                    iniciativu za přínosnou, můžete podpořit dobrou věc. Váš
                    finanční dar libovolné hodnoty věnujeme na projekt{" "}
                    <Link
                        fontWeight={800}
                        href="https://www.dumprojulii.com/"
                        color="primary.500"
                        textDecoration="underline"
                    >
                        Domov pro Julii
                    </Link>
                    .
                </Text>
                <Text fontWeight={800}>
                    Aktuálně: Brzy zveřejníme podmínky pro zasílání finančních
                    darů na výše zmíněný dobročinný účel. Momentálně pracujeme
                    na tom, abychom dostáli všem zákonným požadavkům.
                </Text>
                <Text>
                    <Text as="span" display="inline-block" marginBottom="-6px">
                        <PresentIcon size={42} />
                    </Text>
                    Dárce, který věnuje částku vyšší než{" "}
                    <Text as="span" fontWeight={800}>
                        5.000 Kč
                    </Text>
                    , bude uveden na webových stránkách jako sponzor. Dárce,
                    který odešle částku vyšší než{" "}
                    <Text as="span" fontWeight={800}>
                        20.000 Kč
                    </Text>
                    , bude uveden jako hlavní sponzor i s uvedenou částkou.
                </Text>
                <Text>
                    Sponzoři a dárci mají možnost vlastní propagace, a to
                    grafikou na webu, sociálních sítích či v tisku. Grafické
                    podklady obdržíte po odeslání vašeho příspěvku.
                </Text>
            </Stack>
        </Stack>
    );
}
