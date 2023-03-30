import i18n from '../../utils/i18n';
/**
 * Convert từ BE, nên sẽ chấp nhận chuyện sai Naming Conventions của proj
 */

export enum Dosage {
  MDose = 1,
  ADose = 2,
  EDose = 3,
  NDose = 4,
}

export enum KVCode {
  KV1 = 61131,
  KV2 = 61132,
  KV3 = 61133,
}
export const KVCodes = [
  {
    Id: KVCode.KV1,
    Text: i18n.t('KV1'),
  },
  {
    Id: KVCode.KV2,
    Text: i18n.t('KV2'),
  },
  {
    Id: KVCode.KV3,
    Text: i18n.t('KV3'),
  },
];
export enum SessionActivity {
  DANG_KY_KHAM_BENH = 4400,
  THANH_TOAN_TIEN_KHAM_BENH = 4401,
  KHAM_BENH = 4402,
  MUA_THUOC = 4403,
}

export enum QueueType {
  THANH_TOAN_TIEN_KHAM = 4500,
  KHAM_BENH = 4501,
  PCL = 4502,
  MUA_THUOC = 4503,
  CHO_DANG_KY = 4504,
  DANG_KY_HEN_BENH = 4505,
}

export enum FamilyRelationship {
  VO = 501,
  CHONG = 502,
  CON = 503,
  CHA = 504,
  ME = 505,
  ANH = 506,
  CHI = 507,
  ONG = 508,
  BA = 509,
  KHAC = 510,
}
export const FamilyRelationships = [
  {
    Id: FamilyRelationship.VO,
    Text: i18n.t('Vợ'),
  },
  {
    Id: FamilyRelationship.CHONG,
    Text: i18n.t('Chồng'),
  },
  {
    Id: FamilyRelationship.CON,
    Text: i18n.t('Con'),
  },
  {
    Id: FamilyRelationship.CHA,
    Text: i18n.t('Cha'),
  },
  {
    Id: FamilyRelationship.ME,
    Text: i18n.t('Mẹ'),
  },
  {
    Id: FamilyRelationship.ANH,
    Text: i18n.t('Anh'),
  },
  {
    Id: FamilyRelationship.CHI,
    Text: i18n.t('Chị'),
  },
  {
    Id: FamilyRelationship.ONG,
    Text: i18n.t('Ông'),
  },
  {
    Id: FamilyRelationship.BA,
    Text: i18n.t('Bà'),
  },
  {
    Id: FamilyRelationship.KHAC,
    Text: i18n.t('Khác'),
  },
];
export enum DocumentTypeOnHold {
  THE_BAO_HIEM = 601,
  CHUNG_MINH_THU = 602,
  GIAY_GIOI_THIEU = 603,
  CAC_GIAY_TO_KHAC = 604,
}

export enum FileStorageResultType {
  UNKNOW = 4600,
  IMAGES = 4601,
  VIDEO_RECORDING = 4602,
  DOCUMENTS = 4603,
  OTHERS = 4604,
}

export enum PatientPCLRequestCategory {
  PCL_IMAGING = 4700,
  PCL_LABORATORY = 4701,
}

export enum TranHIPayment {
  OPENED = 5300,
  DISPUTING = 5301,
  BALANCED = 5302,
  CONSOLIDATED = 5303,
  CLOSED = 5304,
}

export enum TranPatientPayment {
  OPENED = 5400,
  DISPUTING = 5401,
  BALANCED = 5402,
  CLOSED = 5403,
}

export enum InPtAdmissionStatusEnum {
  UNKNOWN = 0,
  WAITING_FOR_ADMISSION = 1,
  ADMITTED = 2,
  DISCHARED_PAPER_DONE = 3,
  DISCHARED = 4,
  TEMPORARY_DISCHARGED = 5,
}

export enum RegistrationStatus {
  OPENED = 5500,
  PROCESSING = 5501,
  COMPLETED = 5502,
  INVALID = 5503,
  REFUND = 5505,
  PENDING = 5506,
  PENDING_INPT = 5510,
  ADMITTED_INPT = 5515,
  DISCHARGED_INPT = 5520,
  COMPLETED_INPT = 5525,
}

export enum RegistrationPaymentStatus {
  CREDIT = 28101,
  DEBIT = 28102,
}

export enum ResourceUnit {
  Rscr_Cai = 5700,
  Rscr_Chiec = 5701,
  Rscr_Tam = 5702,
  Rscr_To = 5703,
  Rscr_Tep = 5704,
  Rscr_Vien = 5705,
  Rscr_Mieng = 5706,
  Rscr_Que = 5707,
  Rscr_Chai = 5708,
  Rscr_Ong = 5709,
  Rscr_Soi = 5710,
  Rscr_Cay = 5711,
  Rscr_Cap = 5712,
  Rscr_Cuon = 5713,
  Rscr_Binh = 5714,
  Rscr_Bo = 5715,
  Rscr_Goi = 5716,
  Rscr_Hop = 5717,
  Rscr_Xap = 5718,
  Rscr_Thung = 5719,
  Rscr_Bang = 5720,
}

export enum PaymentMode {
  TIEN_MAT = 4800,
  THE_TIN_DUNG = 4801,
  CHUYEN_KHOAN = 4802,
}

export const V_PaymentModeDescription = new Map<number, string>(
  [
    [PaymentMode.TIEN_MAT, i18n.t("Tiền mặt")],
    [PaymentMode.THE_TIN_DUNG, i18n.t("Thẻ tín dụng")],
    [PaymentMode.CHUYEN_KHOAN, i18n.t("Chuyển khoản")]
  ]
);

export enum PaymentType {
  TAM_UNG = 5000,
  TRA_DU = 5001,
  TRA_NHIEU_DOT = 5002,
  HOAN_TIEN = 5003,
}

