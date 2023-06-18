import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "@core/components/BoxedLayout";
import LoadingButton from "@mui/lab/LoadingButton";
import bgImage from "assets/images/bg.png";
import FlexBox from "@core/components/FlexBox";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TdTextBox } from "@core/components/controls/TdTextBox";
import * as yup from "yup";
import React, {useState} from "react";
import {useSnackbar} from "@core/contexts/SnackbarProvider";
import OTPComponent, {sendOTP} from "../components/OTPComponent";
import mobileService from "../@core/services/mobileService";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import {SwalAlert} from "../@core/components/SwalAlert";
import otpService from "../@core/services/otpService";

export const ForgotPassword = () => {
	const { t } = useTranslation();
	const [openOtp, setOpenOtp] = useState(false);
	const snackbar = useSnackbar();
	
	const onSubmit = async (otp) => {
		toggleLoading(true);
		const data = getValues();
		const payload = {
			patientCellPhoneNumber: data.phoneNumber,
			otp: otp,
		}
		await otpService.checkOTP(payload).then(async () =>{
			setOpenOtp(false);
			await mobileService.getNewPassword(getValues().phoneNumber).then((res : string) => {
				SwalAlert.fire({
					html: `<p  style="font-size:1.5rem;text-align:center">Mật khẩu mới là: <b>${res}</b></p>`,
					icon: 'success',
					confirmButtonText: 'Copy',
					showCloseButton:true
				}).then((result) => {
					if (result.isConfirmed) {
						navigator.clipboard.writeText(res)
						snackbar.success('Đã copy mật khẩu mới vào clipboard')
					}
				});
			})
		}).catch((err)=> {
			snackbar.error(err.message);
		}).finally(() => toggleLoading(false))
	}
	
	const {control, handleSubmit, getValues, trigger} = useForm({
		defaultValues: {
			phoneNumber: '',
		},
		resolver: yupResolver(Yup.object({
			phoneNumber: yup.string().min(9, 'Quá ngắn').max(12, 'Quá dài').matches(/^[0-9]+$/, 'SĐT chỉ được có số').required('Bắt buộc'),
		})),
	});

	return (
		<Grid container component='main' sx={{ height: "100vh" }}>
			<OTPComponent onResend={async() => await sendOTP(getValues('phoneNumber'), 4, snackbar, true)} open={openOtp} setOpen={setOpenOtp} onSubmit={onSubmit}/>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: `url(${bgImage})`,
					backgroundRepeat: "no-repeat",
					bgcolor: "background.default",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} square>
				<BoxedLayout>
					<Typography component='h1' variant='h5'>
						Quên Mật Khẩu
					</Typography>
					<Box
						marginTop={3}
						width={'100%'}>
						<FlexBox gap={1}>
							<Controller
								name='phoneNumber'
								control={control}
								render={({ field: { ...otherField }, fieldState: {error} }) => (
									<TdTextBox
										{...otherField}
										margin='normal'
										variant='filled'
										required
										fullWidth
										id='phoneNumber'
										label={"Nhập số điện thoại"}
										name='phoneNumber'
										error={Boolean(error)}
										helperText={Boolean(error) && error.message}
									/>
								)}/>
						</FlexBox>
						<LoadingButton
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3 }}
							onClick={async ()=>{
								const validateForm = await trigger();
								if (!validateForm) {
									return;
								}
								await sendOTP(getValues('phoneNumber'), 4, setOpenOtp, snackbar , false);
							}}
						>
							{"Gửi mật khẩu mới"}
						</LoadingButton>
						<Box sx={{ textAlign: "center", marginTop: "10px" }}>
							<Link component={RouterLink} to={`/login`} variant='body2'>
								{t("auth.login.title")}
							</Link>
						</Box>
					</Box>
				</BoxedLayout>
			</Grid>
		</Grid>
	);
};
