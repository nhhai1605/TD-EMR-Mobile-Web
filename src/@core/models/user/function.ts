import { Permission } from './permission';

export interface Function {
  functionID?: number;
  eNum?: number;
  moduleID?: number;
  functionName?: string;
  functionDescription?: string;
  idx?: number;
  module?: Module;
  operations?: Operation[];
}

export interface Module {
  moduleID?: number;
  eNum?: number;
  moduleName?: string;
  description?: string;
  idx?: number;
  functions?: Function[];
}

export interface Operation {
  isSelected?: boolean;
  operationID?: number;
  functionID?: number;
  operationName?: string;
  description?: string;
  enum?: number;
  function?: Function;
  permissions?: Permission[];
}
