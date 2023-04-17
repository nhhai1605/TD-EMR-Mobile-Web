import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import FlexBox from "../@core/components/FlexBox";
import {LoadingButton} from "@mui/lab";
import {TdDatePicker} from "../@core/components/controls/TdDatePicker";
import moment from "moment";
import {TdSelect} from "../@core/components/controls/TdSelect";
import mobileService from "../@core/services/mobileService";
import QRCode from "react-qr-code";
import COOKIE_NAME from "../@core/constants/cookie";
import cookie from "react-cookies";
const CreateTicket = () => {
    const snackbar = useSnackbar();
    const { getPatientList } = useAppointment()
    const [patientList, setPatientList] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)   
    const [allPatients, setAllPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [haveErrors, setHaveErrors] = useState(false)    
    const [ticketNumber, setTicketNumber] = useState(null)
    const account = cookie.load(COOKIE_NAME.USER)
    const [patientLoading, setPatientLoading]= useState(false);
    const fetchData = async () =>
    {
        toggleLoading(true);
        await getPatientList().then(res =>
        {
            const patients = (res ?? []).map(p => ({
                ...p,
                Id: p.patientID,
                Text: p.patientCode + " - " + p.fullName
            }))
            console.log(patients[0])
            setAllPatients(patients);
        }).catch(err=>{
            console.log(err);
            snackbar.error("Lỗi khi tải danh sách bệnh nhân")
        }).finally(()=>{setSelectedDate(moment().add(1,'days').toDate())});
        toggleLoading(false);
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    const onSubmit = async () => {
        if(!selectedPatient || !selectedDate )
        {
            setHaveErrors(true)
            snackbar.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        toggleLoading(true)
        setHaveErrors(false)
        console.log(selectedPatient)
        const payload = {
            aType: 1,
            webAccountUserID: account.webUserAccID,
            webAccManPtID: selectedPatient.webAccManPtID,
            hiCardNo: "",
            patientName: selectedPatient.fullName,
            patientCode: selectedPatient.patientCode,
            ticketGetTime: moment(selectedDate).format('YYYY-MM-DDTHH:mm:ss'),
        }
        await mobileService.createNewTicket(payload).then((res:any) => {
            setTicketNumber('qms' + res?.serialTicket)
        }).catch(err => snackbar.error("Lỗi khi tạo phiếu khám")).finally(()=> {
            snackbar.success("Tạo phiếu khám thành công")
            toggleLoading(false)
        })
    }
 

    const getAvailablePatients= async () => {
        setPatientLoading(true)
        await mobileService.getListTicket(account.webUserAccID).then((res : any) => {
            const filterByDate = res.filter(r => moment(r.issueDateTime).format('YYYY-MM-DD') === moment(selectedDate).format('YYYY-MM-DD'));
            const availablePatients = allPatients.filter(p => !filterByDate.find(r => r.patientCode === p.patientCode && r.patientName == p.fullName));
            setPatientList(availablePatients)
        }).catch(err => {
            snackbar.error("Lỗi khi tải danh sách phiếu khám")
        }).finally(()=>setPatientLoading(false))
    }
    
    useEffect(()=>{
        setSelectedPatient(null)
        getAvailablePatients();
    },[selectedDate])
    
    return (
        <React.Fragment>
            <Container
                maxWidth='md'
                sx={{
                    minHeight: '80vh',
                    height: '80vh',
                    paddingTop: '10px',
                    overflow: 'auto',
                    backgroundColor:'white'
                }}
            >
                <FlexBox sx={{paddingY:2}}>
                    <Typography variant='h5'>Lấy Phiếu Khám Bệnh</Typography>
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdDatePicker
                        disableHighlightToday
                        minDate={moment().add(1,'days').toDate()}
                        label={'Ngày Khám'}
                        inputFormat='DD/MM/YYYY'
                        maxDate={moment().add(1,'months').toDate()}
                        value={selectedDate}
                        size='small'
                        shrink
                        required
                        onChange={(e : any) => {
                            if(e && moment(e.toDate()).isValid)
                            {
                                setSelectedDate(e.toDate())
                            }
                        }}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdSelect
                        size={'small'}
                        required
                        shrink
                        value={selectedPatient?.Id}
                        notched
                        onChange={e=>{
                            setSelectedPatient(patientList.find(p => p.Id === e.target.value))
                        }}
                        disabled={patientLoading || !selectedDate}
                        data={patientList}
                        error={haveErrors && !selectedPatient}
                        helperText={haveErrors && !selectedPatient && <>Vui lòng chọn bệnh nhân</>}
                        placeholder={!selectedDate ? "Chọn ngày trước" : (patientLoading ? "Đang tải..." : 'Chọn bệnh nhân')}
                        label={'Bệnh Nhân'}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <LoadingButton onClick={onSubmit} type='button' variant='contained'>
                        Xác nhận
                    </LoadingButton>
                </FlexBox>
                {
                    ticketNumber &&
                    <QRCode
                        size={500}
                        value={ticketNumber}/>
                }
                
            </Container>
            
        </React.Fragment>
    )

}
export default CreateTicket;