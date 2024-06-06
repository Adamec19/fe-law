"use client";

import {
    Box,
    Flex,
    Heading,
    List,
    ListItem,
    Stack,
    Text,
} from "@chakra-ui/react";

import { getContractText, getTimeDemandText } from "./helper";
import { Link } from "@chakra-ui/next-js";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { JobDetailResponse } from "../../services/jobDetail";
import { useGetJobDetail } from "../../hooks/api/jobPosition/useGetJobDetail";

export type JobDetail = {
    userId: number;
    id: number;
    title: string;
};

type JobPositionDetailProps = {
    data: JobDetailResponse;
    id: string;
};

export default function JobPositionDetail({
    id,
    data,
}: JobPositionDetailProps) {
    const { back } = useRouter();
    const { data: jobDetail, isLoading } = useGetJobDetail({
        id: "1",
        jobDetail: data,
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!jobDetail) {
        return <Text>Job not found</Text>;
    }

    return (
        <Flex
            maxW="1280px"
            position="relative"
            direction={{ base: "column", md: "row" }}
            gap="32px"
            margin="0 auto"
            minH="100vh"
            p={{
                base: "120px 16px 80px",
                md: "120px 32px 80px",
                lg: "120px 32px 80px",
                "2xl": "120px 0 80px",
            }}
        >
            <Stack position="absolute" top="98px">
                <ArrowLeftIcon cursor="pointer" onClick={() => back()} />
            </Stack>
            <Box
                borderRight={{ md: "1px solid" }}
                borderColor={{ md: "gray.300" }}
                pr="32px"
                pt="16px"
                flex={1}
            >
                <Heading as="h1" textAlign="left" mb="8px">
                    {jobDetail.jobTitle}
                </Heading>
                <Flex align="center">
                    <Text
                        borderRight="1px solid gray"
                        borderColor="gray.300"
                        w="fit-content"
                        p="3px 16px 0 0"
                    >
                        {jobDetail.location}
                    </Text>
                    <Text w="fit-content" pl="16px">
                        {getContractText(jobDetail.contractType)}
                    </Text>
                </Flex>
                <Heading
                    as="h3"
                    fontWeight={500}
                    fontSize="18px"
                    mt="32px"
                    mb="16px"
                    pb="4px"
                    w="fit-content"
                    pr="16px"
                    borderBottom="1px solid"
                    borderColor="gray.300"
                >
                    Popis práce
                </Heading>
                <Text textAlign="left" whiteSpace="pre-wrap">
                    {jobDetail.jobDescription}
                </Text>
                {!!jobDetail.otherConditions.length && (
                    <>
                        <Heading
                            as="h3"
                            fontWeight={500}
                            fontSize="18px"
                            my="16px"
                            pb="4px"
                            w="fit-content"
                            pr="16px"
                            borderBottom="1px solid"
                            borderColor="gray.300"
                        >
                            Požadavky pro přijetí
                        </Heading>
                        <Text textAlign="left" whiteSpace="pre-wrap">
                            {jobDetail.otherConditions}
                        </Text>
                    </>
                )}
                <Heading
                    as="h3"
                    fontWeight={500}
                    fontSize="18px"
                    my="16px"
                    pb="4px"
                    w="fit-content"
                    pr="16px"
                    borderBottom="1px solid"
                    borderColor="gray.300"
                >
                    Obecné informace
                </Heading>

                <List display="flex" flexDirection="column" gap="8px">
                    <ListItem>
                        <Text display="inline-block" mr="8px">
                            Typ úvazku:
                        </Text>
                        <Text
                            display="inline-block"
                            textAlign="left"
                            fontWeight={500}
                        >
                            {getContractText(jobDetail.contractType)}
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text display="inline-block" mr="8px">
                            Hodinová sazba:
                        </Text>
                        <Text
                            display="inline-block"
                            textAlign="left"
                            fontWeight={500}
                        >
                            {jobDetail.hourSalary}{" "}
                            {jobDetail.hourSalary === "Po domluvě"
                                ? ""
                                : "Kč / hod."}
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text display="inline-block" mr="8px">
                            Časová náročnost:
                        </Text>
                        <Text
                            display="inline-block"
                            textAlign="left"
                            fontWeight={500}
                        >
                            {getTimeDemandText(jobDetail.timeDemand)}
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text display="inline-block" mr="8px">
                            Možný datum nástupu:
                        </Text>
                        <Text
                            display="inline-block"
                            textAlign="left"
                            fontWeight={500}
                        >
                            {jobDetail.boardingDate}
                        </Text>
                    </ListItem>
                    <ListItem>
                        <Text display="inline-block" mr="8px">
                            Lokalita pro výkon práce:
                        </Text>
                        <Text
                            display="inline-block"
                            textAlign="left"
                            fontWeight={500}
                        >
                            {jobDetail.location}
                        </Text>
                    </ListItem>
                </List>
            </Box>
            <Flex
                padding={{ base: "16px", md: "32px" }}
                boxShadow={{ md: "lg" }}
                border={{ base: "1px solid", md: "none" }}
                borderColor={{ base: "gray.300", md: "none" }}
                borderRadius="8px"
                direction="column"
                minW="330px"
                h="fit-content"
                gap="2px"
            >
                <Heading as="h2" fontSize="24px" pb="8px">
                    {jobDetail.companyName}
                </Heading>
                <Text pb="4px">Kontaktní osoba:</Text>
                <Text>{jobDetail.contactPerson}</Text>
                <Link
                    w="fit-content"
                    href={`mailto:${jobDetail.contactEmail}`}
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    {jobDetail.contactEmail}
                </Link>
                <Link
                    w="fit-content"
                    href={`tel:${jobDetail.contactPhone}`}
                    _hover={{
                        textDecoration: "none",
                    }}
                >
                    {jobDetail.contactPhone}
                </Link>
            </Flex>
        </Flex>
    );
}
