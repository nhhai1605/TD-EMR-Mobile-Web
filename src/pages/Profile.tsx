import React, {useEffect, useState} from "react";
import {Container, Typography, Paper, IconButton} from "@mui/material";
import {CustomBox} from "./Home";
import FlexBox from "../@core/components/FlexBox";
import authService from "../@core/services/authService";
import Tooltip from "@mui/material/Tooltip";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import {EditOutlined} from "@mui/icons-material";
import EditAccountDrawer from "../components/EditAccountDrawer";
import {toggleLoading} from "../@core/components/loading/LoadingScreen";

const Profile = () => {
	const [user, setUser] = useState(authService.getCurrentUser());
	const [openEdit, setOpenEdit] = useState(false);
	
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
				<EditAccountDrawer open={openEdit} onClose={(success)=> {
					setOpenEdit(false)
					console.log(success)
					if(success) {
						toggleLoading(true)
						authService.getProvider().then(()=>{
							setUser(authService.getCurrentUser());
						}).finally(()=>toggleLoading(false));
					}
				}}/>
				<Paper style={{height:'90vh', maxHeight: '90vh', overflow: 'auto', backgroundColor:'white'}} >
					<FlexBox sx={{padding:2, justifyContent:'space-between', alignItems:'center'}}>
						<Typography variant='h3'>Thông Tin Tài Khoàn</Typography>
						<FlexBox>
							<Tooltip title="Chỉnh sửa thông tin">
								<IconButton onClick={()=>setOpenEdit(true)}>
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
export default Profile;