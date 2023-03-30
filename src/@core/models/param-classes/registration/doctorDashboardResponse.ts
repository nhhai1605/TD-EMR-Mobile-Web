import { DDB_DiagnosisTreatment } from "@core/models/registrations/DDBDiagnosisTreatment";
import { DDB_ICD10Items } from "@core/models/registrations/DDBICD10Items";
import { DDB_PCLImageResult } from "@core/models/registrations/DDBPCLImageResult";
import { DDB_PCLLaboratoryResult } from "@core/models/registrations/DDBPCLLaboratoryResult";
import { DDB_PhysicalExamination } from "@core/models/registrations/DDBPhysicalExamination";
import { DDB_PrescriptionDetails } from "@core/models/registrations/DDBPrescriptionDetails";
import { DDB_RiskFactors } from "@core/models/registrations/DDBRiskFactors";
import { DDB_WarningAndAllergies } from "@core/models/registrations/DDBWarningAndAllergies";

export interface DoctorDashboardResponse {
    lstPhysicalExamination: DDB_PhysicalExamination[];
    lstDiagnosisTreatment: DDB_DiagnosisTreatment[];
    lstICD10Items: DDB_ICD10Items[];
    lstPCLImageResult: DDB_PCLImageResult[];
    lstPCLLaboratoryResult: DDB_PCLLaboratoryResult[];
    lstPrescriptionDetails: DDB_PrescriptionDetails[];
    riskFactors: DDB_RiskFactors;
    warningAndAllergies: DDB_WarningAndAllergies;
}