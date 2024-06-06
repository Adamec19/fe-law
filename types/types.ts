export type Endpoints = {
    lawOffice: {
        getAll: string;
        addLawOffice: string;
        getLawOfficeByHashId: string;
        updateLawOffice: string;
    };
    jobPosition: {
        getAll: string;
        addJobPosition: string;
        getDetail: string;
        getJobPositionByHashId: string;
        updateJobPosition: string;
    };
};

export enum ContractType {
    "HPP" = "HPP",
    "SALARY_HELP" = "SALARY_HELP",
    "UNPAID_HELP" = "UNPAID_HELP",
}

export enum TimeDemand {
    "FREE" = "FREE",
    "REGULAR" = "REGULAR",
    "IRREGULAR" = "IRREGULAR",
}

export type Status = "APPROVED" | "PENDING" | "REJECTED";

export enum InfoType {
    JOB_POSITION_APPROVE = "1",
    JOB_POSITION_DELETE = "2",
    LAW_OFFICE_APPROVE = "3",
}
