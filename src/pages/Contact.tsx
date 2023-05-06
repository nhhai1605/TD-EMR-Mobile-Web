import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const Contact = () => {
	return (
		<Stack
			component='section'
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{
				py: 10,
				px: 2,
				backgroundColor:'white',
				height:'90vh',
			}}
		>
			<Typography
				variant='h1'
				component='h1'
				sx={{
					fontWeight: '700',
					textAlign: 'center',
				}}
			>
				Liên hệ với chúng tôi
			</Typography>

			{/* <Paragraph
        text={
          'If you are interested to buy the property contact us we will call you. \
                Shortly to fulfill you requirements and property.'
        }
        maxWidth={'sm'}
        mx={0}
        textAlign={'center'}
      /> */}

			<Box
				component='form'
				noValidate
				sx={{
					mt: 1,
					py: 2,
				}}
			>
				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='phone'
					label='Số Điện Thoại'
					type='phone'
					id='phone'
					autoComplete='current-phone'
				/>
				<Button
					variant='contained'
					fullWidth
					type='submit'
					size='medium'
					sx={{
						fontSize: '0.9rem',
						textTransform: 'capitalize',
						py: 2,
						mt: 3,
						mb: 2,
						borderRadius: 0,
						backgroundColor: '#14192d',
						'&:hover': {
							backgroundColor: '#1e2a5a',
						},
					}}
				>
					send
				</Button>
			</Box>
		</Stack>
	);
};

export default Contact;
