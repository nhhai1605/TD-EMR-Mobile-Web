import React from 'react';
import { Box, Container, Stack, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
          py: 4,
          px: 2,
        }}
      >
        <StackColumn>
          <FooterTitle text={'address'} />
          <FooterLink text={'Địa chỉ: ..............'} />
          <FooterLink text={'Số điện thoại 25 999-345-10800'} />
          <FooterLink text={'................'} />
        </StackColumn>

        <StackColumn>
          <FooterTitle text={'Title '} />
          <FooterLink text={'Link 1'} />
          <FooterLink text={'Link 2'} />
          <FooterLink text={'Link 3'} />
          <FooterLink text={'Link 4'} />
        </StackColumn>
        <StackColumn>
          <FooterTitle text={'our company'} />
          <FooterLink text={'Link 1'} />
          <FooterLink text={'Link 2'} />
          <FooterLink text={'Link 3'} />
        </StackColumn>

        <StackColumn>
          <FooterTitle text={'Medicine'} />
          <Stack direction='row' width='70px' maxWidth='100%' justifyContent='space-between'>
            <Link
              href='#'
              variant='body2'
              sx={{
                color: '#414141',
                '&:hover': {
                  color: '#1c2859',
                },
              }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href='#'
              variant='body2'
              sx={{
                color: '#414141',
                '&:hover': {
                  color: '#1c2859',
                },
              }}
            >
              <FacebookIcon />
            </Link>
          </Stack>
          <Typography variant='caption' component='p'>
            &copy; {new Date().getFullYear()}
          </Typography>
        </StackColumn>
      </BoxRow>
    </Container>
  );
};

export default Footer;
