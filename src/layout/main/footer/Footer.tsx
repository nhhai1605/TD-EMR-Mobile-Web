import React from 'react';
import { Box, Container, Stack, styled } from '@mui/material';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';


const Footer = () => {
    const StackColumn = styled(Stack)(() => ({
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        gap: 8,
        textAlign: 'center',
    }));

    const BoxRow = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ededed',
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: 30,
        },
    }));
    
    return (
        <Container>
            <BoxRow
                component='footer'
                sx={{
                    width:'100%',
                    py: 4,
                    px: 2,
                }}
            >
                <StackColumn>
                    <FooterLink text={<FooterTitle text={'VIỆN TIM TP. HỒ CHÍ MINH'}/>} disabled={false} link={"https://vientimtphcm.vn"}/>
                    <FooterLink disabled text={'Địa chỉ : Số 04 Đường Dương Quang Trung - P12 - Q10 - TP. Hồ Chí Minh'} />
                    <FooterLink disabled text={'Điện thoại : (028) 3865 1586'} />
                    <FooterLink disabled text={'Fax : (028) 3865 1543'} />
                    <FooterLink capitalize={false} disabled text={'Email : institutducoeur@vientimtphcm.vn'} />
                </StackColumn>

                {/*<StackColumn>*/}
                {/*    <FooterTitle text={'Title '} />*/}
                {/*    <FooterLink text={'Link 1'} />*/}
                {/*    <FooterLink text={'Link 2'} />*/}
                {/*    <FooterLink text={'Link 3'} />*/}
                {/*    <FooterLink text={'Link 4'} />*/}
                {/*</StackColumn>*/}
                
                {/*<StackColumn>*/}
                {/*    <FooterTitle text={'our company'} />*/}
                {/*    <FooterLink text={'Link 1'} />*/}
                {/*    <FooterLink text={'Link 2'} />*/}
                {/*    <FooterLink text={'Link 3'} />*/}
                {/*</StackColumn>*/}

                {/*<StackColumn>*/}
                {/*    <FooterTitle text={'Website'} />*/}
                {/*    <Stack direction='row' width='70px' maxWidth='100%' justifyContent='space-between'>*/}
                {/*        <Link*/}
                {/*            href='#'*/}
                {/*            variant='body2'*/}
                {/*            sx={{*/}
                {/*                color: '#414141',*/}
                {/*                '&:hover': {*/}
                {/*                    color: '#1c2859',*/}
                {/*                },*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <InstagramIcon />*/}
                {/*        </Link>*/}
                {/*        <Link*/}
                {/*            href='#'*/}
                {/*            variant='body2'*/}
                {/*            sx={{*/}
                {/*                color: '#414141',*/}
                {/*                '&:hover': {*/}
                {/*                    color: '#1c2859',*/}
                {/*                },*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <FacebookIcon />*/}
                {/*        </Link>*/}
                {/*    </Stack>*/}
                {/*    <Typography variant='caption' component='p'>*/}
                {/*        &copy; {new Date().getFullYear()}*/}
                {/*    </Typography>*/}
                {/*</StackColumn>*/}
            </BoxRow>
        </Container>
    );
};

export default Footer;
