import { SwitchProps, Switch, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TdSwitchProps extends SwitchProps {
  size: 'small' | 'medium';
  labelI18nKey?: string;
  label?: string;
}
//make value default
const defaultProps = {
  size: 'medium',
};

export const TdSwitch = (props: TdSwitchProps & typeof defaultProps) => {
  const { label, labelI18nKey } = props;
  const { t } = useTranslation();

  return (
    <>
      {label && <FormControlLabel control={<Switch {...props} />} label={label ? label : t(labelI18nKey)} />}
      {!label && <Switch {...{ inputProps: { 'aria-label': label ? label : t(labelI18nKey) } }} {...props} />}
    </>
  );
};
TdSwitch.defaultProps = defaultProps;
