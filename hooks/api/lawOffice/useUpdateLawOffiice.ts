import { AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { LawOfficeUpdateRequest } from "@/services/lawOffices/lawService.types";
import { updateLawOffice } from "@/services/lawOffices/lawService";

export type UseUpdateLawOfficeOptions = Omit<
    UseMutationOptions<void, AxiosError, LawOfficeUpdateRequest>,
    "mutationKey" | "mutationFn"
>;

export const useUpdateLawOffice = (options?: UseUpdateLawOfficeOptions) => {
    return useMutation<void, AxiosError, LawOfficeUpdateRequest>({
        mutationKey: ["updateLawOffice"],
        mutationFn: async (request: LawOfficeUpdateRequest) => {
            return updateLawOffice(request._id, request);
        },
        ...options,
    });
};
