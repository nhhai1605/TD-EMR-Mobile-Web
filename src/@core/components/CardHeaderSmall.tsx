
import { CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardHeaderSmall = styled(CardHeader)(({ }) => ({
    '& .MuiCardHeader-title': {
        fontSize: '1rem'
    },
    padding: 0
}));