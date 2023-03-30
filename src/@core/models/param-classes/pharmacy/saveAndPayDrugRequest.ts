import { PatientRegistration } from "@core/models/patients/patientRegistration";
import { OutwardDrugInvoice } from "@core/models/pharmacy/outwardDrugInvoice";
import { PatientTransactionPayment } from "@core/models/registrations/patientTransactionPayment";

export interface SaveAndPayDrugRequest {
    invoice: OutwardDrugInvoice;
    regInfo: PatientRegistration;
    staffID: number;
    currentPayment: PatientTransactionPayment;
}