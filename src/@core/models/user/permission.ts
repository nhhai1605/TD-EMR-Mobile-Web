import { Operation } from './function';
import { Role } from './Role';

export interface Permission {
  permissionItemID?: number;
  roleID?: number;
  operationID?: number;
  pFullControl?: boolean;
  pView?: boolean;
  pAdd?: boolean;
  pUpdate?: boolean;
  pDelete?: boolean;
  pReport?: boolean;
  pPrint?: boolean;
  operation?: Operation;
  role?: Role;
}
