import { Checkbox, CheckboxProps, FormControlLabel, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface TdCheckboxProps extends CheckboxProps {
  size: 'small' | 'medium';
  labelI18nKey?: string;
  label?: string | React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}
//make value default
const defaultProps = {
  size: 'medium',
};

export const TdCheckbox = (props: TdCheckboxProps & typeof defaultProps) => {
  const { label, labelI18nKey, sx, labelPlacement, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <>
      {(label || labelI18nKey) ? (
        <FormControlLabel labelPlacement={labelPlacement} sx={sx} control={<Checkbox {...otherProps} />} label={<Typography variant="body2">{label ? label : t(labelI18nKey)}</Typography>} />
      ) : <Checkbox {...otherProps} sx={sx}  />}
    </>
  );
};
TdCheckbox.defaultProps = defaultProps;
