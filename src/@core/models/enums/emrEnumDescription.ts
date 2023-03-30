import i18n from '@core/utils/i18n';
import { ApptStatusEnum } from './apptStatus';
import { V_AppointmentType, V_FamilyRelationship, V_GroupTypeForReport20, V_ProductScope, V_RouteOfAdministration, V_VENType } from './emrEnum';
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
  V_TobaccoSmokingStatus } from './patientMedicalHistory';
import { ServiceGroupEnum } from './registrationStep';

export const V_ProductScopeDescription = new Map<number, string>([
  [V_ProductScope.InHIScope, i18n.t('v_ProductScopeEnum.inHIScope')],
  [V_ProductScope.NotInHIScope, i18n.t('v_ProductScopeEnum.notInHIScope')],
])

export const V_RouteOfAdministrationDescription = new Map<number, string>([
  [V_RouteOfAdministration.UONG, i18n.t('v_RouteOfAdministration.uong')],
  [V_RouteOfAdministration.NGAM, i18n.t('v_RouteOfAdministration.ngam')],
  [V_RouteOfAdministration.NHAI, i18n.t('v_RouteOfAdministration.nhai')],
  [V_RouteOfAdministration.DATDUOILUOI, i18n.t('v_RouteOfAdministration.datduoiluoi')],
  [V_RouteOfAdministration.NGAMDUOILUOI, i18n.t('v_RouteOfAdministration.ngamduoiluoi')],
  [V_RouteOfAdministration.TIEMBAP, i18n.t('v_RouteOfAdministration.tiembap')],
  [V_RouteOfAdministration.TIEMDUOIDA, i18n.t('v_RouteOfAdministration.tiemduoida')],
  [V_RouteOfAdministration.TIEMTRONGDA, i18n.t('v_RouteOfAdministration.tiemtrongda')],
  [V_RouteOfAdministration.TIEMTINHMACH, i18n.t('v_RouteOfAdministration.tiemtinhmach')],
  [V_RouteOfAdministration.TIEMTRUYENTINHMACH, i18n.t('v_RouteOfAdministration.tiemtruyentinhmach')],
  [V_RouteOfAdministration.TIEMVAOOKHOP, i18n.t('v_RouteOfAdministration.tiemvaookhop')],
  [V_RouteOfAdministration.TIEMNOINHANCAU, i18n.t('v_RouteOfAdministration.tiemnoinhancau')],
  [V_RouteOfAdministration.TIEMTRONGDICHKINHMAT, i18n.t('v_RouteOfAdministration.tiemtrongdichkinhmat')],
  [V_RouteOfAdministration.TIEMVAOCACKHOANGTRONGCOTHE, i18n.t('v_RouteOfAdministration.tiemvaocackhoangtrongcothe')],
  [V_RouteOfAdministration.TIEM, i18n.t('v_RouteOfAdministration.tiem')],
  [V_RouteOfAdministration.TIEMDONGMACHKHOIU, i18n.t('v_RouteOfAdministration.tiemdongmachkhoiu')],
  [V_RouteOfAdministration.TIEMVAOKHOANGTUNHIEN, i18n.t('v_RouteOfAdministration.tiemvaokhoangtunhien')],
  [V_RouteOfAdministration.TIEMVAOKHOIU, i18n.t('v_RouteOfAdministration.tiemvaokhoiu')],
  [V_RouteOfAdministration.TRUYENTINHMACH, i18n.t('v_RouteOfAdministration.truyentinhmach')],
  [V_RouteOfAdministration.TIEMTRUYEN, i18n.t('v_RouteOfAdministration.tiemtruyen')],
  [V_RouteOfAdministration.BOI, i18n.t('v_RouteOfAdministration.boi')],
  [V_RouteOfAdministration.XOANGOAI, i18n.t('v_RouteOfAdministration.xoangoai')],
  [V_RouteOfAdministration.DANTRENDA, i18n.t('v_RouteOfAdministration.dantrenda')],
  [V_RouteOfAdministration.XITNGOAIDA, i18n.t('v_RouteOfAdministration.xitngoaida')],
  [V_RouteOfAdministration.DUNGNGOAI, i18n.t('v_RouteOfAdministration.dungngoai')],
  [V_RouteOfAdministration.DATAMDAO, i18n.t('v_RouteOfAdministration.datamdao')],
  [V_RouteOfAdministration.DATHAUMON, i18n.t('v_RouteOfAdministration.dathaumon')],
  [V_RouteOfAdministration.THUTHAUMONTRUCTRANG, i18n.t('v_RouteOfAdministration.thuthaumontructrang')],
  [V_RouteOfAdministration.DAT, i18n.t('v_RouteOfAdministration.dat')],
  [V_RouteOfAdministration.DATTUCUNG, i18n.t('v_RouteOfAdministration.dattucung')],
  [V_RouteOfAdministration.THUT, i18n.t('v_RouteOfAdministration.thut')],
  [V_RouteOfAdministration.PHUNMU, i18n.t('v_RouteOfAdministration.phunmu')],
  [V_RouteOfAdministration.DANGHIT, i18n.t('v_RouteOfAdministration.danghit')],
  [V_RouteOfAdministration.BOTHIT, i18n.t('v_RouteOfAdministration.bothit')],
  [V_RouteOfAdministration.XIT, i18n.t('v_RouteOfAdministration.xit')],
  [V_RouteOfAdministration.KHIDUNG, i18n.t('v_RouteOfAdministration.khidung')],
  [V_RouteOfAdministration.DUONGHOHAP, i18n.t('v_RouteOfAdministration.duonghohap')],
  [V_RouteOfAdministration.XITMUI, i18n.t('v_RouteOfAdministration.xitmui')],
  [V_RouteOfAdministration.XITHONG, i18n.t('v_RouteOfAdministration.xithong')],
  [V_RouteOfAdministration.THUOCMUI, i18n.t('v_RouteOfAdministration.thuocmui')],
  [V_RouteOfAdministration.NHOMUI, i18n.t('v_RouteOfAdministration.nhomui')],
  [V_RouteOfAdministration.NHOMAT, i18n.t('v_RouteOfAdministration.nhomat')],
  [V_RouteOfAdministration.TRAMAT, i18n.t('v_RouteOfAdministration.tramat')],
  [V_RouteOfAdministration.THUOCMAT, i18n.t('v_RouteOfAdministration.thuocmat')],
  [V_RouteOfAdministration.NHOTAI, i18n.t('v_RouteOfAdministration.nhotai')],
  [V_RouteOfAdministration.APNGOAIDA, i18n.t('v_RouteOfAdministration.apngoaida')],
  [V_RouteOfAdministration.APSATKHOIU, i18n.t('v_RouteOfAdministration.apsatkhoiu')],
  [V_RouteOfAdministration.BINHKHILONGHOACNEN, i18n.t('v_RouteOfAdministration.binhkhilonghoacnen')],
  [V_RouteOfAdministration.BINHKHINEN, i18n.t('v_RouteOfAdministration.binhkhinen')],
  [V_RouteOfAdministration.DANHTUALUOI, i18n.t('v_RouteOfAdministration.danhtualuoi')],
  [V_RouteOfAdministration.CAYVAOKHOIU, i18n.t('v_RouteOfAdministration.cayvaokhoiu')],
  [V_RouteOfAdministration.CHIEUNGOAI, i18n.t('v_RouteOfAdministration.chieungoai')],
  [V_RouteOfAdministration.DUNGDICH, i18n.t('v_RouteOfAdministration.dungdich')],
  [V_RouteOfAdministration.DUNGDICHRUA, i18n.t('v_RouteOfAdministration.dungdichrua')],
  [V_RouteOfAdministration.DUNGDICHTHAMPHAN, i18n.t('v_RouteOfAdministration.dungdichthamphan')],
  [V_RouteOfAdministration.PHUN, i18n.t('v_RouteOfAdministration.phun')],
  [V_RouteOfAdministration.TUI, i18n.t('v_RouteOfAdministration.tui')],
  [V_RouteOfAdministration.HONDICH, i18n.t('v_RouteOfAdministration.hondich')],
  [V_RouteOfAdministration.BOTDONGKHODEPHAHONDICH, i18n.t('v_RouteOfAdministration.botdongkhodephahondich')],
  [V_RouteOfAdministration.BOM, i18n.t('v_RouteOfAdministration.bom')],
  [V_RouteOfAdministration.DEO, i18n.t('v_RouteOfAdministration.deo')],
])

