import {
    HeadingProps,
    SelectProps,
    TextareaProps,
    ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

type THeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

type THeadingType = {
    [TAG in THeadingTag]: HeadingProps;
};

const headingStyles: THeadingType = {
    h1: {
        fontSize: "2.5rem",
        lineHeight: "2.875rem",
        fontWeight: "bold",
        textAlign: "center",
    },
    h2: {
        fontSize: "1.875rem",
        lineHeight: "2.188rem",
        fontWeight: "bold",
    },
    h3: {
        fontSize: "1.375rem",
        fontWeight: "bold",
        lineHeight: "1.625rem",
    },
    h4: {
        fontSize: "0.938rem",
        fontWeight: "bold",
    },
    h5: {
        fontSize: "0.938rem",
        fontWeight: "bold",
    },
};
const theme = {
    config,
    styles: {
        global: () => ({
            html: {
                scrollBehavior: "smooth",
            },
            body: {
                fontFamily: "body",
                fontSize: "0.938rem",
                fontWeight: "normal",
                overflowX: "hidden",
                margin: 0,
                background: " #fff !important",
                scrollBehavior: "smooth",
            },
            ...headingStyles,
        }),
    },
    colors: {
        primary: { 300: "#65B031", 500: "#327d00" },
        danger: {
            500: "#D00808",
        },
        success: {
            500: "#4CAF50",
        },

        grey: {
            300: "#e0e0e0",
            600: "#757575",
            900: "#212121",
        },
        black: "#272727",
        white: "#fff",
    },
    components: {
        Modal: {
            baseStyle: {
                closeButton: {
                    boxShadow: "0",
                    _focus: {
                        boxShadow: "0",
                    },
                },
            },
        },
        Select: {
            baseStyle: (): SelectProps => ({
                color: "ud-grey-600",
                fontSize: "0.938rem",
                fontWeight: "normal",
                border: "1px",
            }),
        },
        Input: {},
        Checkbox: {},
        Radio: {},
        Link: {},
        Button: {
            sizes: {
                sm: {
                    fontSize: "0.938rem",
                    padding: { base: "0.3rem 0.8rem", md: "0.5rem 1rem" },
                },
                md: {
                    fontSize: "1.125rem",
                    padding: { base: "0.55rem 1.2rem", md: "0.75rem 1.5rem" },
                },
                lg: {
                    fontSize: "1.25rem",
                    padding: { base: "0.8rem 1.8rem", md: "1rem 2rem" },
                },
            },
            variants: {
                primary: {
                    width: { base: "100%", md: "fit-content" },
                    borderRadius: "full",
                    color: "white",
                    bg: "primary.300",
                    _hover: {
                        bg: "primary.500",
                    },
                    _loading: {
                        _hover: {
                            bg: "primary.300",
                        },
                    },
                },
                outline: {
                    width: { base: "100%", md: "fit-content" },
                    borderRadius: "full",
                    color: "primary.300",
                    border: "1px",
                    borderColor: "primary.300",
                    _hover: {
                        bg: "primary.500",
                        color: "white",
                    },
                },
            },
        },
        Text: {
            baseStyle: (): TextareaProps => ({
                color: "black",
                fontSize: "1rem",
                lineHeight: "22px",
            }),
            variants: {
                errorInput: {
                    color: "danger.500",
                    fontSize: "0.9rem",
                },
            },
        },
        Heading: {
            baseStyle: (): HeadingProps => ({
                color: "black",
            }),
        },
        Drawer: {},
    },
};

theme.config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export default theme;
