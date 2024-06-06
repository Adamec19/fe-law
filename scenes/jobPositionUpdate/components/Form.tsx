"use client";

import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Textarea,
    Text,
    Tooltip,
    useMediaQuery,
    useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { InferType, mixed, object, string } from "yup";

import { ContractType, TimeDemand } from "../../../types/types";
import ErrorText from "../../../components/ErrorText";
import regions from "../../../data/regions";
import MotionButton from "../../../components/MotionButton";
import { JobDetailUpdateResponse } from "@/services/jobDetail/jobDetailService.types";
import { useUpdateJobPosition } from "@/hooks/api/jobPosition/useUpdateJobPosition";
import { DEFAULT_MAIL } from "@/config/global";

const requiredErrorText = "Vyplňte povinné pole.";

const schema = object({
    title: string().required(requiredErrorText).max(100).min(3),
    jobTitle: string().required(requiredErrorText).max(32).min(3),
    companyName: string().required(requiredErrorText).max(32).min(3),
    jobDescription: string().required(requiredErrorText).max(1000).min(3),
    otherConditions: string().max(500).default(""),
    contractType: mixed<ContractType>()
        .oneOf(Object.values(ContractType))
        .required(),
    boardingDate: string().required(requiredErrorText).max(32).min(3),
    hourSalary: string().optional(),
    location: string().optional().max(32).nullable(),
    region: string().required(),
    contactPerson: string().required(requiredErrorText).max(32).min(3),
    contactEmail: string().required(requiredErrorText).max(32).min(3),
    contactPhone: string().required(requiredErrorText).max(32).min(3),
    timeDemand: mixed<TimeDemand>().oneOf(Object.values(TimeDemand)).required(),
    companyAddress: string().required(requiredErrorText).max(64).min(3),
}).required();

type FormData = InferType<typeof schema>;

const getHourSalary = (
    contractType: ContractType,
    hourSalary: number | null | undefined
): string => {
    if (contractType === ContractType.UNPAID_HELP && hourSalary === null) {
        return "-";
    }
    if (hourSalary === 0) {
        return "Po domluvě";
    }
    return hourSalary?.toString() ?? "Po domluvě";
};

type FormProps = {
    jobDetail: JobDetailUpdateResponse;
};

