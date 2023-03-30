import { EntityStateEnum } from '../enums/entityState';
import { RoomType } from './refDepartment';

export interface Location {
  lID?: number;
  rmTypeID?: number;
  locationName?: string;
  locationDescription?: string;
  v_LocationType?: number;
  deptLocationID?: number;
  roomType?: RoomType;
  isChecked?: boolean;
  //entityState?: EntityStateEnum;
}
