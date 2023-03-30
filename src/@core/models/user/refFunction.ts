import { Module } from '../common/module';
import { Operation } from './function';
import { Permission } from './permission';

export interface refFunction {
  lstOperation?: refOperation[];
  mFunction?: Function;
}

export interface refModule {
  lstFunction?: refFunction[];
  mModule?: Module;
}

export interface refOperation {
  lstPermission?: Permission[];
  mOperation?: Operation;
  mPermission?: Permission;
}
