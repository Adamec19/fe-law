"use client";

import Info from "@/scenes/info";
import { useSearchParams } from "next/navigation";

export default function InfoSuccessPage() {
    const { get } = useSearchParams();
    const typeId = get("typeId");

    return <Info typeId={typeId} typePage="SUCCESS" />;
}
