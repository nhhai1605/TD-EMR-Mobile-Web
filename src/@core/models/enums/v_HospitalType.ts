import i18n from '@core/utils/i18n';

export enum V_HospitalType {
 LOAI_A_THANH_PHO = 200,
 LOAI_B_TINH = 201,
 LOAI_C_QUAN_HUYEN = 202,
 LOAI_D_TUYEN_DUOI = 203,
}

export const V_HospitalTypeString = [
  {
	Id: V_HospitalType.LOAI_A_THANH_PHO,
	Text: i18n.t('hospitalDialog.loaiAThanhPho'),
  }, 
  {
	Id: V_HospitalType.LOAI_B_TINH,
	Text: i18n.t('hospitalDialog.loaiBTinh'),
  },
  {
	Id: V_HospitalType.LOAI_C_QUAN_HUYEN,
	Text: i18n.t('hospitalDialog.loaiCQuanHuyen'),
  },
  {
	Id: V_HospitalType.LOAI_D_TUYEN_DUOI,
	Text: i18n.t('hospitalDialog.loaiDTuyenDuoi'),
  },
  
];


