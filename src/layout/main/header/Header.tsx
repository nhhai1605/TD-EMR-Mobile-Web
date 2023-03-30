import React from 'react';
import { AppBar, Toolbar, Box, List, ListItem, Typography, styled, ListItemButton, ListItemText, Container } from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
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
    text: 'Trang chủ',
    to: '/',
  },
  {
    text: 'Giới thiệu',
    to: '/gioi-thieu',
  },
  {
    text: 'Liên hệ',
    to: '/lien-he',
  },
];

const Header = () => {
  return (
    <AppBar
      component='nav'
      position='sticky'
      sx={{
        backgroundColor: '#fff',
      }}
      elevation={0}
    >
      <Container>
        <StyledToolbar>
          <Typography
            sx={{
              color: '#64B5F6',
            }}
            variant='h1'
            component='h1'
          >
            Medicine
          </Typography>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <DrawerItem />
          </Box>
          <ListMenu sx={{ width: '40%' }}>
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
          </ListMenu>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