export const V_VENTypeDescription = new Map<number, string>([
  [V_VENType.V, i18n.t('v_VENType.v')],
  [V_VENType.E, i18n.t('v_VENType.e')],
  [V_VENType.N, i18n.t('v_VENType.n')],
])

export const V_GroupTypeForReport20Description = new Map<number, string>([
  [V_GroupTypeForReport20.KHONGXACDINH, i18n.t('v_GroupTypeForReport20.khongxacdinh')],
  [V_GroupTypeForReport20.THUOCCOTRONGDANHMUC, i18n.t('v_GroupTypeForReport20.thuoccotrongdanhmuc')],
  [V_GroupTypeForReport20.THUOCPHOIHOPNHIEUHOATCHAT, i18n.t('v_GroupTypeForReport20.thuocphoihopnhieuhoatchat')],
  [V_GroupTypeForReport20.THUOCVUOTTUYENCHUYENMONKYTHUAT, i18n.t('v_GroupTypeForReport20.thuocvuotchuyenmonkythuat')],
  [V_GroupTypeForReport20.THUOCCHUYENKHOADOCSKCBTUPHACHE, i18n.t('v_GroupTypeForReport20.thuocchuyenkhoadocskcbtuphache')],
  [V_GroupTypeForReport20.THUOCNGOAIDANHMUCBHYT, i18n.t('v_GroupTypeForReport20.thuocngoaidanhmucbhyt')],
  [V_GroupTypeForReport20.DANHMUCTHUOCDUOCTHANHTOAN5030, i18n.t('v_GroupTypeForReport20.danhmucthuocduocthanhtoan3050')],
  [V_GroupTypeForReport20.MAUCHEPHAMMAU, i18n.t('v_GroupTypeForReport20.mauchephammau')],
  [V_GroupTypeForReport20.CHIPHIKHAC, i18n.t('v_GroupTypeForReport20.chiphikhac')],
  [V_GroupTypeForReport20.THUOCDONGY, i18n.t('v_GroupTypeForReport20.thuocdongy')]
])

