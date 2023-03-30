export interface TicketIssue {
  ticketID?: number;
  issueDateTime?: string;
  ticketNumberText?: string;
  ticketNumberSeq?: number;
  hICardNo?: string;
  v_TicketStatus?: number;
  saveToDb_StatusFlag?: number;
  ticketTypeID?: number;
  workingCounterID?: number;
  patientCode?: string;
  recCreatedDate?: string;
  counterID?: number;
  nCounterNumber?: number;
  ticketGetTime?: string;
  v_IssueBy?: number;
  serialTicket?: string;
  patientName?: string;
  printTimes?: number;
  staffID?: number;
  calledStaffID?: number;
  calledTime?: string;
  rePrintTime?: string;
}
