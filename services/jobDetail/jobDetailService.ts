import { AxiosRequestConfig } from "axios";

import { makeRequest } from "../ApiService";
import {
    JobDetailResponse,
    JobDetailUpdateRequest,
    JobDetailUpdateResponse,
    JobPositionAddRequest,
    JobPositionAllResponse,
} from "./jobDetailService.types";
import { endpoints } from "../../config/endpoints";
import { Status } from "@/types/types";

export const getJobDetail = (
    jobPositionId: string,
    config: AxiosRequestConfig = {}
) => {
    return makeRequest<JobDetailResponse>(
        "get",
        endpoints.jobPosition.getDetail.replace("{id}", jobPositionId),
        undefined,
        undefined,
        config
    );
};

export const getJobPositionByHashId = (
    jobPositionHashId: string,
    config: AxiosRequestConfig = {}
) => {
    return makeRequest<JobDetailUpdateResponse>(
        "get",
        endpoints.jobPosition.getJobPositionByHashId.replace(
            "{hashId}",
            jobPositionHashId
        ),
        undefined,
        undefined,
        config
    );
};

export const getAllJobsPosition = (
    queryParams: {
        page?: number;
        limit?: number;
        location?: string;
        status?: Status;
    },
    config: AxiosRequestConfig = {}
) => {
    const params = new URLSearchParams();
    if (queryParams.page) {
        params.append("page", queryParams.page.toString());
    }
    if (queryParams.limit) {
        params.append("limit", queryParams.limit.toString());
    }
    if (queryParams.location) {
        params.append("location", queryParams.location);
    }
    if (queryParams.status) {
        params.append("status", queryParams.status);
    }
    let urlWithParams = `${endpoints.jobPosition.getAll}`;
    if (params.toString()) {
        urlWithParams += `?${params.toString()}`;
    }

    return makeRequest<JobPositionAllResponse>(
        "get",
        urlWithParams,
        undefined,
        undefined,
        config,
        true
    );
};

export const createJobPosition = (
    request: JobPositionAddRequest,
    config: AxiosRequestConfig = {}
) => {
    return makeRequest<void>(
        "post",
        endpoints.jobPosition.addJobPosition,
        undefined,
        request,
        config
    );
};

export const updateJobPosition = (
    jobPositionId: string,
    request: JobDetailUpdateRequest,
    config: AxiosRequestConfig = {}
) => {
    return makeRequest<void>(
        "put",
        endpoints.jobPosition.updateJobPosition.replace("{id}", jobPositionId),
        undefined,
        request,
        config
    );
};
