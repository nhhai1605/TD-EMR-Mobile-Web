import { SearchPtRegistrationCriteria } from "@core/models/registrations/searchPtRegistrationCriteria";

export interface SearchRegistrations {
  searchCriteria: SearchPtRegistrationCriteria;
  pageIndex: number;
  pageSize: number;
  bCountTotal: boolean;
}
