import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Link, Modal, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import mobileService from "../@core/services/mobileService";
import COOKIE_NAME from "../@core/constants/cookie";
import cookie from "react-cookies";
import moment from "moment";
import QRCode from "react-qr-code";
import FlexBox from "../@core/components/FlexBox";
import * as htmlToImage from 'html-to-image';
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
    


    return (
        <Container>
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
            
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: 500,
            }}>
                {
                    allTickets.map((ticket, index) =>{
                        return (
                            <Link sx={{paddingY:2}} component={'button'} onClick={()=> {
                                setSelectedTicket(ticket);
                            }}>
                                {moment(ticket.issueDateTime).format("DD-MM-YYYY")} - {ticket.patientName}
                            </Link>
                        )
                    })
                }
            </Box>
        </Container>
    )

}
export default TicketList;