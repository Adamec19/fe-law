"use client";

import { DEFAULT_PAGE, DEFAULT_REGION, LIMIT_PER_PAGE } from "@/config/global";
import { useGetLawOffice } from "@/hooks/api/lawOffice/useGetLawOffices";
import { Select, Skeleton, SkeletonText, Stack, Text } from "@chakra-ui/react";
import { Paginator, PageGroup, usePaginator } from "chakra-paginator";
import regions from "data/regions";
import { useState } from "react";
import Card from "./Card";

export default function ListLawOffice() {
    const filteredRegions = regions.filter(
        (region) => region.id >= 1 && region.id <= 14
    );
    const [region, setRegion] = useState(DEFAULT_REGION);
    const [page, setPage] = useState(DEFAULT_PAGE);
    const { data, isLoading } = useGetLawOffice({
        params: {
            region: region,
            page: page,
            status: "APPROVED",
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

    return (
        <>
            <Stack align="center" mt={{ base: "16px", md: "32px" }}>
                <Text
                    mb="12px"
                    fontSize="18px"
                    textAlign={{ md: "center" }}
                    maxW={{ base: "100%", md: "460px" }}
                >
                    Vyberte si z nabídky advokátních kanceláří, které nabízejí{" "}
                    <Text as="span" fontWeight={800}>
                        den otevřených dvěří
                    </Text>
                    , dle regionu:
                </Text>
                <Select
                    maxW="320px"
                    mb="24px"
                    value={region}
                    onChange={(e) => setRegion(parseInt(e.target.value))}
                >
                    {filteredRegions.map((region) => {
                        return (
                            <option key={region.id} value={region.id}>
                                {region.name}
                            </option>
                        );
                    })}
                </Select>
            </Stack>
            <Stack w="100%">
                {isLoading ? (
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        justify="center"
                        align="center"
                        gap={4}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton
                                minW={{
                                    base: "100%",
                                    md: "320px",
                                }}
                                maxW={{ md: "320px" }}
                                padding="6"
                                boxShadow="lg"
                                bg="white"
                                key={index}
                            >
                                <SkeletonText
                                    mt="4"
                                    noOfLines={4}
                                    spacing="4"
                                    skeletonHeight="2"
                                />
                            </Skeleton>
                        ))}
                    </Stack>
                ) : (
                    <Stack
                        py="24px"
                        gap="24px"
                        direction="row"
                        justify="center"
                        wrap="wrap"
                        spacing={0}
                    >
                        {data?.data && data?.data?.length === 0 ? (
                            <Stack h="150px" justify="center">
                                <Text>
                                    Pro tento region nebyly nalezeny žádné
                                    kanceláře.
                                </Text>
                            </Stack>
                        ) : (
                            <>
                                {data?.data.map((item) => {
                                    return <Card key={item._id} data={item} />;
                                })}
                            </>
                        )}
                    </Stack>
                )}
            </Stack>
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
        </>
    );
}
