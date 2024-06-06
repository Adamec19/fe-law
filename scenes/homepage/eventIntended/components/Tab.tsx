import { Box, Tab as ChakraTab, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type TabProps = {
    text: string;
    icon: ReactNode;
};

const Tab = ({ icon, text }: TabProps) => (
    <ChakraTab
        sx={{
            svg: {
                fill: "black",
                transition: "fill 0.2s ease-in-out",
            },
            p: {
                color: "black",
                transition: "color 0.2s ease-in-out",
            },
            _hover: {
                bg: "#808080",
                p: {
                    color: "white",
                },
                svg: {
                    fill: "white",
                },
            },
            _selected: {
                bg: "black",
                p: {
                    color: "white",
                },
                svg: {
                    fill: "white",
                },
            },
        }}
        backgroundColor="transparent"
        transition="background-color 0.2s ease-in-out"
        flex={1}
        borderRadius="inherit"
        m="5px"
        textAlign="center"
    >
        <Box display={{ base: "none", md: "flex" }}>{icon}</Box>
        <Text ml="4px" fontSize={{ base: "14px", md: "16px" }} fontWeight={500}>
            {text}
        </Text>
    </ChakraTab>
);
export default Tab;
