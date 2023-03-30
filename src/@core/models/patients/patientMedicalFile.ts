export interface PatientMedicalFile {
  patientMedicalFileID?: number;
  patientID?: number;
  patientRecID?: number;
  fileCodeNumber?: string;
  fileBarcodeNumber?: string;
  storageFilePath?: string;
  storageFileName?: string;
  recCreatedDate?: string;
  finishedDate?: string;
  isActive?: boolean;
  locName?: string;
}

export interface PatientMedicalRecord {
  patientRecID?: number;
  patientID?: number;
  nationalMedicalCode?: string;
  patientRecBarCode?: string;
  createdDate?: string;
  finishedDate?: string;
  ptRegistrationID?: number;
  examDate?: string;
  latestPrescriptionID?: number;
}
