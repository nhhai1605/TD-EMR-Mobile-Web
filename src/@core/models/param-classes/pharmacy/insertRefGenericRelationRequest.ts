import { TherapyTree } from '@core/models/pharmacy/therapyTree';

export interface InsertRefGenericRelationRequest {
  currentTherapyTree: TherapyTree;
  obsRefGenericRelation: TherapyTree[];
}
