import { Box } from "@chakra-ui/react";
import EventIntended from "./eventIntended";
import LawOffices from "./lawOffices";
import FreePlaces from "./freePlaces";
import Help from "./help";
import Program from "./program";
import Intro from "./Into";

export default function Homepage() {
    return (
        <Box as="main">
            <Intro />
            <EventIntended />
            <LawOffices />
            <FreePlaces />
            <Program />
            <Help />
        </Box>
    );
}
