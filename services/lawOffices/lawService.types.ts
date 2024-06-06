import { Status } from "@/types/types";

export type LawOfficeResponse = {
    data: LawOffice[];
    totalPages: number;
    currentPage: number;
};

export type AddLawOfficeRequest = {
    companyName: string;
    ico: string;
    region: number;
    address: string;
    email: string;
    isSupportingProgram: boolean;
    supportingProgram?: string;
    isFreePlaces: boolean;
    isFreeCapacity: boolean;
    firstDate: string;
    firstStartTime: string;
    firstEndTime: string;
    secondDate?: string;
    secondStartTime?: string;
    secondEndTime?: string;
    phone: string;
    contactEmail: string;
    city: string;
};

export type LawOfficeUpdateRequest = { _id: string } & AddLawOfficeRequest;

export type LawOffice = {
    companyName: string;
    _id: string;
    isFreePlaces: boolean;
    address: string;
    email: string;
    region: string;
    isSupportingProgram: boolean;
    isFreeCapacity: boolean;
    supportingProgram: string;
    phone: string;
    status: Status;
    firstDate: string;
    firstStartTime: string;
    firstEndTime: string;
    secondDate?: string;
    secondStartTime?: string;
    secondEndTime?: string;
    contactEmail: string;
    city: string;
};

export type LawOfficeUpdateResponse = {
    _id: string;
    companyName: string;
    email: string;
    ico: string;
    region: number;
    address: string;
    isSupportingProgram: boolean;
    supportingProgram: string;
    isFreePlaces: boolean;
    phone: string;
    status: Status;
    firstDate: string;
    firstStartTime: string;
    firstEndTime: string;
    secondDate?: string;
    secondStartTime?: string;
    secondEndTime?: string;
    hashId: string;
    contactEmail: string;
    city: string;
};
