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
        // marginTop:'4vh',
        backgroundColor: '#f3f4f9',
        // height:'20vh',
        
    }));
    
    return (
        <BoxRow
            component='footer'
            sx={{
                width:'100%',
                alignItems:'center',
                py:4,
            }}
        >
            <StackColumn>
                <FooterLink text={<FooterTitle text={'VIỆN TIM TP. HỒ CHÍ MINH'}/>} disabled={false} link={"https://vientimtphcm.vn"}/>
                <FooterLink disabled text={'Địa chỉ : Số 04 Đường Dương Quang Trung - P12 - Q10 - TP. Hồ Chí Minh'} />
                <FooterLink disabled text={'Điện thoại : (028) 3865 1586'} />
                <FooterLink disabled text={'Fax : (028) 3865 1543'} />
                <FooterLink capitalize={false} disabled text={'Email : institutducoeur@vientimtphcm.vn'} />
            </StackColumn>
        </BoxRow>
    );
};

export default Footer;
