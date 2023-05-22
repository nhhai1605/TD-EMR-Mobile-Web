import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Badge, Box, Button, Container, IconButton, Link, List, Modal, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import mobileService from "../@core/services/mobileService";
import COOKIE_NAME from "../@core/constants/cookie";
import cookie from "react-cookies";
import moment from "moment";
import QRCode from "react-qr-code";
import FlexBox from "../@core/components/FlexBox";
import * as htmlToImage from 'html-to-image';
import {CustomBox} from "./Home";
import Paper from "@mui/material/Paper";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import {Female, Male} from "@mui/icons-material";
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {SwalAlert} from "../@core/components/SwalAlert";
export const exportAsImage = async (element, imageFileName) => {
    htmlToImage.toPng(element, {style:{}}).then((dataUrl) => {
        downloadImage(dataUrl, imageFileName);
    });
};
export const downloadImage = (image, imageFileName) => {
    const fakeLink = document.createElement("a");
    fakeLink.download = imageFileName;
    fakeLink.href = image;
    fakeLink.click();
};
const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [selectedTicket, setSelectedTicket] = useState(null)
    const snackbar = useSnackbar();
    const account = cookie.load(COOKIE_NAME.USER)
    const flexBoxRef = useRef<any>();
    const fetchData = async () =>
    {
        toggleLoading(true);
        let response : any = await mobileService.getListTicket(account.webUserAccID).catch(err => {
            snackbar.error("Lỗi khi lấy danh sách phiếu khám");
        });
        //remove duplicate ticket with patient on each date
        const validTickets = [];
        response.forEach((ticket) =>
        {
            if(!moment(ticket.issueDateTime).isBefore(moment()))
            {
                const date = moment(ticket.issueDateTime).format('YYYY-MM-DD');
                const patientCode = ticket.patientCode;
                const patientName = ticket.patientName;
                const found = validTickets.find((item) =>
                {
                    return item.patientCode == patientCode && item.patientName == patientName && moment(item.issueDateTime).format('YYYY-MM-DD') == date;
                })
                if (!found)
                {
                    validTickets.push(ticket);
                }
            }
        })
        response = validTickets;
        response = response.filter(x=>(!moment(x.issueDateTime).isBefore(moment()))).sort((a, b) => {
            return moment(b.issueDateTime).diff(moment(a.issueDateTime));
        });
        setAllTickets(response);
        toggleLoading(false);
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    

    const handleDelete = async (ticket) =>
    {
        SwalAlert.fire({
            text: 'Bạn có chắc muốn hủy phiếu khám này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Không',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await mobileService.cancelTicket(Number(ticket.ticketID)).then(res=>{
                    snackbar.success("Hủy phiếu khám thành công");
                    fetchData();
                }).catch(err => {
                    snackbar.error(err.message);
                })
            }
        });
       
    }
    
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
                <Paper style={{height:'90vh', maxHeight: '90vh', overflow: 'auto', backgroundColor:'white'}} >
                    <FlexBox sx={{padding:2}}>
                        <Typography variant='h5'>Danh sách Phiếu Khám Bệnh</Typography>
                    </FlexBox>
                    <List sx={{paddingBottom:4}}>
                    {
                        allTickets.map((ticket, index) =>{
                            return (
                                <Paper onClick={()=>setSelectedTicket(ticket)} variant="outlined" sx={{padding:2, justifyContent:'center', alignItems:'center', margin:2, backgroundColor:"#f3f4f9",}}>
                                    <IconButton onClick={(e)=>{
                                        e.stopPropagation();
                                        handleDelete(ticket);
                                    }} sx={{position:'absolute', right:20, top:0}} size={'large'}>
                                        <DeleteOutlineIcon />
                                    </IconButton>
                                    <FlexBox sx={{flexDirection:'column', alignItems:'flex-start'}}>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                            <DateRangeOutlinedIcon sx={{color: '#e3681b', marginRight:1}}/>
                                            <Typography variant={"h6"} sx={{textAlign:'start'}}>Ngày Khám: {moment(ticket?.issueDateTime).format("DD/MM/YYYY")}</Typography>
                                        </FlexBox>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                            <PersonOutlinedIcon sx={{color: '#45b561',  marginRight:1}}/>
                                            <Typography variant={"h6"} sx={{textAlign:'start'}}>Bệnh Nhân: {ticket?.patientName}</Typography>
                                        </FlexBox>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
                                            <MedicalInformationOutlinedIcon sx={{color: '#22b0e3',  marginRight:1}}/>
                                            <Typography variant={"h6"} sx={{textAlign:'start'}}>Mã BN: {ticket?.patientCode}</Typography>
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
export default TicketList;