import { Box, BoxProps } from '@mui/material';
import React, { FC } from 'react';

const FlexBox: FC<BoxProps> = React.forwardRef(({ children, ...props }, refs) => (
  <Box ref={refs} display='flex' {...props}>
    {children}
  </Box>
));

export default FlexBox;
