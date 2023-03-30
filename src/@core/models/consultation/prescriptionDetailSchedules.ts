
export interface PrescriptionDetailSchedulesLookup {
  name: string;
}

export interface PrescriptionDetailSchedules {
  prescriptDetailScheduleID?: number;
  prescriptDetailID?: number;
  v_PeriodOfDay?: number;
  monday?: number;
  tuesday?: number;
  wednesday?: number;
  thursday?: number;
  friday?: number;
  saturday?: number;
  sunday?: number;
  mondayStr?: string;
  tuesdayStr?: string;
  wednesdayStr?: string;
  thursdayStr?: string;
  fridayStr?: string;
  saturdayStr?: string;
  sundayStr?: string;
  usageNote?: string;
  // scheGen?: PrescriptionDetailSchedulesLookup;
  scheMonday?: PrescriptionDetailSchedulesLookup;
  scheTuesday?: PrescriptionDetailSchedulesLookup;
  scheWednesday?: PrescriptionDetailSchedulesLookup;
  scheThursday?: PrescriptionDetailSchedulesLookup;
  scheFriday?: PrescriptionDetailSchedulesLookup;
  scheSaturday?: PrescriptionDetailSchedulesLookup;
  scheSunday?: PrescriptionDetailSchedulesLookup;
  predictionDosage?: PrescriptionDetailSchedulesLookup;
}
