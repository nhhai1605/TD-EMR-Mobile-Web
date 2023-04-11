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
import {CitiesProvince} from "../@core/models/refCountry";
import {TdAutocomplete} from "../@core/components/controls/TdAutocomplete";
import QRCode from "react-qr-code";
const CreateTicket = () => {
    const snackbar = useSnackbar();
    const { getPatientList, getMedicalServices, medServices } = useAppointment()
    const [patientList, setPatientList] = useState([])
    const [ticketDate, setTicketDate] = useState(moment().add(1,'days').toDate())   
    const [ticketService, setTicketService] = useState(null)
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [haveErrors, setHaveErrors] = useState(false)    
    const [ticketNumber, setTicketNumber] = useState(null)
    const fetchData = async () =>
    {
        toggleLoading(true);
        getMedicalServices();
        await getPatientList().then(res =>
        {
            const patients = (res ?? []).map(p => ({
                ...p,
                Id: p.patientID,
                Text: p.patientCode + " - " + p.fullName
            }))
            setPatientList(patients);
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
        if(!selectedPatient || !ticketDate || !ticketService)
        {
            setHaveErrors(true)
            snackbar.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        setHaveErrors(false)
        console.log(selectedPatient)
        console.log(ticketService)
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
        let res;
        if (selectedPatient.isPatientAppt) //New Patient
        {
            res = await mobileService.getSeqNumber_NewPatient(payload).catch(err => {
                console.log(err)
                snackbar.error("Lỗi khi lấy phiếu khám")
            })
        } else {
            res = await mobileService.getSeqNumber(payload).catch(err => {
                console.log(err)
                snackbar.error("Lỗi khi lấy phiếu khám")
            })
        }
        setTicketNumber('qms' + res.serialTicket)
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
                        value={selectedPatient?.Id}
                        notched
                        onChange={e=>{
                            setSelectedPatient(patientList.find(p => p.Id === e.target.value))
                        }}
                        data={patientList}
                        error={haveErrors && !selectedPatient}
                        helperText={haveErrors && !selectedPatient && <>Vui lòng chọn bệnh nhân</>}
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
                            setTicketDate(e.toDate())
                        }}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <TdAutocomplete
                        size='small'
                        onChange={(event, newValue: CitiesProvince) => {
                            setTicketService(newValue)
                        }}
                        textValue={'Text'}
                        keyValue={'Id'}
                        required
                        margin='normal'
                        options={medServices}
                        placeholderI18nKey={'Chọn dịch vụ khám'}
                        label={'Dịch Vụ'}
                        error={haveErrors && !ticketService}
                        helperText={haveErrors && !ticketService  &&  <>Vui lòng chọn dịch vụ</>}
                    />
                </FlexBox>
                <FlexBox sx={{paddingY:2}}>
                    <LoadingButton onClick={onSubmit} type='button' variant='contained'>
                        Xác nhận
                    </LoadingButton>
                </FlexBox>
                {
                    ticketNumber &&
                    <QRCode
                        size={500}
                        value={ticketNumber}/>
                }
                
            </Container>
            
        </React.Fragment>
    )

}
export default CreateTicket;