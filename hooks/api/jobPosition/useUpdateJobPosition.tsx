import { AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { JobDetailUpdateRequest } from "../../../services/jobDetail/jobDetailService.types";
import { updateJobPosition } from "../../../services/jobDetail/jobDetailService";

export type UseUpdateJobPositionOptions = Omit<
    UseMutationOptions<void, AxiosError, JobDetailUpdateRequest>,
    "mutationKey" | "mutationFn"
>;

export const useUpdateJobPosition = (options?: UseUpdateJobPositionOptions) => {
    return useMutation<void, AxiosError, JobDetailUpdateRequest>({
        mutationKey: ["updateJobPosition"],
        mutationFn: async (request: JobDetailUpdateRequest) => {
            return updateJobPosition(request._id, request);
        },
        ...options,
    });
};
