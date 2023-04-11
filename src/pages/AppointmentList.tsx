import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Grid, IconButton, Paper, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import cookie from "react-cookies";
import COOKIE_NAME from "../@core/constants/cookie";
import CloseIcon from "@mui/icons-material/Close";
import FlexBox from "../@core/components/FlexBox";
import {Controller} from "react-hook-form";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import {LoadingButton} from "@mui/lab";

const AppointmentList = () => {
    const [allAppointments, setAllAppointments] = useState([])
    const snackbar = useSnackbar();
    const { getAllAccountAppointment } = useAppointment();
    const account = cookie.load(COOKIE_NAME.USER)
    const fetchData = async () =>
    {
        toggleLoading(true);
        console.log("fetch in appt list", account.webUserAccID)
        const payload = {
            userID: account.webUserAccID,
            pageIndex: 0,
            pageSize: 100
        }
        await getAllAccountAppointment(payload).then(res=>{
            setAllAppointments(res ?? []);
        }).catch(err =>
        {
            snackbar.error("Lỗi khi tải danh sách cuộc hẹn theo User ID")
        }).finally(()=>toggleLoading(false))
        
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    return (
        <Container>
        </Container>
    )

}
export default AppointmentList;