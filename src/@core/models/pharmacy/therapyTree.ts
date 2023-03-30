import { DrugClass } from './refUnit';

export interface TherapyTree {
  v_InteractionWarningLevel?: number;
  isInteraction?: boolean;
  isSimilar?: boolean;
  code?: string;
  parent?: DrugClass;
  children?: TherapyTree[];
  description?: string;
  nodeID?: number;
  parentID?: number;
  nodeText?: string;
  v_InteractionSeverityLevel?: number;
  genericRelationDescription?: string;
}
