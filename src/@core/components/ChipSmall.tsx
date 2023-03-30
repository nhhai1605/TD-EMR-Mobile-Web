import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
export const ChipSmall = styled(Chip)(({ }) => ({
    borderRadius: '7px',
    border: '1px solid #c4c4c4',
    maxWidth: '332px !important',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  
    '& .MuiAvatar-root': {
      marginLeft: '0px',
      borderRadius: '5px',
      color: '#13104b!important',
      padding: '5px 4px',
      height: '22px',
      fontSize: '0.7rem',
    },
  }));
  