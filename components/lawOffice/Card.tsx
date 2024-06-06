import {
    Grid,
    Heading,
    Tag,
    Text,
    chakra,
    shouldForwardProp,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import LawOfficeModal from "./LawOfficeModal";
import { isValidMotionProp, motion } from "framer-motion";
import { LawOffice } from "@/services/lawOffices/lawService.types";

type CardProps = {
    data: LawOffice;
};

const ChakraStack = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Card({ data }: CardProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <ChakraStack
                display="flex"
                flexDirection="column"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                minW={{
                    base: "100%",
                    md: "320px",
                }}
                maxW={{ md: "320px" }}
                boxShadow="md"
                p={{
                    base: "16px",
                    md: "32px 32px 32px",
                }}
                position="relative"
                onClick={onOpen}
                cursor="pointer"
            >
                <Heading as="h3" fontSize="22px">
                    {data.companyName}
                </Heading>
                <Stack spacing={0} flex={1}>
                    <Text pt="6px">
                        <strong>Adresa:</strong>
                    </Text>
                    <Text>
                        {data.city}, {data.address}
                    </Text>

                    <Stack spacing={0} flex={1} justify="flex-end">
                        {data.isSupportingProgram ? (
                            <>
                                <Text mt="6px">
                                    <strong>Doprovodný program:</strong>
                                </Text>
                                {data.isFreeCapacity ? (
                                    <Text color="primary.300">
                                        <strong>Volná místa</strong>
                                    </Text>
                                ) : (
                                    <Text color="danger.500">
                                        <strong>Plně obsazeno</strong>
                                    </Text>
                                )}
                            </>
                        ) : (
                            <Text color="danger.500" mt="8px">
                                <strong>Bez doprovodného programu.</strong>
                            </Text>
                        )}
                    </Stack>
                </Stack>

                {data.isFreePlaces && (
                    <Tag
                        position="absolute"
                        w="fit-content"
                        p="6px 12px"
                        top="-12px"
                        right="16px"
                        bg="primary.500"
                        color="white"
                    >
                        Právě hledáme
                    </Tag>
                )}
            </ChakraStack>
            {isOpen && (
                <LawOfficeModal isOpen={isOpen} onClose={onClose} data={data} />
            )}
        </>
    );
}
