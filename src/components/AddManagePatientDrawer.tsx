import React from "react";
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

const AddManagePatientDrawer = (props) => {
    const {open, onClose} = props;

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
        const pkhid = '260';
        const facilityCode = '';
        // Then get facility Code
        const payload = {...getValues(), facilityCode}
    }
    
    return (
        <Drawer anchor={'right'} sx={{ zIndex: '1300' }} open={open} onClose={onClose}>
            <Box sx={{ width: 500, padding: '20px' }}>
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
