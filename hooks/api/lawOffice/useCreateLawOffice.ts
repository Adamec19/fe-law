import { AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { AddLawOfficeRequest } from "../../../services/lawOffices/lawService.types";
import { createLawOffice } from "../../../services/lawOffices/lawService";

export type UseAddLawOfficeOptions = Omit<
    UseMutationOptions<void, AxiosError, AddLawOfficeRequest>,
    "mutationKey" | "mutationFn"
>;

export const useCreateLawOffice = (options?: UseAddLawOfficeOptions) => {
    return useMutation<void, AxiosError, AddLawOfficeRequest>({
        mutationKey: ["addLawOffice"],
        mutationFn: async (request: AddLawOfficeRequest) => {
            return createLawOffice(request);
        },
        ...options,
    });
};
