import React, {useState} from 'react'
import {
    styled,
    useTheme,
    Drawer,
    Divider,
    List,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText, Typography, ListItemButton,
} from '@mui/material'
// rotas
import {Link} from 'react-router-dom';
// icons
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useAuth} from "../../../@core/contexts/AuthProvider";
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

//rotas
const itemList = [
    {
        text: "Trang chủ",
        icon: <HomeOutlinedIcon/>,
        to: "/"
    },
    {
        text: 'Lấy phiếu khám',
        icon: <QueueOutlinedIcon/>,
        to: '/lay-phieu-kham',
    },
    {
        text: 'DS Phiếu khám',
        icon: <ConfirmationNumberOutlinedIcon/>,
        to: '/danh-sach-phieu-kham',
    },
    {
        text: 'Bệnh nhân',
        icon: <PeopleAltOutlinedIcon/>,
        to: '/danh-sach-benh-nhan',
    },
    {
        text: 'Cuộc hẹn',
        icon: <LocalHospitalOutlinedIcon/>,
        to: '/danh-sach-cuoc-hen',
    },
    {
        text: "Liên hệ",
        icon: <ContactSupportOutlinedIcon/>,
        to: 'lien-he',
    }
];


const DrawerItem = () => {
    const {isAuthenticated, logout} = useAuth();

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{...(open && {display: 'none'})}}
            >
                <MenuIcon/>
            </IconButton>

            <Drawer
                sx={{
                    flexGrow: 1,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {itemList.map((item) => {
                        const {text} = item;
                        return (
                            <ListItem
                                key={text}
                                onClick={handleDrawerClose}
                                component={Link}
                                to={item.to}
                                sx={{
                                    color: '#414141',
                                    borderRadius:0,
                                    "&:hover": {
                                        backgroundColor: '#e9e5e5',
                                        color: '#1c2859',
                                    }
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#1c2859',
                                        }
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        )
                    })}
                    {
                        !isAuthenticated &&
                        <ListItemButton
                            component={Link}
                            to={'/login'}
                            sx={{
                                color: '#414141',
                                "&:hover": {
                                    backgroundColor: '#e9e5e5',
                                    color: '#1c2859',
                                }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1c2859',
                                    }
                                }}
                            >
                                <LoginIcon/>
                            </ListItemIcon>
                            <ListItemText
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
                                color: '#414141',
                                "&:hover": {
                                    backgroundColor: '#e9e5e5',
                                    color: '#1c2859',
                                }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1c2859',
                                    }
                                }}
                            >
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText
                                
                                primary={'Đăng xuất'}
                            />
                        </ListItemButton>
                    }
                </List>
            </Drawer>
        </>
    )
}

export default DrawerItem;