import { Checkbox, CheckboxProps, FormControlLabel, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TdCheckboxIconProps extends CheckboxProps {
  labelI18nKey?: string;
  label?: string;
  // labelPlacement: "end" | "start" | "top" | "bottom"
}
//make value default
const defaultProps = {
  // labelPlacement: "end",
};

export const TdCheckboxIcon = (props: TdCheckboxIconProps & typeof defaultProps) => {
  const { label, labelI18nKey } = props;
  const { t } = useTranslation();

  return (
    <>
      {label && <FormControlLabel control={<Checkbox {...props} />} label={<Typography fontWeight="600" variant='body2'>{label ? label : t(labelI18nKey)}</Typography>} />}
      {!label && <Checkbox {...{ inputProps: { 'aria-label': label ? label : t(labelI18nKey) } }} {...props} />}
    </>
  );
};
TdCheckboxIcon.defaultProps = defaultProps;
