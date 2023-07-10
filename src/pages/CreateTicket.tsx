import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {
    Box,
    Button,
    Container, Drawer,
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
import CloseIcon from "@mui/icons-material/Close";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import CreatePatientDrawer from "../components/CreatePatientDrawer";
import AddManagePatientDrawer from "../components/AddManagePatientDrawer";
import Tooltip from "@mui/material/Tooltip";
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
    
    const [createPatientDrawer, setCreatePatientDrawer] = useState(false);
    const [addManagePatientDrawer, setAddManagePatientDrawer] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

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
    
    const handleOpenDrawer = () => {
        if(allPatients.length >= Number(import.meta.env.VITE_MAX_PATIENTS))
        {
        	snackbar.error(`Không thể thêm mới BN do đã đạt số lượng tối đa (${import.meta.env.VITE_MAX_PATIENTS} BN)`);
        	return;
        }
        setOpenDrawer(true)
    }

    useEffect(() =>
    {
        if(!createPatientDrawer && !addManagePatientDrawer)
        {
            fetchData();
        }
    }, [createPatientDrawer, addManagePatientDrawer]);
    
    return (
        <CustomBox>
            <Container sx={{
                position: 'relative',
                flexDirection: 'column',
                height: '90vh',
                backgroundColor:'white',
                display:"flex",
                justifyContent: 'flex-start',
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
                                    <Typography sx={{marginBottom:1, fontSize:26}} variant={"h5"}>{selectedTicket?.patientName}</Typography>
                                    <Typography sx={{marginBottom:1, fontSize:20}} variant={"h5"}> {selectedTicket?.patientCode ? selectedTicket?.patientCode : "[Chưa có Mã BN]"}</Typography>
                                    <Typography sx={{marginBottom:1, fontSize:18}} variant={"h6"} >Ngày: {moment(selectedTicket?.issueDateTime).format("DD/MM/YYYY")}</Typography>
                                    {
                                        selectedTicket?.patientCode?.length == 0 &&
                                        <Typography sx={{marginBottom:1, fontSize:18}} variant={"h6"} >Vui lòng đến quầy tư vấn để xác nhận thông tin</Typography>
                                    }
                                </FlexBox>
                                <QRCode
                                    size={250}
                                    value={"qms" + selectedTicket?.serialTicket}/>
                                <Typography sx={{margin:1, fontSize:18}} variant={"h6"}>qms{selectedTicket?.serialTicket}</Typography>
                                <FlexBox sx={{paddingTop:2}}>
                                    <Paper sx={{padding:2, width:'100%', borderRadius:2, border:1, borderColor:"#ddd", backgroundColor:'#dbecfd', flexDirection:'row', display:'flex', alignItems:'center' }}>
                                        <Typography sx={{ px:2, color:'#5195dc', alignItems:'center', display:'flex', textAlign:'left',fontSize:mobileView ? 14 : 18, fontWeight:800}}>
                                            <InfoOutlined sx={{color:'#5195dc', marginRight: 2, fontSize:mobileView ? 21 : 27}}/>Quầy đăng ký hoạt động từ 6:00 giờ sáng
                                        </Typography>
                                    </Paper>
                                </FlexBox>
                            </FlexBox>
                            <FlexBox>
                                <Button sx={{margin:2, '&:hover': {backgroundColor: '#a12222'}}} color={'error'} variant={'contained'} onClick={() => setSelectedTicket(null)}>ĐÓNG</Button>
                                <Button sx={{margin:2}} variant={'contained'} onClick={() => exportAsImage(flexBoxRef.current, selectedTicket?.patientName + moment(selectedTicket.issueDateTime).format("DD-MM-YYYY"))}>LƯU</Button>
                            </FlexBox>
                        </FlexBox>
                    </Modal>
                }
                
                <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} anchor={'bottom'}>
                    <Paper style={{height:'auto', overflow: 'auto', backgroundColor:'white'}}  >
                        <IconButton sx={{position:'absolute',right:0}} onClick={()=>setOpenDrawer(false)}>
                            <CloseIcon sx={{fontSize: '2rem'}} />
                        </IconButton>
                        <FlexBox sx={{padding:5, justifyContent:'center', alignItems:'center'}}>
                            <Typography variant='h4' >Bạn đã từng khám tại Viện Tim TP.Hồ Chí Minh?</Typography>
                        </FlexBox>
                        <FlexBox sx={{px:5, justifyContent:'center', alignItems:'center'}}>
                            <Button variant={'contained'} onClick={()=> {
                                setAddManagePatientDrawer(true);
                                setOpenDrawer(false);
                            }}>
                                <PlaylistAddOutlinedIcon sx={{marginX:1, fontSize: '2rem'}} />
                                <FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
                                    <span>ĐÃ TỪNG KHÁM</span>
                                    <span>THÊM BỆNH NHÂN VÀO DANH SÁCH</span>
                                </FlexBox>
                            </Button>
                        </FlexBox>
                        <FlexBox sx={{padding:5, justifyContent:'center', alignItems:'center'}}>
                            <Button variant={'outlined'} onClick={()=> {
                                setCreatePatientDrawer(true);
                                setOpenDrawer(false);
                            }}>
                                <PersonAddAlt1OutlinedIcon sx={{marginX:1, fontSize: '2rem'}} />
                                <FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
                                    <span>CHƯA TỪNG KHÁM</span>
                                    <span>TẠO MỚI BỆNH NHÂN</span>
                                </FlexBox>
                            </Button>
                        </FlexBox>
                    </Paper>
                </Drawer>
                {createPatientDrawer && <CreatePatientDrawer open={createPatientDrawer} onClose={() => {
                    setCreatePatientDrawer(false)
                }} patient={null}/>}

                {addManagePatientDrawer && <AddManagePatientDrawer open={addManagePatientDrawer} onClose={()=>setAddManagePatientDrawer(false)}/>}
                
                <FlexBox flexDirection={'column'}>
                    <FlexBox sx={{padding:2, justifyContent:'space-between', alignItems:'center'}}>
                        <Typography variant='h5'>Lấy Phiếu Khám Bệnh</Typography>
                        <FlexBox>
                            <Tooltip title="Tạo mới / Thêm mới Bệnh Nhân">
                                <IconButton onClick={handleOpenDrawer}>
                                    <PersonAddAlt1OutlinedIcon sx={{marginX:1, fontSize: '2rem'}}/>
                                </IconButton>
                            </Tooltip>
                        </FlexBox>
                    </FlexBox>
                    {
                        Number(import.meta.env.VITE_DISABLE_TICKET_DATE) > 0 &&
                        <FlexBox sx={{paddingY:2}}>
                            <Paper sx={{padding:2, width:'100%', borderRadius:2, border:1, borderColor:"#ddd", backgroundColor:'#dbecfd', flexDirection:'row', display:'flex', alignItems:'center' }}>
                                <Typography sx={{ px:2, color:'#5195dc', alignItems:'center', display:'flex', textAlign:'left',fontSize:mobileView ? 14 : 18, fontWeight:800}}>
                                    <InfoOutlined sx={{color:'#5195dc', marginRight: 2, fontSize:mobileView ? 21 : 27}}/> Việc đăng ký chỉ thực hiện trước ngày khám 1 ngày
                                </Typography>
                            </Paper>
                        </FlexBox>
                    }
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