export const V_PaymentTypeDescription = new Map<number, string>(
  [
    [PaymentType.HOAN_TIEN, i18n.t("Hoàn tiền")],
    [PaymentType.TRA_DU, i18n.t("Trả đủ")],
    [PaymentType.TAM_UNG, i18n.t("Tạm ứng")],
    [PaymentType.TRA_NHIEU_DOT, i18n.t("Trả nhiều đợt")]
  ]
);

export enum Currency {
  VND = 4900,
  USD = 4901,
}

export enum CurrencyTable {
  VND = 129,
}

export enum ApptStatus {
  BOOKED = 5600,
  ALERTED = 5601,
  CONFIRMED = 5602,
  ACTIONED = 5603,
  CANCELED = 5604,
  PENDING = 5605,
  INVALID = 5606,
  WAITING = 5607,
  UNKNOWN = 5608,
}

export enum AppointmentType {
  UNKNOWN = 3800,
  HEN_TAI_KHAM = 3801,
  HEN_KHAM_BENH = 3802,
  HEN_KHAM_DINH_KY = 3803,
  HEN_TAI_KHAM_SAU_PHAU_THUAT = 3804,
  HEN_GAP_BAC_SI_TU_VAN = 3805,
  HEN_LAY_KET_QUA_XET_NGHIEM = 3806,
  HEN_KHAM_SUC_KHOE = 3807,
  HEN_CAN_LAM_SANG_SO = 3808,
  HEN_DTNT_NHIEU_DK = 3809,
  HEN_DTNT_MOT_DK = 3810,
}

export enum HICardType {
  MAU_2008 = 5901,
  MAU_2011 = 5904,
  MAU_2013_TPHCM = 5905,
  MAU_2015 = 5907,
  MAU_2021 = 5908,
}

export const HICardTypes = [
  /*{
    Id: HICardType.MAU_2008,
    Text: i18n.t('healthInsurance.type2008'),
  },
  {
    Id: HICardType.MAU_2011,
    Text: i18n.t('healthInsurance.type2011'),
  },
  {
    Id: HICardType.MAU_2013_TPHCM,
    Text: i18n.t('healthInsurance.type2013'),
  },*/
  {
    Id: HICardType.MAU_2015,
    Text: i18n.t('healthInsurance.type2015'),
  },
  {
    Id: HICardType.MAU_2021,
    Text: i18n.t('healthInsurance.type2021'),
  },
];

export enum ProcessingType {
  MEDICAL_CONDITIONS = 901,
  MEDICAL_HISTORY = 902,
  IMMUNIZATION = 903,
  VITAL_SIGNS = 904,
  FAMILY_HISTORY = 905,
  HOSPITALIZATION_HISTORY = 906,
  DEATH_SITUATION_INFO = 907,
  PHYSICAL_EXAMINATION = 908,
  PARA_CLINICAL_EXAMINATION = 909,
  EXAMINE_AND_TEST = 910,
  PRESCRIPTION = 911,
  CLINICAL_INDICATOR = 912,
  MEDICAL_ALLERGY = 913,
  DIAGNOSIS_AND_TREATMENT = 914,
  MEDICAL_WARNING = 915,
  UNKNOWN = 916,
  OTHERS = 917,
}

export enum Behaving {
  KHAM_DIEU_TRI = 3301,
  RATOA = 3302,
  KHAM_DIEU_TRI_NGOAI_TRU = 3303,
  TAI_KHAM = 3304,
  KHAM_VE = 3305,
  YEU_CAU_NHAP_VIEN = 3306,
  CHUYEN_VIEN = 3307,
  CHUYEN_PHONG_KHAM = 3308,
  THAY_DOI_DU_LIEU = 3309,
  KHONG_XAC_DINH = 3310,
  CHI_DINH_XET_NGHIEM_CLS = 3311,
}

export enum ExamRegStatus {
  KHONG_XAC_DINH = 700,
  DANG_KY_KHAM = 701,
  BAT_DAU_THUC_HIEN = 703,
  HOAN_TAT = 704,
  NGUNG_TRA_TIEN_LAI = 707,
  XOA_TRA_TIEN_LAI = 708,
  THUC_HIEN_CLS = 702,
}

export enum StaffCatType {
  BAC_SI = 6100,
  NHAN_VIEN_DANG_KY = 6101,
  DIEU_DUONG = 6103,
}

export enum PatientSummary {
  ChonLoaiDV = 1,
  KhamBenh_ChanDoan = 2,
  ToaThuoc = 3,
  CanLamSang_XetNghiem = 4,
  CanLamSang_HinhAnh = 5,
  CanLamSang_HinhAnh_NgoaiVien = 6,
  HoiChan = 7,
  GiaiPhauKyThuatCao = 8,
  NoiTru = 9,
  count = 10,
}

export enum ResGroupCategory {
  THIET_BI_Y_TE = 7100,
  THIET_BI_VAN_PHONG = 7101,
  KHAC = 7102,
}

export enum SupplierType {
  CUNG_CAP_THIET_BI_Y_TE = 7200,
  CUNG_CAP_THIET_BI_VAN_PHONG = 7201,
  KHAC = 7202,
}

export enum V_Operation {
  Full_Control = 7301,
  View = 7302,
  Add = 7303,
  Update = 7304,
  Delete = 7305,
  Report = 7306,
  Print = 7307,
}

export enum MedProductType {
  Unknown = 11000,
  THUOC = 11001,
  Y_CU = 11002,
  HOA_CHAT = 11003,
  KCB = 11004,
  CAN_LAM_SANG = 11005,
  TIEN_GIUONG = 11006,
  HOAT_CHAT = 11007,
  VTYT_TIEUHAO = 11008,
  TIEM_NGUA = 11009,
  MAU = 11010,
  VAN_PHONG_PHAM = 11011,
  VATTU_TIEUHAO = 11012,
  THANHTRUNG = 11013,
}

