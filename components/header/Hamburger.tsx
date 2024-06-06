"use client";

import { motion } from "framer-motion";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

import Sidebar from "./Sidebar";
import HamburgerIcon from "../icons/HamburgerIcon";

export default function Hamburger() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);

    return (
        <>
            <motion.button
                ref={btnRef}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 1 }}
            >
                <HamburgerIcon
                    onClick={onOpen}
                    style={{
                        cursor: "pointer",
                    }}
                />
            </motion.button>
            <Sidebar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
        </>
    );
}
