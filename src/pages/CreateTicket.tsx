import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Modal,
    Paper,
    TextField, Theme,
    Typography,
    useMediaQuery
} from "@mui/material";
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
import {InfoOutlined} from "@mui/icons-material";
export const CreateTicket = () => {
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
    const mobileView = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));


    const fetchData = async () =>
    {
        toggleLoading(true);
        await getPatientList().then(res =>
        {
            const patients = (res ?? []).map(p => ({
                ...p,
                Id: p.patientID,
                Text: p?.patientCode ? p.patientCode + " - " + p.fullName : p.fullName,
            }))
            // console.log(patients[0])
            setAllPatients(patients);
            getAvailablePatients(patients);
        }).catch(err=>{
            snackbar.error(err.message.toString());
        }).finally(()=>{
            setSelectedDate(moment().add(moment().day() === 6 ? 2 : 1,'days').toDate());
            toggleLoading(false);
        });
        
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    
    const onSubmit = async () => {
        toggleLoading(true)
        setHavePatientError(false)
        // console.log(selectedPatient)
        const payload = {
            aType: (getAge(selectedPatient.dob) < 6 || getAge(selectedPatient.dob) > 80) ? 32 : 30,
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
            snackbar.success("Tạo phiếu khám thành công")
        }).catch(err => snackbar.error(err.message.toString())).finally(()=> {
            toggleLoading(false)
        })
    }
    
    const getAvailablePatients = async (_allPatients) => {
        toggleLoading(true);
        setPatientLoading(true)
        await mobileService.getListTicket(account.webUserAccID).then((res : any) => {
            const availablePatients = _allPatients.filter(p => !res.find(r => r.webAccManPtID === p.webAccManPtID));
            setPatientList(availablePatients)
            availablePatients?.length > 0 ? setSelectedPatient(availablePatients[0]) : setSelectedPatient(null);
        }).catch(err => {
            snackbar.error(err.message);            
        }).finally(()=> {
            setPatientLoading(false);
            toggleLoading(false);
        })
    }
    
    const getAge = (date) => {
        const now = moment();
        const birthMoment = moment(date);
        let age = now.diff(birthMoment, 'years');
        return age;
    }
    
    return (
        <CustomBox>
            <Container sx={{
                position: 'relative',
                flexDirection: 'column',
                height: '90vh',
                backgroundColor:'white',
                display:"flex",
                justifyContent: mobileView ? 'space-between' : 'flex-start',
                py:2
            }}>
                {
                    selectedTicket &&
                    <Modal
                        component={null}
                        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                        open={Boolean(selectedTicket)}
                        onClose={()=>setSelectedTicket(null)}>
                        <FlexBox sx={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flexDirection:'column',padding:1,borderRadius:5}}>
                            <FlexBox ref={flexBoxRef} sx={{backgroundColor:'white',alignItems:'center',justifyContent:'center', flexDirection:'column', padding:3}}>
                                <FlexBox sx={{justifyContent:'center', flexDirection:'column',alignItems:'center', paddingBottom:2}}>
                                    <Typography sx={{marginBottom:1, fontSize:18}} variant={"h6"}>VIỆN TIM TP.HỒ CHÍ MINH</Typography>
                                    <Typography sx={{marginBottom:1, color:'#db220d'}} variant={"h1"}>QUẦY ĐĂNG KÝ {selectedTicket?.ticketNumberText?.split("-")[0]}</Typography>
                                    <Typography sx={{marginBottom:3, color:'#db220d', fontSize:28}} variant={"h2"}>{selectedTicket?.ticketNumberText}</Typography>
                                    <Typography sx={{marginBottom:1, fontSize:22}} variant={"h5"}>{selectedTicket?.patientName}</Typography>
                                    <Typography sx={{marginBottom:1, fontSize:20}} variant={"h5"}> {selectedTicket?.patientCode ? selectedTicket?.patientCode : "[Chưa có Mã BN]"}</Typography>
                                    <Typography sx={{marginBottom:1, fontSize:18}} variant={"h6"} >Ngày: {moment(selectedTicket?.issueDateTime).format("DD/MM/YYYY")}</Typography>
                                </FlexBox>
                                <QRCode
                                    size={250}
                                    value={"qms" + selectedTicket?.serialTicket}/>
                                <Typography sx={{margin:1, fontSize:18}} variant={"h6"}>qms{selectedTicket?.serialTicket}</Typography>
                            </FlexBox>
                            <FlexBox>
                                <Button sx={{margin:2, '&:hover': {backgroundColor: '#a12222'}}} color={'error'} variant={'contained'} onClick={() => setSelectedTicket(null)}>ĐÓNG</Button>
                                <Button sx={{margin:2}} variant={'contained'} onClick={() => exportAsImage(flexBoxRef.current, selectedTicket?.patientName + moment(selectedTicket.issueDateTime).format("DD-MM-YYYY"))}>LƯU</Button>
                            </FlexBox>
                        </FlexBox>
                    </Modal>
                }

                <FlexBox flexDirection={'column'}>
                    <FlexBox sx={{paddingY:2}}>
                        <Typography variant='h5'>Lấy Phiếu Khám Bệnh</Typography>
                    </FlexBox>
                    <FlexBox sx={{paddingY:2}}>
                        <Paper sx={{padding:2, width:'100%', borderRadius:2, border:1, borderColor:"#ddd", backgroundColor:'#dbecfd', flexDirection:'row', display:'flex', alignItems:'center' }}>
                            <Typography sx={{ px:2, color:'#5195dc', alignItems:'center', display:'flex', textAlign:'left',fontSize:mobileView ? 14 : 18, fontWeight:800}}>
                                <InfoOutlined sx={{color:'#5195dc', marginRight: 2, fontSize:mobileView ? 21 : 27}}/> Việc đăng ký chỉ thực hiện trước ngày khám 1 ngày
                            </Typography>
                        </Paper>
                    </FlexBox>
                    <FlexBox sx={{paddingY:2}}>
                        <TdDatePicker
                            minDate={moment().add(1,'days').toDate()}
                            label={'Ngày Khám'}
                            disableOpenPicker={Number(import.meta.env.VITE_DISABLE_TICKET_DATE) > 0}
                            disableKeyboardInput={Number(import.meta.env.VITE_DISABLE_TICKET_DATE) > 0}
                            showDaysOutsideCurrentMonth={false}
                            shouldDisableDate={(date) => {return  moment(date).get('day') === 0}}
                            inputFormat='DD/MM/YYYY'
                            maxDate={moment().add(22, 'days').toDate()}
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
                </FlexBox>
                <FlexBox flexDirection={'column'}>
                    <FlexBox sx={{paddingY:2, justifyContent:'center'}}>
                        <LoadingButton disabled={!selectedPatient} onClick={()=> {
                            if(!selectedPatient || !selectedDate )
                            {
                                setHaveDateError(true)
                                setHavePatientError(true)
                                snackbar.error("Vui lòng nhập đầy đủ thông tin");
                                return;
                            }
                            onSubmit();
                            // setOpenOtp(true)
                        }} type='button' variant='contained' fullWidth={true}>
                            Xác nhận
                        </LoadingButton>
                    </FlexBox>
                </FlexBox>
            </Container>
        </CustomBox>     
    )

}
