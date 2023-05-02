import React from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//img
import home from '../assets/images/home.jpg';
import FlexBox from '@core/components/FlexBox';

const Home = () => {
  return (
    <CustomBox component='header'>
      {/*  Box text  */}
      <Container>
        <BoxText component='section'>
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontWeight: 'bold',
              color: '#fff',
            }}
          >
            Đặt lịch khám bệnh
          </Typography>

          <Typography
            component='p'
            sx={{
              py: 3,
              lineHeight: 1.6,
            }}
          >
            {/*Mô tả dài 10000 ký tự mô tả dài 10000 ký tự mô tả dài 10000 ký tự mô tả dài 10000 ký tự mô tả dài 10000 ký tự mô tả*/}
            {/*dài 10000 ký tự*/}
          </Typography>

          <FlexBox gap={'10px'}>
            <Button
              variant='contained'
              component={Link}
              to={'/lay-phieu-kham'}
              sx={buttonCSS}
            >
              Lấy Phiếu Khám
            </Button>
            <Button
              variant='contained'
              disabled
              component={Link}
              to={'/dat-kham-dich-vu'}
              sx={buttonCSS}
            >
              Đặt Khám Dịch Vụ
            </Button>
            <Button
              variant='contained'
              disabled
              component={Link}
              to={'/dat-kham-bac-si'}
              sx={buttonCSS}
            >
              Đặt Khám Bác Sĩ
            </Button>
          </FlexBox>
        </BoxText>
      </Container>
    </CustomBox>
  );
};

export default Home;

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  backgroundColor: '#ccc',
  background: `url(${home}) no-repeat center bottom`,
  position: 'relative',
  zIndex: 1,
  height: '74vh',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const BoxText = styled(Box)(({ theme }) => ({
  flex: '1',
  paddingLeft: theme.spacing(8),
  top: '30%',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flex: '2',
    textAlign: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const buttonCSS = {
  background: '#3face4',
    padding: '0px 40px',
    lineHeight: '48px',
    borderRadius: '5px'
}
