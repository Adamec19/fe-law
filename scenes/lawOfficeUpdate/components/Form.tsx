"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Button,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Switch,
    Textarea,
    Grid,
    useToast,
    Tooltip,
    Flex,
} from "@chakra-ui/react";
import { InferType, boolean, number, object, string } from "yup";
import regions from "data/regions";
import ErrorText from "@/components/ErrorText";
import { LawOfficeUpdateResponse } from "@/services/lawOffices/lawService.types";
import { useUpdateLawOffice } from "@/hooks/api/lawOffice/useUpdateLawOffiice";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const requiredErrorText = "Vyplňte povinné pole.";
const icoFormatErrorText = "IČO musí mít přesně 8 číslic.";

const schema = object({
    companyName: string().required(requiredErrorText),
    ico: string()
        .test("is-ico-valid", icoFormatErrorText, (value) => {
            if (!value) return true;
            return /^\d{8}$/.test(value);
        })
        .required(requiredErrorText),
    region: number().required(requiredErrorText),
    address: string().required(requiredErrorText),
    email: string().email().required(requiredErrorText),
    isSupportingProgram: boolean().required(requiredErrorText),
    isFreeCapacity: boolean().required(requiredErrorText),
    supportingProgram: string().when("isSupportingProgram", {
        is: true,
        then: string().required().max(1000).min(10),
        otherwise: string().notRequired(),
    }),
    isFreePlaces: boolean().required(requiredErrorText),
    firstDate: string().required(requiredErrorText),
    firstStartTime: string().required(requiredErrorText),
    firstEndTime: string().required(requiredErrorText),
    secondDate: string().notRequired(),
    secondStartTime: string().optional(),
    city: string().required(requiredErrorText),
    secondEndTime: string().optional(),
    contactEmail: string().when("isSupportingProgram", {
        is: true,
        then: string().email().required(requiredErrorText),
        otherwise: string().notRequired(),
    }),
    phone: string()
        .required(requiredErrorText)
        .matches(
            /^[+]?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}$/,
            "Telefonní číslo není ve správném formátu (např. +420 123 456 789)"
        ),
}).required();

type FormData = InferType<typeof schema>;

type FormProps = {
    data: LawOfficeUpdateResponse;
};

