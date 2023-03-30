import { TextField, TextFieldProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import _debounce from 'lodash/debounce';
import { useMemo } from 'react';

type TdNumericInputProps = TextFieldProps & {
  labelI18nKey?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  shrink: boolean;
  name?: string;
  isSelectWhenFocus?: boolean;
  /**
   * The onTextChange function delays the processing of the
   * keyup event until the user
   * has stopped typing for a predetermined amount of time.
   */
  onTextChange?: (event: any) => void;
  debounceTimeSetting?: number;
  moveToNextEleAfterEnter?: boolean;
};

const defaultProps = {
  shrink: true,
  maxLength: 4000,
  min: 0,
  max: 999999,
  debounceTimeSetting: 500,
};

export const TdNumericInput = (props: TdNumericInputProps & typeof defaultProps) => {
  const {
    label,
    labelI18nKey,
    maxLength,
    name,
    min,
    max,
    shrink,
    InputLabelProps,
    inputProps,
    isSelectWhenFocus,
    debounceTimeSetting,
    onChange,
    onKeyDown,
    moveToNextEleAfterEnter,
    ...remainProps
  } = props;
  const { t } = useTranslation();
  const inputLabelPropsCustom = shrink ? { shrink: true, ...InputLabelProps } : InputLabelProps;

  const textChangeDebounce = useMemo(() => {
    return _debounce((keyword) => {
      props.onTextChange(keyword);
    }, debounceTimeSetting);
  }, [_debounce]);

  const _onTextChange = (event) => {
    if (onChange) {
      onChange(event);
    }
    if (props.onTextChange) {
      textChangeDebounce(event.target.value);
    }
  };

  return (
    <TextField
      name={name}
      label={label ? label : t(labelI18nKey)}
      {...remainProps}
      type='number'
      InputLabelProps={inputLabelPropsCustom}
      inputProps={{
        maxLength: maxLength,
        inputMode: 'numeric',
        pattern: '[0-9]*',
        min: min,
        max: max,
        ...inputProps,
      }}
      onChange={_onTextChange}
      onFocus={(event) => {
        if (isSelectWhenFocus) {
          event.target.select();
        }
      }}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        if (moveToNextEleAfterEnter && e.keyCode === 13) {
          const inputs: any = document.querySelectorAll(`textarea,input:not([class*="Mui-disabled"])[class^=MuiInputBase-input]`);
          const index = Array.from(inputs).indexOf(e.target);
          const nextElement = inputs[index + 1];
          nextElement?.focus();
          nextElement?.select();
        }
      }}
    ></TextField>
  );
};
TdNumericInput.defaultProps = defaultProps;