export enum MedProductType2 {
  THUOC = 11001,
  Y_CU = 11002,
  HOA_CHAT = 11003,
}

export enum RegistrationType {
  Unknown = 24000,
  NGOAI_TRU = 24001,
  NOI_TRU = 24003,
  NOI_TRU_BHYT = 24005,
  CAP_CUU = 24006,
  CAP_CUU_BHYT = 24007,
  XAC_NHAN_LAI_BHYT = 24008,
  DIEU_TRI_NGOAI_TRU = 24009,
}

export enum V_RegForPatientOfType {
  Unknown = 0,
  DK_BN_MOI = 24100,
  DKBN_NGTRU = 24102,
  DK_BN_TAI_KHAM = 24105,
  DK_BN_TAI_KHAM_SAU_GP = 24110,
  NBNT_BN_KHONG_BHYT = 24115,
  NBNT_BN_CO_BHYT = 24120,
  NBNT_BN_CAP_CUU_KHONG_BHYT = 24125,
  NBNT_BN_CAP_CUU_CO_BHYT = 24130,
  NBNT_BN_TIEN_PHAU_KHONG_BHYT = 24135,
  NBNT_BN_TIEN_PHAU_CO_BHYT = 24140,
  DKNT_BN_GP_DEPOSIT = 24145,
  DKNT_BN_KTC_DEPOSIT = 24148,
  DKBN_VANG_LAI = 24150,
  DKBN_DT_NGOAI_TRU = 24151,
  DKBN_TD_QUYEN_LOI = 24155,
}

export enum V_FindPatientType {
  NGOAI_TRU = 0,
  NOI_TRU = 1,
}

export enum V_EstimateType {
  FIRSTMONTH = 12001,
  MODIFYMONTH = 12002,
  FIRSTYEAR = 12003,
  MODIFYYEAR = 12004,
  ADDITION_FIRSTMONTH = 12005,
}

export enum V_MedicalMaterial {
  VTYT_THAYTHE = 59001,
  VTYT_TIEUHAO = 59002,
}

export enum V_GoodsType {
  HANGMUA = 13001,
  HANGTANG = 13002,
  HANGMAU = 13003,
  HANG_NHAP_TU_LUAN_CHUYEN_KHO = 13004,
}

export enum V_PCLRequestType {
  UNKNOWN = 25000,
  NGOAI_TRU = 25001,
  NOI_TRU = 25002,
}

export enum V_PCLRequestStatus {
  OPEN = 26000,
  CLOSE = 26001,
  CANCEL = 26002,
  PROCESSING = 26003,
}

export enum StoreType {
  STORAGE_EXTERNAL = 1,
  STORAGE_DRUGDEPT = 2,
  STORAGE_CLINIC = 3,
  STORAGE_CLINIC_OTHER = 4,
  STORAGE_OUT_HOSPITAL = 5,
  STORAGE_FILES = 6,
  STORAGE_HIDRUGs = 7,
  STORAGE_MEDICALITEMS = 8,
}

export enum StoreID {
  KHO_LE_THUOC_NOI_TRU = 174,
  KHO_LE_VTYT = 175,
}

export enum V_DiagIcdStatus {
  DANGDIEUTRI = 14001,
  HETBENH = 14002,
}

export enum V_PrescriptionNotes {
  TOAGOC = 4301,
  COPYTUTOAKHAC = 4302,
  EDITTUTOAKHAC = 4303,
}

export enum V_PrescriptionNoteTempType {
  PrescriptionAllNotes = 0,
  PrescriptionNoteGen = 53101,
  PrescriptionNoteItem = 53102,
  PrescriptionAdministration = 53103,
  AppointmentPCLTemplate = 53105,
  SmallProceduresSequence = 53106,
  CPOENotesTemplate = 53107,
  CPOEDrugNote = 53108,
  CPOEUnitUseTD = 53109,
  CPOEServiceNote = 53110,
  CPOEImplementationProgress = 53111,
  CPOENoteDiet = 53112,
}

export enum V_PrescriptionStatus {
  New = 1,
  Edit = 2,
  NewOnOld = 3,
}

export enum V_DeptType {
  Khoa = 7000,
  Phong = 7001,
  Kho = 7002,
}

export enum RefOutputType {
  HOANTRATHUOC = 1,
  XUATNOIBO = 2,
  CANBANGKHO = 3,
  BANTHEOTOA = 4,
  XUAT_NHUONG = 5,
  HUYHANG = 6,
  THUHOITHUOC = 7,
  HUYPHIEUXUAT = 8,
  XUATNOIBO_CHOMUON = 14,
  XUATCHO_BIEU = 17,
  NHAP_TU_NCC = 9,
  NHAP_TU_NGUON_KHAC = 10,
  NHAP_KHAC = 12,
  XUAT_HANGKYGOI = 18,
  NHAP_HANGKYGOI = 19,
  XUATNOIBO_LUANCHUYENKHO = 20,
  NHAP_TU_LUANCHUYENKHO = 21,
  XUAT_KHOPHONG = 22,
  XUAT_BN = 23,
  XUAT_TRA_KHOADUOC = 24,
  XUAT_DUNGCHUNG = 25,
  XUAT_TRA_NCC = 26,
  NHAP_TU_KHO_BHYT_NHA_THUOC = 27,
  NHAP_TU_KHO_DUOC_CHO_KHO_BHYT_NHA_THUOC = 28,
  THANHLY = 29,
  XUAT_DIEUCHUYEN = 30,
}

