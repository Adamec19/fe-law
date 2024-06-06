import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    Method,
} from "axios";

import { SuccessResponseData } from "./types";

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const makeRequest = async <
    ReturnDataType = never,
    RequestData = unknown
>(
    method: Method,
    url: string,
    accessToken?: string,
    data?: RequestData,
    requestConfig?: AxiosRequestConfig,
    getAllData?: boolean
): Promise<ReturnDataType> => {
    let headers = {};
    if (accessToken) {
        headers = {
            ...headers,
            Authorization: `Bearer ${accessToken}`,
        };
    }

    const { data: responseData } = await api.request<
        SuccessResponseData<ReturnDataType>,
        AxiosResponse<SuccessResponseData<ReturnDataType>>,
        RequestData
    >({
        ...(requestConfig || {}),
        url,
        method,
        data,
        headers,
    });
    if (getAllData) {
        return responseData as unknown as Promise<ReturnDataType>;
    }
    if (responseData?.data && !responseData.perPage) {
        return responseData?.data;
    }
    return responseData as unknown as Promise<ReturnDataType>;
};

export default api;
