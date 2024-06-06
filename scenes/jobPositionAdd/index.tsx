import { Box, Heading } from "@chakra-ui/react";

import Form from "./components/Form";

export default function JobPositionAdd() {
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
                Vložit pracovní pozici
            </Heading>
            <Form />
        </Box>
    );
}