export enum V_OutDrugInvStatus {
  SAVE = 15000, //0 + paidTime,
  // PAID = 15001,
  DRUGCOLLECTED = 15002, //nhận thuốc => qua màn nhận thuóc
  CANCELED = 15003, //hủy phiếu xuất + refundtime => hoàn tiền.
  REFUNDED = 15004,
  RETURN = 15005, //trả toàn bộ số lượng của thuốc đó.
  // CALLEDSEQ = 15006,
}

export enum V_PurchaseOrderStatus {
  NEW = 6200,
  ORDERED = 6201,
  FULL_DELIVERY = 6202,
  PART_DELIVERY = 6203,
  NO_WAITING = 6204,
}

export enum V_PaymentReqStatus {
  NEW = 6300,
  WAITING_APPROVED = 6301,
  APPROVED = 6302,
}

export enum V_PeriodOfDay {
  SANG = 28000,
  TRUA = 28001,
  CHIEU = 28002,
  TOI = 28003,
}

export enum PatientQueueItemsStatus {
  WAITING = 21000,
  PROCESSING = 21001,
  DONE = 21002,
}

export enum V_PCLMainCategory {
  Unknown = 0,
  Imaging = 28200,
  Laboratory = 28201,
  Pathology = 28202,
  Laboratory_External = 28203,
  GeneralSugery = 28204,
}

export enum PCLResultParamImpID {
  SIEUAM_TIMMAU = 1,
  SIEUAM_MACHMAU = 2,
  SIEUAM_GANGSUC_Dipyridamole = 3,
  SIEUAM_GANGSUC_Dobutamine = 4,
  SIEUAM_TIMTHAI = 5,
  SIEUAM_THUCQUAN = 6,
  ABDOMINAL_ULTRASOUND = 14,
  KHAC = 7,
  GeneralSurgery = 28,
}

export enum PCLResultParamImpIDNew {
  SIEUAM_TIMMAU_MOI = 30,
  SIEUAM_TIMTHAI_MOI = 47,
  SIEUAM_MACHMAU_MOI = 48,
}

export enum PCLExamTypeSubCategory {
  XRAY = 1,
  UltraSound = 2,
  Scan = 3,
  MRI = 4,
  ECG = 9,
  ANGIOGRAPHY = 10,
}

export enum PatientPCLRequestListType {
  DANHSACHPHIEUYEUCAU = 0,
}

export enum V_PCLExamTypeUnit {
  LAN = 28500,
}

export enum V_PCLExamTypeExt {
  NgoaiVien = 931,
}

export enum V_RefMedServiceItemsUnit {
  LAN = 28600,
  NGAY = 28601,
}

export enum V_Surgery_Tips_Type {
  LOAIDACBIET = 73001,
  LOAI1A = 73002,
  LOAI1B = 73003,
  LOAI1C = 73004,
  LOAI2A = 73005,
  LOAI2B = 73006,
  LOAI2C = 73007,
  LOAI3 = 73008,
}

export enum V_Surgery_Tips_Item {
  PHAUTHUAT = 77001,
  THUTHUAT = 77002,
}

export enum V_RefMedicalServiceTypes {
  KHAMBENH = 28700,
  CANLAMSANG = 28701,
  GIUONGBENH = 28702,
  DICHVUHANHCHANH = 28703,
  HOICHAN = 28704,
  THUTHUAT = 28705,
  KYTHUATCAO = 28706,
  PHUCHOICHUCNANG = 28707,
  XAMLANCANTHIEP = 28708,
}

export enum ChoiceEnum {
  KhongBiet = 0,
  Khong = 1,
  Co = 2,
  NghiNgo = 3,
}

export enum V_TranRefType {
  NONE = 0,
  DRUG_NGOAITRU = 40000,
  DRUG_NOITRU_KHODUOC = 40001,
  DRUG_NOITRU_KHOCUAKHOA = 40002,
  PAY_CLS = 40004,
  BILL_NOI_TRU = 40005,
  BILL_THANH_TOAN = 40006,
}

export enum V_RefMedicalServiceInOutOthers {
  NGOAITRU = 30000,
  NOITRU = 30001,
  NOITRU_NGOAITRU = 30002,
  HANHCHANH_NGOAITRU = 30003,
}

export enum V_BillingInvType {
  UNKNOWN = 40110,
  TINH_TIEN_NOI_TRU = 40100,
  TINH_TIEN_GIAI_PHAU = 40101,
}

export enum V_InPatientBillingInvStatus {
  NEW = 40200,
  NGUNG_TRA_TIEN_LAI = 40201,
}

export enum V_RefGenDrugUnitType {
  BAN_CHO_BENHNHAN = 40300,
  BENHNHAN_UONG = 40301,
}

export enum V_DrugType {
  THUOC_THONGTHUONG = 53200,
  THUOC_UONGKHICAN = 53202,
  THUOC_UONGLICHTUAN = 53203,
}

export enum V_Color {
  Normal = 1,
  Red = 2,
  Green = 3,
  Blue = 4,
  Pink = 5,
  Brown = 6,
  Yellow = 7,
}

export enum V_OutputTo {
  KHO_KHAC = 40401,
  BACSI = 40402,
  BVBAN = 40403,
  BENHNHAN = 40404,
  KHACH_VANG_LAI = 40405,
}

export enum RefGenDrugCatID_1 {
  KHAC = 1,
  HUONGTHAN = 2,
  GAYNGHIEN = 3,
}

export enum V_DischargeType {
  RA_VIEN = 1501,
  XIN_VE = 1502,
  BO_VE = 1503,
  DUA_VE = 1504,
  CHUYEN_VIEN = 1505,
}

export enum InPatientDeptStatus {
  NHAP_KHOA_PHONG = 40501,
  XUAT_KHOA_PHONG = 40502,
}

