import { Role } from './Role';
import { UserAccount } from './userAccount';

export interface Group {
  groupID?: number;
  groupName?: string;
  description?: string;
  isSelected?: boolean;
  users?: UserAccount[];
  roles?: Role[];
}

export interface GroupRole {
  groupRoleID?: number;
  groupID?: number;
  roleID?: number;
  group?: Group;
  role?: Role;
}
