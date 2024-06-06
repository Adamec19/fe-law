import { Stack } from "@chakra-ui/react";

import MenuItem from "./MenuItem";

export default function MenuLinks() {
    return (
        <Stack
            flex={1}
            display={{ base: "none", md: "flex" }}
            spacing={8}
            align="center"
            justify="center"
            direction="row"
        >
            <MenuItem to="/">Domů</MenuItem>
            <MenuItem to="/o-projektu">O projektu</MenuItem>
            <MenuItem to="/advokatni-kancelare">Advokátní kanceláře</MenuItem>
            <MenuItem to="/navstevnici">Návštěvníci</MenuItem>
            <MenuItem to="/prehled-pracovnich-pozic">Pracovní pozice</MenuItem>
        </Stack>
    );
}