export enum RegistrationClosingStatus {
  BALANCED = 40601,
  NOTBALANCED_CREDIT = 40602,
  NOPAYMENT = 40603,
  NOTBALANCED_DEBIT = 40604,
}

export enum PatientFindBy {
  NGOAITRU = 0,
  NOITRU = 1,
  CAHAI = 2,
}

export enum DischargeCondition {
  KHOI = 40701,
  DO_GIAM = 40702,
  KHONG_THAY_DOI = 40703,
  NANG_HON = 40704,
  TU_VONG = 40705,
}

export enum DeadReason {
  InSurgery = 74001,
  After24Hour = 74002,
}

export enum CategoryOfDecease {
  DO_BENH = 1001,
  DO_TAI_BIEN_DIEU_TRI = 1002,
  LY_DO_KHAC = 1003,
  CHUA_XAC_DINH = 1000,
}

export enum V_AItemType {
  DRUG = 22001,
  DRUG_CLASS = 22002,
  LY_DO_KHAC = 22003,
}

export enum V_PharmacyOutRepType {
  ALL = 40801,
  TUNG_NGUOI = 40802,
}

export enum V_PaymentReason {
  THU_TIEN_NGOAI_TRU = 40900,
  TAM_UNG_NOI_TRU = 40901,
  THU_TIEN_GIAI_PHAU = 40902,
  THU_TIEN_THONG_TIM = 40903,
  HOAN_TIEN_TRA_TRUOC = 40906
}

export enum V_GenericPaymentType {
  THU_TIEN = 61100,
  DOI_BIEN_LAI = 61101,
}

export enum ServiceItemType {
  CHI_TIET_KCB = 50000,
  CHI_TIET_CLS = 50001,
  CHI_TIET_THUOC = 50002,
  BILLING = 50003,
}

export enum StatusForm {
  TAOMOI = 0,
  HIEUCHINH = 1,
  XEM = 2,
}

export enum ButtonClicked {
  TAOMOI = 0,
  HIEUCHINH = 1,
  XOA = 2,
  BOQUA = 3,
  LUU = 4,
  IN = 5,
}

export enum V_ByOutPrice {
  GIATHONGTHUONG = 51000,
  GIAVON = 51001,
  KHAC = 51002,
}

export enum V_ByOutPriceMedDept {
  GIATHONGTHUONG = 52000,
  GIAVON = 52001,
  KHAC = 52002,
}

export enum V_TradingPlaces {
  DANG_KY = 53000,
  NHA_THUOC = 53001,
  QUAY_XAC_NHAN = 53002,
}

export enum V_ServicePrice {
  None = 0,
  Changeable = 1,
}

export enum DocTypeRequired_Status {
  CHUA_HOAN_THANH = 60550,
  DA_HOAN_THANH = 60551,
}

export enum V_DocTypeRequired {
  CD_XUAT_KHOA = 60500,
  DN_CHUYEN_KHOA = 60501,
}

export enum V_CashAdvanceType {
  DE_NGHI_TAM_UNG = 54000,
  DE_NGHI_THANH_TOAN = 54001,
}

export enum V_DiagnosisType {
  DIAGNOSIS_NORMAL = 55000,
  DIAGNOSIS_IN = 55001,
  DIAGNOSIS_OUTHOS = 55002,
  DIAGNOSIS_OUTDEPT = 55003,
  DIAGNOSIS_DAILY = 55004,
  DIAGNOSIS_INDEPT = 55005,
  Diagnosis_SmallProcedure = 55006,
  DIAGNOSIS_BEFOREPROCEDUREORSURGERY = 55007,
  DIAGNOSIS_AFTERPROCEDUREORSURGERY = 55008,
}

export enum StaffPositions_Enum {
  GIAM_DOC = 84901,
  PGD_HANH_CHANH = 84902,
  PGD_KY_THUAT = 84903,
  PHO_GIAM_DOC = 84904,
  UY_QUYEN_GD = 84905,
  TRUONG_NHA_THUOC = 84910,
  THU_KHO_NHA_THUOC = 84911,
  THONG_KE_DUOC_NHA_THUOC = 84912,
  TRUONG_KHOA_DUOC = 84920,
  THU_KHO_THUOC_KHOA_dUOC = 84921,
  THU_KHO_Y_CU = 84922,
  THU_KHO_HOA_CHAT = 84923,
  KE_TOAN_KHO_KHOA_DUOC = 84924,
  THONG_KE_DUOC_THUOC = 84925,
  THONG_KE_DUOC_YCU = 84926,
  THONG_KE_DUOC_HOACHAT = 84927,
  TRUONG_KHOA_VATTU = 84928,
  THONG_KE_VATTU = 84929,
  DIEU_DUONG_TRUONG_KHOA = 84930,
  TRUONG_KHOA_XET_NGHIEM = 84931,
  KE_TOAN_TRUONG = 84940,
  TP_KE_HOACH = 84950,
  THU_QUY = 84960,
  NGHIEP_VU_DUOC = 84970,
}

export enum V_PrescriptionIssuedCase {
  UPDATE_FROM_PRESCRIPT_WAS_SOLD = 2305,
}

export enum V_Form02Type {
  ALL_DEPT = 60001,
  ONE_DEPT = 60002,
}

export enum PriceListType {
  BANG_GIA_THUOC = 1,
  BANG_GIA_DV = 2,
  BANG_GIA_PCL = 3,
}

export enum V_NewPriceType {
  Unknown_PriceType = 60430,
  Fixed_PriceType = 60410,
  Updatable_PriceType = 60420,
}

export enum PopupModifyPrice_Type {
  INSERT_DICHVU = 60450,
  INSERT_PCL_HINHANH = 60451,
  INSERT_PCL_XETNGHIEM = 60452,
  UPDATE_DV = 60453,
  UPDATE_PCL = 60454,
}