export const V_AppointmentTypeDescription = new Map<number, string>([
  [V_AppointmentType.HENTAIKHAM, i18n.t('v_AppointmentType.hentaikham')],
  [V_AppointmentType.HENCLSSO, i18n.t('v_AppointmentType.henclsso')],
  [V_AppointmentType.HENDIEUTRINGOAITRU, i18n.t('v_AppointmentType.hendieutringoaitru')],
  [V_AppointmentType.HENDIEUTRINGOAITRUCUNGDANGKY, i18n.t('v_AppointmentType.hendieutringoaitrucungdangky')],
  [V_AppointmentType.HENKHAMSUCKHOE, i18n.t('v_AppointmentType.henkhamsuckhoe')],
])

export const ServiceGroupEnumDescription = new Map<number, string>([
  [ServiceGroupEnum.Service, i18n.t('patientRegistration.serviceTypeLabel')],
  [ServiceGroupEnum.Image, i18n.t('patientRegistration.imageLabel')],
  [ServiceGroupEnum.Test, i18n.t('patientRegistration.testService')],
])

export const AppStatusEnumDescription = new Map<number, string>([
  [ApptStatusEnum.BOOKED, i18n.t('appointmentStatus.booked')],
  [ApptStatusEnum.ALERTED, i18n.t('appointmentStatus.alerted')],
  [ApptStatusEnum.CONFIRMED, i18n.t('appointmentStatus.confirmed')],
  [ApptStatusEnum.ACTIONED, i18n.t('appointmentStatus.actioned')],
  [ApptStatusEnum.CANCELED, i18n.t('appointmentStatus.canceled')],
  [ApptStatusEnum.PENDING, i18n.t('appointmentStatus.pending')],
  [ApptStatusEnum.INVALID, i18n.t('appointmentStatus.invaild')],
  [ApptStatusEnum.WAITING, i18n.t('appointmentStatus.waiting')],
  [ApptStatusEnum.UNKNOWN, i18n.t('appointmentStatus.unknown')],
])

