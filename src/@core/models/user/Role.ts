import { Operation } from './function';
import { GroupRole } from './group';
import { Permission } from './permission';

export interface Role {
  roleID?: number;
  roleName?: string;
  description?: string;
  groupRoles?: GroupRole[];
  permissions?: Permission[];
  operations?: Operation[];
}
