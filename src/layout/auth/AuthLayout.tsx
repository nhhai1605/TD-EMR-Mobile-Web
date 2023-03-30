import { Box } from "@mui/material";
import React from "react"
import { Outlet } from 'react-router-dom';
const AuthLayout = () => {
	return (
		<>
			<Box>
				{/* {authRoutes} */}
				<Outlet />
			</Box>
		</>
	)
}
export default AuthLayout;
