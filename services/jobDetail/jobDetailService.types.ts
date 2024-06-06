import { ContractType, Status, TimeDemand } from "../../types/types";

export type JobDetailResponse = {
    _id: string;
    title: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    otherConditions: string;
    contractType: ContractType;
    boardingDate: string;
    hourSalary: string;
    location: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    timeDemand: TimeDemand;
    companyAddress: string;
};

export type JobDetailUpdateResponse = {
    _id: string;
    title: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    otherConditions: string;
    contractType: ContractType;
    boardingDate: string;
    hourSalary: string;
    location: string;
    region: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    timeDemand: TimeDemand;
    hashId: string;
    status: Status;
    companyAddress: string;
};

export type JobDetailUpdateRequest = JobDetailResponse;

export type JobPositionAddRequest = Omit<JobDetailResponse, "_id"> & {
    status: Status;
};

export type JobPositionAllResponse = {
    currentPage: number;
    totalPages: number;
    data: JobDetailResponse[];
};