export const V_HighCholesterolStatusDescription = new Map<number, string>([
  [V_HighCholesterolStatus.NORMAL, i18n.t('medicalHistory.RF-7-01')],
  [V_HighCholesterolStatus.HIGHCHOLESTEROL_TREATED, i18n.t('medicalHistory.RF-7-03')],
  [V_HighCholesterolStatus.HIGHCHOLESTEROL_UNTREATED, i18n.t('medicalHistory.RF-7-02')],
])

export const V_HighGlucoseStatusDescription = new Map<number, string>([
  [V_HighGlucoseStatus.LOW, i18n.t('medicalHistory.RF-6-05')],
  [V_HighGlucoseStatus.HIGH_TREADTED, i18n.t('medicalHistory.RF-6-04')],
  [V_HighGlucoseStatus.HIGH_UNTREATED, i18n.t('medicalHistory.RF-6-02')],
  [V_HighGlucoseStatus.NORMAL, i18n.t('medicalHistory.RF-6-01')],
])

export const V_HighPressureStatusDescription = new Map<number, string>([
  [V_HighPressureStatus.NORMAL, i18n.t('medicalHistory.RF-5-01')],
  [V_HighPressureStatus.HIGH_UNTREATED, i18n.t('medicalHistory.RF-5-02')],
  [V_HighPressureStatus.HIGH_TREATED, i18n.t('medicalHistory.RF-5-04')],
  [V_HighPressureStatus.LOW_UNTREATED, i18n.t('medicalHistory.RF-5-05')],
  [V_HighPressureStatus.LOW_TREATED, i18n.t('medicalHistory.RF-5-06')],
])

export const V_AlcoholDrinkingStatusDescription = new Map<number, string>([
  [V_AlcoholDrinkingStatus.NOTUSE, i18n.t('medicalHistory.RF-4-01')],
  [V_AlcoholDrinkingStatus.STAGE1, i18n.t('medicalHistory.RF-4-02')],
  [V_AlcoholDrinkingStatus.STAGE2, i18n.t('medicalHistory.RF-4-03')],
  [V_AlcoholDrinkingStatus.STAGE3, i18n.t('medicalHistory.RF-4-04')],
  [V_AlcoholDrinkingStatus.STAGE4, i18n.t('medicalHistory.RF-4-05')],
])

export const V_TobaccoSmokingStatusDescription = new Map<number, string>([
  [V_TobaccoSmokingStatus.NOTUSE, i18n.t('medicalHistory.RF-3-01')],
  [V_TobaccoSmokingStatus.QUIT, i18n.t('medicalHistory.RF-3-02')],
  [V_TobaccoSmokingStatus.STAGE1, i18n.t('medicalHistory.RF-3-03')],
  [V_TobaccoSmokingStatus.STAGE2, i18n.t('medicalHistory.RF-3-04')],
  [V_TobaccoSmokingStatus.STAGE3, i18n.t('medicalHistory.RF-3-05')],
])

export const V_PhysicalInactivityStatusDescription = new Map<number, string>([
  [V_PhysicalInactivityStatus.GOOD, i18n.t('medicalHistory.RF-2-01')],
  [V_PhysicalInactivityStatus.NOTGOOD, i18n.t('medicalHistory.RF-2-02')]
])

export const V_DietStatusDescription = new Map<number, string>([
  [V_DietStatus.LOW, i18n.t('medicalHistory.RF-63-01')],
  [V_DietStatus.NORMAL, i18n.t('medicalHistory.RF-63-02')],
  [V_DietStatus.HIGH, i18n.t('medicalHistory.RF-63-03')],
])

export const V_StressStatusDescription = new Map<number, string>([
  [V_StressStatus.NONE, i18n.t('medicalHistory.RF-62-01')],
  [V_StressStatus.LOW, i18n.t('medicalHistory.RF-62-02')],
  [V_StressStatus.NORMAL, i18n.t('medicalHistory.RF-62-03')],
  [V_StressStatus.HIGH, i18n.t('medicalHistory.RF-62-04')],
])