export default function Form({ jobDetail }: FormProps) {
    const { push } = useRouter();
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const toast = useToast();
    const {
        handleSubmit,
        register,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            contractType: jobDetail.contractType ?? ContractType.HPP,
            timeDemand: jobDetail.timeDemand ?? TimeDemand.FREE,
            region: jobDetail.region ?? "15",
            location: jobDetail.location ?? "",
            hourSalary: jobDetail.hourSalary ?? "",
            title: jobDetail.title ?? "",
            jobTitle: jobDetail.jobTitle ?? "",
            companyName: jobDetail.companyName ?? "",
            jobDescription: jobDetail.jobDescription ?? "",
            otherConditions: jobDetail.otherConditions ?? "",
            boardingDate: jobDetail.boardingDate ?? "",
            contactPerson: jobDetail.contactPerson ?? "",
            contactEmail: jobDetail.contactEmail ?? "",
            contactPhone: jobDetail.contactPhone ?? "",
            companyAddress: jobDetail.companyAddress ?? "",
        },
    });

    const { mutate: updateJobPosition, isPending } = useUpdateJobPosition({
        onSuccess: () => {
            reset();
            toast({
                title: `Pracovní pozice byla aktualizována.`,
                status: "success",
                duration: 9000,
                isClosable: true,
            });
            push("/prehled-pracovnich-pozic");
        },
        onError: () => {
            toast({
                title: "Formulář se nepodařilo odeslat.",
                description: `Zkuste to prosím později nebo nás kontaktujte na email: ${DEFAULT_MAIL}.`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        },
    });

    const onSubmit = async (data: FormData) => {
        updateJobPosition({
            ...data,
            location: data.location?.length ? data.location : "Nerozhoduje",
            hourSalary: getHourSalary(
                data.contractType,
                parseInt(data.hourSalary ?? "0")
            ),
            _id: jobDetail._id,
        });
    };

    const watchContractType = watch("contractType");
    const watchTimeDemand = watch("timeDemand");

    return (
        <Stack
            p={{ base: "16px", md: "42px" }}
            border="1px solid #E2E8F0"
            borderRadius="8px"
            mb="80px"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    width: "100%",
                }}
            >
                <Grid
                    gap="16px"
                    templateRows="auto 1fr"
                    templateColumns="repeat(2, 1fr)"
                >
                    <Heading
                        as="h3"
                        fontSize="18px"
                        pb="3px"
                        borderBottom="1px solid"
                        borderColor="grey.300"
                        gridColumn="1 / -1"
                        w="fit-content"
                        pr="20px"
                    >
                        Základní údaje
                    </Heading>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn="1 / -1"
                    >
                        <Input
                            {...register("title")}
                            placeholder="Nadpis pro pracovní pozici *"
                            name="title"
                            type="text"
                        />
                        <ErrorText>{errors.title?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("jobTitle")}
                            placeholder="Název zaměstnání *"
                            name="jobTitle"
                            type="text"
                        />
                        <ErrorText>{errors.jobTitle?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("companyName")}
                            placeholder="Název společnost *"
                            name="companyName"
                            type="text"
                            autoComplete="companyName"
                        />
                        <ErrorText>{errors.companyName?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("companyAddress")}
                            placeholder="Adresa společnost *"
                            name="companyAddress"
                            type="text"
                            autoComplete="companyAddress"
                        />
                        <ErrorText>{errors.companyAddress?.message}</ErrorText>
                    </FormControl>
                </Grid>
                <Grid
                    gap="16px"
                    templateRows="auto 1fr"
                    templateColumns="repeat(2, 1fr)"
                >
                    <Heading
                        as="h3"
                        fontSize="18px"
                        pb="3px"
                        borderBottom="1px solid"
                        borderColor="grey.300"
                        gridColumn="1 / -1"
                        w="fit-content"
                        pr="20px"
                    >
                        Informace o práci
                    </Heading>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Textarea
                            {...register("jobDescription")}
                            placeholder="Popis práce *"
                            name="jobDescription"
                            rows={isMobile ? 3 : 7}
                        />
                        <ErrorText>{errors.jobDescription?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Textarea
                            {...register("otherConditions")}
                            placeholder="Ostatní podmínky, požadavky (jazyky, vzdělání, PC...)"
                            name="otherConditions"
                        />
                        <ErrorText>{errors.otherConditions?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <FormLabel>
                            Typ smlouvy:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <RadioGroup
                            onChange={(value) =>
                                setValue("contractType", value as ContractType)
                            }
                            value={watchContractType}
                        >
                            <Stack direction="column" w="fit-content">
                                <Radio value={ContractType.HPP}>
                                    Plný úvazek
                                </Radio>
                                <Radio value={ContractType.SALARY_HELP}>
                                    Placená výpomoc
                                </Radio>
                                <Radio value={ContractType.UNPAID_HELP}>
                                    Neplacená výpomoc
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <ErrorText>{errors.contractType?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <FormLabel>
                            Předpokládaný datum nástupu:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Input
                            {...register("boardingDate")}
                            type="date"
                            name="boardingDate"
                        />
                        <ErrorText>{errors.boardingDate?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn="1 / -1"
                    >
                        <FormLabel>
                            Časová náročnost:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <RadioGroup
                            onChange={(value) =>
                                setValue("timeDemand", value as TimeDemand)
                            }
                            value={watchTimeDemand}
                        >
                            <Stack direction="column" w="fit-content">
                                <Radio value={TimeDemand.FREE}>
                                    Volná pracovní doba nebo dle dohody
                                </Radio>
                                <Radio value={TimeDemand.REGULAR}>
                                    Pravidelná pracovní doba
                                </Radio>
                                <Radio value={TimeDemand.IRREGULAR}>
                                    Nepravidelná prac. doba
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <ErrorText>{errors.timeDemand?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <FormLabel>
                            Region:{" "}
                            <Text as="span" color="red">
                                {" "}
                                *
                            </Text>
                        </FormLabel>
                        <Select {...register("region")}>
                            {regions.map((region) => {
                                return (
                                    <option key={region.id} value={region.id}>
                                        {region.name}
                                    </option>
                                );
                            })}
                        </Select>
                        <ErrorText>{errors.region?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Tooltip
                            label={`Pokud necháte prázdné pole, uvedeme "Nerozhoduje".`}
                        >
                            <FormLabel>
                                Místo výkonu práce:{" "}
                                <InfoOutlineIcon
                                    color="blue.600"
                                    ml="2px"
                                    mb="8px"
                                />
                            </FormLabel>
                        </Tooltip>
                        <Input
                            {...register("location")}
                            placeholder="Lokalita"
                            name="location"
                            type="text"
                        />
                        <ErrorText>{errors.location?.message}</ErrorText>
                    </FormControl>
                    {watchContractType !== ContractType.UNPAID_HELP && (
                        <FormControl
                            display="flex"
                            flexDirection="column"
                            gridColumn={{ base: "1 / -1", md: "unset" }}
                        >
                            <Tooltip
                                label={`Pokud uvedete 0, uvedeme "Po domluvě".`}
                            >
                                <FormLabel>
                                    Přibližná hodinová mzda {" (Kč)"}:
                                    <InfoOutlineIcon
                                        color="blue.600"
                                        ml="4px"
                                        mb="8px"
                                    />
                                </FormLabel>
                            </Tooltip>
                            <Input
                                {...register("hourSalary")}
                                placeholder="Mzda (Kč)"
                                name="hourSalary"
                                type="number"
                            />
                            <ErrorText>{errors.hourSalary?.message}</ErrorText>
                        </FormControl>
                    )}
                </Grid>
                <Grid
                    gap="16px"
                    templateRows="auto 1fr"
                    templateColumns="repeat(2, 1fr)"
                >
                    <Heading
                        as="h3"
                        fontSize="18px"
                        pb="3px"
                        borderBottom="1px solid"
                        borderColor="grey.300"
                        gridColumn="1 / -1"
                        w="fit-content"
                        pr="20px"
                    >
                        Kontaktní údaje
                    </Heading>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("contactPerson")}
                            placeholder="Kontaktní osoba *"
                            name="contactPerson"
                            type="text"
                        />
                        <ErrorText>{errors.contactPerson?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("contactEmail")}
                            placeholder="E-mail *"
                            name="contactEmail"
                            type="email"
                            autoComplete="email"
                        />
                        <ErrorText>{errors.contactEmail?.message}</ErrorText>
                    </FormControl>
                    <FormControl
                        display="flex"
                        flexDirection="column"
                        gridColumn={{ base: "1 / -1", md: "unset" }}
                    >
                        <Input
                            {...register("contactPhone")}
                            placeholder="Telefon *"
                            name="contactPhone"
                            type="text"
                            autoComplete="tel"
                        />
                        <ErrorText>{errors.contactPhone?.message}</ErrorText>
                    </FormControl>
                </Grid>
                <Stack
                    mt={{ base: "12px", md: "24px" }}
                    gap="24px"
                    direction={{ md: "row" }}
                    align="center"
                    justify="center"
                >
                    <MotionButton
                        buttonText="Odeslat"
                        type="submit"
                        isLoading={isPending}
                        loadingText="Odesílám..."
                    />
                </Stack>
            </form>
        </Stack>
    );
}
