﻿import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Grid, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
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
import {CustomBox} from "./Home";
import OtpInput from 'react-otp-input';
import CloseIcon from "@mui/icons-material/Close";
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
    const [otp, setOtp] = useState('');
    const [openOtp, setOpenOtp] = useState(false);

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
            getAvailablePatients(patients);
        }).catch(err=>{
            snackbar.error(err.message.toString());
        }).finally(()=>{
            setSelectedDate(moment().add(1,'days').toDate());
            toggleLoading(false);
        });
        
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    const onSubmit = async () => {
        if(otp != "000000")
        {
            snackbar.error("Mã OTP không đúng")
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
            getAvailablePatients(allPatients);
            setSelectedTicket(res)
            setOpenOtp(false);
            snackbar.success("Tạo phiếu khám thành công")
        }).catch(err => snackbar.error(err.message.toString())).finally(()=> {
            toggleLoading(false)
        })
    }
 
    useEffect(()=>{
        if(!openOtp)
        {
            setOtp('');
        }
    },[openOtp])
    const getAvailablePatients = async (_allPatients) => {
        toggleLoading(true);
        setPatientLoading(true)
        await mobileService.getListTicket(account.webUserAccID).then((res : any) => {
            const availablePatients = _allPatients.filter(p => !res.find(r => r.patientCode === p.patientCode && r.patientName == p.fullName));
            setPatientList(availablePatients)
            availablePatients?.length > 0 && setSelectedPatient(availablePatients[0]);
        }).catch(err => {
            snackbar.error(err.message.toString());            
        }).finally(()=> {
            setPatientLoading(false);
            toggleLoading(false);
        })
    }
    
    return (
        <CustomBox>
            <Container sx={{
                position: 'relative',
                flexDirection: 'column',
                height: '90vh',
                backgroundColor:'white',
            }}>
                {
                    openOtp &&
                    <Modal
                        component={null}
                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        open={openOtp}
                        onClose={()=>setOpenOtp(false)}>
                        <FlexBox sx={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flexDirection:'column',borderRadius:5}}>
                            <Typography sx={{paddingTop:'2.5vh'}} variant={"h4"}>Xác nhận OTP</Typography>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span></span>}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    width:'10vw',
                                    height:'10vw', 
                                    marginTop:'5vh',
                                    marginBottom:'5vh',
                                    marginLeft:'2vw',
                                    marginRight:'2vw',
                                    fontSize:'5vw',
                                }}
                            />
                            <FlexBox sx={{alignItems:'center',justifyContent:'space-evenly', flexDirection:'row'}}>
                                <Button 
                                    sx={{margin:2, '&:hover': {backgroundColor: '#a12222'}}}
                                    color={'error'} 
                                    variant={'contained'} 
                                    onClick={() => setOpenOtp(false)}>
                                    ĐÓNG
                                </Button>
                                <Button
                                    sx={{margin:2, '&:hover': {backgroundColor: '#cc9d00'},color:'white'}}
                                    color={'warning'} 
                                    variant={'contained'} 
                                    onClick={null}>
                                    GỬI LẠI OTP
                                </Button>
                                <Button 
                                    sx={{margin:2}}
                                    // color={'primary'} 
                                    variant={'contained'} 
                                    onClick={onSubmit}>
                                    XÁC NHẬN
                                </Button>
                            </FlexBox>
                        </FlexBox>
                    </Modal>
                }
                {
                    selectedTicket &&
                    <Modal
                        component={null}
                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        open={Boolean(selectedTicket)}
                        onClose={()=>setSelectedTicket(null)}>
                        <FlexBox sx={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flexDirection:'column',padding:1,borderRadius:5}}>
                            <FlexBox ref={flexBoxRef} sx={{backgroundColor:'white',alignItems:'center',justifyContent:'center', flexDirection:'column', padding:3}}>
                                <FlexBox sx={{justifyContent:'center', flexDirection:'column',alignItems:'flex-start', paddingBottom:2}}>
                                    <Typography sx={{marginBottom:2, color:'#db220d'}} variant={"h4"}>STT: {selectedTicket.ticketNumberText}</Typography>
                                    <Typography sx={{marginBottom:2}} variant={"h6"}>Bệnh Nhân: {selectedTicket.patientName} - {selectedTicket.patientCode}</Typography>
                                    <Typography sx={{marginBottom:2}} variant={"h6"} >Ngày khám: {moment(selectedTicket.issueDateTime).format("DD/MM/YYYY")}</Typography>
                                </FlexBox>
                                <QRCode
                                    size={250}
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
                        value={selectedPatient?.Id ?? null}
                        notched
                        onChange={e=>{
                            setSelectedPatient(patientList.find(p => p.Id === e.target.value))
                        }}
                        disabled={patientLoading || !selectedDate || patientList.length == 0}
                        data={patientList}
                        error={havePatientError && !selectedPatient}
                        helperText={havePatientError && !selectedPatient && <>Vui lòng chọn bệnh nhân</>}
                        // placeholder={!selectedDate ? "Chọn ngày trước" : (patientLoading ? "Đang tải..." : (patientList.length == 0 ? "Không có BN nào có thể lấy phiếu" : 'Chọn bệnh nhân'))}
                        placeholder={patientLoading ? "Đang tải..." : (patientList.length == 0 ? "Không có BN nào có thể lấy phiếu" : 'Chọn bệnh nhân')}
                        label={'Bệnh Nhân'}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2, justifyContent:'center'}}>
                    <LoadingButton onClick={()=> {
                        if(!selectedPatient || !selectedDate )
                        {
                            setHaveDateError(true)
                            setHavePatientError(true)
                            snackbar.error("Vui lòng nhập đầy đủ thông tin");
                            return;
                        }
                        setOpenOtp(true)
                    }} type='button' variant='contained' fullWidth={true}>
                        Xác nhận
                    </LoadingButton>
                </FlexBox>
            </Container>
        </CustomBox>     
    )

}
export default CreateTicket;