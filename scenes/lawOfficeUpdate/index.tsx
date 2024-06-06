import { Box, Heading } from "@chakra-ui/react";
import Form from "./components/Form";
import { LawOfficeUpdateResponse } from "@/services/lawOffices/lawService.types";

type LawOfficeUpdateProps = {
    data: LawOfficeUpdateResponse;
};

export default function LawOfficeUpdate({ data }: LawOfficeUpdateProps) {
    return (
        <Box
            pt="120px"
            px={{
                base: "16px",
                md: "32px",
                lg: "32px",
                xl: "32px",
                "2xl": "unset",
            }}
            minH="100vh"
            maxW={{ base: "100%", md: "842px" }}
            margin="0 auto"
        >
            <Heading textAlign="center" mb="40px">
                Upravit údaje o advokátní kanceláři
            </Heading>
            <Form data={data} />
        </Box>
    );
}
