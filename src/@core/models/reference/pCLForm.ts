import { PCLSection } from '../appointments/pCLExamType';

export interface PCLForm {
  pCLFormID: number;
  pCLFormName: string;
  applicatorDay: string | null;
  expiredDay: string | null;
  v_PCLMainCategory: number;
  pCLSections: PCLSection[];
}
