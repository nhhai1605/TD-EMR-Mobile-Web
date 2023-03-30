import { HealthInsurance } from "@core/models/patients/healthInsurance";

export interface UpdateHIItemRequest {
    hiItem: HealthInsurance;
    isEditAfterRegistration: boolean;
    staffID: number;
    reason: string;
}