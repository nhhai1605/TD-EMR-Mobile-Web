export interface RefGenMedDrugDetails {
  medGenDrugID?: number;
  genMedProductID?: number;
  content?: string;
  dosage?: string;
  composition?: string;
  activeIngredient?: string;
  indication?: string;
  contraindication?: string;
  precaution_Warn?: string;
  sideEffects?: string;
  interaction?: string;
  advTimeBeforeExpire?: number;
  isConsult?: boolean;
  refGenDrugBHYT_CatID?: number;
  keepRefrigerated?: boolean;
  maxDayPrescribed?: number;
  dosageForm?: string;
  drugForm?: string;
  vidalGroup?: string;
  v_GroupTypeForReport20?: number;
  tCKTAndTCCNGroup?: string;
  howToUse?: string;
  referencesDocument?: string;
  indicationInfo?: string;
  privateContent?: string;
  isAcceptRoundValue?: boolean;
  currentRefGenDrugBHYT_Category?: RefGenDrugBHYT_Category;
}

export interface RefGenDrugBHYT_Category {
  refGenDrugBHYT_CatID?: number;
  categoryName?: string;
  categoryDescription?: string;
  ingredientOrderNo?: number;
  drugOrderNo?: string;
  groupParentID?: number;
  groupID?: number;
  isChecked?: boolean;
  isCombined?: boolean;
  drugOrderNoAndCategoryName?: string;
}
