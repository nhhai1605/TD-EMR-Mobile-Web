import React, {useEffect,useState} from "react";
import {Button, CircularProgress, Modal, Typography} from "@mui/material";
import FlexBox from "../@core/components/FlexBox";
import OtpInput from "react-otp-input";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {LoadingButton} from "@mui/lab";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import otpService from "../@core/services/otpService";

export const sendOTP = async (phoneNumber, type, snackbar=null, isResend = false) => {
	toggleLoading(true);
	const payload = {
		otpType:type,
		patientCellPhoneNumber: phoneNumber,
		isResendOTP: isResend,
	}
	await otpService.sendOTP(payload).then((res) =>{
		if(res)
		{
			snackbar?.success("Gửi mã OTP thành công");
		}
		else
		{
			snackbar?.error("Gửi mã OTP thất bại. Vui lòng thử lại");
		}
	}).catch((err)=>snackbar?.error(err.message)).finally(() => toggleLoading(false))
}

const OTPComponent = (props) => {
	const {open, setOpen, onSubmit, onResend} = props;
	const [otp, setOtp] = React.useState('');
	const cooldown = 30; //seconds
	const [resendCooldown, setResendCooldown] = useState(cooldown);
	const snackbar = useSnackbar();
	const [curInterval, setCurInterval] = useState(null);

	useEffect(()=>{
		if(!open)
		{
			setOtp('');
			setResendCooldown(cooldown)
			curInterval && clearInterval(curInterval);
		}
	},[open])
	
	useEffect(()=>{
		if(open)
		{
			if(resendCooldown == cooldown)
			{
				const interval = setInterval(()=>{
					setResendCooldown((prev)=>prev-1);
				},1000);
				setCurInterval(interval);
				setTimeout(()=>{
					clearInterval(interval);
					setCurInterval(null);
				},cooldown*1000);
			}
		}
	},[resendCooldown, open])
	
	return (
        <Modal
            component={null}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            open={open}
            onClose={()=>setOpen(false)}>
            <FlexBox sx={{alignItems:'center',justifyContent:'center',backgroundColor:'white',flexDirection:'column',borderRadius:5}}>
                <Typography sx={{paddingTop:'2.5vh'}} variant={"h4"}>Xác nhận OTP</Typography>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<></>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
						width:'10vw',
						height:'10vw',
						marginTop:'5vh',
						marginBottom:'5vh',
						marginLeft:'2vw',
						marginRight:'2vw',
						fontSize:'5vw',
						borderRadius:'2vw',
					}}
                />
                <FlexBox sx={{alignItems:'center',justifyContent:'space-evenly', flexDirection:'row'}}>
                    <Button
                        sx={{margin:2, '&:hover': {backgroundColor: '#a12222'}}}
                        color={'error'}
                        variant={'contained'}
                        onClick={() => setOpen(false)}>
                        ĐÓNG
                    </Button>
                    <LoadingButton
                        sx={{margin:2, '&:hover': {backgroundColor: '#cc9d00'},color:'white'}}
                        color={'warning'}
                        loading={resendCooldown > 0}
                        loadingIndicator={
							<FlexBox style={{flexDirection:'row',alignItems:'center'}}>
								<CircularProgress color="inherit" size={16} />
								<Typography sx={{mx:2}}>{resendCooldown}</Typography>
							</FlexBox>
						}
                        variant={'contained'}
                        onClick={()=>{
	                        onResend?.();
							setResendCooldown(cooldown);
						}}>
                        GỬI LẠI OTP
                    </LoadingButton>
                    <Button
                        sx={{margin:2}}
                        variant={'contained'}
                        onClick={()=>{
							onSubmit?.(otp);
						}}>
                        XÁC NHẬN
                    </Button>
                </FlexBox>
            </FlexBox>
        </Modal>
	)
}
export default OTPComponent;
