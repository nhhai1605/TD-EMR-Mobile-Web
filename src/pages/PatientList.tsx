import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Button, Container, Drawer} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import CreatePatientDrawer from "../components/CreatePatientDrawer";
import AddManagePatientDrawer from "../components/AddManagePatientDrawer";

const PatientList = () => {
    const [allPatients, setAllPatients] = useState([])
    const { getPatientList} = useAppointment();
    const [searchQuery, setSearchQuery] = useState('');
    const snackbar = useSnackbar();
    const [createPatientDrawer, setCreatePatientDrawer] = useState(false);
    const [addManagePatientDrawer, setAddManagePatientDrawer] = useState(false);
    const fetchData = async () =>
    {
        toggleLoading(true);
        await getPatientList().then(res =>
        {
            console.log("res: " + res);
            setAllPatients(res ?? [])
        }).catch(err =>
        {
            console.log("Error: ", err);
            snackbar.error("Lỗi khi lấy danh sách bệnh nhân");
        }).finally(() =>
        {
            toggleLoading(false);
        })
    }
    
    useEffect(() =>
    {
        // fetchData();
    }, [])
    
    return (
        <Container>
            <Button size='small' type='button' onClick={()=>setCreatePatientDrawer(true)} variant='contained'>Tạo mới BN</Button>
            <Button size='small' type='button' onClick={()=>setAddManagePatientDrawer(true)} variant='contained'>Thêm BN vào DSQL</Button>
            <CreatePatientDrawer open={createPatientDrawer} onClose={()=>setCreatePatientDrawer(false)}/>
            <AddManagePatientDrawer open={addManagePatientDrawer} onClose={()=>setAddManagePatientDrawer(false)}/>
        </Container>
    )

}
export default PatientList;