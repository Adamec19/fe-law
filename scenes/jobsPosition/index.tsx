"use client";

import {
    Box,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Spinner,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Paginator, PageGroup, usePaginator } from "chakra-paginator";

import { useEffect, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import JobsList from "./JobsList";
import { useDebounceValue } from "usehooks-ts";

import { DEFAULT_PAGE, LIMIT_PER_PAGE } from "../../config/global";
import { useGetJobsPositionAll } from "../../hooks/api/jobPosition/useGetJobsPositionAll";
import MotionButton from "../../components/MotionButton";

export default function JobsPosition() {
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [location, setLocation] = useState("");
    const [debouncedValue] = useDebounceValue(location, 500);

    const { data, isLoading, isError } = useGetJobsPositionAll({
        params: {
            location: debouncedValue,
            status: "APPROVED",
            page,
        },
    });

    const { currentPage, setCurrentPage } = usePaginator({
        total: data?.totalPages ?? 1,
        initialState: { currentPage: DEFAULT_PAGE, pageSize: LIMIT_PER_PAGE },
    });

    const handleChangePage = (newPage: number) => {
        setCurrentPage(newPage);
        setPage(newPage);
    };

    useEffect(() => {
        if (debouncedValue !== location) {
            setLocation(debouncedValue);
        }
    }, [debouncedValue]);

    const renderContent = () => {
        if (isLoading) {
            return (
                <Stack justify="center" align="center">
                    <Spinner />
                </Stack>
            );
        }

        if (isError) {
            return (
                <Stack justify="center" align="center">
                    <Text>Something went wrong...</Text>
                </Stack>
            );
        }

        if (!data?.data?.length) {
            return (
                <Stack justify="center" align="center">
                    <Text>Zatím nejsou žádné pracovní nabídky...</Text>
                </Stack>
            );
        }

        return (
            <>
                <JobsList jobs={data?.data} />
                <Flex justify="center" align="center" mt="24px">
                    {Number(data?.totalPages) >= 2 ? (
                        <>
                            {/* @ts-ignore */}
                            <Paginator
                                pagesQuantity={data?.totalPages ?? 1}
                                currentPage={currentPage}
                                onPageChange={(page) => handleChangePage(page)}
                                normalStyles={{
                                    bg: "inherit",
                                }}
                                activeStyles={{
                                    bg: "gray.300",
                                }}
                            >
                                <PageGroup align="center" />
                            </Paginator>
                        </>
                    ) : null}
                </Flex>
            </>
        );
    };

    return (
        <Box pt="120px" position="relative" minH="100vh">
            <MotionButton
                position="absolute"
                right="16px"
                top={{ base: "92px", md: "80px" }}
                buttonText="Vložit pracovní pozici"
                w="fit-content"
                linkProps={{
                    href: "/vlozeni-pracovni-pozice",
                }}
            />
            <Stack
                maxW="940px"
                margin="0 auto 80px"
                spacing={0}
                px={{
                    base: "16px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px",
                    "2xl": "unset",
                }}
            >
                <Heading
                    textAlign="center"
                    mt={{ base: "32px", md: "unset" }}
                    mb={{ base: "16px", md: "32px" }}
                >
                    Nabídka pracovních pozic
                </Heading>
                <Flex mb="24px">
                    <InputGroup w={{ base: "100%", md: "350px" }}>
                        <InputLeftElement pointerEvents="none">
                            <Search2Icon color="gray.300" />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Zadejte lokalitu"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </InputGroup>
                </Flex>
                {renderContent()}
            </Stack>
        </Box>
    );
}
