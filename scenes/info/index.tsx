"use client";

import { InfoType } from "@/types/types";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

type InfoPageProps = {
    typePage: "SUCCESS" | "ERROR";
    typeId: string | null;
};
export default function Info({ typePage, typeId }: InfoPageProps) {
    const isSuccessPage = typePage === "SUCCESS";
    const getTitle = () => {
        switch (typeId) {
            case InfoType.JOB_POSITION_APPROVE: {
                if (isSuccessPage) {
                    return "Vaše pracovní pozice byla úspěšně přidána";
                }
                return "Při přidávání pracovní pozice došlo k chybě";
            }
            case InfoType.JOB_POSITION_DELETE: {
                if (isSuccessPage) {
                    return "Vaše pracovní pozice byla úspěšně smazána";
                }
                return "Při mazání pracovní pozice došlo k chybě";
            }

            case InfoType.LAW_OFFICE_APPROVE: {
                if (isSuccessPage) {
                    return "Advokátní kancelář byla úspěšně schválena";
                }
                return "Při schvalování advokátní kanceláře došlo k chybě";
            }

            default:
                return "Unknown";
        }
    };

    const getDescription = () => {
        switch (typeId) {
            case InfoType.JOB_POSITION_APPROVE: {
                if (!isSuccessPage) {
                    return "Prosím, dejte nám vědět o vašem problému prostřednictvím naší emailové adresy";
                }
                return "";
            }
            case InfoType.JOB_POSITION_DELETE: {
                if (!isSuccessPage) {
                    return "Prosím, dejte nám vědět o vašem problému prostřednictvím naší emailové adresy";
                }
                return "";
            }

            case InfoType.LAW_OFFICE_APPROVE: {
                return "";
            }

            default:
                return "Unknown";
        }
    };

    return (
        <Flex
            px={{
                base: "16px",
                md: "32px",
                lg: "32px",
                xl: "32px",
                "2xl": "unset",
            }}
            direction="column"
            h="100vh"
            justify="center"
            align="center"
            gap="16px"
        >
            <Heading textAlign="center">{getTitle()}</Heading>
            <Text>
                {getDescription()}{" "}
                {InfoType.LAW_OFFICE_APPROVE !== typeId && !isSuccessPage && (
                    <Link
                        href="mailto:registrace@dveredoadvokacie.cz"
                        color="red"
                    >
                        registrace@dveredoadvokacie.cz
                    </Link>
                )}
            </Text>

            <Image
                alt={isSuccessPage ? "Success" : "Error"}
                src={isSuccessPage ? "/ok.png" : "/error.png"}
                width={300}
                height={300}
            />
        </Flex>
    );
}
