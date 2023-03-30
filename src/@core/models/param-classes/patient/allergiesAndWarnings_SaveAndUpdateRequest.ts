import { MDAllergy} from "@core/models/patients/mdAllergy";
import { MDWarning } from "@core/models/patients/mdWarning";

export interface AllergiesAndWarnings_SaveAndUpdateRequest {
    mDWarning: MDWarning;
    mDAllergy: MDAllergy;
}