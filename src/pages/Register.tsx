﻿import React, {useState} from "react";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import * as yup from "yup";
import Grid from "@mui/material/Grid";
import bgImage from "../assets/images/bg.png";
import Paper from "@mui/material/Paper";
import BoxedLayout from "../@core/components/BoxedLayout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Controller, useForm} from "react-hook-form";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "@mui/material/Link";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import mobileService from "../@core/services/mobileService";
import { ROUTE_PATHS } from "@core/constants/routeConfig";
import authService from "../@core/services/authService";
import OTPComponent, {sendOTP} from "../components/OTPComponent";
import otpService from "../@core/services/otpService";

export const Register = () => {
    const snackbar = useSnackbar();
    const [openOtp, setOpenOtp] = useState(false);

    const initialDataForm = {
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        cccd: '',
        email: '',
    };
    const navigate = useNavigate();

    const validationFormSchema = yup.object().shape({
        fullName: yup.string().min(5, 'Quá ngắn').max(50, 'Quá dài').required('Bắt buộc'),
        phoneNumber: yup.string().min(9, 'Quá ngắn').max(12, 'Quá dài').matches(/^[0-9]+$/, 'SĐT chỉ được có số').required('Bắt buộc'),
        password: yup.string().required('Phải nhập mật khẩu')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
            .max(18, 'Mật khẩu chỉ được nhiều nhất 18 ký tự')
            .matches(/[a-zA-Z0-9]/, 'Mật khẩu chỉ được có số và chữ'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
        cccd:yup.string().nullable().transform((o, c) => o === "" ? null : c)
            .min(9, 'Quá ngắn')
            .max(12, 'Quá dài'),
        email: yup.string().nullable().email('Email không hợp lệ'),
        
    });

    const {
        reset,
        trigger,
        formState: { isDirty, errors },
        control,
        setValue,
        getValues,
        clearErrors,
    } = useForm({ resolver: yupResolver(validationFormSchema) , defaultValues: initialDataForm});

    const addFacilityToAccount = async () =>
    {
        const account = authService.getCurrentUser();
        await mobileService.getFacilityDetail('260').then(async (facility:any) =>
        {
            const payload = {
                WebUserAccountId: account.webUserAccID,
                FacilityCode: facility.facilityCode,
            }
            await mobileService.addFacilityToAccount(payload).catch((err) =>
            {
                snackbar.error(err.message.toString())
            })
        }).catch((err) =>
        {
            snackbar.error(err.message.toString())
        })
        
    }
    
    const onSubmit = async(otp: string) => {
        toggleLoading(true);
        const data = getValues();
        const payload = {
            patientCellPhoneNumber: data.phoneNumber,
            otp: otp,
        }
        await otpService.checkOTP(payload).then(async () =>{
            setOpenOtp(false);
            const newAccount = {
                accName: data.fullName,
                accUserName: data.phoneNumber,
                accPassword: data.password,
                mobileNum: data.phoneNumber,
                cccd: data.cccd,
                email: data.email
            };
            // console.log(newAccount);
            await mobileService.register(newAccount).then(async () =>
            {
                snackbar.success("Đăng ký thành công");
                navigate(ROUTE_PATHS.Login);
            })
        }).catch((err)=> {
            snackbar.error(err.message);
        }).finally(() => toggleLoading(false))
    }
    
    const handleSubmitButton = async () => {
        const validateForm = await trigger();
        if (!validateForm) {
            return;
        }
        await sendOTP(getValues('phoneNumber'), 1, setOpenOtp, snackbar , false)
    }
    
    return (
        <Grid container component='main' sx={{ height: '100vh' }}>
            <OTPComponent onResend={async() => await sendOTP(getValues('phoneNumber'),1, snackbar, true)} open={openOtp} setOpen={setOpenOtp} onSubmit={onSubmit}/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    bgcolor: 'background.default',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} square>
                <BoxedLayout>
                    <Typography component='h1' variant='h5'>Đăng Ký</Typography>
                    <Box marginTop={3}>
                        <Controller
                            name='fullName'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    inputRef={ref}
                                    fullWidth
                                    margin='normal'
                                    moveToNextEleAfterEnter
                                    required
                                    error={errors.fullName && Boolean(errors.fullName)}
                                    helperText={errors.fullName && <>{errors.fullName.message}</>}
                                    label={"Họ và Tên"}
                                    placeholder={"Nhập Họ và Tên"}
                                />
                            )}
                        />
                        <Controller
                            name='phoneNumber'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    inputRef={ref}
                                    fullWidth
                                    margin='normal'
                                    moveToNextEleAfterEnter
                                    required
                                    error={errors.phoneNumber && Boolean(errors.phoneNumber)}
                                    helperText={errors.phoneNumber && <>{errors.phoneNumber.message}</>}
                                    label={"SĐT để Đăng Nhập"}
                                    placeholder={"Nhập SĐT để Đăng Nhập"}
                                />
                            )}
                        />
                        <Controller
                            name='cccd'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    inputRef={ref}
                                    fullWidth
                                    margin='normal'
                                    moveToNextEleAfterEnter
                                    error={errors.cccd && Boolean(errors.cccd)}
                                    helperText={errors.cccd && <>{errors.cccd.message}</>}
                                    label={"CMND / CCCD"}
                                    placeholder={"Nhập số CMND / CCCD"}
                                />
                            )}
                        />
                        <Controller
                            name='email'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    inputRef={ref}
                                    fullWidth
                                    margin='normal'
                                    moveToNextEleAfterEnter
                                    error={errors.email && Boolean(errors.email)}
                                    helperText={errors.email && <>{errors.email.message}</>}
                                    label={"Email"}
                                    placeholder={"Nhập Email"}
                                />
                            )}
                        />
                        <Controller
                            name='password'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    inputRef={ref}
                                    fullWidth
                                    moveToNextEleAfterEnter
                                    margin='normal'
                                    type='password'
                                    required
                                    error={errors.password && Boolean(errors.password)}
                                    helperText={errors.password && <>{errors.password.message}</>}
                                    label={"Mật Khẩu"}
                                    placeholder={"Nhập Mật Khẩu"}
                                />
                            )}
                        />
                        <Controller
                            name='confirmPassword'
                            control={control}
                            render={({ field: { ref, ...otherField } }) => (
                                <TdTextBox
                                    {...otherField}
                                    onKeyDown={async (e) => {
                                        if (e.key === 'Enter') {
                                            await handleSubmitButton();
                                        }
                                    }}
                                    inputRef={ref}
                                    sx={{ marginBottom: '20px' }}
                                    fullWidth
                                    moveToNextEleAfterEnter
                                    margin='normal'
                                    type='password'
                                    required
                                    error={errors.confirmPassword && Boolean(errors.confirmPassword)}
                                    helperText={errors.confirmPassword && <>{errors.confirmPassword.message}</>}
                                    label={"Nhập Lại Mật Khẩu"}
                                    placeholder={"Nhập Lại Mật Khẩu"}
                                />
                            )}
                        />
                        
                        <LoadingButton type='button' onClick={async ()=> {
                            await handleSubmitButton();
                        }} fullWidth variant='contained' sx={{ my: 3 }}>
                            {"Đăng Ký"}
                        </LoadingButton>
                        <Link href={ROUTE_PATHS.Login} variant='body2' >
                            {"Đã có tài khoản? Đăng nhập"}
                        </Link>
                    </Box>
                </BoxedLayout>
            </Grid>
        </Grid>
    )

}
