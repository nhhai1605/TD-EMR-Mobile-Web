import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
    Container,
    Avatar,
    Menu,
    MenuItem,
    Link as MuiLink,
} from '@mui/material';
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
import authService from "../../../@core/services/authService";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {PersonOutlined} from "@mui/icons-material";

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
        text: 'Lấy Số Thứ Tự',
        to: '/lay-so-thu-tu',
    },
    {
        text: 'DS Số Thứ Tự',
        to: '/danh-sach-so-thu-tu',
    },
    {
        text: 'Bệnh Nhân',
        to: '/danh-sach-benh-nhan',
    },
    // {
    //     text: 'Cuộc Hẹn',
    //     to: '/danh-sach-cuoc-hen',
    // },
    // {
    //     text: "Liên Hệ",
    //     to: 'lien-he',
    // }
];


const Header = () => {
    const {isAuthenticated, logout} = useAuth();
    const [anchorDropdownMenu, setAnchorDropdownMenu] = useState<null | HTMLElement>(null);
    const openDropdown = Boolean(anchorDropdownMenu);

    const openDropdownMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorDropdownMenu(event.currentTarget);
    };
    const handleClose = () => {
        // setAnchorNotification(null);
        setAnchorDropdownMenu(null);
    };
    const renderDropdownMenu = () => {
        return (
            <Box sx={{maxHeight: 50}}>
                <MuiLink
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        maxWidth: '200px',
                    }}
                    underline='none'
                    color='inherit'
                    onClick={(e: any) => openDropdownMenu(e)}
                >
                    <Typography sx={{color: '#2b6bc4', fontWeight: 'bold', width:'100%', paddingRight:1}}>{authService.getCurrentUser().accName}</Typography>
                    <KeyboardArrowDownOutlinedIcon sx={{color: '#2b6bc4'}} />
                </MuiLink>
                <Menu
                    id='basic-menu'
                    anchorEl={anchorDropdownMenu}
                    open={openDropdown}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    PaperProps={{
                        style: {
                            width: '150px',
                        },
                    }}
                >
                    <MenuItem sx={{ height: 50 }} component={Link} to="/tai-khoan">
                        <PersonOutlined className='mr-3' /> {"Tài Khoản"}
                    </MenuItem>
                    <MenuItem sx={{ height: 50 }} onClick={async () => await logout()}>
                        <LogoutOutlinedIcon className='mr-3' /> {"Đăng Xuất"}
                    </MenuItem>
                </Menu>
            </Box>
        );
    };
    
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
                            <ListItem key={text} sx={{px:1}}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    sx={{
                                        px:0,
                                        color: '#2b6bc4',
                                        fontWeight: 'bold',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        },
                                    }}
                                >
                                    <ListItemText
                                        sx={{
                                            textAlign:'center',
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
                        <ListItem sx={{px:1}}>
                            <ListItemButton
                                component={Link}
                                to={'/login'}
                                sx={{
                                    px:0,
                                    color: '#2b6bc4',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    },
                                }}
                            >
                                <ListItemText
                                    sx={{
                                        textAlign:'center',
                                        fontWeight: 'bold',
                                    }}
                                    primary={'Đăng Nhập'}
                                />
                            </ListItemButton>
                        </ListItem>
                    }
                    {
                        isAuthenticated &&
                        <ListItem sx={{px:1}}>
                            {renderDropdownMenu()}
                        </ListItem>
                    }
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;
