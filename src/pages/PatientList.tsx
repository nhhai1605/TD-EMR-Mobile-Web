import React, {useCallback, useEffect, useRef, useState} from "react";
import {useAppointment} from "../context/AppointmentContext";
import {useSnackbar} from "../@core/contexts/SnackbarProvider";
import {Badge, Box, Button, Container, Drawer, IconButton, Link, List, Typography} from "@mui/material";
import { toggleLoading } from '@core/components/loading/LoadingScreen';
import CreatePatientDrawer from "../components/CreatePatientDrawer";
import AddManagePatientDrawer from "../components/AddManagePatientDrawer";
import {CustomBox} from "./Home";
import FlexBox from "../@core/components/FlexBox";
import Paper from "@mui/material/Paper";
import moment from "moment/moment";
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Tooltip from "@mui/material/Tooltip";
import {Female, Male} from "@mui/icons-material";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import CloseIcon from "@mui/icons-material/Close";
export const PatientList = () => {
	const [allPatients, setAllPatients] = useState([])
	const { getPatientList} = useAppointment();
	const snackbar = useSnackbar();
	const [createPatientDrawer, setCreatePatientDrawer] = useState(false);
	const [addManagePatientDrawer, setAddManagePatientDrawer] = useState(false);
	const [selectedPatient, setSelectedPatient] = useState(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const fetchData = async () =>
	{
		toggleLoading(true);
		await getPatientList().then(res =>
		{
			setAllPatients(res ?? [])
		}).catch(err =>
		{
			snackbar.error(err.message);
		}).finally(() =>
		{
			toggleLoading(false);
		})
	}

	useEffect(() =>
	{
		if(!createPatientDrawer && !addManagePatientDrawer)
		{
			fetchData();
		}
	}, [createPatientDrawer, addManagePatientDrawer]);
	
	const handleOpenDrawer = () => {
		if(allPatients.length >= import.meta.env.VITE_MAX_PATIENTS)
		{
			snackbar.error(`Không thể thêm mới BN do đã đạt số lượng tối đa (${import.meta.env.VITE_MAX_PATIENTS} BN)`);
			return;
		}
		setOpenDrawer(true)
	}

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
								setAddManagePatientDrawer(true);
								setOpenDrawer(false);
							}}>
								<PlaylistAddOutlinedIcon sx={{marginX:1, fontSize: '2rem'}} />
								<FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
									<span>ĐÃ TỪNG KHÁM</span>
									<span>THÊM BỆNH NHÂN VÀO DANH SÁCH</span>
								</FlexBox>
							</Button>
						</FlexBox>
						<FlexBox sx={{padding:5, justifyContent:'center', alignItems:'center'}}>
							<Button variant={'outlined'} onClick={()=> {
								setCreatePatientDrawer(true);
								setOpenDrawer(false);
							}}>
								<PersonAddAlt1OutlinedIcon sx={{marginX:1, fontSize: '2rem'}} />
								<FlexBox sx={{flexDirection:'column', alignItems:'center',justifyContent:'center', width:'400px'}}>
									<span>CHƯA TỪNG KHÁM</span>
									<span>TẠO MỚI BỆNH NHÂN</span>
								</FlexBox>
							</Button>
						</FlexBox>
					</Paper>
				</Drawer>
				{createPatientDrawer && <CreatePatientDrawer open={createPatientDrawer} onClose={() => {
					setSelectedPatient(null)
					setCreatePatientDrawer(false)
				}} patient={selectedPatient}/>}
				<AddManagePatientDrawer open={addManagePatientDrawer} onClose={()=>setAddManagePatientDrawer(false)}/>
				<Paper style={{height:'90vh', overflow: 'auto', backgroundColor:'white'}} >
					<FlexBox sx={{padding:2, justifyContent:'space-between', alignItems:'center'}}>
						<Typography variant='h3'>Danh sách Bệnh Nhân</Typography>
						<FlexBox>
							<Tooltip title="Tạo mới / Thêm mới Bệnh Nhân">
								<IconButton onClick={handleOpenDrawer}>
									<PersonAddAlt1OutlinedIcon sx={{marginX:1, fontSize: '2rem'}}/>
								</IconButton>
							</Tooltip>
							{/*<Tooltip title="Tạo mới Bệnh Nhân">*/}
							{/*	<IconButton onClick={()=>setCreatePatientDrawer(true)}>*/}
							{/*		<PersonAddAlt1OutlinedIcon sx={{marginX:1, fontSize: '2rem'}}/>*/}
							{/*	</IconButton>*/}
							{/*</Tooltip>*/}
							{/*<Tooltip title="Thêm BN vào DS Quản Lý">*/}
							{/*	<IconButton onClick={()=>setAddManagePatientDrawer(true)} >*/}
							{/*		<PlaylistAddOutlinedIcon sx={{marginX:1, fontSize: '2rem'}} />*/}
							{/*	</IconButton>*/}
							{/*</Tooltip>*/}
						</FlexBox>

					</FlexBox>
					<List sx={{paddingBottom:4}}>
						{
							allPatients.map((patient, index) =>{
								return (
									<Paper onClick={()=> {
										setSelectedPatient(patient);
										setCreatePatientDrawer(true);
									}} variant="outlined" sx={{padding:2, justifyContent:'center', alignItems:'center', margin:2, backgroundColor:"#f3f4f9",}}>
										<FlexBox sx={{flexDirection:'column', alignItems:'flex-start'}}>
											<FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent: 'space-between', width: '100%',py:1}}>
												<FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%'}}>
													<PersonOutlinedIcon sx={{color: '#45b561', marginRight:1}}/>
													<Typography variant={"h6"} sx={{textAlign:'start'}}>Bệnh Nhân: {patient?.fullName}</Typography>
												</FlexBox>
												<Badge color='error' badgeContent={0}>
													{patient?.gender == 'F' ? (
														<Female sx={{ color: '#e322c9', fontSize: '1.5rem' }} />
													) : (
														<Male sx={{ color: '#225ce3', fontSize: '1.5rem' }} />
													)}
												</Badge>
											</FlexBox>
											<FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
												<MedicalInformationOutlinedIcon sx={{color: '#22b0e3', marginRight:1}}/>
												<Typography variant={"h6"} sx={{textAlign:'start'}}>Mã BN: {patient?.patientCode ? patient?.patientCode : "[Chưa có Mã BN]"}</Typography>
											</FlexBox>
											<FlexBox sx={{flexDirection:'row', alignItems:'flex-start', justifyContent:'flex-start', width:'100%',py:1}}>
												<DateRangeOutlinedIcon sx={{color: '#e3681b', marginRight:1}}/>
												<Typography variant={"h6"} sx={{textAlign:'start'}}>Ngày Sinh: {moment(patient?.dob).format("DD/MM/YYYY")}</Typography>
											</FlexBox>
										</FlexBox>
									</Paper>
								)
							})
						}
					</List>
				</Paper>
			</Container>
		</CustomBox>
	)

}