export default function Form({ data }: FormProps) {
    const filteredRegions = regions.filter(
        (region) => region.id >= 1 && region.id <= 14
    );
    const toast = useToast();
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            region: data.region ?? 1,
            isSupportingProgram: data.isSupportingProgram ?? false,
            supportingProgram: data.supportingProgram ?? "",
            isFreePlaces: data.isFreePlaces ?? false,
            firstDate: data.firstDate ?? "",
            firstStartTime: data.firstStartTime ?? "",
            firstEndTime: data.firstEndTime ?? "",
            secondDate: data.secondDate ?? "",
            secondStartTime: data.secondStartTime ?? "",
            secondEndTime: data.secondEndTime ?? "",
            companyName: data.companyName ?? "",
            ico: data.ico ?? "",
            address: data.address ?? "",
            email: data.email ?? "",
            phone: data.phone ?? "",
            isFreeCapacity: data.isFreePlaces ?? false,
            contactEmail: data.contactEmail ?? "",
            city: data.city ?? "",
        },
    });

    const { mutate: updateLawOffice } = useUpdateLawOffice({
        onSuccess: () => {
            reset();
            toast({
                title: "Úspěšně jste upravili základní údaje o Vaší advokátní kanceláři",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        },
    });

    const isWatchSupportingProgram = watch("isSupportingProgram");

    const handleData = async ({
        address,
        companyName,
        email,
        ico,
        isFreePlaces,
        isSupportingProgram,
        phone,
        region,
        supportingProgram,
        firstDate,
        firstEndTime,
        firstStartTime,
        secondDate,
        secondEndTime,
        secondStartTime,
        isFreeCapacity,
        contactEmail,
        city,
    }: FormData) => {
        updateLawOffice({
            _id: data._id,
            address,
            companyName,
            email,
            ico,
            isFreePlaces,
            isSupportingProgram,
            phone,
            region,
            supportingProgram,
            firstDate,
            firstEndTime,
            firstStartTime,
            secondDate,
            secondEndTime,
            secondStartTime,
            isFreeCapacity,
            contactEmail: contactEmail ?? "",
            city,
        });
    };

    return (
        <Stack
            m="0 auto"
            minW={{ base: "100%", xl: "842px" }}
            p={{ base: "16px", md: "42px" }}
            border="1px solid #E2E8F0"
            borderRadius="8px"
        >
            <form
                onSubmit={handleSubmit(handleData)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    width: "100%",
                }}
            >
                <Stack direction={{ base: "column", md: "row" }}>
                    <FormControl display="flex" flexDirection="column">
                        <FormLabel>
                            Název firmy:
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            {...register("companyName")}
                            disabled
                            placeholder="Nazev firmy"
                            name="companyName"
                            autoComplete="company-name"
                        />
                        <ErrorText>{errors.companyName?.message}</ErrorText>
                    </FormControl>

                    <FormControl display="flex" flexDirection="column">
                        <FormLabel>
                            IČO:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            {...register("ico")}
                            disabled
                            placeholder="IČO"
                            type="number"
                            name="ico"
                            autoComplete="company-ico"
                        />
                        <ErrorText>{errors.ico?.message}</ErrorText>
                    </FormControl>
                </Stack>

                <Stack direction={{ base: "column", md: "row" }}>
                    <FormControl display="flex" flexDirection="column">
                        <FormLabel>
                            E-mail:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            {...register("email")}
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            autoComplete="email"
                        />
                        <ErrorText>{errors.email?.message}</ErrorText>
                    </FormControl>

                    <FormControl display="flex" flexDirection="column">
                        <Tooltip
                            label={`Zadejte tel. číslo ve formátu +420 123 456 789.`}
                        >
                            <FormLabel>
                                Telefonní číslo:{" "}
                                <Text as="span" color="red">
                                    {" "}
                                    *
                                </Text>
                            </FormLabel>
                        </Tooltip>
                        <Input
                            {...register("phone")}
                            placeholder="Telefon"
                            type="text"
                            name="phone"
                            autoComplete="tel"
                        />
                        <ErrorText>{errors.phone?.message}</ErrorText>
                    </FormControl>
                </Stack>

                <Stack direction={{ base: "column", md: "row" }}>
                    <FormControl display="flex" flexDirection="column">
                        <FormLabel>
                            Okres:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Select {...register("region")} disabled>
                            {filteredRegions.map((region) => {
                                return (
                                    <option key={region.id} value={region.id}>
                                        {region.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <ErrorText>{errors.region?.message}</ErrorText>
                    </FormControl>

                    <FormControl display="flex" flexDirection="column">
                        <FormLabel>
                            Město:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            {...register("city")}
                            placeholder="Město"
                            type="text"
                        />
                        <ErrorText>{errors.city?.message}</ErrorText>
                    </FormControl>
                </Stack>
                <FormControl display="flex" flexDirection="column">
                    <FormLabel>
                        Adresa společnosti:{" "}
                        <Text as="span" color="red">
                            {" "}
                            *
                        </Text>
                    </FormLabel>
                    <Input
                        {...register("address")}
                        placeholder="Adresa"
                        type="text"
                        name="address"
                        autoComplete="address"
                    />
                    <ErrorText>{errors.address?.message}</ErrorText>
                </FormControl>

                <Tooltip
                    label={`Návštěvní dny jsou možné pouze ve dnech 3. - 4.10.2024.`}
                >
                    <Flex w="fit-content" align="center" gap="8px">
                        <Text fontWeight={500}>Návštěvní dny:</Text>
                        <InfoOutlineIcon color="blue.600" />
                    </Flex>
                </Tooltip>
                <Grid
                    gridTemplateColumns={{
                        base: "28px 1fr",
                        md: "1fr 0.5fr 0.5fr",
                    }}
                    gap="8px"
                    alignItems="center"
                    gridTemplateAreas={{
                        base: `
                            "LABEL_1 LABEL_1 LABEL_1 LABEL_1"
                            "DATE_1 DATE_1 DATE_1 DATE_1"
                            "TIME_1 TIME_1 TIME_2 TIME_2"
                            "ERROR_DATE_1 ERROR_DATE_1 ERROR_DATE_1 ERROR_DATE_1"
                            "LABEL_2 LABEL_2 LABEL_2 LABEL_2"
                            "DATE_2 DATE_2 DATE_2 DATE_2"
                            "TIME_2_1 TIME_2_1 TIME_2_2 TIME_2_2"
                            `,
                        md: `
                        "LABEL_1 LABEL_1 LABEL_1 LABEL_1 LABEL_1"
                        "DATE_1 DATE_1  DATE_1 TIME_1 TIME_2"
                        "ERROR_DATE_1 ERROR_DATE_1 ERROR_DATE_1 ERROR_DATE_1 ERROR_DATE_1"
                        "LABEL_2 LABEL_2 LABEL_2 LABEL_2 LABEL_2"
                        "DATE_2 DATE_2 DATE_2 TIME_2_1 TIME_2_2"
                        `,
                    }}
                >
                    <Text gridArea="LABEL_1" fontSize="14px">
                        První datum návštěvy{" "}
                        <Text as="span" color="red">
                            {" "}
                            *
                        </Text>
                    </Text>
                    <FormControl gridArea="DATE_1">
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                            min="2024-10-03"
                            max="2024-10-04"
                            {...register("firstDate")}
                        />
                    </FormControl>
                    <FormControl
                        gridArea="TIME_1"
                        display="flex"
                        alignItems="flex-end"
                    >
                        <FormLabel>od:</FormLabel>
                        <Input
                            placeholder="Select Date and Time"
                            size="md"
                            type="time"
                            {...register("firstStartTime")}
                        />
                    </FormControl>
                    <FormControl
                        gridArea="TIME_2"
                        display="flex"
                        alignItems="flex-end"
                    >
                        <FormLabel>do:</FormLabel>
                        <Input
                            size="md"
                            type="time"
                            {...register("firstEndTime")}
                        />
                    </FormControl>
                    <ErrorText gridArea="ERROR_DATE_1">
                        {errors.firstDate?.message ||
                            errors.firstStartTime?.message ||
                            (errors.firstEndTime?.message && requiredErrorText)}
                    </ErrorText>

                    <Text gridArea="LABEL_2" fontSize="14px">
                        Druhý datum návštěvy
                    </Text>
                    <FormControl gridArea="DATE_2">
                        <Input
                            size="md"
                            type="date"
                            min="2024-10-03"
                            max="2024-10-04"
                            {...register("secondDate")}
                        />
                    </FormControl>
                    <FormControl
                        gridArea="TIME_2_1"
                        display="flex"
                        alignItems="flex-end"
                    >
                        <FormLabel>od:</FormLabel>
                        <Input
                            size="md"
                            type="time"
                            {...register("secondStartTime")}
                        />
                    </FormControl>
                    <FormControl
                        gridArea="TIME_2_2"
                        display="flex"
                        alignItems="flex-end"
                    >
                        <FormLabel>do:</FormLabel>
                        <Input
                            size="md"
                            type="time"
                            {...register("secondEndTime")}
                        />
                    </FormControl>
                </Grid>

                <FormControl display="flex" pt={4}>
                    <FormLabel htmlFor="isFreeCapacity" mb="0">
                        Volná kapacita pro doprovodný program:
                    </FormLabel>
                    <Switch
                        id="isFreeCapacity"
                        {...register("isFreeCapacity")}
                    />
                </FormControl>

                <FormControl display="flex" pt={4}>
                    <FormLabel htmlFor="isSupportingProgram" mb="0">
                        Doprovodný program:
                        <Text
                            as="span"
                            color="red"
                            display={
                                isWatchSupportingProgram ? "inline" : "none"
                            }
                        >
                            {" "}
                            *
                        </Text>
                    </FormLabel>
                    <Switch
                        id="isSupportingProgram"
                        {...register("isSupportingProgram")}
                    />
                </FormControl>

                {isWatchSupportingProgram && (
                    <>
                        <FormControl display="flex" flexDirection="column">
                            <Textarea
                                {...register("supportingProgram")}
                                name="supportingProgram"
                                rows={5}
                                placeholder="Máte zajímavé téma, návrh na přednášku, či chcete nabídnout zájemcům otevřený neformální rozhovor?"
                            />
                            <ErrorText>
                                {errors.supportingProgram?.message}
                            </ErrorText>
                        </FormControl>
                        <FormControl
                            display="flex"
                            flexDirection="column"
                            w={{ base: "100%", md: "50%" }}
                        >
                            <Tooltip label="Zadejte e-mail, na který Vás budou zájemci o doprovodný program kontaktovat.">
                                <FormLabel>
                                    Kontaktní e-mail:{" "}
                                    <Text as="span" color="red">
                                        {" "}
                                        *
                                    </Text>
                                    <InfoOutlineIcon
                                        color="blue.600"
                                        ml="8px"
                                        mb="6px"
                                    />
                                </FormLabel>
                            </Tooltip>
                            <Input
                                placeholder="E-mail"
                                type="email"
                                autoComplete="email"
                                {...register("contactEmail")}
                            />
                            <ErrorText>
                                {errors.contactEmail?.message}
                            </ErrorText>
                        </FormControl>
                    </>
                )}

                <FormControl display="flex" pt={4}>
                    <FormLabel htmlFor="isFreePlaces" mb="0">
                        Aktuálně volné pracovní místa:{" "}
                    </FormLabel>
                    <Switch id="isFreePlaces" {...register("isFreePlaces")} />
                </FormControl>

                <Button variant="primary" size="md" type="submit" mt={4}>
                    Odeslat
                </Button>
            </form>
        </Stack>
    );
}
