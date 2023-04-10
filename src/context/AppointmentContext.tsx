import React, {createContext, useContext, useEffect, useState} from 'react';
import {useAuth} from "@core/contexts/AuthProvider";
import mobileService from "@core/services/mobileService";
import moment from "moment";
import  cookie from 'react-cookies';
import COOKIE_NAME from "@core/constants/cookie";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";

export interface IAppointmentContextInterface {
    allProvinces?:any;
    initialized?:any;
    getAllProvinces?:any;
    getDistricts?:any;
    getWards?:any;
    createPatient?:any;
    searchPatient?:any;
    getMedicalServices?:any;
    medServices?:any;
    getDoctorsByDate?:any;
    getDoctorsByMedServiceID?: (medServiceID: number) => Promise<any>;
    getDoctorAppointments?:any;
    saveAppointment?:any;
    currentApptType?:any;
    setCurrentApptType?:any;
    getPatientList?:any;
    getAllPatientAppointment?: (patientCode: string) => Promise<any>;
    getAllAccountAppointment?:any;
    getAllDoctors?:any;
    allDoctors?:any;
    getAppointmentDetail?: (appointmentID: number) => Promise<any>;
    getAllServicesByDoctorStaffID?: (doctorStaffID: number) => any;
    getDoctorSchedule?: any;
}
export const AppointmentContext = createContext({} as IAppointmentContextInterface);

export function useAppointment() {
    return useContext(AppointmentContext);
}   

export function AppointmentContextProvider({ children }) {
    const [initialized, setInitialized] = useState(false);
    const [medServices, setMedServices] = useState([])
    const [allDoctors, setAllDoctors] = useState([])
    const [currentApptType, setCurrentApptType] = useState('bydate')
    const snackbar = useSnackbar();
    async function createPatient(patient) {
        return await mobileService.addPatient(patient);
    }

    async function searchPatient(payload) {
        
        const response : any = await mobileService.getPatientInfo(payload);
        if(response)
            return response;
        return [];
    }

    async function getPatientList() {
        const account = cookie.load(COOKIE_NAME.USER)
        console.log(account)
        if (!account || !account.webUserAccID)
            return []
        const response : any = await mobileService.getManagePatientList(account.webUserAccID);
        if(response && response.data)
        {
            response.data.forEach((patient) => {
                patient.value = String(patient.patientID) 
                patient.label = String(patient.fullName) 
            })
            let result = response.data.filter((obj, pos, arr) => {return arr.map(mapObj => mapObj["patientID"]).indexOf(obj["patientID"]) === pos}); 
            result = result.sort((a, b) => moment(b.dateBecamePatient).diff(moment(a.dateBecamePatient)))
            return result;
        }
        return [];
    }

    async function getMedicalServices() {
        // const payload = {
            // medServiceItemPriceListID:0,
            // pageIndex:0,
            // pageSize: 500,
            // serviceTypeID: 1,
        // }
        const payload = 3801;
        const response : any = await mobileService.getMedicalServices(payload).catch(err =>
        {
            snackbar.error("Lỗi khi lấy danh sách dịch vụ");
            return;
        });
        if(response && response.data)
        {
            let services = response.data;
            if (services != null && services.length > 0) 
            {
                services.forEach((item) => {
                    item.value = String(item.medServiceID) 
                    item.label = String(item.medServiceName)
                })
                console.log(services)
                setMedServices(services);
                return services;
            }
        }
        setMedServices([]);
        return [];
    }

    async function getDoctorsByDate(payload) {
        const response : any = await mobileService.getDoctorsByDate(payload);
        if(response && response.data)
            return response.data;
        return [];
    }

    async function getDoctorsByMedServiceID(payload: number) {
        const response : any = await mobileService.getDoctorsByMedServiceID(payload);
        if(response && response.data)
            return response.data;
        return [];
    }

    async function getDoctorAppointments(payload) {
        const response : any = await mobileService.getDoctorAppointments(payload);
        if(response && response.data)
            return response.data;
        return [];
    }
    
    async function getAllServicesByDoctorStaffID(payload : number) {
        const response : any = await mobileService.getAllServicesByDoctorStaffID(payload);
        if(response)
            return response;
        return [];
    }
    
    async function saveAppointment(payload) {
        return await mobileService.saveAppointment(payload);
    }
    
    async function getAllPatientAppointment(payload: string) {
        const response : any = await mobileService.getAllPatientAppointment(payload);
        if(response && response.data)
            return response.data.sort((a, b) => moment(b.apptDate).diff(moment(a.apptDate)));
        return [];
    }
    
    async function getAllAccountAppointment(payload) {
        const response : any = await mobileService.getAllAccountAppointment(payload);
        if(response && response.data)
            return response.data.sort((a, b) => moment(b.apptDate).diff(moment(a.apptDate)));
        return [];
    }
    
    async function getAllDoctors () {
        const response : any = await mobileService.getAllDoctors();
        if(response && response.data)
            setAllDoctors(response.data);
            return response.data;
        return [];    
    }
    
    async function getDoctorSchedule (payload) {
        const response : any = await mobileService.getDoctorSchedule(payload);
        if(response)
            return response;
        return null;
    }
    
    // async function getMedicalServicesByDoctor (payload) {
    //     const allMedServices = await getMedicalServices();
    //     let services = [];
    //     for(const service of allMedServices) {
    //         const doctors = await getDoctorsByMedServiceID(service.medServiceID);
    //         if (doctors.some(d=>String(d.staffID) === String(payload.staffID))) {
    //             services.push(service);
    //         }
    //     }
    //     setMedServices(services);
    //     return;
    // }
    
    async function getAppointmentDetail (payload: number) {
        const response : any = await mobileService.getAppointmentDetail(payload);
        if(response)
            return response;
        return null;
    }
    
    
    useEffect(() => {
        const initContext = async () => {
            setInitialized(true);
        }
        initContext();
    }, []);
    
    //Export context
    const value: IAppointmentContextInterface = {
        initialized,
        createPatient,
        searchPatient,
        getMedicalServices,
        medServices,
        getDoctorsByDate,
        getDoctorsByMedServiceID,
        getDoctorAppointments,
        saveAppointment,
        currentApptType,
        setCurrentApptType,
        getPatientList,
        getAllPatientAppointment,
        getAllAccountAppointment,
        getAllDoctors,
        allDoctors,
        getAppointmentDetail,
        getAllServicesByDoctorStaffID,
        getDoctorSchedule
    };
    return (
        <AppointmentContext.Provider value={ value }>
               {children}
        </AppointmentContext.Provider>
    )
}