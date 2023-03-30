import i18n from "@core/utils/i18n";

export enum ExamRegStatusEnum {
  //[Description("Chưa xác định")]
  KHONG_XAC_DINH = 700,
  // [Description("Đăng ký khám")]
  DANG_KY_KHAM = 701,
  // [Description("Bắt đầu thực hiện")]
  BAT_DAU_THUC_HIEN = 703,
  // [Description("Hoàn tất")]
  HOAN_TAT = 704,
  // [Description("Ngưng trả tiền lại")]
  NGUNG_TRA_TIEN_LAI = 707,
  // [Description("Xóa trả tiền lại")]
  XOA_TRA_TIEN_LAI = 708,
}


export const V_ExamRegStatusEnumDescription = new Map<number, string>([
  [ExamRegStatusEnum.DANG_KY_KHAM, i18n.t('patientRegistration.examRegStatus.startReg')],
  [ExamRegStatusEnum.BAT_DAU_THUC_HIEN, i18n.t('patientRegistration.examRegStatus.exam')],
  [ExamRegStatusEnum.HOAN_TAT, i18n.t('patientRegistration.examRegStatus.complete')],
  [ExamRegStatusEnum.NGUNG_TRA_TIEN_LAI, i18n.t('patientRegistration.examRegStatus.cancelled')],
])