import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import cookie from "react-cookies";
import COOKIE_NAME from "../@core/constants/cookie";
import mobileService from "../@core/services/mobileService";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import {SwalAlert} from "../@core/components/SwalAlert";
import {Box, Button, Drawer, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import FlexBox from "../@core/components/FlexBox";
import {LoadingButton} from "@mui/lab";
import React, {useEffect, useState} from "react";

const EditAccountDrawer = (props) => {
	const {open, onClose} = props;
	const snackbar = useSnackbar();
	
	const validationFormSchema = yup.object().shape({
		accName: yup.string().min(5, 'Quá ngắn').max(50, 'Quá dài').required('Bắt buộc'),
		cccd:yup.string().nullable().transform((o, c) => o === "" ? null : c)
			.min(9, 'Quá ngắn')
			.max(12, 'Quá dài'),
		email: yup.string().nullable().email('Email không hợp lệ'),
	});

	const {
		reset,
		trigger,
		formState: { errors },
		control,
		getValues,
	} = useForm({ resolver: yupResolver(validationFormSchema)});
	
	useEffect(()=>{
		const user = cookie.load(COOKIE_NAME.USER);
		const initialDataForm = {
			accName: user?.accName ?? '',
			cccd:  user?.cccd ?? '',
			email:  user?.email ?? '',
		};
		reset(initialDataForm)
	},[open])

	const onSubmit = async () => {
		const validateForm = await trigger();
		if (!validateForm) {
			return;
		}
		SwalAlert.fire({
			text: 'Bạn có chắc chắn muốn cập nhật thông tin tài khoản?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Có',
			cancelButtonText: 'Không',
		}).then(async (result) => {
			if (result.isConfirmed) {
				toggleLoading(true);
				const user = cookie.load(COOKIE_NAME.USER);
				const payload = {
					webUserAccID: Number(user?.webUserAccID),
					accName: getValues('accName'),
					cccd: getValues('cccd'),
					email: getValues('email'),
				}
				await mobileService.UpdateProfileInfo(payload).then(() => {
					snackbar.success('Cập nhật thành công');
					onClose(true)
				}).catch(err=>{
					snackbar.error(err?.message);
				}).finally(()=> {
					toggleLoading(false);
				});
			}
		})
	}
	
	return (
		<Drawer anchor={'right'} sx={{zIndex: '1300', '& > .MuiPaper-root': { width: {xs:'100%', sm: '100%', md:'50%', lg:'50%'} }}} open={open} onClose={()=>onClose(false)}>
			<Box sx={{ padding: '20px' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant='h5'>Chỉnh sửa thông tin tài khoàn</Typography>
					<IconButton onClick={()=>onClose(false)}>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box component={"form"} sx={{
					display: "flex",
					marginBottom:5,
					flexDirection: "column",}}>
					<Controller
						name='accName'
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
								error={errors.accName && Boolean(errors.accName)}
								helperText={errors.accName && <>{errors.accName.message}</>}
								label={'Họ và Tên'}
								placeholder={'Nhập Họ và Tên'}
							/>
						)}
					/>

					<Controller
						name='cccd'
						control={control}
						render={({ field: { value, ref, ...otherFields } }) => (
							<TdTextBox
								{...otherFields}
								value={value}
								size={'small'}
								margin='normal'
								moveToNextEleAfterEnter
								sx={{ flex:1 }}
								inputRef={ref}
								error={errors.cccd && Boolean(errors.cccd)}
								helperText={errors.cccd && <>{errors.cccd.message}</>}
								label={'CMND / CCCD'}
								placeholder={'Nhập CMND / CCCD'}
							/>
						)}
					/>
					<Controller
						name='email'
						control={control}
						render={({ field: { value, ref, ...otherFields } }) => (
							<TdTextBox
								{...otherFields}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										onSubmit();
									}
								}}
								value={value}
								size={'small'}
								margin='normal'
								moveToNextEleAfterEnter
								sx={{ flex:1 }}
								inputRef={ref}
								error={errors.email && Boolean(errors.email)}
								helperText={errors.email && <>{errors.email.message}</>}
								label={'Email'}
								placeholder={'Nhập Email'}
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
						<Button onClick={()=>onClose(false)} color={'error'} sx={{
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
export default EditAccountDrawer;
