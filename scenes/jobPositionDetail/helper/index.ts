import { ContractType, TimeDemand } from "../../../types/types";

export const getContractText = (contractType: ContractType) => {
    switch (contractType) {
        case ContractType.HPP:
            return "Full-time";
        case ContractType.SALARY_HELP:
            return "Placená výpomoc";
        case ContractType.UNPAID_HELP:
            return "Neplacená výpomoc";
    }
};

export const getTimeDemandText = (contractType: TimeDemand) => {
    switch (contractType) {
        case TimeDemand.FREE:
            return "Volná pracovní doba";
        case TimeDemand.REGULAR:
            return "Pravidelná pracovní doba";
        case TimeDemand.IRREGULAR:
            return "Nepravidelná pracovní doba";
    }
};
