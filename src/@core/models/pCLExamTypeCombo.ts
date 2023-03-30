import { PCLExamType } from "./appointments/pCLExamType";

export interface PCLExamTypeCombo {
  pCLExamTypeComboID: number;
  comboName: string;
  comboDescription: string;
  creatorStaffID: number;
  staffName: string;
  recCreatedDate: string;
  pCLExamTypeComboItems: PCLExamTypeComboItem[];
}

export interface PCLExamTypeComboItem {
  pCLExamTypeComboItemID: number;
  pCLExamTypeComboID: number;
  pCLExamTypeID: number;
  pCLExamType: PCLExamType;
}

export interface PCLExamTypeSubCategory {
  pCLExamTypeSubCategoryID: number;
  v_PCLMainCategory: number;
  pCLSubCategoryName: string;
  pCLSubCategoryDescription: string;
}