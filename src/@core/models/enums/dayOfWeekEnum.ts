import i18n from "@core/utils/i18n";

export enum V_DayOfWeekEnum {
  MONDAY = 86500,
  TUESDAY = 86501,
  WEDNESDAY = 86502,
  THURSDAY = 86503,
  FRIDAY = 86504,
  SATURDAY = 86505,
  SUNDAY = 86506
}

export const V_DayOfWeekDescription = new Map<number, string>(
  [
    [V_DayOfWeekEnum.MONDAY, i18n.t("common.dayOfWeek.Monday")],
    [V_DayOfWeekEnum.TUESDAY, i18n.t("common.dayOfWeek.Tuesday")],
    [V_DayOfWeekEnum.WEDNESDAY, i18n.t("common.dayOfWeek.Wednesday")],
    [V_DayOfWeekEnum.THURSDAY, i18n.t("common.dayOfWeek.Thursday")],
    [V_DayOfWeekEnum.FRIDAY, i18n.t("common.dayOfWeek.Friday")],
    [V_DayOfWeekEnum.SATURDAY, i18n.t("common.dayOfWeek.Saturday")],
    [V_DayOfWeekEnum.SUNDAY, i18n.t("common.dayOfWeek.Sunday")],
  ]
);