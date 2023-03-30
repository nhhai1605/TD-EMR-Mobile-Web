import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ItemWrapper = styled(Box)(() => ({
  display: 'flex',
  '& img': { width: '100%' },
}));
const IconWrapper = styled(Box)(() => ({
  display: 'flex',
  height: 20,
  width: 20,
  '& img': {
    width: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

export { ItemWrapper, IconWrapper };
