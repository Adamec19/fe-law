import { LawOffice } from "@/services/lawOffices/lawService.types";
import { Link } from "@chakra-ui/next-js";
import {
    Grid,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";

type LawOfficeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data: LawOffice;
};

export default function LawOfficeModal({
    isOpen,
    onClose,
    data,
}: LawOfficeModalProps) {
    const supportProgram = () => {
        return (
            <>
                <Text mt="8px">
                    <strong>Termín návštěvního dne:</strong>
                </Text>
                <Text>
                    {data.firstDate} od: {data.firstStartTime} do:{" "}
                    {data.firstEndTime}
                </Text>
                {data.secondDate && (
                    <>
                        <Text mt="8px">
                            <strong>Druhý termín návštěvního dne:</strong>
                        </Text>
                        <Text>
                            {data.secondDate}{" "}
                            <Text
                                display={
                                    data.secondStartTime && data.secondEndTime
                                        ? "inline"
                                        : "none"
                                }
                            >
                                od: {data.secondStartTime} do:{" "}
                                {data.secondEndTime}
                            </Text>
                        </Text>
                    </>
                )}
            </>
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            motionPreset="slideInRight"
            onClose={onClose}
            isCentered
            size={{ md: "2xl" }}
        >
            <ModalOverlay />
            <ModalContent p={{ base: "24px 0", md: "24px" }}>
                <ModalCloseButton />
                <ModalHeader>
                    <Heading>{data.companyName}</Heading>
                </ModalHeader>
                <ModalBody>
                    <Grid>
                        {data.isFreePlaces ? (
                            <Text mb="8px">
                                Chcete se stát součástí našeho týmu, nebo se jen
                                přijít podívat, jak to v naší advokátní
                                kanceláři vypadá?{" "}
                                <Text as="span" fontWeight={800}>
                                    Stavte se za námi
                                </Text>{" "}
                                na adrese:{" "}
                                <Text as="span" fontStyle="italic">
                                    {data.city}, {data.address}
                                </Text>
                                , nebo pošlete svůj životopis na e-mail:{" "}
                                <Link
                                    href={`mailto: ${data.email}`}
                                    fontStyle="italic"
                                    textDecoration="underline"
                                >
                                    {data.email}
                                </Link>
                                .
                            </Text>
                        ) : (
                            <Text mb="8px">
                                Chcete se stát přijít podívat jak to v naší
                                advokátní kanceláři vypadá?{" "}
                                <Text as="span" fontWeight={800}>
                                    Stavte se za námi
                                </Text>{" "}
                                na adrese:{" "}
                                <Text as="span" fontStyle="italic">
                                    {data.city}, {data.address}
                                </Text>
                                . Budeme se na vás těšit.
                            </Text>
                        )}
                        {supportProgram()}
                        {data.isSupportingProgram && (
                            <>
                                <Text mt="8px">
                                    <strong>
                                        Program doprovodného programu:
                                    </strong>
                                </Text>
                                <Text whiteSpace="pre-wrap">
                                    {data.supportingProgram}
                                </Text>
                                <Text mt="8px">
                                    <strong>
                                        E-mail pro rezervaci místa k
                                        doprovodnému programu:
                                    </strong>
                                </Text>
                                <Text>{data.contactEmail}</Text>
                            </>
                        )}
                    </Grid>
                </ModalBody>
                {data.isSupportingProgram && !data.isFreeCapacity && (
                    <ModalFooter justifyContent="flex-start" pb={0}>
                        <Text color="danger.500">
                            <strong>
                                Z kapacitních důvodu zatím pozastavena
                                registrace k doprovodnému programu.
                            </strong>
                        </Text>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    );
}
