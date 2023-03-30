import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlexBox from "./FlexBox";
export const FooterAction = styled(Toolbar)(() => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 50,
    right: 0,
    display: 'flex',
    gap: '10px',
    background: '#f3f4f9',
    justifyContent: 'flex-end',
    minHeight: '66px !important',
    boxShadow: '0 4px 5px 0 rgb(0 0 0 / 20%), 0 6px 1px 0 rgb(0 0 0 / 19%)'
}));


export const FooterDialogAction = styled(FlexBox)(() => ({
    position: "absolute",
    bottom: 0,
    gap: "10px",
    right: 0,
    width: '100%',
    justifyContent: "flex-end",
    background: '#ffffff',
    padding: '10px 20px',
    zIndex: 4,
    borderTop: '1px solid #e6e6e6'
}));
