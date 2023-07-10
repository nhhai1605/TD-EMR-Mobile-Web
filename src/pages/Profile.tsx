import React, {useState} from "react";
import {Container, Typography, Paper, IconButton, Button, Drawer} from "@mui/material";
import {CustomBox} from "./Home";
import FlexBox from "../@core/components/FlexBox";
import authService from "../@core/services/authService";
import Tooltip from "@mui/material/Tooltip";
import {EditOutlined, Password} from "@mui/icons-material";
import EditAccountDrawer from "../components/EditAccountDrawer";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ChangePasswordDrawer from "../components/ChangePasswordDrawer";
export const Profile = () => {
	const [user, setUser] = useState(authService.getCurrentUser());
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openChangePassword, setOpenChangePassword] = useState(false);
	return (
		<CustomBox>
			<Container
				disableGutters
				sx={{
					position: 'relative',
					flexDirection: 'column',
					height: '90vh',
					backgroundColor:'white',
				}}
			>
				<Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} anchor={'bottom'}>
					<Paper style={{height:'auto', overflow: 'auto', backgroundColor:'white'}}  >
						<IconButton sx={{position:'absolute',right:0}} onClick={()=>setOpenDrawer(false)}>
							<CloseIcon sx={{fontSize: '2rem'}} />
						</IconButton>
						<FlexBox sx={{padding:5, justifyContent:'center', alignItems:'center'}}>
							<Typography variant='h4' >Bạn đã từng khám tại Viện Tim TP.Hồ Chí Minh?</Typography>
						</FlexBox>
						<FlexBox sx={{px:5, justifyContent:'center', alignItems:'center'}}>
							<Button variant={'contained'} onClick={()=> {
								setOpenEdit(true);
								setOpenDrawer(false);
							}}>
								<EditOutlined sx={{marginX:1, fontSize: '2rem'}} />
								<FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
									<span>Điểu chỉnh thông tin</span>
								</FlexBox>
							</Button>
						</FlexBox>
						<FlexBox sx={{padding:5, justifyContent:'center', alignItems:'center'}}>
							<Button variant={'outlined'} onClick={()=> {
								setOpenChangePassword(true);
								setOpenDrawer(false);
							}}>
								<Password sx={{marginX:1, fontSize: '2rem'}} />
								<FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
									<span>Đổi mật khẩu</span>
								</FlexBox>
							</Button>
						</FlexBox>
					</Paper>
				</Drawer>
				<EditAccountDrawer open={openEdit} onClose={(success)=> {
					setOpenEdit(false)
					if(success) {
						toggleLoading(true)
						authService.getProvider().then(()=>{
							setUser(authService.getCurrentUser());
						}).finally(()=>toggleLoading(false));
					}
				}}/>
				<ChangePasswordDrawer open={openChangePassword} onClose={()=> {setOpenChangePassword(false)}}/>
				<Paper style={{height:'90vh', maxHeight: '90vh', overflow: 'auto', backgroundColor:'white'}} >
					<FlexBox sx={{padding:2, justifyContent:'space-between', alignItems:'center'}}>
						<Typography variant='h3'>Thông Tin Tài Khoản</Typography>
						<FlexBox>
							<Tooltip title="Chỉnh sửa thông tin">
								<IconButton onClick={()=>setOpenDrawer(true)}>
								<EditOutlined sx={{marginX:1, fontSize: '2rem'}}/>
								</IconButton>
							</Tooltip>
						</FlexBox>
					</FlexBox>
					<FlexBox sx={{px:6, py:1}}>
						<Typography variant='h6' sx={{fontSize:18}}>Họ và Tên: {user.accName}</Typography>
					</FlexBox>
					<FlexBox sx={{px:6, py:1}}>
						<Typography variant='h6' sx={{fontSize:18}}>SĐT: {user.accUserName}</Typography>
					</FlexBox>
					<FlexBox sx={{px:6, py:1}}>
						<Typography variant='h6' sx={{fontSize:18}}>CCCD / CMND: {user.cccd}</Typography>
					</FlexBox>
					<FlexBox sx={{px:6, py:1}}>
						<Typography variant='h6' sx={{fontSize:18}}>Email: {user.email}</Typography>
					</FlexBox>
				</Paper>
			</Container>
		</CustomBox>
	)
}
