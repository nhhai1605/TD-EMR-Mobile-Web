import Box, { BoxProps } from "@mui/material/Box";
import logoSvg from 'assets/images/vt-logo.png';

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;
const Logo = ({  ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <img src={logoSvg} width={200} height={200} alt='' />
    </Box>
  );
};

export default Logo;
