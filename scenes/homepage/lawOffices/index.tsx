import { Stack } from "@chakra-ui/react";

import HeadingSection from "../../../components/HeadingSection";
import ListLawOffice from "@/components/lawOffice/ListLawOffice";

export default function LawOffices() {
    return (
        <Stack
            id="lawOffices"
            scrollMarginY={{ base: "40px", md: "110px" }}
            maxW="1280px"
            margin={{ base: "40px auto", md: "60px auto" }}
            spacing={0}
            px={{
                base: "16px",
                md: "32px",
                lg: "32px",
                xl: "32px",
                "2xl": "unset",
            }}
            align="center"
        >
            <HeadingSection mb={0}>Zapojené advokátní kanceláře</HeadingSection>
            <ListLawOffice />
        </Stack>
    );
}
