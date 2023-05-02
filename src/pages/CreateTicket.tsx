﻿import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Grid, Modal, Paper, Typography} from "@mui/material";
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
import {exportAsImage} from "./TicketList";
const CreateTicket = () => {
    const snackbar = useSnackbar();
    const { getPatientList } = useAppointment()
    const [patientList, setPatientList] = useState([])
    const [selectedDate, setSelectedDate] = useState(null)   
    const [allPatients, setAllPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [havePatientError, setHavePatientError] = useState(false)   
    const [haveDateError, setHaveDateError] = useState(false)
    const account = cookie.load(COOKIE_NAME.USER)
    const [patientLoading, setPatientLoading]= useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null)
    const flexBoxRef = useRef<any>();

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
            snackbar.error(err.message.toString());
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
            setHaveDateError(true)
            setHavePatientError(true)
            snackbar.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        toggleLoading(true)
        setHavePatientError(false)
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
            setSelectedPatient(null)
            getAvailablePatients();
            // setTicketNumber('qms' + res?.serialTicket)
            setSelectedTicket(res)
            snackbar.success("Tạo phiếu khám thành công")
        }).catch(err => snackbar.error(err.message.toString())).finally(()=> {
            toggleLoading(false)
        })
    }
 

    const getAvailablePatients= async () => {
        setPatientLoading(true)
        await mobileService.getListTicket(account.webUserAccID).then((res : any) => {
            // const filterByDate = res.filter(r => moment(r.issueDateTime).format('YYYY-MM-DD') === moment(selectedDate).format('YYYY-MM-DD'));
            const availablePatients = allPatients.filter(p => !res.find(r => r.patientCode === p.patientCode && r.patientName == p.fullName));
            setPatientList(availablePatients)
        }).catch(err => {
            snackbar.error(err.message.toString());            
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
                {
                    selectedTicket &&
                    <Modal
                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        open={Boolean(selectedTicket)}
                        onClose={()=>setSelectedTicket(null)}>
                        <FlexBox sx={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flexDirection:'column',padding:1,borderRadius:5}}>
                            <FlexBox ref={flexBoxRef} sx={{backgroundColor:'white',alignItems:'center',justifyContent:'center', flexDirection:'column', padding:5}}>
                                <Typography sx={{marginBottom:2}}variant={"h5"}>Số Thứ Tự: {selectedTicket.ticketNumberText}</Typography>
                                <Typography sx={{marginBottom:2}} variant={"h5"}>{selectedTicket.patientName} - {selectedTicket.patientCode}</Typography>
                                <Typography sx={{marginBottom:2}} variant={"h5"} >Ngày khám: {moment(selectedTicket.issueDateTime).format("DD-MM-YYYY")}</Typography>
                                <QRCode
                                    size={300}
                                    value={"qms" + selectedTicket.serialTicket}/>
                            </FlexBox>
                            <FlexBox>
                                <Button sx={{margin:2, '&:hover': {backgroundColor: '#a12222'}}} color={'error'} variant={'contained'} onClick={() => setSelectedTicket(null)}>ĐÓNG</Button>
                                <Button sx={{margin:2}} variant={'contained'} onClick={() => exportAsImage(flexBoxRef.current, selectedTicket.patientName + moment(selectedTicket.issueDateTime).format("DD-MM-YYYY"))}>LƯU</Button>
                            </FlexBox>
                        </FlexBox>
                    </Modal>
                }
                
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
                        error={haveDateError && !selectedDate}
                        helperText={haveDateError && !selectedDate && <>Vui lòng chọn ngày</>}
                        onChange={(e : any) => {
                            if(e && moment(e.toDate()).isValid())
                            {
                                setSelectedDate(e.toDate())
                            }
                            else {
                                setSelectedDate(null)
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
                            console.log(patientList.find(p => p.Id === e.target.value))
                            setSelectedPatient(patientList.find(p => p.Id === e.target.value))
                        }}
                        disabled={patientLoading || !selectedDate || patientList.length == 0}
                        data={patientList}
                        error={havePatientError && !selectedPatient}
                        helperText={havePatientError && !selectedPatient && <>Vui lòng chọn bệnh nhân</>}
                        placeholder={!selectedDate ? "Chọn ngày trước" : (patientLoading ? "Đang tải..." : (patientList.length == 0 ? "Không có BN nào có thể lấy phiếu" : 'Chọn bệnh nhân'))}
                        label={'Bệnh Nhân'}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <LoadingButton onClick={onSubmit} type='button' variant='contained'>
                        Xác nhận
                    </LoadingButton>
                </FlexBox>
            </Container>
            
        </React.Fragment>
    )

}
export default CreateTicket;