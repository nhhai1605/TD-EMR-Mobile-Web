export interface PrescriptionSearchCriteria {
  patientNameString?: string;
  fullName?: string;
  pMFCode?: string;
  prescriptID?: number;
  patientID?: number;
  patientCode?: string;
  hICardCode?: string;
  fromDate?: string;
  toDate?: string;
  creatorStaffIDName?: string;
  orderBy?: string;
  isInsurance?: boolean;
  prescriptionIssueCode?: string;
  ptRegistrationID?: number;
}
