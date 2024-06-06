import { extendTheme } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

import baseTheme from "./baseTheme";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});
const fonts = {
    body: roboto.style.fontFamily,
    heading: roboto.style.fontFamily,
};

const appTheme = extendTheme({ fonts, ...baseTheme });

export default appTheme;
