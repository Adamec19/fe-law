import { useQuery } from "@tanstack/react-query";

import { JobDetailResponse, getJobDetail } from "../../../services/jobDetail";

type UseJobDetailProps = {
    id: string;
    jobDetail?: JobDetailResponse;
    forceEnabled?: boolean;
};

export function useGetJobDetail({
    id,
    jobDetail,
    forceEnabled = false,
}: UseJobDetailProps) {
    return useQuery({
        queryKey: ["jobDetail", id],
        queryFn: async () => {
            return getJobDetail(id);
        },
        enabled: forceEnabled,
        initialData: jobDetail,
    });
}
