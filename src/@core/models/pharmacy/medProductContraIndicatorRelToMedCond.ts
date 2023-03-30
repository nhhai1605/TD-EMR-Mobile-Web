import { RefMedContraIndicationICD } from "./contraIndicatorDrugsRelToMedCond";
import { RefMedContraIndicationTypes } from "./refMedContraIndicationTypes";

export interface MedProductContraIndicatorRelToMedCond {
    drugID: number;
    brandName: string;
    isWarning: boolean;
    refMedicalCondition: RefMedContraIndicationICD;
    refMedicalConditionType: RefMedContraIndicationTypes;
}