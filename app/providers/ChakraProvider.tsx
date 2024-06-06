"use client";

import { ChakraProvider as Provider } from "@chakra-ui/react";

import appTheme from "@/themes/appTheme";

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider resetCSS theme={appTheme}>
            {children}
        </Provider>
    );
};

export default ChakraProvider;
