import { Outlet } from 'react-router-dom';

import {Box} from '@mui/material';
import Header from './header/Header';
import Footer from './footer/Footer';

function MasterLayout() {
	return (
		<Box
			sx={{
				// display: 'flex',
		        flexDirection: { xs: 'column', md: 'row' }
			}}
			>
			{/*<Box component='main' sx={{ position: 'relative', flexGrow: 1 }}>*/}
				<Header />
				<Outlet />
				<Footer />
			{/*</Box>*/}
		</Box>
  );
}

export default MasterLayout;
