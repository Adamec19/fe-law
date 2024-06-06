import { AxiosError } from "axios";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";

import { JobPositionAddRequest } from "../../../services/jobDetail/jobDetailService.types";
import { createJobPosition } from "../../../services/jobDetail/jobDetailService";

export type UseAddJobPositionOptions = Omit<
    UseMutationOptions<void, AxiosError, JobPositionAddRequest>,
    "mutationKey" | "mutationFn"
>;

export const useCreateJobPosition = (options?: UseAddJobPositionOptions) => {
    return useMutation<void, AxiosError, JobPositionAddRequest>({
        mutationKey: ["addJobPosition"],
        mutationFn: async (request: JobPositionAddRequest) => {
            return createJobPosition(request);
        },
        ...options,
    });
};
