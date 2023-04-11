import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Button, Container, Drawer, IconButton, Link, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import CreatePatientDrawer from "../components/CreatePatientDrawer";
import AddManagePatientDrawer from "../components/AddManagePatientDrawer";
import {TdDataGrid} from "../@core/components/controls/TdDataGrid";


const PatientList = () => {
    const [allPatients, setAllPatients] = useState([])
    const { getPatientList} = useAppointment();
    const [searchQuery, setSearchQuery] = useState('');
    const snackbar = useSnackbar();
    const [createPatientDrawer, setCreatePatientDrawer] = useState(false);
    const [addManagePatientDrawer, setAddManagePatientDrawer] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const fetchData = async () =>
    {
        toggleLoading(true);
        await getPatientList().then(res =>
        {
            console.log("res: " , res);
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
        if(!createPatientDrawer && !addManagePatientDrawer)
        {
            fetchData();
        }
    }, [createPatientDrawer, addManagePatientDrawer]);
    
    return (
        <Container>
            <Button size='small' type='button' onClick={()=>setCreatePatientDrawer(true)} variant='contained'>Tạo mới BN</Button>
            <Button size='small' type='button' onClick={()=>setAddManagePatientDrawer(true)} variant='contained'>Thêm BN vào DSQL</Button>
            <CreatePatientDrawer open={createPatientDrawer} onClose={()=> {
                setSelectedPatient(null)
                setCreatePatientDrawer(false)
            }} patient={selectedPatient}/>
            <AddManagePatientDrawer open={addManagePatientDrawer} onClose={()=>setAddManagePatientDrawer(false)}/>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                height: 500,
            }}>
            {
                allPatients.map((patient, index) =>{
                    return (
                        <Link sx={{paddingY:2}} component={'button'} onClick={()=> {
                            setSelectedPatient(patient);
                            setCreatePatientDrawer(true);
                        }}>
                            {patient.patientID} - {patient.fullName}
                        </Link>
                    )
                })
            }
            </Box>
        </Container>
    )

}
export default PatientList;