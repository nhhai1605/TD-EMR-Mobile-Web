import { ContraIndicatorDrugsRelToMedCond, RefMedContraIndicationICD } from './contraIndicatorDrugsRelToMedCond';

export interface RefMedContraIndicationTypes {
  medContraTypeID?: number;
  medContraIndicationType?: string;
  contraIndicatorDrugsRelToMedConds?: ContraIndicatorDrugsRelToMedCond[];
  refMedicalCondition?: RefMedContraIndicationICD;
  ageFrom?: number;
  ageTo?: number;
  isWarning?: boolean;
}

export interface RefGenericRelation {
  genericRelationID?: number;
  firstGeneric?: RefGeneric;
  secondGeneric?: RefGeneric;
  isSimilar?: boolean;
  isInteraction?: boolean;
  v_InteractionSeverityLevel?: any;
  v_InteractionWarningLevel?: any;
}

export interface RefGeneric {
  genericID?: number;
  genericCode?: string;
  genericName?: string;
  active?: boolean;
  genericDescription?: string;
}
