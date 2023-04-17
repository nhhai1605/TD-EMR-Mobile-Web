﻿import React from "react";
import {Box, Button, Container, Drawer, Grid, IconButton, Paper, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment/moment";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import FlexBox from "../@core/components/FlexBox";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import {LoadingButton} from "@mui/lab";
import BoxedLayout from "../@core/components/BoxedLayout";
import COOKIE_NAME from "../@core/constants/cookie";
import cookie from "react-cookies";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import mobileService from "../@core/services/mobileService";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {useAppointment} from "../context/AppointmentContext";

const AddManagePatientDrawer = (props) => {
    const {open, onClose} = props;
    const snackbar = useSnackbar();
    const {searchPatient} = useAppointment();
    const initialDataForm = {
        patientCode: '',
        contactMobileNum: '',
    };

    const validationFormSchema = yup.object().shape({
        patientCode: yup.string().nullable().required('Bắt buộc'),
        contactMobileNum: yup.string().nullable().min(9, 'Quá ngắn').max(12, 'Quá dài').matches(/^[0-9]+$/, 'SĐT chỉ được có số').required('Bắt buộc'),
    });
    
    const {
        reset,
        trigger,
        formState: { isDirty, errors },
        control,
        setValue,
        getValues,
        clearErrors,
    } = useForm({ resolver: yupResolver(validationFormSchema), defaultValues: initialDataForm });
    
    const onSubmit = async () => {
        const validateForm = await trigger();
        if (!validateForm) {
            return;
        }
        const facilityCode = cookie.load(COOKIE_NAME.USER).facilityCode;
        const payload = {...getValues(), facilityCode}
        addManagePatient(payload.facilityCode, payload.patientCode, payload.contactMobileNum);
    }
    
    const addManagePatient = async (facilityCode, patientCode, contactMobileNum = null) =>
    {
        const addToManageList = async (patient) =>
        {
            const account = cookie.load(COOKIE_NAME.USER);

            await mobileService.addManagePatient({
                webUserAccID: account.webUserAccID,
                patientID: patient.patientID
            }).then((res) =>
            {
                snackbar.success("Thêm BN thành công");
                onClose();
            }).catch((err) =>
            {
                snackbar.error("Thêm BN thất bại. " + err.message.toString());
            })
        }
        
        toggleLoading(true)
      
        await searchPatient({ patientCode: patientCode }).then(async (patient) =>
        {
            console.log(patient)
            if (patient && patient.patientID)
            {
                if (contactMobileNum)
                {
                    if (patient.patientCellPhoneNumber == contactMobileNum)
                    {
                        addToManageList(patient)
                    }
                    else
                    {
                        await mobileService.getPtFamilyRelationship(patient.patientID).then((res: any) =>
                        {
                            if (res && res?.fContactCellPhone == contactMobileNum)
                            {
                                addToManageList(patient);
                            }
                            else
                            {
                                snackbar.error('Số điện thoại không khớp')
                            }
                        }).catch(err =>
                        {
                            snackbar.error('Lỗi khi lấy thông tin người thân')
                        })
                    }
                }
                else
                {
                    addToManageList(patient)
                }

            }
            else
            {
                snackbar.error('Không tìm thấy BN')
            }
        }).catch((err) =>
        {
            console.log(err)
            snackbar.error('Lỗi khi tìm BN')
        }).finally(() =>
        {
            toggleLoading(false)
        })
    }

    return (
        <Drawer anchor={'right'} sx={{ zIndex: '1300' }} open={open} onClose={onClose}>
            <Box sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h5'>Thêm bệnh nhân vào danh sách quản lí</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box component={"form"} sx={{
                        display: "flex",
                        flexDirection: "column",}}>
                    <Controller
                        name='contactMobileNum'
                        control={control}
                        render={({ field: { value, ref, ...otherFields } }) => (
                            <TdTextBox
                                {...otherFields}
                                value={value}
                                size={'small'}
                                margin='normal'
                                required
                                moveToNextEleAfterEnter
                                sx={{ flex:1 }}
                                inputRef={ref}
                                error={errors.contactMobileNum && Boolean(errors.contactMobileNum)}
                                helperText={errors.contactMobileNum && <>{errors.contactMobileNum.message}</>}
                                label={'SĐT Liên Lạc của BN'}
                                placeholder={'Nhập SĐT Liên Lạc của BN'}
                            />
                        )}
                    />
                
                    <Controller
                        name='patientCode'
                        control={control}
                        render={({ field: { value, ref, ...otherFields } }) => (
                            <TdTextBox
                                {...otherFields}
                                value={value}
                                size={'small'}
                                required
                                margin='normal'
                                moveToNextEleAfterEnter
                                sx={{ flex:1 }}
                                inputRef={ref}
                                error={errors.patientCode && Boolean(errors.patientCode)}
                                helperText={errors.patientCode && <>{errors.patientCode.message}</>}
                                label={'Mã Bệnh Nhân'}
                                placeholder={'Nhập mã Bệnh Nhân'}
                            />
                        )}
                    />
                    <FlexBox
                        sx={{
                            position: 'absolute',
                            bottom: 10,
                            gap: '10px',
                            right: 22,
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button onClick={onClose} color={'error'} sx={{
                            '&:hover': {
                                backgroundColor: '#a12222',
                            }
                        }} variant='contained'>
                            Đóng
                        </Button>
                        <LoadingButton onClick={onSubmit} type='button' variant='contained'>
                            Xác nhận
                        </LoadingButton>
                    </FlexBox>
                </Box>
            </Box>
        </Drawer>
    )
}
export  default AddManagePatientDrawer;