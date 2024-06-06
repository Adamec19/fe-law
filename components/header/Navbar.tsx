"use client";

import { Flex, Stack } from "@chakra-ui/react";

import Logo from "../Logo";
import MenuLinks from "./MenuLinks";
import Hamburger from "./Hamburger";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
    return (
        <Flex
            backgroundColor="#f0f7ef"
            as="nav"
            align="center"
            position="fixed"
            justify="space-between"
            wrap="wrap"
            w="100%"
            zIndex={5}
            px="16px"
            h="70px"
        >
            <Logo w="100px" />
            <MenuLinks />
            <Stack direction="row">
                <Hamburger />
            </Stack>
        </Flex>
    );
}
