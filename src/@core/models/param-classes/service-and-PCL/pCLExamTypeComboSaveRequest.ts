import { PCLExamTypeCombo, PCLExamTypeComboItem } from '@core/models/reference/pCLExamTypeCombo';

export interface PCLExamTypeCombo_SaveRequest {
  item: PCLExamTypeCombo;
  comboXML_Insert?: PCLExamTypeComboItem[];
  comboXML_Update?: PCLExamTypeComboItem[];
  comboXML_Delete?: PCLExamTypeComboItem[];
}
