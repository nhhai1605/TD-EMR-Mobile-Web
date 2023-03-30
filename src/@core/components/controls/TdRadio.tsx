import { FormControlLabel, Radio, RadioProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface TdRadioProps extends RadioProps {
  size: 'small' | 'medium';
  labelI18nKey?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
//make value default
const defaultProps = {
  size: 'small',
};

export const TdRadio = (props: TdRadioProps & typeof defaultProps) => {
  const { label, labelI18nKey, value } = props;
  const { t } = useTranslation();
  return (
    <>
      {label && <FormControlLabel value={value} control={<Radio {...props} />} label={label ? label : t(labelI18nKey)} />}
      {!label && <Radio value={value} {...{ inputProps: { 'aria-label': label ? label : t(labelI18nKey) } }} {...props} />}
    </>
  );
};
TdRadio.defaultProps = defaultProps;
