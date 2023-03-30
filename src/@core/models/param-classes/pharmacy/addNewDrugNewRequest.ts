import { RefGenericDrugDetail } from '@core/models/pharmacy/refGenericDrugDetail';
import { RefMedContraIndicationTypes } from '@core/models/pharmacy/refMedContraIndicationTypes';

export interface AddNewDrug_NewRequest {
  newDrug: RefGenericDrugDetail;
  lstRefMedicalConditionType: RefMedContraIndicationTypes[];
}
