import i18n from "@core/utils/i18n"

export enum V_PCLRequestStatusEnum {
  OPEN = 26000,
  CLOSE = 26001,
  CANCEL = 26002,
  PROCESSING = 26003,
}

export const V_PCLRequestStatusDescription = new Map<number, string>([
  [V_PCLRequestStatusEnum.OPEN, i18n.t("pclRequestStatusEnum.open")],
  [V_PCLRequestStatusEnum.CLOSE, i18n.t("pclRequestStatusEnum.close")],
  [V_PCLRequestStatusEnum.CANCEL, i18n.t("pclRequestStatusEnum.cancel")],
  [V_PCLRequestStatusEnum.PROCESSING, i18n.t("pclRequestStatusEnum.processing")],
]);