export enum V_SupplierType {
  CUNGCAP_THIETBI_YTE = 7200,
  CUNGCAP_THIETBI_VANPHONG = 7201,
  KHAC = 7202,
}

export enum V_StockTakeType {
  KIEMKE_KETCHUYEN = 60101,
  KIEMKE_BOSUNG = 60102,
}

export enum V_EchoCardio_2D_Situs {
  V_Solitus = 29000,
  V_Inversus = 29001,
  V_Ambiguous = 29002,
}

export enum AppServiceDetailPrintType {
  None = 0,
  NormalApp = 1,
  HIApp = 2,
  HIApp_InPt = 3,
  HIApp_New = 4,
}

export enum V_RecordState {
  UNCHANGE = 60801,
  ADD = 60802,
  UPDATE = 60803,
  DELETE = 60804,
}

export enum V_GenPaymtReasonTK {
  VIEN_PHI_MO = 61001,
  VIEN_PHI_MACH_VANH = 61002,
  VIEN_PHI_KHOA_A = 61003,
  VIEN_PHI_KHOA_B = 61004,
  THU_KHAC = 61005,
  CHI_PHI_DIEU_TRI = 61006,
  VIEN_PHI_TRAI = 61007,
  CHI_PHI_KCB = 61008,
  VP_CHUP_MACH_VANH = 61009,
  DONG_THONG_LIEN_NHI = 61010,
  DONG_THONG_LIEN_THAT = 61011,
  CP_MAY_TAO_NHIP = 61012,
}

export enum V_GetReportMethod {
  VIEW_REPORT = 61201,
  EXPORT_EXCEL = 61202,
}

export enum V_HIReportType {
  DATE = 61501,
  MONTH = 61502,
  QUARTER = 61503,
  YEAR = 61504,
  TIME = 61505,
  REGID = 61506,
}

export enum PCLRequestCreatedFrom {
  FROM_PCLREQUEST = 0,
  FROM_BILLINGINV = 1,
}

export enum V_ReqPaymentStatus {
  NO_BILL = 61600,
  NEW_BILL = 61601,
  PAID_ALL = 61602,
  REFUND_ALL = 61603,
}

export enum LoadPCLRequestType {
  NO_LOAD_PCL = 0,
  LOAD_COMPLETED_PCL = 1,
  LOAD_ALL = 2,
}

export enum V_RefundPaymentReasonInPt {
  THUA_DA_TRU_BHYT = 61600,
  THUA_VIEN_PHI_MO = 61601,
  THUA_VP_MACH_VANH = 61602,
  THUA_DAT_MAY_TAO_NHIP = 61603,
  THUA_CP_DIEU_TRI = 61604,
  NL_VIEN_PHI_MO = 61605,
  NL_VP_MACH_VANH = 61606,
  NL_DAT_MAY_TAO_NHIP = 61607,
}

export enum RequireDiagnosisForPCLReq {
  DIAG_FOR_PCLREQ_OUTPATIENT = 1,
  DIAG_FOR_PCLREQ_INPATIENT = 2,
  DIAG_FOR_PCLREQ = 3,
}

export enum V_EchographyPosture {
  Front = 1,
  After = 2,
  Middle = 3,
}

export enum V_MomMedHis {
  Zero = 0,
  Once = 1,
  Twice = 2,
  Thrice = 3,
  Four = 4,
}

export enum V_InfusionProcessType {
  Continuous = 62201,
  Interrupted = 62202,
}

export enum V_InfusionType {
  Infusion = 62301,
  Inject = 62302,
  SlowInject = 62303,
  Bolus = 62304,
}

export enum V_TimeIntervalUnit {
  Volume = 62401,
  Time = 62402,
}

export enum V_LevelCare {
  One = 1,
  Two = 2,
  Three = 3,
}

export enum V_TransferFormType {
  CHUYEN_Di = 1,
  CHUYEN_DEN = 2,
  CHUYEN_DI_CLS = 3,
}

export enum CriterialTypes {
  MA_BN = 1,
  TEN_BN = 2,
  MA_CHUYEN_TUYEN = 3,
  BV_CHUYEN = 4,
  KHOA_CHUYEN = 5,
}

export enum V_HeartSurgicalType {
  Closed = 64001,
  Opened = 64002,
}

export enum V_DiagnosticType {
  Congenital = 65001,
  Valve = 65002,
  Coronary = 65003,
}

export enum V_TreatmentMethod {
  InPtExam = 66001,
  Cardiac = 66002,
  Surgery = 66003,
}

export enum V_ProcessStep {
  Opened = 67001,
  Approved = 67002,
  Rejected = 67003,
  BeginExam = 67004,
  CompleteExam = 67005,
  Admission = 67006,
  Surgery = 67007,
  Completed = 67008,
}

export enum V_ValveType {
  Mechanical = 68001,
  Biological = 68002,
}

export enum V_CharityObjectType {
  NGUOINGHEO = 79001,
  UUDAI = 79002,
  KONGUOINHAN = 79003,
  KOTHUDUOC = 79004,
}

export enum V_ProductScope {
  InHIScope = 82001,
  NotInHIScope = 82002,
}

