import { CitiesProvince } from '../reference/refCountry';
import { IGender } from './gender';

export interface HIQRCode {
  fullName?: string;
  hICardNo?: string;
  gender?: IGender;
  address?: string;
  dOB?: string;
  validDateFrom?: string;
  validDateTo?: string;
  provinceHICode?: string;
  registrationCode?: string;
  citiesProvince?: CitiesProvince;
}
