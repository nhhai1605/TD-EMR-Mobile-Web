import React from 'react';
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText, Container } from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';
import FooterLink from "../footer/FooterLink";
import {useAuth} from "../../../@core/contexts/AuthProvider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

// personalizacao
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    width:'90%'
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

//rotas
const itemList = [
    {
        text: 'Lấy phiếu khám',
        to: '/lay-phieu-kham',
    },
    {
        text: 'DS Phiếu khám',
        to: '/danh-sach-phieu-kham',
    },
    {
        text: 'Bệnh nhân',
        to: '/danh-sach-benh-nhan',
    },
    {
        text: 'Cuộc hẹn',
        to: '/danh-sach-cuoc-hen',
    },
    {
        text: "Liên hệ",
        to: 'lien-he',
    }
];

const Header = () => {
    const {isAuthenticated, logout} = useAuth();
    return (
        <AppBar
            component='nav'
            position='sticky'
            sx={{
                backgroundColor: '#f3f4f9',
                justifyContent:'center',
                alignItems:'center',
                height:'10vh',
            }}
            elevation={0}
        >
            <StyledToolbar>
                <FooterLink text={
                    <Typography
                        sx={{
                            color: '#64B5F6',
                        }}
                        variant='h1'
                        component='h1'
                    >Viện Tim TP.HCM
                    </Typography>
                } 
                disabled={false} 
                link={"/"}/>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box>
                <ListMenu sx={{ width: '50%' }}>
                    {itemList.map((item) => {
                        const { text } = item;
                        return (
                            <ListItem key={text}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    sx={{
                                        color: '#64B5F6',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            fontWeight: 'bold',
                                        }}
                                        primary={text}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                    {
                        !isAuthenticated &&
                        <ListItemButton
                            component={Link}
                            to={'/login'}
                            sx={{
                                color: '#64B5F6',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                },
                            }}
                        >
                            <ListItemText
                                sx={{
                                    fontWeight: 'bold',
                                }}
                                primary={'Đăng nhập'}
                            />
                        </ListItemButton>
                    }
                    {
                        isAuthenticated &&
                        <ListItemButton
                            onClick={async () => await logout()}
                            component={Link}
                            to={'#'}
                            sx={{
                                color: '#64B5F6',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                },
                            }}
                        >
                            <ListItemText
                                sx={{
                                    fontWeight: 'bold',
                                }}
                                primary={'Đăng xuất'}
                            />
                        </ListItemButton>
                    }
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;