export enum V_RouteOfAdministration {
  UONG = 61301,
  NGAM = 61302,
  NHAI = 61303,
  DATDUOILUOI = 61304,
  NGAMDUOILUOI = 61305,
  TIEMBAP = 61306,
  TIEMDUOIDA = 61307,
  TIEMTRONGDA = 61308,
  TIEMTINHMACH = 61309,
  TIEMTRUYENTINHMACH = 61310,
  TIEMVAOOKHOP = 61311,
  TIEMNOINHANCAU = 61312,
  TIEMTRONGDICHKINHMAT = 61313,
  TIEMVAOCACKHOANGTRONGCOTHE = 61314,
  TIEM = 61315,
  TIEMDONGMACHKHOIU = 61316,
  TIEMVAOKHOANGTUNHIEN = 61317,
  TIEMVAOKHOIU = 61318,
  TRUYENTINHMACH = 61319,
  TIEMTRUYEN = 61320,
  BOI = 61321,
  XOANGOAI = 61322,
  DANTRENDA = 61323,
  XITNGOAIDA = 61324,
  DUNGNGOAI = 61325,
  DATAMDAO = 61326,
  DATHAUMON = 61327,
  THUTHAUMONTRUCTRANG = 61328,
  DAT = 61329,
  DATTUCUNG = 61330,
  THUT = 61331,
  PHUNMU = 61332,
  DANGHIT = 61333,
  BOTHIT = 61334,
  XIT = 61335,
  KHIDUNG = 61336,
  DUONGHOHAP = 61337,
  XITMUI = 61338,
  XITHONG = 61339,
  THUOCMUI = 61340,
  NHOMUI = 61341,
  NHOMAT = 61342,
  TRAMAT = 61343,
  THUOCMAT = 61344,
  NHOTAI = 61345,
  APNGOAIDA = 61346,
  APSATKHOIU = 61347,
  BINHKHILONGHOACNEN = 61348,
  BINHKHINEN = 61349,
  BOITRUCTRANG = 61350,
  DANHTUALUOI = 61351,
  CAYVAOKHOIU = 61352,
  CHIEUNGOAI = 61353,
  DUNGDICH = 61354,
  DUNGDICHRUA = 61355,
  DUNGDICHTHAMPHAN = 61356,
  PHUN = 61357,
  TUI = 61358,
  HONDICH = 61359,
  BOTDONGKHODEPHAHONDICH = 61360,
  BOM = 61361,
  DEO = 61362,
}

export enum V_VENType {
  V = 60300,
  E = 60301,
  N = 60302,
}

export enum V_GroupTypeForReport20 {
  KHONGXACDINH = 60200,
  THUOCCOTRONGDANHMUC = 60201,
  THUOCPHOIHOPNHIEUHOATCHAT = 60202,
  THUOCVUOTTUYENCHUYENMONKYTHUAT = 60203,
  THUOCCHUYENKHOADOCSKCBTUPHACHE = 60204,
  THUOCNGOAIDANHMUCBHYT = 60205,
  DANHMUCTHUOCDUOCTHANHTOAN5030 = 60206,
  MAUCHEPHAMMAU = 60207,
  CHIPHIKHAC = 60208,
  THUOCDONGY = 60209,
}

export enum V_TreatmentPeriodic {
  TreatmentPeriodic1 = 82300,
  TreatmentPeriodic2 = 82301,
  TreatmentPeriodic3 = 82302,
}

export const V_TreatmentPeriodicDescription = new Map<number, string>(
  [
    [V_TreatmentPeriodic.TreatmentPeriodic1, i18n.t("Chu kì 1")],
    [V_TreatmentPeriodic.TreatmentPeriodic2, i18n.t("Chu kì 2")],
    [V_TreatmentPeriodic.TreatmentPeriodic3, i18n.t("Chu kì 3")],
  ]
);

export enum V_ReportStatus {
  NotReported = 82400,
  Pending = 82401,
  Completed = 82402,
  ReportedErr = 82404,
}

export enum V_CatDrugType {
  All = 0,
  Shared = 82201,
  DrugDept = 82202,
  Pharmacy = 82203,
}

export enum HIType {
  NoHI = 0,
  HI = 1,
}

export enum V_TreatmentType {
  IssuedPrescription = 82500,
  InPtAdmission = 82501,
  PCLExam = 82502,
  OutPtTreatment = 82506,
  Transfer = 82507,
  SmallProcedure = 82508,
}

export enum V_WarningLevel {
  Normal = 82800,
  Warning = 82801,
  Block = 82802,
}

export enum V_InteractionSeverityLevel {
  Level0 = 82900,
  Level1 = 82901,
  Level2 = 82902,
  Level3 = 82903,
  Level4 = 82904,
  Level5 = 82905,
}

export enum V_HosClientType {
  Company = 83000,
  HealthyOrganization = 83001,
}

export enum V_Ekip {
  EkipSo1 = 82701,
  EkipSo2 = 82702,
  EkipSo3 = 82703,
}

export enum V_EkipIndex {
  DauTien = 83100,
  CungEkip = 83101,
  KhacEkip = 83102,
}

export enum DeptID {
  KHOA_DUOC = 120,
  CAP_CUU = 132,
  NHA_THUOC = 121,
}

export enum HITTypeID {
  THUTHUAT_PHAUTHUAT = 5,
  DVKT = 9,
  CDHA = 15,
}

export enum TypeChangePrice {
  DRUGDEPT = 1,
  PHARMACY = 2,
}

export enum SupplierDrugDeptPharmOthers {
  DRUGDEPT = 1,
  PHARMACY = 2,
  ALL = 3,
  OTHER = 4,
}

export enum V_AdmissionType {
  Emergency = 1100,
  EmergencyIncome = 1101,
  FromOutPtDept = 1102,
  DeptIncome = 1103,
  FromOutHos = 1104,
}

export enum V_SpecialistType {
  Tim = 83601,
  Noi = 83602,
  Ngoai = 83603,
  Nhi = 83604,
  DaLieu = 83605,
  TMH = 83606,
  RHM = 83607,
  San = 83608,
  Mat = 83609,
}

export enum V_OutwardTemplateType {
  OutwardTemplate = 84400,
  RequestTemplate = 84401,
}

