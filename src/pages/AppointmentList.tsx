import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Grid, IconButton, List, Modal, Paper, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import cookie from "react-cookies";
import COOKIE_NAME from "../@core/constants/cookie";
import CloseIcon from "@mui/icons-material/Close";
import FlexBox from "../@core/components/FlexBox";
import {Controller} from "react-hook-form";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import {LoadingButton} from "@mui/lab";
import moment from "moment/moment";
import QRCode from "react-qr-code";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import {CustomBox} from "./Home";
import {exportAsImage} from "./TicketList";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
const AppointmentList = () => {
    const [allAppointments, setAllAppointments] = useState([])
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const snackbar = useSnackbar();
    const { getAllAccountAppointment } = useAppointment();
    const account = cookie.load(COOKIE_NAME.USER)
    const fetchData = async () =>
    {
        toggleLoading(true);
        const payload = {
            userID: account.webUserAccID,
            pageIndex: 0,
            pageSize: 100
        }
        await getAllAccountAppointment(payload).then(res=>{
            setAllAppointments(res ?? []);
        }).catch(err =>
        {
            snackbar.error(err.message)
        }).finally(()=>toggleLoading(false))
        
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    return (
        <CustomBox>
            <Container
                disableGutters
                sx={{
                    position: 'relative',
                    flexDirection: 'column',
                    height: '90vh',
                    backgroundColor:'white',
                }}
            >
                <Paper style={{height:'90vh', maxHeight: '90vh', overflow: 'auto', backgroundColor:'white'}} >
                    <FlexBox sx={{padding:2}}>
                        <Typography variant='h5'>Danh sách Cuộc Hẹn</Typography>
                    </FlexBox>
                    <List sx={{paddingBottom:4}}>
                        {
                            allAppointments.map((appt, index) =>{
                                return (
                                    <Paper onClick={()=>setSelectedAppointment(appt)} variant="outlined" sx={{padding:2, justifyContent:'center', alignItems:'center', margin:2, backgroundColor:"#f3f4f9",}}>
                                        <FlexBox sx={{flexDirection:'column', alignItems:'flex-start'}}>
                                            <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                                <PersonOutlinedIcon sx={{color: '#45b561', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Bệnh Nhân: {appt?.patientName}</Typography>
                                            </FlexBox>
                                            <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                                <DateRangeOutlinedIcon sx={{color: '#e3681b', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Ngày Hẹn: {moment(appt?.apptDate).format("DD/MM/YYYY")}</Typography>
                                            </FlexBox>
                                            <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                                <AccessTimeOutlinedIcon sx={{color: '#7632ed', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Vào lúc: {moment(appt?.apptDate).format("HH:mm")}</Typography>
                                            </FlexBox>
                                            <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                                <MedicalServicesOutlinedIcon sx={{color: '#225ce3', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Dịch Vụ: {appt?.medServiceNames}</Typography>
                                            </FlexBox>
                                            <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                                <MasksOutlinedIcon sx={{color: '#e322c9', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Bác Sĩ: {appt?.doctorStaff?.fullName}</Typography>
                                            </FlexBox>
                                        </FlexBox>
                                    </Paper>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Container>
        </CustomBox>
    )

}
export default AppointmentList;