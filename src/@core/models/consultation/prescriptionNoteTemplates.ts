import { V_PrescriptionNoteTempTypeEnum } from "../enums/v_PrescriptionNoteTempType";
import { Staff } from "../staff";

export interface PrescriptionNoteTemplates {
  prescriptNoteTemplateID: number;
  noteDetails: string;
  detailsTemplate: string;
  recCreatedDate: string;
  isActive: boolean;
  v_PrescriptionNoteTempTypeID: number;
  v_PrescriptionNoteTempType: V_PrescriptionNoteTempTypeEnum;
  staffID: number;
  staff: Staff;
  noteDetailsShort: string;
  noteDetailsShortWithID: string;
}
