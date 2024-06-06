"use client";

import { ReactNode } from "react";
import { Link } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type MenuItemProps = {
    children: ReactNode;
    to: string;
    onClick?: () => void;
};

export default function MenuItem({ children, to, onClick }: MenuItemProps) {
    const pathName = usePathname();
    const isAnchorLink = to.startsWith("#");
    const href = isAnchorLink ? `/${to}` : to;

    return (
        <Link
            href={href}
            onClick={onClick}
            textDecoration="none"
            role="group"
            sx={{
                p: {
                    fontWeight: "bold",
                    color: pathName === to ? "primary.300" : "black",
                },
                _hover: {
                    color: "primary.300",
                    textDecoration: "none",
                },
            }}
        >
            <motion.p
                animate={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </motion.p>
        </Link>
    );
}
