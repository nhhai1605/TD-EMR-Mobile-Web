import React, {useState} from "react";
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
import OTPComponent, {sendOTP} from "./OTPComponent";
import otpService from "../@core/services/otpService";
import authService from "../@core/services/authService";

const AddManagePatientDrawer = (props) => {
    const {open, onClose} = props;
    const snackbar = useSnackbar();
    const {searchPatient} = useAppointment();
    const [openOtp,setOpenOtp] = useState(false);
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
    
    const onSubmit = async (otp) => {
        toggleLoading(true);
        const data = getValues();
        const payload = {
            patientCellPhoneNumber: data.contactMobileNum,
            otp: otp,
        }
        await otpService.checkOTP(payload).then(async () =>{
            setOpenOtp(false);
            const facilityCode = cookie.load(COOKIE_NAME.USER).facilityCode;
            const payload = {...getValues(), facilityCode}
            await addManagePatient(payload.facilityCode, payload.patientCode, payload.contactMobileNum);
        }).catch((err)=> {
            snackbar.error(err.message);
        }).finally(() => toggleLoading(false))
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
                reset();
                onClose();
            }).catch((err) =>
            {
                snackbar.error(err.message.toString());
            })
        }
        
        toggleLoading(true)
      
        await searchPatient({ patientCode: patientCode }).then(async (patient) =>
        {
            // console.log(patient)
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
                            snackbar.error(err.message.toString())
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
            // console.log(err)
            snackbar.error('Lỗi khi tìm BN')
        }).finally(() =>
        {
            toggleLoading(false)
        })
    }

    const handleSubmitButton = async () =>
    {
        const validateForm = await trigger();
        if (!validateForm) {
            return;
        }
        const currentUser = authService.getCurrentUser()
        await mobileService.checkManagePatient({
            webUserAccID: currentUser?.webUserAccID,
            patientCode: getValues('patientCode'),
            patientCellPhoneNumber: getValues('contactMobileNum'),
        }).then(async (res)=>{
            if(res)
            {
                await sendOTP(getValues('contactMobileNum'), 3, setOpenOtp, snackbar , false);
            }
            else
            {
                snackbar.error("Không thể thêm BN vào DSQL")
            }
        }).catch(err => {
            snackbar.error(err.message)
        })

    }
    
    
    
    return (
        <Drawer 
            anchor={'right'} 
            sx={{zIndex: '1300', '& > .MuiPaper-root': { width: {xs:'100%', sm: '100%', md:'50%', lg:'50%'} }}} 
            open={open} 
            onClose={onClose}>
            <OTPComponent onResend={async() => await sendOTP(getValues('contactMobileNum'), 3, snackbar, true)} open={openOtp} setOpen={setOpenOtp} onSubmit={onSubmit}/>
            <Box sx={{ padding: '20px', paddingBottom:0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h5'>Thêm bệnh nhân vào danh sách quản lí</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{
                    display: "flex",
                    marginBottom:5,
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
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        await handleSubmitButton()
                                    }
                                }}
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
                            // position: 'fixed',
                            // bottom: 10,
                            // right:10,
                            marginTop:5,
                            justifyContent:'flex-end',
                            gap: '20px',
                        }}
                    >
                        <Button onClick={onClose} color={'error'} sx={{
                            '&:hover': {
                                backgroundColor: '#a12222',
                            }
                        }} variant='contained'>
                            Đóng
                        </Button>
                        <LoadingButton onClick={async ()=> {
                            await handleSubmitButton()
                        }} type='button' variant='contained'>
                            Xác nhận
                        </LoadingButton>
                    </FlexBox>
                </Box>
            </Box>
        </Drawer>
    )
}
export default AddManagePatientDrawer;
