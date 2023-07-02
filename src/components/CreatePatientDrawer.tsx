import React, {useEffect, useRef, useState} from "react";
import {Box, Button, Container, Drawer, Grid, IconButton, Paper, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FlexBox from "@core/components/FlexBox";
import {Controller, useForm} from "react-hook-form";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import moment, {Moment} from "moment";
import COOKIE_NAME from "../@core/constants/cookie";
import cookie from "react-cookies";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../@core/+state/store";
import {getProvinceAction, getSuburbNameAction, getWardNamesAction} from "../@core/+state/actions/addressAction";
import mobileService from "../@core/services/mobileService";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import {SwalAlert} from "../@core/components/SwalAlert";
import {TdDatePicker} from "../@core/components/controls/TdDatePicker";
import {TdSelect} from "../@core/components/controls/TdSelect";
import {genders} from "../@core/constants/gender";
import {LoadingButton} from "@mui/lab";
import {TdAutocomplete} from "../@core/components/controls/TdAutocomplete";
import {CitiesProvince} from "../@core/models/refCountry";
import {FamilyRelationship} from "../@core/models/enums/emrEnum";
import OTPComponent, {sendOTP} from "./OTPComponent";
import otpService from "../@core/services/otpService";
import {ROUTE_PATHS} from "../@core/constants/routeConfig";
import authService from "../@core/services/authService";
export const FamilyRelationships = [
    {
        Id: 0,
        Text: 'Không có',
    },
    {
        Id: FamilyRelationship.VO,
        Text: 'Vợ',
    },
    {
        Id: FamilyRelationship.CHONG,
        Text: 'Chồng',
    },
    {
        Id: FamilyRelationship.CON,
        Text: 'Con',
    },
    {
        Id: FamilyRelationship.CHA,
        Text: 'Cha',
    },
    {
        Id: FamilyRelationship.ME,
        Text: 'Mẹ',
    },
    {
        Id: FamilyRelationship.ANH,
        Text: 'Anh',
    },
    {
        Id: FamilyRelationship.CHI,
        Text: 'Chị',
    },
    {
        Id: FamilyRelationship.ONG,
        Text: 'Ông',
    },
    {
        Id: FamilyRelationship.BA,
        Text: 'Bà',
    },
    {
        Id: FamilyRelationship.KHAC,
        Text: 'Khác',
    },
];

const CreatePatientDrawer = (props) => {
    const {open, onClose, patient} = props;
    const account = cookie.load(COOKIE_NAME.USER)
    const [suburbNameFilters, setSuburbNameFilters] = useState([]);
    const [wardNamesFilters, setWardNamesFilters] = useState([]);
    const dispatch = useDispatch();
    const {citiesProvinces, suburbNames, wardNames} = useSelector(
        (state: RootState) => state.address,
    );
    const [autocompleteKey, setAutocompleteKey] = useState(new Date().getMilliseconds());
    const snackbar = useSnackbar();
    const [openOtp, setOpenOtp] = useState(false);
    const initialDataForm = {
        fullName: patient?.fullName ?? '',
        dob: moment().format('YYYY-MM-DD'),
        gender: patient?.gender ?? 'U',
        cityProvinceID: patient?.cityProvinceID ?? null,
        address: patient?.patientStreetAddress ?? '',
        suburbNameID: patient?.suburbNameID ?? patient?.suburbName.suburbNameID ?? null,
        wardNameID: patient?.wardNameID ?? patient?.wardName.wardNameID ?? null,
        bookingMobileNum: patient?.bookingMobileNum ?? account?.accUserName,
        contactMobileNum: patient?.patientCellPhoneNumber ?? '',
        identityNumber: patient?.idNumber?.trim() ?? '',
        fContactFullName: '',
        fContactCellPhone: '',
        fContactAddress: '',
        v_FamilyRelationship: 0,
    };

    const validationFormSchema = yup.object().shape({
        fullName: yup.string().nullable().required('Bắt buộc'),
        bookingMobileNum: yup.string().nullable().required('Bắt buộc'),
        contactMobileNum: yup
            .string()
            .nullable()
            .min(9, 'Quá ngắn')
            .max(12, 'Quá dài')
            .matches(/^[0-9]+$/, 'SĐT chỉ được có số').required('Bắt buộc').transform((o, c) => o === "" ? null : c),
        gender: yup.string().nullable().required('Bắt buộc'),
        address: yup.string().nullable().required('Bắt buộc'),
        cityProvinceID: yup.string().nullable().required('Bắt buộc'),
        suburbNameID: yup
            .string()
            .nullable()
            .when('cityProvinceID', {
                is: cityProvinceID => {
                    const filters = suburbNames.filter(
                        s => s.cityProvinceID == cityProvinceID,
                    );
                    if (filters.length > 0) {
                        return true;
                    }
                },
                then: yup.string().nullable().required('Bắt buộc'),
            }),
        wardNameID: yup
            .string()
            .nullable()
            .when('suburbNameID', {
                is: suburbNameID => {
                    const filters = wardNames.filter(s => s.suburbNameID == suburbNameID);
                    if (filters.length > 0) {
                        return true;
                    }
                },
                then: yup.string().nullable().required('Bắt buộc'),
            }),
        dob: yup.string().nullable().required('Bắt buộc'),
        identityNumber: yup
            .string()
            .min(9, 'Quá ngắn')
            .max(12, 'Quá dài')
            .matches(/^[0-9]+$/, 'CMND/CCCD chỉ được có số')
            .transform((_, val) => (val ? String(val) : null))
            .nullable(),
        fContactFullName: yup.string().nullable()
            .when('dob', {
                is: dob => {
                    const age = moment().diff(dob, 'years');
                    return age <= 6;
                },
                then: yup.string().nullable().required('Trẻ em duới 6 tuổi phải có thông tin người thân'),
            }),
        v_FamilyRelationship: yup.number().nullable().when('fContactFullName', {
            is: fContactFullName => (fContactFullName != null && fContactFullName != ''),
            then: yup.number().nullable().required('Quan hệ với người thân là bắt buộc'),
        }).transform((_, val) => (val ? Number(val) : null)),
        fContactAddress: yup
            .string()
            .nullable()
            .transform((_, val) => (val ? String(val) : null)),
        fContactCellPhone: yup
            .string()
            .nullable()
            .min(9, 'Quá ngắn')
            .max(12, 'Quá dài')
            .matches(/^[0-9]+$/, 'SĐT chỉ được có số').transform((o, c) => o === "" ? null : c),
    });

    const {
        reset,
        trigger,
        formState: {isDirty, errors},
        control,
        setValue,
        getValues,
        clearErrors,
    } = useForm({resolver: yupResolver(validationFormSchema), defaultValues: initialDataForm});

    const getAddress = async () => {
        toggleLoading(true)
        await Promise.all([
            dispatch(getProvinceAction()),
            dispatch(getSuburbNameAction()),
            dispatch(getWardNamesAction()),
        ]).finally(()=>toggleLoading(false));
    };

    const cityChange = cityProvinceID => {
        const filters = suburbNames.filter(s => s.cityProvinceID == cityProvinceID);
        setSuburbNameFilters(filters);
        setWardNamesFilters([]);
    };

    const suburbChange = suburbNameId => {
        const filters = wardNames.filter(s => s.suburbNameID == suburbNameId);
        setWardNamesFilters(filters);
    };

    const initData = async () => {
        toggleLoading(true);
        const init = initialDataForm;
        if (!init.fullName) {
            init.dob = moment().format('YYYY-MM-DD')
        } else {
            init.dob = moment(patient.dob).format('YYYY-MM-DD')
            if(patient?.patientCode && patient?.patientCode?.length > 0) {
                await mobileService.getPtFamilyRelationship(patient.patientID).then((res: any) => {
                    init.fContactFullName = res?.fContactFullName ?? '';
                    init.fContactAddress = res?.fContactAddress ?? '';
                    init.fContactCellPhone = res?.fContactCellPhone ?? '';
                    init.v_FamilyRelationship = res?.v_FamilyRelationship ?? 0;
                }).catch(err => {
                    snackbar.error(err.message);
                });
            }
            else
            {
                init.fContactFullName = patient?.fContactFullName ?? '';
                init.fContactAddress = patient?.fContactAddress ?? '';
                init.fContactCellPhone = patient?.fContactCellPhone ?? '';
                init.v_FamilyRelationship = patient?.v_FamilyRelationship ?? 0;
            }
            
        }
        cityChange(init.cityProvinceID);
        suburbChange(init.suburbNameID);
        // console.log("init", init)

        reset(init);
        setAutocompleteKey(new Date().getMilliseconds());
        toggleLoading(false);
    };

    useEffect(() => {
        if (citiesProvinces?.length === 0 || suburbNames?.length === 0 || wardNames?.length === 0) {
            getAddress();
        }
        setSuburbNameFilters([]);
        setWardNamesFilters([]);
    }, [open]);

    useEffect(() => {
        if (
            citiesProvinces.length === 0 ||
            suburbNames.length === 0 ||
            wardNames.length === 0
        ) return;
        initData();
    }, [citiesProvinces, suburbNames, wardNames,open]);
    
    const thisOnClose = () => {
        if (isDirty) {
            SwalAlert.fire({
                text: 'Bạn có chắc muốn đóng?',
                icon: 'warning',
                showCancelButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    onClose();
                }
            });
        } else {
            onClose();
        }
    }
    
    const onReset = () => {
        if(!isDirty) return;
        SwalAlert.fire({
            text: 'Bạn có chắc muốn đặt lại?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                initData();
            }
        });
    };

    const onSubmit = async (otp) => {
        toggleLoading(true);
        let response = null;
        const values : any = getValues();
        const payload = {
            patientCellPhoneNumber: values.contactMobileNum,
            otp: otp,
        }
        values.dob = moment(values.dob).format('YYYY-MM-DD');
        values.webUserAccID = account.webUserAccID;
        values.cityProvinceID = values.cityProvinceID ?? -1;
        values.wardNameID = values.wardNameID ?? -1;
        values.suburbNameID = values.suburbNameID ?? -1;
        values.v_FamilyRelationship = values.v_FamilyRelationship ?? 0;
        if(patient)
        {
            values.patientID = patient.patientID;
            values.patientCode = patient.patientCode;
            values.isTempPatient = !(patient.patientCode && patient.patientCode !== "")
            response = await mobileService.updatePatient(values).catch((err)=> {
                snackbar.error(err.message);
            }).finally(() => toggleLoading(false))
        }
        else
        {
            await otpService.checkOTP(payload).then(async () =>{
                setOpenOtp(false);
                response = await mobileService.addPatient(values);
            }).catch((err)=> {
                snackbar.error(err.message);
            }).finally(() => toggleLoading(false))
        }
        if (response)
        {
            await initData();
            onClose();
            snackbar.success(patient ? 'Cập nhật thông tin thành công' : 'Thêm mới thành công',)
        }
    }
    
    const handleDeletePatient = async () => {
        toggleLoading(true);
        const user = authService.getCurrentUser();
        await mobileService.checkRemovePatient(user.webUserAccID).then(async (res) => {
            if(res)
            {
                let ticketList : any = await mobileService.getListTicket(account.webUserAccID).catch(err => {
                    snackbar.error(err.message);
                })
                const ticketOfThisPatient = ticketList.filter(t => t.webAccManPtID == patient.webAccManPtID);
                await SwalAlert.fire({
                    text: ticketOfThisPatient?.length > 0 ? "BN này đã tạo số thứ tự. Nếu xóa BN sẽ xóa luôn những phiếu này. Bạn có chắc muốn xóa bệnh nhân này khỏi DSQL?" : 'Bạn có chắc muốn xóa bệnh nhân này khỏi DSQL?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Xóa',
                    cancelButtonText: 'Hủy',
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        if(ticketOfThisPatient?.length > 0)
                        {
                            for(let ticket of ticketOfThisPatient)
                            {
                                await mobileService.cancelTicket(Number(ticket.ticketID)).catch(err => {
                                    snackbar.error(err.message);
                                })
                            }
                        }
                        const payload = {
                            webUserAccID: account.webUserAccID,
                            patientID: patient.patientID,
                            isPatientAppt: (patient.patientCode && patient.patientCode !== '') ? false : true,
                        }
                        await mobileService.removeManagePatient(payload).then((res) =>
                        {
                            if(res)
                            {
                                snackbar.success('Xóa BN thành công');
                            }
                            else
                            {
                                snackbar.error('Xóa BN thất bại');
                            }
                        }).catch(err=>{
                            snackbar.error(err.message.toString());
                        }).finally(()=>{
                            onClose();
                        })
                    }
                });
            }
            else
            {
                snackbar.error('Không thể xóa bệnh nhân này');
                return;
            }
        }).catch(err=>{
            snackbar.error(err.message);
        }).finally(()=>{
            toggleLoading(false)
        })
    }

    return (
        <Drawer 
            anchor={'right'} sx={{zIndex: '1300', '& > .MuiPaper-root': { width: {xs:'100%', sm: '100%', md:'50%', lg:'50%'} }}} 
            open={open} onClose={thisOnClose}>
            <OTPComponent onResend={async() => await sendOTP(getValues('contactMobileNum'), 2, snackbar, true)} open={openOtp} setOpen={setOpenOtp} onSubmit={onSubmit}/>
            <Box sx={{padding: '20px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography variant='h3'>{patient ? "Thông tin bệnh nhân" : "Tạo bệnh nhân"}</Typography>
                    <IconButton onClick={thisOnClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 5,
                }}>
                    <Controller
                        name='fullName'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                size={'small'}
                                margin={'normal'}
                                required
                                sx={{flex: 1}}
                                inputRef={ref}
                                error={errors.fullName && Boolean(errors.fullName)}
                                helperText={errors.fullName && <>{errors.fullName.message}</>}
                                label={'Họ và Tên'}
                                placeholder={'Nhập họ và tên'}
                            />
                        )}
                    />
                    <FlexBox gap={'10px'} sx={{paddingY: 1, alignItems: 'center'}}>
                        <Controller
                            name='dob'
                            control={control}
                            render={({field: {value, ref, onChange, ...otherFields}}) => (
                                <TdDatePicker
                                    disabled={patient?.patientCode && patient.patientCode !== ""}
                                    disableFuture
                                    showDaysOutsideCurrentMonth={false}
                                    label={'Ngày sinh'}
                                    inputFormat='DD/MM/YYYY'
                                    value={value}
                                    inputRef={ref}
                                    margin={'normal'}
                                    size='small'
                                    error={!moment(getValues().dob).isValid() || (errors.dob && Boolean(errors.dob))}
                                    helperText={(!moment(getValues().dob).isValid() || errors.dob) &&  <>{errors.dob?.message ?? "Ngày không hợp lệ"}</>}
                                    shrink
                                    required
                                    onChange={onChange}
                                />
                            )}
                        />
                        <Controller
                            name='gender'
                            control={control}
                            render={({field: {value,onChange, ref, ...otherFields}}) => (
                                <TdSelect
                                    {...otherFields}
                                    disabled={patient?.patientCode && patient.patientCode !== ""}
                                    inputRef={ref}
                                    size={'small'}
                                    required
                                    value={value}
                                    shrink
                                    //@ts-ignore
                                    margin={'normal'}
                                    notched
                                    error={errors.gender && Boolean(errors.gender)}
                                    helperText={errors.gender && <>{errors.gender.message}</>}
                                    onChange={onChange}
                                    data={genders}
                                    placeholder={'Chọn giới tính'}
                                    label={'Giới tính'}
                                />
                            )}
                        />
                    </FlexBox>
                    <Controller
                        name='contactMobileNum'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                required
                                size={'small'}
                                sx={{flex: 1}}
                                margin={'normal'}
                                inputRef={ref}
                                error={errors.contactMobileNum && Boolean(errors.contactMobileNum)}
                                helperText={errors.contactMobileNum && <>{errors.contactMobileNum.message}</>}
                                label={'SĐT Liên Lạc'}
                                placeholder={'Nhập số điện thoại liên lạc'}
                            />
                        )}
                    />
                    <Controller
                        name='identityNumber'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                size={'small'}
                                sx={{flex: 1}}
                                margin={'normal'}
                                inputRef={ref}
                                error={errors.identityNumber && Boolean(errors.identityNumber)}
                                helperText={errors.identityNumber && <>{errors.identityNumber.message}</>}
                                label={'CMND / CCCD'}
                                placeholder={'Nhập CMND hoặc CCCD'}
                            />
                        )}
                    />
                    <Controller
                        name='address'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                value={value}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                required
                                moveToNextEleAfterEnter
                                size={'small'}
                                sx={{flex: 1}}
                                margin={'normal'}
                                inputRef={ref}
                                error={errors.address && Boolean(errors.address)}
                                helperText={errors.address && <>{errors.address.message}</>}
                                label={'Địa chỉ'}
                                placeholder={'Nhập địa chỉ'}
                            />
                        )}
                    />
                    <Controller
                        name='cityProvinceID'
                        control={control}
                        render={({field: {value, ref, onChange, ...otherFields}}) => (
                            <TdAutocomplete
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                size='small'
                                key={autocompleteKey}
                                inputRef={ref}
                                onChange={(event, newValue: CitiesProvince) => {
                                    const cityProvinceID = String(newValue?.cityProvinceID) ?? null;
                                    cityChange(cityProvinceID);
                                    setValue('cityProvinceID', cityProvinceID);
                                    setValue('suburbNameID', null);
                                    setValue('wardNameID', null);
                                }}
                                
                                defaultValue={citiesProvinces.find((item) => item.cityProvinceID === initialDataForm.cityProvinceID)}
                                textValue={'cityProvinceName'}
                                keyValue={'cityProvinceID'}
                                required
                                margin='normal'
                                error={errors.cityProvinceID && Boolean(errors.cityProvinceID)}
                                helperText={errors.cityProvinceID && <>{errors.cityProvinceID.message}</>}
                                options={citiesProvinces}
                                label={'Tỉnh, thành'}
                                placeholderI18nKey={'Chọn tỉnh, thành'}
                            />
                        )}
                    />
                    <Controller
                        name='suburbNameID'
                        control={control}
                        render={({field: {value, ref, onChange, ...otherFields}}) => (
                            <TdSelect
                                {...otherFields}
                                inputRef={ref}
                                size={'small'}
                                required={suburbNameFilters.length > 0}
                                disabled={suburbNameFilters.length === 0 || (patient?.patientCode && patient.patientCode !== "")}
                                shrink
                                notched
                                //@ts-ignore
                                margin={'normal'}
                                value={value}
                                error={errors.suburbNameID && Boolean(errors.suburbNameID)}
                                helperText={errors.suburbNameID && <>{errors.suburbNameID.message}</>}
                                onChange={(e) => {
                                    onChange(e)
                                    suburbChange(e.target.value);
                                    setValue('wardNameID', null);
                                }}
                                data={suburbNameFilters.map(i => ({
                                    ...i,
                                    Id: i.suburbNameID.toString(),
                                    Text: i.suburbName,
                                }))}
                                placeholder={getValues().cityProvinceID ? (suburbNameFilters.length > 0 ? 'Chọn quận, huyện' : 'Không có quận, huyện') : 'Chọn tỉnh, thành trước'}
                                label={'Quận, huyện'}
                            />
                        )}
                    />
                    <Controller
                        name='wardNameID'
                        control={control}
                        render={({field: {value, ref, onChange, ...otherFields}}) => (
                            <TdSelect
                                {...otherFields}
                                inputRef={ref}
                                size={'small'}
                                required={wardNamesFilters.length > 0}
                                disabled={wardNamesFilters.length === 0 || (patient?.patientCode && patient.patientCode !== "")}
                                shrink
                                notched
                                value={value}
                                //@ts-ignore
                                margin={'normal'}
                                error={errors.wardNameID && Boolean(errors.wardNameID)}
                                helperText={errors.wardNameID && <>{errors.wardNameID.message}</>}
                                onChange={onChange}
                                data={wardNamesFilters.map(i => ({
                                    ...i,
                                    Id: i.wardNameID.toString(),
                                    Text: i.wardName,
                                }))}
                                placeholder={getValues().suburbNameID ? (wardNamesFilters.length > 0 ? 'Chọn phường, xã' : 'Không có phường, xã') : 'Chọn quận, huyện trước'}
                                label={'Phường, xã'}
                            />
                        )}
                    />
                    <Typography variant='h5' sx={{paddingTop: 3, paddingBottom: 1}}>Thông tin người thân</Typography>
                    <Controller
                        name='fContactFullName'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                size={'small'}
                                required={moment().diff(moment(getValues().dob), 'years') <= 6}
                                margin={'normal'}
                                sx={{flex: 1}}
                                inputRef={ref}
                                error={errors.fContactFullName && Boolean(errors.fContactFullName)}
                                helperText={errors.fContactFullName && <>{errors.fContactFullName.message}</>}
                                label={'Họ và Tên người thân'}
                                placeholder={'Nhập họ và tên người thân'}
                            />
                        )}
                    />
                    <Controller
                        name='v_FamilyRelationship'
                        control={control}
                        render={({field: {value, ref, onChange, ...otherFields}}) => (
                            <TdSelect
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                inputRef={ref}
                                size={'small'}
                                required={getValues().fContactFullName != ''}
                                shrink
                                notched
                                value={value}
                                //@ts-ignore
                                margin={'normal'}
                                error={errors.v_FamilyRelationship && Boolean(errors.v_FamilyRelationship)}
                                helperText={errors.v_FamilyRelationship && <>{errors.v_FamilyRelationship.message}</>}
                                onChange={onChange}
                                data={FamilyRelationships}
                                placeholder={'Chọn quan hệ với bệnh nhân'}
                                label={'Quan hệ'}
                            />
                        )}
                    />
                    <Controller
                        name='fContactAddress'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                size={'small'}
                                margin={'normal'}
                                sx={{flex: 1}}
                                inputRef={ref}
                                error={errors.fContactAddress && Boolean(errors.fContactAddress)}
                                helperText={errors.fContactAddress && <>{errors.fContactAddress.message}</>}
                                label={'Địa chỉ người thân'}
                                placeholder={'Nhập địa chỉ của người thân'}
                            />
                        )}
                    />  
                    <Controller
                        name='fContactCellPhone'
                        control={control}
                        render={({field: {value, ref, ...otherFields}}) => (
                            <TdTextBox
                                {...otherFields}
                                disabled={patient?.patientCode && patient.patientCode !== ""}
                                moveToNextEleAfterEnter
                                value={value}
                                size={'small'}
                                margin={'normal'}
                                sx={{flex: 1}}
                                inputRef={ref}
                                error={errors.fContactCellPhone && Boolean(errors.fContactCellPhone)}
                                helperText={errors.fContactCellPhone && <>{errors.fContactCellPhone.message}</>}
                                label={'SĐT người thân'}
                                placeholder={'Nhập số điện thoại của người thân'}
                            />
                        )}
                    />
                    
                    <FlexBox
                        sx={{
                            position: 'fixed',
                            bottom: 10,
                            right:10,
                            gap: '20px',
                        }}
                    >
                        <LoadingButton onClick={thisOnClose}  variant='contained'>
                            Đóng
                        </LoadingButton>
                        {
                            patient &&
                            <Button onClick={handleDeletePatient} color={'error'} sx={{
                                '&:hover': {
                                    backgroundColor: '#a12222',
                                }
                            }} variant='contained'>
                                Xóa BN
                            </Button>
                        }
                        {!(patient?.patientCode && patient.patientCode !== "") &&
                            <>
                                <Button onClick={onReset} color={'warning'} sx={{
                                    color:'white',
                                    '&:hover': {
                                        color:'white',
                                        backgroundColor: '#dcc432',
                                    }
                                }} variant='contained'>
                                    Đặt lại
                                </Button>
                                <LoadingButton onClick={async ()=>{
                                    const validateForm = await trigger();
                                    if (!validateForm) {
                                        return;
                                    }
                                    if(patient) {
                                        await onSubmit(null);
                                    }
                                    else {
                                        await sendOTP(getValues('contactMobileNum'), 2, setOpenOtp,snackbar , false);
                                    }
                                }} type='button' variant='contained'>
                                    {patient ? "Cập nhật" :  "Tạo bệnh nhân"}
                                </LoadingButton>
                            </>
                        }
                        
                    </FlexBox>
                </Box>
            </Box>
        </Drawer>
    )
}
export default CreatePatientDrawer;
