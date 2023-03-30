import { RefMedContraIndicationTypes } from "@core/models/pharmacy/refMedContraIndicationTypes";

export interface InsertConIndicatorDrugsRelToMedCond_NewRequest {
  lstRefMedicalCondition: RefMedContraIndicationTypes[];
  drugID: number;
}
