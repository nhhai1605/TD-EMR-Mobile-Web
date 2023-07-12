import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    List,
    Modal,
    Theme,
    Typography,
    useMediaQuery
} from "@mui/material";
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
import {Female, InfoOutlined, Male} from "@mui/icons-material";
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
export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [selectedTicket, setSelectedTicket] = useState(null)
    const snackbar = useSnackbar();
    const account = cookie.load(COOKIE_NAME.USER)
    const flexBoxRef = useRef<any>();
    const mobileView = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const fetchData = async () =>
    {
        toggleLoading(true);
        let response : any = await mobileService.getListTicket(account.webUserAccID).catch(err => {
            snackbar.error(err.message);
        }).finally(()=>toggleLoading(false));
        setAllTickets(response.reverse());
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
                                    size={200}
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
                <Paper style={{height:'90vh', maxHeight: '90vh', overflow: 'auto', backgroundColor:'white'}} >
                    <FlexBox sx={{paddingY:2}}>
                        <Typography variant='h3'>Danh sách Số Thứ Tự</Typography>
                    </FlexBox>
                    <List sx={{paddingBottom:4}}>
                    {
                        allTickets.map((ticket) =>{
                            return (
                                <Paper onClick={()=>setSelectedTicket(ticket)} elevation={1} sx={{padding:2, justifyContent:'center', alignItems:'center', margin:2,backgroundColor:"#f3f4f9", border:1, borderColor:'#cecfd3'}}>
                                    <FlexBox sx={{flexDirection:'column', alignItems:'flex-start'}}>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%',py:1, height:"50px"}}>
                                            <FlexBox>
                                                <DateRangeOutlinedIcon sx={{color: '#e3681b', marginRight:1}}/>
                                                <Typography variant={"h6"} sx={{textAlign:'start'}}>Ngày Khám: {moment(ticket?.issueDateTime).format("DD/MM/YYYY")}</Typography>
                                            </FlexBox>
                                            {
                                                Number(import.meta.env.VITE_DISABLE_TICKET_DATE) <= 0 &&
                                                <FlexBox>
                                                    <IconButton onClick={(e)=>{
                                                        e.stopPropagation();
                                                        handleDelete(ticket);
                                                    }}  size={'large'} >
                                                        <DeleteOutlineIcon />
                                                    </IconButton>
                                                </FlexBox>
                                            }
                                        </FlexBox>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1,height:"50px"}}>
                                            <PersonOutlinedIcon sx={{color: '#45b561',  marginRight:1}}/>
                                            <Typography variant={"h6"} sx={{textAlign:'start'}}>Bệnh Nhân: {ticket?.patientName}</Typography>
                                        </FlexBox>
                                        <FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1,height:"50px"}}>
                                            <MedicalInformationOutlinedIcon sx={{color: '#22b0e3',  marginRight:1}}/>
                                            <Typography variant={"h6"} sx={{textAlign:'start'}}>Mã BN: {ticket?.patientCode ? ticket?.patientCode : "[Chưa có Mã BN]"}</Typography>
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
