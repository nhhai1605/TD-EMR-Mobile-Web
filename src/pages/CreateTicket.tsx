import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import FlexBox from "../@core/components/FlexBox";
import {LoadingButton} from "@mui/lab";
import {TdDatePicker} from "../@core/components/controls/TdDatePicker";
import moment, {Moment} from "moment";
import {genders} from "../@core/constants/gender";
import {TdSelect} from "../@core/components/controls/TdSelect";
import mobileService from "../@core/services/mobileService";

const CreateTicket = () => {
    const snackbar = useSnackbar();
    const { getPatientList, getMedicalServices, medServices } = useAppointment()
    const [patientList, setPatientList] = useState([])
    const [ticketDate, setTicketDate] = useState(moment().add(1,'days').toDate())   
    const [ticketService, setTicketService] = useState(null)
    const [selectedPatient, setSelectedPatient] = useState(null)
    const fetchData = async () =>
    {
        toggleLoading(true);
        getMedicalServices();
        await getPatientList().then(res =>
        {
            setPatientList(res ?? []);
        }).catch(err=>{
            console.log(err);
            snackbar.error("Lỗi khi tải danh sách bệnh nhân")
        });
        toggleLoading(false);
    }

    useEffect(() =>
    {
        fetchData();
    }, [])
    
    const onSubmit = async () => {
        console.log(moment(ticketDate).format('YYYY-MM-DD'))
        const payload = {
            aType: 30,
            patientCode: selectedPatient.patientCode,
            patientName: selectedPatient.fullName,
            HICardNo: "",
            v_IssueBy: 5,
            IsGetTicketIssueAgain: false,
            staffID: 0,
            //API is missing date and service 
        }
        if (selectedPatient.isPatientAppt) //New Patient
        {
            await mobileService.getSeqNumber_NewPatient(payload).then((res) => {
                
            }).catch(err => {
                snackbar.error("Lỗi khi lấy phiếu khám")
            })
        } else {
            await mobileService.getSeqNumber(payload).then((res) => {
                
            }).catch(err => {
                snackbar.error("Lỗi khi lấy phiếu khám")
            })
        }
    }
    
    return (
        <React.Fragment>
            <Container
                maxWidth='md'
                sx={{
                    minHeight: '80vh',
                    height: '80vh',
                    paddingTop: '10px',
                    overflow: 'auto',
                    backgroundColor:'white'
                }}
            >
                <FlexBox sx={{paddingY:2}}>
                    <Typography variant='h5'>Lấy Phiếu Khám Bệnh</Typography>
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdSelect
                        size={'small'}
                        required
                        shrink
                        notched
                        onChange={e=>{

                        }}
                        data={[]}
                        placeholder={'Chọn bệnh nhân'}
                        label={'Bệnh Nhân'}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdDatePicker
                        disableHighlightToday
                        minDate={moment().add(1,'days').toDate()}
                        // disablePast
                        label={'Ngày Khám'}
                        inputFormat='DD/MM/YYYY'
                        value={ticketDate}
                        size='small'
                        shrink
                        required
                        onChange={(e : any) => {
                            console.log(e)
                            setTicketDate(e.toDate())
                        }}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdSelect
                        size={'small'}
                        required
                        shrink
                        notched
                        onChange={e=>{
                            
                        }}
                        data={[]}
                        placeholder={'Chọn dịch vụ khám'}
                        label={'Dịch Vụ'}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <LoadingButton onClick={onSubmit} type='button' variant='contained'>
                        Xác nhận
                    </LoadingButton>
                </FlexBox>
            </Container>
            
        </React.Fragment>
    )

}
export default CreateTicket;