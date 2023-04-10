import React from "react";
import {Box, Drawer, IconButton, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddManagePatientDrawer = (props) => {
    const {open, onClose} = props;
    
    
    return (
        <Drawer anchor={'right'} sx={{ zIndex: '1300' }} open={open} onClose={onClose}>
            <Box sx={{ width: 500, padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h5'>Thêm bệnh nhân vào danh sách quản lí</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </Box>
        </Drawer>
    )
}
export  default AddManagePatientDrawer;
