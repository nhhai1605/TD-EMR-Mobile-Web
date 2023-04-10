import { Link } from '@mui/material';
import React from 'react';

const FooterLink = ({ text,link=null ,disabled = false, capitalize=true}) => {
  return (
    <Link
      href={disabled ? null : (link ?? '#')}
      component='a'
      sx={{
        fontSize: '0.9rem',
        fontWeight: '400',
        textDecoration: 'none',
        color: '#414141',
        textTransform: capitalize ? 'capitalize' : 'none',
        '&:hover': {
          color: '#1c2859',
        },
      }}
    >
      {text}
    </Link>
  );
};

export default FooterLink;
