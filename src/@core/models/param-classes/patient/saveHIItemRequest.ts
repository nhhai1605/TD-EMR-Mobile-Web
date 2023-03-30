import { HealthInsurance } from "@core/models/patients/healthInsurance";

export interface SaveHIItemRequest {
    hiItem: HealthInsurance;
    staffID: number;
}