export enum V_AntibioticTreatmentType {
  InfectionCase = 84500,
  Instruction = 84501,
}

export enum V_InstructionOrdinalType {
  Thuong = 84600,
  KhangSinh = 84601,
  GayNghien = 84602,
  KhangViem = 84603,
  HuongThan = 84604,
}

export enum V_RangeOfWareHouses {
  WholeHospital = 84700,
  DrugDept = 84701,
  StoreDept = 84702,
  BaseNumStoreDept = 84703,
}

export enum MedicalServiceTypeID {
  KHAMBENH = 1,
}

export enum HospitalCode {
  VIEN_TIM = 79443,
  THANH_VU_1 = 95076,
  THANH_VU_2 = 95078,
}

export enum LoaiDienCuc {
  UNKNOWN = 0,
  MOT_CAP = 1,
  HAI_CAP = 2,
}

export enum StaffSurgeryRole {
  BAC_SI_CHINH = 1,
  BAC_SI_PHU = 2,
  BAC_SI_GAY_ME_CHINH = 3,
  BAC_SI_GAY_ME_PHU = 4,
  BAC_SI_THNCT_ECMO = 5,
  DIEU_DUONG_GAY_ME = 6,
  DIEU_DUONG_DUNG_CU = 7,
  DIEU_DUONG_THNCT = 8,
}

export enum OutDrugInvStatus {
  HOAN_TOAN_MOI = 1,
  DA_LAY_THUOC = 2,
  DA_TRA_THUOC = 3,
  DA_HUY_PHIEU = 4,
  HUY_DA_HOAN_TIEN = 5,
  HUY_CHUA_HOAN_TIEN = 6,
  DA_TRA_TIEN = 7,
  DA_HOAN_TIEN = 8,
  CHUA_TRA_TIEN = 9,
}

export enum IntravenousContinueType {
  PHA = 85500,
  KHONG_PHA = 85501,
}

export enum BenefitType {
  QL_1_100 = 85600,
  QL_2_100 = 86501,
  QL_3_95 = 85602,
  QL_4_80 = 85603,
  QL_5_100 = 85604,
}

export const BenefitTypes = [
  {
    Id: BenefitType.QL_1_100,
    Text: i18n.t('1 - 100%'),
    Value: '1'
  },
  {
    Id: BenefitType.QL_2_100,
    Text: i18n.t('2 - 100%'),
    Value: '2'
  },
  {
    Id: BenefitType.QL_3_95,
    Text: i18n.t('3 - 95%'),
    Value: '3'
  },
  {
    Id: BenefitType.QL_4_80,
    Text: i18n.t('4 - 80%'),
    Value: '4'
  },
  {
    Id: BenefitType.QL_5_100,
    Text: i18n.t('5 - 100%'),
    Value: '5'
  },
];

export enum V_AntiInflammatoryType {
  KHANGVIEM = 85800,
  GAYNGHIEN = 85801,
  HUONGTHAN = 85802,
}

export enum V_CpoeImplementationProgress {
  CHUATHUCHIEN = 85700,
  TH1PHAN = 85701,
  DATHUCHIEN = 85702,
}

export enum V_InPatientInstructionType {
  THUONG = 85900,
  BOSUNG = 85901,
  DIEUCHINH = 85902,
  NGUNG = 85903,
}

export enum V_CPOEDrugStatus {
  KT = 86000,
  TN = 86001,
  TT = 86002,
  DC = 86003,
  MOI = 86004,
}

export enum V_ChooseDaysOfWeek {
  T2_T4_T6 = 86200,
  T3_T5_T7 = 86201,
  T2_T3_T4_T5_T6 = 86202,
  T2_T3_T4_T5_T6_T7 = 86203,
  ALL_WEEK = 86204,
}

export enum V_HIReportErrorStatus {
  GNL = 86100,
  FIXED = 86101,
}

export enum V_DispatchType {
  BENHNHAN_TUNHAN = 86300,
  CONGTY_CHUYENPHAT = 86301,
  CONGTY_CONGNGHE = 86302,
  NHANVIEN = 86303,
  BUU_CUC = 86304,
}

export enum V_DispatchStatus {
  CHUA_GUI = 86400,
  DA_GUI = 86401,
}

export enum V_DayOfWeek {
  THU_2 = 86500,
  THU_3 = 86501,
  THU_4 = 86502,
  THU_5 = 86503,
  THU_6 = 86504,
  THU_7 = 86505,
  CHU_NHAT = 86506,
}

export enum V_AppointmentType {
  HENTAIKHAM = 3801,
  HENKHAMSUCKHOE = 3807,
  HENCLSSO = 3808,
  HENDIEUTRINGOAITRU = 3809,
  HENDIEUTRINGOAITRUCUNGDANGKY = 3810,
}


export enum DetectInputRegexEnum {
  Empty = -1,
  FullName = 1,
  PMF = 2,
  PCL = 3,
  PtCode = 4,
  IssueCode = 5,
  QMSCode = 6,
  OutwardCode = 7,
  IdNumber = 8,
  HiCardNo = 9,
  OutInternal = 10,
  HasNumber = 0
} 


export enum V_FamilyRelationship {
  WIFE = 501,
  HUSBAND = 502,
  SON = 503,
  DAUGHTER = 511,
  FATHER = 504,
  MOTHER = 505,
  BROTHER = 506,
  SISTER = 507,
  GRANDFATHER = 508,
  GRANDMOTHER = 509,
  AUNT = 515,
  UNCLE = 517,
  OTHER = 514
}

export enum DetectInputKSKEnum {
  FULLNAME,
  GENDER,
  DOB,
  ADDRESS,
  PHONENUMBER,
  GROUP
} 
