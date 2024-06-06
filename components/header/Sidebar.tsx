import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import MenuItem from "./MenuItem";
import CrossIcon from "../icons/CrossIcon";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    btnRef: any;
};

export default function Sidebar({ btnRef, isOpen, onClose }: SidebarProps) {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader display="flex" justifyContent="flex-end">
                    <motion.button
                        ref={btnRef}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ scale: 1 }}
                    >
                        <CrossIcon
                            onClick={onClose}
                            style={{
                                cursor: "pointer",
                            }}
                            size={32}
                        />
                    </motion.button>
                </DrawerHeader>

                <DrawerBody
                    ml="28px"
                    display="flex"
                    flexDirection="column"
                    gap="16px"
                >
                    <MenuItem to="/" onClick={onClose}>
                        Domů
                    </MenuItem>
                    <MenuItem to="/o-projektu" onClick={onClose}>
                        O projektu
                    </MenuItem>
                    <MenuItem to="/advokatni-kancelare" onClick={onClose}>
                        Advokátní kanceláře
                    </MenuItem>
                    <MenuItem to="/navstevnici" onClick={onClose}>
                        Návštěvníci
                    </MenuItem>
                    <MenuItem to="/prehled-pracovnich-pozic" onClick={onClose}>
                        Pracovní pozice
                    </MenuItem>
                    <MenuItem to="/vlozeni-pracovni-pozice" onClick={onClose}>
                        Vložit pracovní pozici
                    </MenuItem>
                    <MenuItem to="#lawOffices" onClick={onClose}>
                        Zapojené advokátní kanceláře
                    </MenuItem>
                    <MenuItem to="#help" onClick={onClose}>
                        Pomáhejme společně
                    </MenuItem>
                    <MenuItem to="/kontakt" onClick={onClose}>
                        Kontakt
                    </MenuItem>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
