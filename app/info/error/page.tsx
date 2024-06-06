"use client";

import Info from "@/scenes/info";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

export default function InfoErrorPage() {
    const { get } = useSearchParams();
    const typeId = get("typeId");

    return <Info typeId={typeId} typePage="ERROR" />;
}
