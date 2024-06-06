import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

type CardAvatarProps = {
    src: string;
    alt: string;
    name: string;
    subtitle: string;
    size?: string;
    position: string;
};

export default function CardAvatar({
    name,
    subtitle,
    size = "150px",
    src,
    position,
}: CardAvatarProps) {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{ base: "250px", md: "100%" }}
        >
            <Avatar
                borderRadius="full"
                boxSize={size}
                src={src}
                sx={{
                    "& img": {
                        objectPosition: position,
                    },
                }}
                mb="16px"
            />
            <Heading as="h4" fontSize="18px" textAlign="center">
                {name}
            </Heading>
            <Text fontSize="18px" textAlign="center">
                {subtitle}
            </Text>
        </Flex>
    );
}
