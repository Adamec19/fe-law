import { AxiosRequestConfig } from "axios";

import { makeRequest } from "../ApiService";
import {
    AddLawOfficeRequest,
    LawOfficeResponse,
    LawOfficeUpdateRequest,
    LawOfficeUpdateResponse,
} from "./lawService.types";
import { endpoints } from "../../config/endpoints";
import { Status } from "@/types/types";

export const getAllLawOffices = (
    queryParams: {
        status?: Status;
        region?: number;
        page?: number;
        limit?: number;
    },
    config: AxiosRequestConfig = {}
) => {
    const params = new URLSearchParams();
    if (queryParams.status) {
        params.append("status", queryParams.status);
    }
    if (queryParams.region) {
        params.append("region", queryParams.region.toString());
    }
    if (queryParams.page) {
        params.append("page", queryParams.page.toString());
    }
    if (queryParams.limit) {
        params.append("limit", queryParams.limit.toString());
    }
    let urlWithParams = `${endpoints.lawOffice.getAll}`;
    if (params.toString()) {
        urlWithParams += `?${params.toString()}`;
    }
    return makeRequest<LawOfficeResponse>(
        "get",
        urlWithParams,
        undefined,
        undefined,
        config,
        true
    );
};

export const createLawOffice = async (
    request: AddLawOfficeRequest,
    config: AxiosRequestConfig = {}
): Promise<void> => {
    return makeRequest<void>(
        "post",
        endpoints.lawOffice.addLawOffice,
        undefined,
        request,
        config
    );
};

export const getLawOfficeByHashId = async (
    lawOfficeHashId: string,
    config: AxiosRequestConfig = {}
): Promise<LawOfficeUpdateResponse> => {
    return makeRequest<LawOfficeUpdateResponse>(
        "get",
        endpoints.lawOffice.getLawOfficeByHashId.replace(
            "{hashId}",
            lawOfficeHashId
        ),
        undefined,
        undefined,
        config
    );
};

export const updateLawOffice = async (
    lawOfficeId: string,
    request: LawOfficeUpdateRequest,
    config: AxiosRequestConfig = {}
): Promise<void> => {
    return makeRequest<void>(
        "put",
        endpoints.lawOffice.updateLawOffice.replace("{id}", lawOfficeId),
        undefined,
        request,
        config
    );
};
