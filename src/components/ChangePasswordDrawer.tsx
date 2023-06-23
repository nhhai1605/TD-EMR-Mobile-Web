import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import cookie from "react-cookies";
import COOKIE_NAME from "../@core/constants/cookie";
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import React, {useEffect} from "react";
import {SwalAlert} from "../@core/components/SwalAlert";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import mobileService from "../@core/services/mobileService";
import {Box, Button, Drawer, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {TdTextBox} from "../@core/components/controls/TdTextBox";
import FlexBox from "../@core/components/FlexBox";
import {LoadingButton} from "@mui/lab";

const ChangePasswordDrawer = (props) =>
{
	const {open, onClose} = props;
	const snackbar = useSnackbar();
	const user = cookie.load(COOKIE_NAME.USER);
	
	const initialDataForm = {
		password: '',
		newPassword: '',
		reNewPassword: '',
	};
	
	const validationFormSchema = yup.object().shape({
		password: yup.string().required('Phải nhập mật khẩu'),
		newPassword: yup.string().required('Phải nhập mật khẩu mới')
			.min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
			.max(18, 'Mật khẩu chỉ được nhiều nhất 18 ký tự')
			.matches(/[a-zA-Z0-9]/, 'Mật khẩu chỉ được có số và chữ'),
		reNewPassword: yup.string()
			.oneOf([yup.ref('newPassword'), null], 'Mật khẩu không khớp'),
	});

	const {
		reset,
		trigger,
		formState: { errors, isDirty },
		control,
		getValues,
	} = useForm({ resolver: yupResolver(validationFormSchema), defaultValues: initialDataForm });

	useEffect(()=>{
		if(!open){
			reset(initialDataForm);
		}
	},[open])

	const onSubmit = async () => {
		const validateForm = await trigger();
		if (!validateForm) {
			return;
		}
		SwalAlert.fire({
			text: 'Bạn có chắc chắn muốn đổi mật khẩu?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Có',
			cancelButtonText: 'Không',
		}).then(async (result) => {
			if (result.isConfirmed) {
				toggleLoading(true);
				const payload = {
					webUserAccID: Number(user?.webUserAccID),
					accPassword: getValues('password'),
					accPasswordNew: getValues('newPassword'),
				}
				await mobileService.updateWebUserPassword(payload).then((res) => {
					snackbar.success('Đổi mật khẩu thành công');
					onClose()
				}).catch(err=>{
					snackbar.error(err?.message);
				}).finally(()=> {
					toggleLoading(false);
				});
			}
		})
	}
	
	return (
		<Drawer anchor={'right'} sx={{zIndex: '1300', '& > .MuiPaper-root': { width: {xs:'100%', sm: '100%', md:'50%', lg:'50%'} }}} open={open} onClose={onClose}>
			<Box sx={{ padding: '20px' }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Typography variant='h5'>Thay đổi mật khẩu</Typography>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Box>
				<Box component={"form"} sx={{
					display: "flex",
					marginBottom:5,
					flexDirection: "column",}}>
					<Controller
						name='password'
						control={control}
						render={({ field: { value, ref, ...otherFields } }) => (
							<TdTextBox
								{...otherFields}
								required
								value={value}
								type={'password'}
								size={'small'}
								margin='normal'
								moveToNextEleAfterEnter
								sx={{ flex:1 }}
								inputRef={ref}
								error={errors.password && Boolean(errors.password)}
								helperText={errors.password && <>{errors.password.message}</>}
								label={'Mật khẩu cũ'}
								placeholder={'Nhập mật khẩu cũ'}
							/>
						)}
					/>
					
					<Controller
						name='newPassword'
						control={control}
						render={({ field: { value, ref, ...otherFields } }) => (
							<TdTextBox
								{...otherFields}
								type={'password'}
								value={value}
								required
								size={'small'}
								margin='normal'
								moveToNextEleAfterEnter
								sx={{ flex:1 }}
								inputRef={ref}
								error={errors.newPassword && Boolean(errors.newPassword)}
								helperText={errors.newPassword && <>{errors.newPassword.message}</>}
								label={'Mật khẩu mới'}
								placeholder={'Nhập mật khẩu mới'}
							/>
						)}
					/>

					<Controller
						name='reNewPassword'
						control={control}
						render={({ field: { value, ref, ...otherFields } }) => (
							<TdTextBox
								{...otherFields}
								value={value}
								type={'password'}
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										onSubmit();
									}
								}}
								required
								size={'small'}
								margin='normal'
								moveToNextEleAfterEnter
								sx={{ flex:1 }}
								inputRef={ref}
								error={errors.reNewPassword && Boolean(errors.reNewPassword)}
								helperText={errors.reNewPassword && <>{errors.reNewPassword.message}</>}
								label={'Xác nhận mật khẩu mới'}
								placeholder={'Nhập xác nhận mật khẩu mới'}
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
export default ChangePasswordDrawer;