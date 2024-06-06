import { Endpoints } from "../types/types";

export const endpoints: Endpoints = {
    lawOffice: {
        getAll: "/api",
        addLawOffice: "/api",
        getLawOfficeByHashId: "/api/law-office/hash/{hashId}",
        updateLawOffice: "/api/law-office/{id}",
    },
    jobPosition: {
        getAll: "/api/job-position/all",
        addJobPosition: "/api/job-position",
        getDetail: "/api/job-position/{id}",
        getJobPositionByHashId: "/api/job-position/hash/{hashId}",
        updateJobPosition: "/api/job-position/{id}",
    },
};
