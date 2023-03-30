import { ROUTE_PATHS } from './routeConfig';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { IMenuItem } from '@core/models/common/menu';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ImageIcon from '@mui/icons-material/Image';
import { PCLExamTypeSubCategoryEnum } from '@core/models/enums/vPCLMainCategory';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';
import AdjustIcon from '@mui/icons-material/Adjust';
import WaterIcon from '@mui/icons-material/Water';
import BiotechIcon from '@mui/icons-material/Biotech';
import VideocamIcon from '@mui/icons-material/Videocam';
import SyncIcon from '@mui/icons-material/Sync';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const PatientRegistrationMenu: IMenuItem[] = [
  // {
  //   text: 'common.receivingPatient',
  //   navigateTo: ROUTE_PATHS.PatientSearch,
  //   icon: '',
  // },
  {
    text: 'common.serviceRegistration',
    navigateTo: ROUTE_PATHS.PatientRegistration,
    icon: '',
    index: true,
  },
  {
    text: 'common.settlement',
    navigateTo: ROUTE_PATHS.FinalSettlement,
    icon: '',
  },
  {
    text: 'common.servicePakage',
    navigateTo: ROUTE_PATHS.ServicePackage,
    icon: '',
  },
  {
    text: 'Báo cáo',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'common.paymentReport',
        navigateTo: ROUTE_PATHS.PaymentReport,
        icon: '',
        index: true,
      },
      {
        text: 'common.paymentReport_Lab',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'common.paymentReport_ServiceAndImage',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Tổng hợp doanh thu',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Báo cáo nhanh khu khám',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Tiếp nhận bệnh nhân theo địa bàn cư trú',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
];
const MasterDataMenu: IMenuItem[] = [
  {
    text: 'common.pharmacyManagement',
    navigateTo: ROUTE_PATHS.PharmacyManagement,
    icon: '',
    index: true,
  },
  {
    text: 'common.paraclinicalManagement',
    navigateTo: ROUTE_PATHS.ParaclinicalManagement,
    icon: '',
  },
  {
    text: 'common.medicalService',
    navigateTo: ROUTE_PATHS.MedicalService,
    icon: '',
  },
  {
    text: 'common.paraclinicalImaging',
    navigateTo: ROUTE_PATHS.ParaclinicalImaging,
    icon: '',
  },
  {
    text: 'common.paraclinicalLaboratory',
    navigateTo: ROUTE_PATHS.ParaclinicalLaboratory,
    icon: '',
  },
  {
    text: 'common.departmentalServiceAllocation',
    navigateTo: ROUTE_PATHS.DepartmentalServiceAllocation,
    icon: '',
  },
  {
    text: 'common.doctorWorkScheduleManagement',
    navigateTo: ROUTE_PATHS.DoctorWorkSchedule,
    icon: '',
  },
  {
    text: 'common.departmentalPCLExamAllocation',
    navigateTo: ROUTE_PATHS.DepartmentalPCLExamTypeAllocation,
    icon: '',
  },
  {
    text: 'common.testKitCategories',
    navigateTo: ROUTE_PATHS.TestKitCategories,
    icon: '',
  },
  {
    text: 'common.adviceNote',
    navigateTo: ROUTE_PATHS.AdviceNote,
    icon: '',
  },
  {
    text: 'Đồng bộ dữ liệu',
    navigateTo: ROUTE_PATHS.SyncDataToEHR,
    icon: SyncIcon
  },
  {
    text: 'Chỉ định hình ảnh chờ xử lý',
    navigateTo: ROUTE_PATHS.CLSNeedToHandle,
    icon: ''
  }
];

const MedicalExaminationMenu: IMenuItem[] = [
  {
    text: 'common.patientDashboard',
    navigateTo: ROUTE_PATHS.PatientDashboard,
    index: true,
  },
  {
    text: 'Thống kê',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'Danh sách bệnh nhân khám',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Báo cáo chi tiết bác sĩ khám bệnh',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Bảng kê chi tiết khám bệnh',
        navigateTo: ROUTE_PATHS.RegistrationDetails,
        icon: '',
      },
      {
        text: 'Báo cáo giao ban',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Báo cáo bác sĩ chỉ định CLS',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Báo cáo TT - PT chưa thực hiện',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
  {
    text: 'Giấy chuyển tuyến',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'Giấy chuyển đi',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Giấy chuyển đến',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'Giấy chuyển đi làm CLS',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
  {
    text: 'Phác đồ điều trị',
    navigateTo: ROUTE_PATHS.TreatmentRegimens,
    icon: '',
    index: true,
  },
];

const PatientAppointmentMenu: IMenuItem[] = [
  {
    text: 'common.patientAppointment',
    navigateTo: ROUTE_PATHS.PatientAppointment,
    icon: PermContactCalendarIcon,
    index: true,
  },
  {
    text: 'Quản lý hẹn bệnh',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'Danh sách bệnh nhân hẹn bệnh',
        navigateTo: ROUTE_PATHS.PatientAppointmentList,
        icon: '',
      },
      {
        text: 'Hẹn bệnh từ danh sách khám',
        navigateTo: ROUTE_PATHS.AppointmentFromExaminationList,
        icon: '',
      },
      {
        text: 'Báo cáo bệnh nhân tái khám có bệnh mãn tính',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
];

const SubclinicalMenu: IMenuItem[] = [
  {
    text: 'Thực hiện CLS Hình ánh',
    navigateTo: ROUTE_PATHS.PCLImageExecutePage,
    icon: '',
    children: [
      {
        index: true,
        text: 'X-Ray',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.XRAY}`,
        icon: ScreenshotMonitorIcon,
      },
      {
        text: 'Siêu âm',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.Ultrasound}`,
        icon: ImageIcon,
      },

      {
        text: 'Scan',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.Scan}`,
        icon: AdfScannerIcon,
      },

      {
        text: 'MRI',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.MRI}`,
        icon: AdjustIcon,
      },
      {
        text: 'Điện tim - ECG',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.ECG}`,
        icon: WaterIcon,
      },
      {
        text: 'Nội soi',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.Endoscopic}`,
        icon: VideocamIcon,
      },
      {
        text: 'Xét nghiệm',
        navigateTo: `${ROUTE_PATHS.PCLImageExecutePage}/${PCLExamTypeSubCategoryEnum.Test}`,
        icon: BiotechIcon,
      },
    ],
  },
  {
    text: 'Thực hiện Xét nghiệm',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        index: true,
        text: 'Xét nghiệm',
        navigateTo: `${ROUTE_PATHS.PCLTestExecutePage}`,
        icon: BiotechIcon,
      },
    ],
  },
  {
    text: 'Tạo mẫu kết luận',
    navigateTo: ROUTE_PATHS.CreateConclusionTemplatePage,
    icon: ''
  },
  {
    text: 'Báo cáo',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'DSBN thực hiện CLS Hình ảnh',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
      {
        text: 'DSBN thực hiện xét nghiệm',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
];

const GeneralHealthCheckMenu: IMenuItem[] = [
  {
    text: 'Nhóm dịch vụ',
    navigateTo: ROUTE_PATHS.MedicalExaminationServiceGroup,
    icon: ''
  },
  {
    text: 'Khám sức khỏe',
    navigateTo: ROUTE_PATHS.Comingsoon,
    icon: '',
    children: [
      {
        text: 'Khách hàng khám sức khỏe',
        navigateTo: ROUTE_PATHS.HealthExaminationCustomers,
        icon: '',
      },
      {
        text: 'Hợp đồng khám sức khỏe',
        navigateTo: ROUTE_PATHS.CreateContractHealthExamination,
        icon: '',
        index: true,
      },
      {
        text: 'Khám sức khỏe',
        navigateTo: ROUTE_PATHS.HealthCheck,
        icon: '',
      },
      {
        text: 'Thanh toán hợp đồng',
        navigateTo: ROUTE_PATHS.Comingsoon,
        icon: '',
      },
    ],
  },
];

const PharmacyMenu: IMenuItem[] = [
  {
    text: 'Bán thuốc',
    navigateTo: ROUTE_PATHS.Comingsoon,
    children: [
      {
        text: 'Bán thuốc',
        navigateTo: ROUTE_PATHS.SellingPrescriptionDrugService,
        index: true,
      },
      {
        text: 'Bán thuốc lẻ',
        navigateTo: ROUTE_PATHS.SellDrugRetail,
        index: false,
      },
      {
        text: 'Bán thuốc theo toa ngoài',
        navigateTo: ROUTE_PATHS.SellPrescriptionDrugRetail,
        index: false,
      },
      {
        text: 'Nhận thuốc dịch vụ',
        navigateTo: ROUTE_PATHS.CollectedDrugRelease,
        index: false,
      },
      {
        text: 'Trả hàng dịch vụ',
        navigateTo: ROUTE_PATHS.ReturnedDrugPage,
        index: false,
      },
    ],
  },
  {
    text: 'Đặt hàng',
    navigateTo: ROUTE_PATHS.PurchaseOrderPage,
    icon: '',
  },
  {
    text: 'Dự trù',
    navigateTo: ROUTE_PATHS.Comingsoon,
    children: [
      {
        text: 'Dự trù thuốc',
        navigateTo: ROUTE_PATHS.DrugPlan,
      },
    ],
  },
  {
    text: 'Nhập hàng',
    children: [
      {
        text: 'Nhà cung cấp',
        navigateTo: ROUTE_PATHS.InwardDrugSupplier,
      },
      {
        text: 'Nguồn khác',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Nội bộ',
        navigateTo: ROUTE_PATHS.InwardDrugInternal,
      },
      {
        text: 'Cân bằng',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
    ],
  },
  {
    text: 'Xuất hàng',
    children: [
      {
        text: 'Xuất hủy',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Nội bộ',
        navigateTo: ROUTE_PATHS.ExportDrugInternal,
      },
      {
        text: 'Cân bằng',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
    ],
  },
  {
    text: 'Quản lý',
    children: [
      {
        text: 'Hoạt chất',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Đơn vị tính',
        navigateTo: ROUTE_PATHS.UnitManagement,
      },
      {
        text: 'Nhà sản xuất',
        navigateTo: ROUTE_PATHS.PharmaceuticalCompanyManagement,
      },
      {
        text: 'Nhà cung cấp',
        navigateTo: ROUTE_PATHS.SupplierManagement,
      },
      {
        text: 'Giá từ Nhà cung cấp',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Công thức tính giá',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Lớp thuốc',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Danh mục thuốc',
        navigateTo: ROUTE_PATHS.DrugManagement,
      },
      {
        text: 'Chống chỉ định',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'common.pharmacySellingPriceList',
        navigateTo: ROUTE_PATHS.PharmacySellingPriceListManagement,
      },
    ],
  },
  {
    text: 'Báo cáo',
    children: [
      {
        text: 'Báo cáo nộp tiền',
        navigateTo: ROUTE_PATHS.PharmacyPaymentReport,
      },
      {
        text: 'Báo cáo thu tiền DV và CLS',
        navigateTo: ROUTE_PATHS.PharmacyServicesPaymentReport,
      },
      {
        text: 'Báo cáo hoàn tiền DV',
        navigateTo: ROUTE_PATHS.PharmacyRefundServicesPaymentReport,
      },
      {
        text: 'Báo cáo doanh thu',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Kiểm kê',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Sổ kiểm nhập',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Bảng kê chứng từ thanh toán',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Báo cáo nhập xuất tồn',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
      {
        text: 'Thẻ kho',
        navigateTo: ROUTE_PATHS.Comingsoon,
      },
    ],
  },
];

const ReportMenu : IMenuItem[] = [
  {
    text: 'Xác nhận BHYT',
    navigateTo: ROUTE_PATHS.ConfirmHiReport,
    icon: '',
    index: true
  },
]

const UserManagementMenu : IMenuItem[] = [
  {
    text: "Cấu hình phân quyền",
    children: [
      {
        text: "Quản lý chức năng",
        navigateTo: ROUTE_PATHS.FunctionManagement,
        icon: '',
        index: true
      }
    ]
  }
]

export const MainMenu: IMenuItem[] = [
  {
    text: 'common.myTask',
    icon: CloudQueueOutlinedIcon,
  },
  {
    text: 'common.HowToUseTdControl',
    icon: HelpIcon,
  },
  {
    moduleId: TDModuleEnum.PatientRegistration,
    text: 'common.patientRegistration',
    icon: HowToRegOutlinedIcon,
    children: PatientRegistrationMenu,
  },
  {
    moduleId: TDModuleEnum.PatientAppointment,
    text: 'common.patientAppointment',
    icon: ScheduleOutlinedIcon,
    children: PatientAppointmentMenu,
  },
  {
    moduleId: TDModuleEnum.MedicalExamination,
    text: 'common.medicalExamination',
    icon: LocalHospitalOutlinedIcon,
    children: MedicalExaminationMenu,
  },
  ,
  {
    moduleId: TDModuleEnum.Pharmacy,
    text: 'Nhà thuốc',
    icon: LocalHospitalOutlinedIcon,
    children: PharmacyMenu,
  },
  {
    moduleId: TDModuleEnum.Tests,
    text: 'common.test',
    icon: ScienceOutlinedIcon,
  },
  {
    moduleId: TDModuleEnum.GeneralHealthCheck,
    text: 'common.test',
    icon: GeneralHealthCheckMenu,
    children: GeneralHealthCheckMenu,
  },
  {
    moduleId: TDModuleEnum.SystemConfig,
    text: 'common.SystemConfig',
    icon: SettingsIcon,
    children: MasterDataMenu,
  },
  {
    moduleId: TDModuleEnum.Subclinical,
    text: 'common.SystemConfig',
    icon: SettingsIcon,
    children: SubclinicalMenu,
  },
  {
    moduleId: TDModuleEnum.Report,
    text: 'common.report',
    icon: AssessmentIcon,
    children: ReportMenu
  },
  {
    moduleId: TDModuleEnum.UserManagement,
    text: 'common.userManagement',
    icon: ManageAccountsIcon,
    children: UserManagementMenu
  }
];
