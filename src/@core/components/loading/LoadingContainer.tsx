import { Box, CircularProgress } from '@mui/material';
import { styled } from "@mui/material/styles";


const BoxOverlay = styled(Box)`
    width: 100%;
    height: 100%;
    z-index: 2002;
    top: 0px;
    left: 0px;
    opacity: 0.2;
    filter: alpha(opacity=0.2);
`;
const LoadingCustom = styled(CircularProgress)`
    position: absolute;
    top: 45%;
    left: 48%;
    z-index: 2003;
`;


interface LoadingContainerProps {
  width?: number | string,
  height?: number | string,
}

const LoadingContainer = ({ width, height }: LoadingContainerProps) => {
  return (
    <Box sx={{
      width: width ?? '100%',
      height: height ?? '100%',
    }}>
      <BoxOverlay />
      <LoadingCustom />
    </Box >

  )
};

export default LoadingContainer;
