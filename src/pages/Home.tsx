import React from 'react';
import { Box, Button, Container, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
//img
import home from '../assets/images/home.jpg';
import FlexBox from '@core/components/FlexBox';

const Home = () => {
    return (
        <CustomBox>
            <Container>
            <BoxText component='section'>
                <Typography
                    variant='h1'
                    component='h1'
                    sx={{
                        fontWeight: 'bold',
                        color: '#fff',
                        textAlign:'start',
                    }}
                >
                    Lấy số thứ tự đăng ký
                </Typography>

                <Typography
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                    }}
                >
                </Typography>

                <MobileFlexBox gap={'10px'}>
                    <Button
                        variant='contained'
                        component={Link}
                        to={'/lay-so-thu-tu'}
                        sx={buttonStyle}
                    >
                        Lấy số thứ tự
                    </Button>
                    {/*<Button*/}
                    {/*    variant='contained'*/}
                    {/*    disabled*/}
                    {/*    component={Link}*/}
                    {/*    to={'/dat-kham-dich-vu'}*/}
                    {/*    sx={buttonStyle}*/}
                    {/*>*/}
                    {/*    Đặt Khám Dịch Vụ*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*    variant='contained'*/}
                    {/*    disabled*/}
                    {/*    component={Link}*/}
                    {/*    to={'/dat-kham-bac-si'}*/}
                    {/*    sx={buttonStyle}*/}
                    {/*>*/}
                    {/*    Đặt Khám Bác Sĩ*/}
                    {/*</Button>*/}
                </MobileFlexBox>
            </BoxText>
            </Container>
        </CustomBox>
    );
};

export default Home;

export const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(2) ,
    backgroundColor: '#fff',
    background: `url(${home}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    position: 'relative',
    height:'90vh',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
}));

const MobileFlexBox = styled(FlexBox)(({ theme }) => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
}));

const BoxText = styled(Box)(({ theme }) => ({
    position:'relative',
    [theme.breakpoints.up('md')]: {
        top:'20%',
        left:'10%',
    },
    [theme.breakpoints.down('sm')]: {
        top:'-100%',
    },
}));

const buttonStyle = {
    background: '#3face4',
    width:'200px',
    margin:1,
    lineHeight: '40px',
    borderRadius: '5px',
}
