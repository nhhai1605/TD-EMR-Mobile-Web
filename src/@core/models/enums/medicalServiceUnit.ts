import i18n from '@core/utils/i18n';

export enum MedicalServiceUnitEnum {
  Time = 28600,
  Day = 28601,
  Productivity = 28602,
  Things = 28603,
  Minutes = 28604,
  Set = 28605,
  Tupe = 28606,
  Unit = 28607,
  Half_Day = 28608,
  Quater_Day = 28609,
}

export enum AppointmentTypeEnum {
  ReExamination = 3801,
  PhysicalExamination = 3807,
  Subclinical = 3808,
  OutpatientTreatment = 3809,
  OutpatientTreatmentWithRegistration = 3810,
}

export enum SpecialistTypeEnum {
  ChuyenKhoaTim = 83601,
  ChuyenKhoaNoi = 83602,
  ChuyenKhoaNgoai = 83603,
  ChuyenKhoaNhi = 83604,
  ChuyenKhoaDaLieu = 83605,
  ChuyenKhoaTMH = 83606,
  ChuyenKhoaRHM = 83607,
  ChuyenKhoaSan = 83608,
  ChuyenKhoaMat = 83609,
  ChuyenKhoaYHCT = 83610,
}

export const AppointmentTypesEnums = [
  {
    Id: AppointmentTypeEnum.ReExamination,
    Text: i18n.t('Hẹn tái khám'),
  },
  {
    Id: AppointmentTypeEnum.PhysicalExamination,
    Text: i18n.t('Hẹn khám sức khỏe'),
  },
  {
    Id: AppointmentTypeEnum.Subclinical,
    Text: i18n.t('Hẹn cận lâm sàng sổ'),
  },
  {
    Id: AppointmentTypeEnum.OutpatientTreatment,
    Text: i18n.t('Hẹn điều trị ngoại trú'),
  },
  {
    Id: AppointmentTypeEnum.OutpatientTreatmentWithRegistration,
    Text: i18n.t('Hẹn điều trị ngoại trú cùng'),
  },
];

export const MedicalServiceUnitsEnums = [
  {
    Id: MedicalServiceUnitEnum.Time,
    Text: i18n.t('Lần'),
  },
  {
    Id: MedicalServiceUnitEnum.Day,
    Text: i18n.t('Ngày'),
  },
  {
    Id: MedicalServiceUnitEnum.Productivity,
    Text: i18n.t('Suất cơm'),
  },
  {
    Id: MedicalServiceUnitEnum.Things,
    Text: i18n.t('Cái'),
  },
  {
    Id: MedicalServiceUnitEnum.Minutes,
    Text: i18n.t('Phút'),
  },
  {
    Id: MedicalServiceUnitEnum.Set,
    Text: i18n.t('Bộ'),
  },
  {
    Id: MedicalServiceUnitEnum.Tupe,
    Text: i18n.t('Tupe'),
  },
  {
    Id: MedicalServiceUnitEnum.Unit,
    Text: i18n.t('Unit'),
  },
  {
    Id: MedicalServiceUnitEnum.Half_Day,
    Text: i18n.t('1/2 Ngày'),
  },
  {
    Id: MedicalServiceUnitEnum.Quater_Day,
    Text: i18n.t('1/4 Ngày'),
  },
];

export const SpecialistTypesEnums = [
  {
    Id: SpecialistTypeEnum.ChuyenKhoaTim,
    Text: i18n.t('Chuyên Khoa Tim'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaNoi,
    Text: i18n.t('Chuyên Khoa Nội'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaNgoai,
    Text: i18n.t('Chuyên Khoa Ngoại'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaNhi,
    Text: i18n.t('Chuyên Khoa Nhi'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaDaLieu,
    Text: i18n.t('Chuyên Da Liễu'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaTMH,
    Text: i18n.t('Chuyên Khoa TMH'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaRHM,
    Text: i18n.t('Chuyên Khoa RHM'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaSan,
    Text: i18n.t('Chuyên Khoa Sản'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaMat,
    Text: i18n.t('Chuyên Khoa Mắt'),
  },
  {
    Id: SpecialistTypeEnum.ChuyenKhoaYHCT,
    Text: i18n.t('Chuyên Khoa YHCT'),
  },
];
