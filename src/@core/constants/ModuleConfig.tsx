import { Module } from "@core/models/common/module";
import { TDModuleEnum } from "@core/models/enums/moduleEnums";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const modules = [
  {
    id: TDModuleEnum.PatientRegistration,
    name: 'common.patientRegistration',
    description: '',
    icon: <HowToRegOutlinedIcon/>
  },
  {
    id: TDModuleEnum.MedicalExamination,
    name: 'common.medicalExamination',
    description: '',
    icon: <LocalHospitalOutlinedIcon/>
  },
  {
    id: TDModuleEnum.Pharmacy,
    name: 'Nhà thuốc',
    description: '',
    icon: <MedicationOutlinedIcon/>
  },
  {
    id: TDModuleEnum.PatientAppointment,
    name: 'common.patientAppointment',
    description: '',
    icon: <EventIcon/>
  },
  {
    id: TDModuleEnum.GeneralHealthCheck,
    name: 'common.generalHealthCheck',
    description: '',
    icon: <MonitorHeartIcon/>
  },
  {
    id: TDModuleEnum.Subclinical,
    name: 'common.subclinical',
    description: '',
    icon: <ScienceOutlinedIcon/>
  },
  {
    id: TDModuleEnum.SystemConfig,
    name: 'common.masterData',
    description: '',
    icon: <SettingsIcon/>
  },
  {
    id: TDModuleEnum.Report,
    name: 'common.report',
    description: '',
    icon: <AssessmentIcon />
  },
  {
    id: TDModuleEnum.UserManagement,
    name: 'common.userManagement',
    description: '',
    icon: <ManageAccountsIcon />
  }
] as Module[];


