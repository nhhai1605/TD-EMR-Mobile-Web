import { V_FamilyRelationship } from "../enums/emrEnum"
import {
  V_AlcoholDrinkingStatus,
  V_AsphyxiaAtBirth,
  V_DeliveryType,
  V_DietStatus,
  V_DiseaseStage,
  V_DiseaseStatus,
  V_HighCholesterolStatus,
  V_HighGlucoseStatus, 
  V_HighPressureStatus,
  V_OverWeightStatus,
  V_PhysicalInactivityStatus,
  V_StressStatus,
  V_TermAtBirth,
  V_TobaccoSmokingStatus
} from "../enums/patientMedicalHistory"

export enum DeliveryTypeEnum {
  SINHTHUONG = 'AB.1.01',
  SINHMO = 'AB.1.02',
  SINHHUT = 'AB.1.03'
}

export enum TermEnum {
  DUTHANG = 'AB.2.01',
  THIEUTHANG = 'AB.2.02'
}

export enum AsphyxiaEnum {
  BINGATLUCSINH = "AB.3.01",
  KHONGBINGATLUCSINH = "AB.3.02"
}

export enum OverWeightEnum {
  BINHTHUONG = 'RF.1.01',
  THUACAN = "RF.1.02",
  BEOPHI = "RF.1.03"
}

export enum StressEnum {
  KHONGCO = "RF.62.01",
  NHE = "RF.62.02",
  TRUNGBINH = "RF.62.03",
  NGHIEMTRONG = "RF.62.04"
}

export enum DietEnum {
  THAP = "RF.63.01",
  TRUNGBINH = "RF.63.02",
  CAO = "RF.63.03"
}

export enum PhysicalInactivityEnum {
  VANDONGDAYDU = "RF.2.01",
  VANDONGIT = "RF.2.02"
}

export enum TobaccoSmokingEnum {
  CHUATUNG = "RF.3.01",
  DABO = "RF.3.02",
  NGAY10DIEU = "RF.3.03",
  NHOHON20DIEU = "RF.3.04",
  HON20DIEU = "RF.3.05"
}

export enum AlcoholDrinkingEnum {
  CHUATUNGUONG = "RF.4.01",
  VAITHANG1LAN = "RF.4.02",
  THANG23LAN = "RF.4.03",
  TUAN23LAN = "RF.4.04",
  TUANHON3LAN = "RF.4.05"
}

export enum HighPressureEnum {
  BINHTHUONG = "RF.5.01",
  CAOCHUADIEUTRI = "RF.5.02",
  CAODANGDIEUTRI = "RF.5.04",
  THAPCHUADIEUTRI = "RF.5.05",
  THAPDANGDIEUTRI = "RF.5.06"
}

export enum HighGlucoseEnum {
  DUONGDOIINHTHUONG = "RF.6.01",
  DUONGDOICAOCHUADIEUTRI = "RF.6.02",
  DUONGDOICAODANGDIEUTRI = "RF.6.04",
  DUONGDOICAOTHAP = "RF.6.05",
}

export enum HighCholesterolEnum {
  BINHTHUONG = "RF.7.01",
  CAOCHUADIEUTRI = "RF.7.02",
  CAODANGDIEUTRI = "RF.7.03"
}

export interface PatientMedicalHistoryDto {
  atBirthStatus: AtBirthStatusModel,
  riskFactorHistory: RiskFactorHistoryModel,
  allergyHistory: Array<AllergyHistoryModel>,
  diseaseHistory: Array<DiseaseHistoryModel>,
  disabilities: DisabilitiesModel,
  surgeryHistory: Array<SurgeryHistoryModel>,
  obstetricHistory: ObstetricHistoryModel,
  childDevelopmentHistory: Array<ChildDevelopmentHistoryModel>,
  vitalSignHistory: Array<VitalSignHistoryModel>,
  vaccinations: Array<VaccinationModel>,
  familyMedicalHistory: Array<FamilyMedicalHistoryModel>
}

export type ObstetricHistoryModel = {
  obstetricHisID: number,
  patientID: number
  contraceptiveMethod: string,
  lastPregnancyTime: Date,
  reproductiveCount: number,
  reproductiveMissingCount: number,
  reproductiveEliminateCount: number,
  labourCount: number,
  normalLabourCount: number,
  surgeryLabourCount: number,
  hardLabourCount: number,
  inTermLabourCount: number,
  preTermLabourCount: number,
  aliveChildCount: number
}

