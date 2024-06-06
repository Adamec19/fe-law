import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import {
    LawOfficeResponse,
    getAllLawOffices,
} from "../../../services/lawOffices";
import { DEFAULT_PAGE, LIMIT_PER_PAGE } from "@/config/global";
import { Status } from "@/types/types";

export type UseLawOfficeOptions = {
    forceEnabled?: boolean;
    params: {
        status?: Status;
        region?: number;
        page?: number;
        limit?: number;
    };
};

export const useGetLawOffice = ({
    forceEnabled = true,
    params = {
        limit: LIMIT_PER_PAGE,
        page: DEFAULT_PAGE,
        status: "APPROVED",
        region: 11,
    },
}: UseLawOfficeOptions) => {
    return useQuery<LawOfficeResponse, AxiosError>({
        queryKey: ["lawOffices", forceEnabled, params],
        queryFn: async () => {
            return getAllLawOffices(params, {});
        },
        staleTime: 10 * (60 * 1000),
        enabled: forceEnabled,
    });
};
