import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { DEFAULT_PAGE, LIMIT_PER_PAGE } from "../../../config/global";
import { JobPositionAllResponse } from "../../../services/jobDetail/jobDetailService.types";
import { getAllJobsPosition } from "../../../services/jobDetail/jobDetailService";
import { Status } from "@/types/types";

type UseJobsPositionAllProps = {
    forceEnabled?: boolean;
    params: {
        location?: string;
        status?: Status;
        page?: number;
        limit?: number;
    };
};

export function useGetJobsPositionAll({
    params = {
        limit: LIMIT_PER_PAGE,
        status: "APPROVED",
        page: DEFAULT_PAGE,
        location: "",
    },
}: UseJobsPositionAllProps) {
    return useQuery<JobPositionAllResponse, AxiosError>({
        queryKey: ["jobsPosition", params],
        queryFn: async () => {
            return getAllJobsPosition(params, {});
        },
        // enabled: forceEnabled,
        // initialData: jobDetail,
    });
}