export const V_OverWeightStatusDescription = new Map<number, string>([
  [V_OverWeightStatus.NORMAL, i18n.t('medicalHistory.RF-1-01')],
  [V_OverWeightStatus.BMI_MORE_THAN_25, i18n.t('medicalHistory.RF-1-02')],
  [V_OverWeightStatus.BMI_MORE_THAN_35, i18n.t('medicalHistory.RF-1-03')],
])

export const V_DeliveryTypeDescription = new Map<number, string>([
  [V_DeliveryType.NATURAL_BIRTH, i18n.t('medicalHistory.AB-1-01')],
  [V_DeliveryType.CAESAREAN, i18n.t('medicalHistory.AB-1-02')],
  [V_DeliveryType.ASSISTED_VAGINAL_DELIVERY, i18n.t('medicalHistory.AB-1-03')],
])

export const V_AsphyxiaAtBirthDescription = new Map<number, string>([
  [V_AsphyxiaAtBirth.YES, i18n.t('medicalHistory.AB-3-01')],
  [V_AsphyxiaAtBirth.NO, i18n.t('medicalHistory.AB-3-02')],
])

export const V_TermAtBirthDescription = new Map<number, string>([
  [V_TermAtBirth.EARLY_TERM, i18n.t('medicalHistory.AB-2-02')],
  [V_TermAtBirth.FULL_TERM, i18n.t('medicalHistory.AB-2-01')]
])

export const V_DiseaseStatusDescription = new Map<number, string>([
  [V_DiseaseStatus.ACTIVE, i18n.t('medicalHistory.C1-ACTIVE')],
  [V_DiseaseStatus.RECURRENCE, i18n.t('medicalHistory.C2-RECURRENCE')],
  [V_DiseaseStatus.RELAPSE, i18n.t('medicalHistory.C3-RELAPSE')],
  [V_DiseaseStatus.INACTIVE, i18n.t('medicalHistory.C4-INACTIVE')],
  [V_DiseaseStatus.REMISSION, i18n.t('medicalHistory.C5-REMISSION')],
  [V_DiseaseStatus.RESOLVED, i18n.t('medicalHistory.C6-RESOLVED')],
  [V_DiseaseStatus.SUSPECT, i18n.t('medicalHistory.C7-SUSPECT')],
])

export const V_DiseaseStageDescription = new Map<number, string>([
  [V_DiseaseStage.STAGE1, i18n.t('medicalHistory.STAGE1')],
  [V_DiseaseStage.STAGE2, i18n.t('medicalHistory.STAGE2')],
  [V_DiseaseStage.STAGE3, i18n.t('medicalHistory.STAGE3')],
])

export const V_FamilyRelationshipDescription = new Map<number, string>([
  [V_FamilyRelationship.WIFE, i18n.t('medicalHistory.WIFE')],
  [V_FamilyRelationship.HUSBAND, i18n.t('medicalHistory.HUSB')],
  [V_FamilyRelationship.BROTHER, i18n.t('medicalHistory.BRO')],
  [V_FamilyRelationship.SISTER, i18n.t('medicalHistory.SIS')],
  [V_FamilyRelationship.FATHER, i18n.t('medicalHistory.FTH')],
  [V_FamilyRelationship.MOTHER, i18n.t('medicalHistory.MTH')],
  [V_FamilyRelationship.SON, i18n.t('medicalHistory.SON')],
  [V_FamilyRelationship.DAUGHTER, i18n.t('medicalHistory.DAU')],
  [V_FamilyRelationship.GRANDFATHER, i18n.t('medicalHistory.GRFTH')],
  [V_FamilyRelationship.GRANDMOTHER, i18n.t('medicalHistory.GRMTH')],
  [V_FamilyRelationship.AUNT, i18n.t('medicalHistory.AUNT')],
  [V_FamilyRelationship.UNCLE, i18n.t('medicalHistory.UNCLE')],
  [V_FamilyRelationship.OTHER, i18n.t('medicalHistory.COUSN')],
])