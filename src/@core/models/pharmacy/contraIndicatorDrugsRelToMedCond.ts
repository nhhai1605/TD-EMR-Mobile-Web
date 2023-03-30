import { RefGenericDrugDetail } from './refGenericDrugDetail';
import { RefMedContraIndicationTypes } from './refMedContraIndicationTypes';

export interface ContraIndicatorDrugsRelToMedCond {
  drugsMCTypeID?: number;
  mCTypeID?: number;
  drugID?: number;
  refGenericDrugDetail?: RefGenericDrugDetail;
  refMedicalConditionType?: RefMedContraIndicationTypes;
  refMedicalCondition?: RefMedContraIndicationICD;
  isWarning?: boolean;
}

export interface RefMedContraIndicationICD {
  mCID?: number;
  medContraTypeID?: number;
  mCDescription?: string;
  medicalConditionRecords?: MedicalConditionRecord[];
  refMedicalConditionTypes?: RefMedContraIndicationTypes[];
  refMedicalConditionType?: RefMedContraIndicationTypes;
  iCD10Code?: string;
  diseaseNameVN?: string;
}

export interface MedicalConditionRecord {
  mCID?: number;
  isEdit?: boolean;
  isDeleted?: boolean;
  refMedicalCondition?: RefMedContraIndicationICD;
  mCExplainOrNotes?: string;
  mCTextValue?: string;
  mCYesNo?: boolean;
  isSave?: boolean;
  commonMedRecID?: number;
  mCRecID?: number;
  isCancel?: boolean;
}
