import { Button, ButtonProps } from '@mui/material';
import _debounce from 'lodash/debounce';

interface TdButtonProps extends ButtonProps {
  labelI18nKey?: string;
  onClick?: (event: any) => void;
  debounceTimeSetting?: number;
}

const defaultProps = {
  size: 'small',
  variant: 'contained',
  debounceTimeSetting: 800
};

export const TdButton = (props: TdButtonProps & typeof defaultProps) => {
  const { children, debounceTimeSetting, onClick, ...otherProps } = props;

  const onClickDebounce = _debounce((e) => {
    onClick?.(e);
  }, debounceTimeSetting);

  const _onClick = (event) => {
    onClickDebounce(event);
  };
  return (
    <Button {...otherProps} onClick={_onClick}>
      {children}
    </Button>
  );
};
TdButton.defaultProps = defaultProps;
