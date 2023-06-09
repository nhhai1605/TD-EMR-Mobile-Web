enum ROUTE_PATHS {
  Home = '/home',
  Login = '/login',
  Register = '/register',
  ForgotPassword = '/forgot-password',

  NotFound = '/not-found',
  NoPermission = '/no-permission',
  MyTasks = '/my-task',
  PatientAppointment = '/appointment',
  PatientAppointmentList = 'appointment-list',
  AppointmentFromExaminationList = 'apppointment-from-examination',
  PatientDashboard = `/patient-dashboard`,
  PatientRegistration = '/patient-registration',
  PatientSearch = '/patient-search',
  PharmacyManagement = '/pharmacy-management',
  ParaclinicalManagement = '/paraclinical-management',
  RegisterService = '/register-service',
  HowToUseTdControl = '/how-to-use-td-control',
  MedicalService = '/medical-service',
  DepartmentalServiceAllocation = '/departmental-service-allocation',
  Comingsoon = '/Comingsoon',
  ParaclinicalImaging = '/admin/paraclinical-imaging',
  ParaclinicalLaboratory = '/admin/paraclinical-laboratory',
  PCLImageExecutePage = '/paraclinical-laboratory/images',
  PharmacySellingPriceListManagement = '/pharmacySellingPriceList',
  DrugManagement = '/DrugManagement',
  SupplierManagement = '/DrugSupplierManagement',
  InwardDrugSupplier = '/InwardDrugSupplier',
  PCLTestExecutePage = '/paraclinical-laboratory/tests',
  PaymentReport = '/report/payment',
  DoctorWorkSchedule = '/doctor-work-schedule',
  PharmaceuticalCompanyManagement = '/pharmaceutical-company-management',
  UnitManagement = '/unit-management',
  DepartmentalPCLExamTypeAllocation = '/departmental-pcl-exam-type-allocation',
  DrugPlan = '/pharmacy/drug-plan',
  ServicePackage = '/service-package',
  PharmacyPaymentReport = '/pharmacy/paypent-report',
  PharmacyServicesPaymentReport = '/pharmacy/services-paypent-report',
  PharmacyRefundServicesPaymentReport = '/pharmacy/refund-services-paypent-report',
  TestKitCategories = '/test-kit-categories',
  CreateContractHealthExamination = '/health-check/create-contract',
  HealthExaminationCustomers = '/health-check/customers',
  HealthCheck = 'health-check',
  PurchaseOrderPage = '/purchase-order',
  SellingPrescriptionDrugService = '/seller-prescription-drug-service',
  AdviceNote = 'advice-note',
  SellDrugRetail = 'sell-drug-retail',
  CollectedDrugRelease = '/collected-drug-service',
  SellPrescriptionDrugRetail = 'sell-prescription-drug-retail',
  ReturnedDrugPage = "/returned-drug",
  FinalSettlement = "/final-settlement",
  InwardDrugInternal = "/InwardDrugInternal",
  ExportDrugInternal = "/export-drug-internal",
  SyncDataToEHR = "/sync-data-ehr",
  RegistrationDetails = "/registration-details-by-room",
  TreatmentRegimens = "/treatment-regimens",
  CLSNeedToHandle = "/cls-need-handle",
  MedicalExaminationServiceGroup = "/medical-examination-service-group",
  ConfirmHiReport = "/report/confirm-hi-report",
  FunctionManagement = "/user-management/functions",
  CreateConclusionTemplatePage = "/paraclinical-laboratory/create-conclusion-template",
  
}

const COMMON_ROUTE_PATHS_LIST = [
  ROUTE_PATHS.Login,
  ROUTE_PATHS.NotFound,
  ROUTE_PATHS.NoPermission,
  ROUTE_PATHS.HowToUseTdControl,
  ROUTE_PATHS.Comingsoon,
  ROUTE_PATHS.Register,
  ROUTE_PATHS.MyTasks,
];

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [':id'];

enum ROUTE_DYNAMIC_VARIABLE {
  'patientId' = 'patientID',
  'ptRegistrationID' = 'ptRegistrationID',
  'ptRegDetailID' = 'ptRegDetailID',
  'pclExamTypeSubCategoryID' = ':pclExamTypeSubCategoryID',
}

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE, COMMON_ROUTE_PATHS_LIST };
