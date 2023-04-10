import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Container} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';

const CreateAppointmentByDoctor = () => {
    const snackbar = useSnackbar();
    const fetchData = async () =>
    {

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
export default CreateAppointmentByDoctor;