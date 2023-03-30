import { eModules } from "./permissions";

export enum TDModuleEnum {
    PatientRegistration = eModules.mPatient,
    MedicalExamination = eModules.mConsultation,
    PatientAppointment = eModules.mAppointment_System,
    Tests = eModules.mCLSLaboratory,
    GeneralHealthCheck = eModules.mMedicalExamination,
    Subclinical = eModules.mCLSImaging,
    Pharmacy = eModules.mPharmacy,
    SystemConfig = eModules.mConfiguration_Management,
    Report = eModules.mTransaction_Management,
    UserManagement = eModules.mUserAccount
}
