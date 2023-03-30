
  import { Chip } from "@mui/material";
  import { styled } from "@mui/material/styles";
  export const ChipSmallReverse = styled(Chip)(({ }) => ({
    flexDirection: 'row-reverse',
    borderRadius: '7px',
    border: '1px solid #c4c4c4',
    '& .MuiAvatar-root': {
      marginLeft: '-4px',
      marginRight: '0px',
      borderRadius: '5px',
      color: '#13104b',
      padding: '5px 4px',
      height: '22px',
      fontSize: '0.7rem',
    },
    '& .MuiChip-labelSmall': {
      fontWeight: 500,
    },
  }));