export type DisabilitiesModel = {
  disabilitiID: number,
  ishearing: boolean,
  hearing: string,
  isvision: boolean,
  vision: string,
  ishand: boolean,
  hand: string,
  isfoot: boolean,
  foot: string,
  isvertebral: boolean,
  vertebral: string,
  iscleft: boolean,
  cleft: string,
  isother: boolean,
  others: string
}

export enum DiseaseStatusEnum {
  DANGDIEUTRI = "CO1.ACTIVE",
  DAHETBENH = "CO2-INACTIVE"
}

export type FamilyMedicalHistoryModel = {
  familyMedicalHisID: number,
  patientID: number,
  v_FamilyRelationship: V_FamilyRelationship,
  diseaseCode: string,
  onSetAge: number,
  diseaseStatus: DiseaseStatusEnum,
  contributedToDeath: boolean,
  note: string,
  markAsDeleted: boolean
}

type VaccinationModel = {
  code: string,
  performedDate: Date,
  expiredDate: Date
  dosage: number
  note: string
}

type VitalSignHistoryModel = {
  pulse: number,
  bodyTemp: number,
  bloodPressureHigh: number,
  bloodPressureLow: number,
  respirationRate: number,
  weight: number,
  height: number,
  bmi: number,
  neck: number,
  waist: number,
  hip: number,
  bodyFat: number,
  ffmi: number,
  timeOfMeasurement: Date
}

type ChildDevelopmentHistoryModel = {
  weight: number,
  height: number,
  headCircumference: number,
  bmi: number,
  timeOfMeasurement: Date
}

export type SurgeryHistoryModel = {
  surgeryHisID: number,
  patientID: number,
  icD9Code: string,
  performedAge: number,
  note: string,
  markAsDeleted: boolean
}

export type AllergyHistoryModel = {
  patientID: number,
  allergyHisID: number,
  isAllergyFood: boolean,
  allergyFoodDesc: string,
  isAllergyMedication: boolean,
  allergyMedicationDesc: string,
  isAllergyEnvironment: boolean,
  allergyEnvironmentDesc: string,
  isAllergyBiologic: boolean,
  allergyBiologicDesc: string,
  markAsDeleted: boolean,
}

export enum DiseaseHistoryStatusEnum {
  DANGBENH = "C1.ACTIVE",
  LAPLAI = "C2.RECURRENCE",
  TAIPHAT = "C3.RELAPSE",
  DAHETBENH = "C4.INACTIVE",
  THUYENGIAM = "C5.REMISSION",
  HOIPHUC = "C6.RESOLVED",
  DANGTHEODOI = "C7.SUSPECT"
}

export enum DiseaseHistoryStageEnum {
  GIAIDOAN1 = "STAGE1",
  GIAIDOAN2 = "STAGE2",
  GIAIDOAN3 = "STAGE3"
}

export type DiseaseHistoryModel = {
  patientID: number,
  diseaseHisID: number,
  diseaseCode: string,
  diseaseStatus: V_DiseaseStatus,
  diseaseOnSetAge: number,
  diseaseStage: V_DiseaseStage,
  diseaseNote: string,
  markAsDeleted: boolean
}

export type RiskFactorHistoryModel = {
  riskFactorHisID: number,
  overweightStatus: V_OverWeightStatus,
  stressStatus: V_StressStatus,
  dietStatus: V_DietStatus,
  physicalInactivityStatus: V_PhysicalInactivityStatus,
  tobaccoSmokingStatus: V_TobaccoSmokingStatus,
  alcoholDrinkingStatus: V_AlcoholDrinkingStatus,
  highPressureStatus: V_HighPressureStatus,
  highGlucoseStatus: V_HighGlucoseStatus,
  highCholesterolStatus: V_HighCholesterolStatus
}

export type AtBirthStatusModel = {
  birthStatusID: number,
  v_DeliveryType: V_DeliveryType,
  v_TermAtBirth: V_TermAtBirth,
  v_AsphyxiaAtBirth: V_AsphyxiaAtBirth,
  weightAtBirth: number,
  heightAtBirth: number,
}