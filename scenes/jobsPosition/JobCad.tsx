import { Link } from "@chakra-ui/next-js";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { JobPositionAllResponse } from "../../services/jobDetail/jobDetailService.types";
import { getContractText } from "../jobPositionDetail/helper";

type JobCardProps = JobPositionAllResponse["data"][0];

export default function JobCad({
    _id,
    companyName,
    jobTitle,
    title,
    location,
    contractType,
}: JobCardProps) {
    return (
        <motion.li
            key={_id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ scale: 1 }}
        >
            <Link
                href={`/pracovni-pozice/${_id}`}
                display="grid"
                p={{ base: "16px", md: "32px" }}
                boxShadow="lg"
                gridTemplateRows="auto 1fr"
                gridTemplateColumns="repeat(3, 1fr)"
                borderRadius="8px"
                gap="16px"
                textDecoration="none"
                cursor="pointer"
                sx={{
                    ":hover": {
                        textDecoration: "none",
                        opacity: 0.8,
                    },
                }}
            >
                <Heading as="h3" size="sm" gridColumn="1 / -1">
                    {title}
                </Heading>
                <Heading as="h2" size="md" gridColumn="1 / -1">
                    {jobTitle}
                </Heading>
                <Flex
                    gridColumn="1 / -1"
                    gap="8px"
                    sx={{
                        "& > :not(:last-child)": {
                            borderRight: "1px solid",
                            borderColor: "gray.200",
                            pr: "8px",
                        },
                    }}
                >
                    <Text fontWeight={800}>{companyName}</Text>
                    <Text>{location}</Text>
                    <Text>{getContractText(contractType)}</Text>
                </Flex>
            </Link>
        </motion.li>
    );
}
