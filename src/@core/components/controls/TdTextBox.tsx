import { TextField, TextFieldProps } from '@mui/material';
import React, { useMemo } from 'react';
import { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import _debounce from 'lodash/debounce';

export type TdTextBoxProps = TextFieldProps & {
  labelI18nKey?: string;
  name?: string;
  shrink?: boolean;
  onChange?: (e: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>) => void;
  isSelectWhenFocus?: boolean;
  /**
   * The onTextChange function delays the processing of the
   * keyup event until the user
   * has stopped typing for a predetermined amount of time.
   */
  onTextChange?: (event: any) => void;
  debounceTimeSetting?: number;
  textColor?: string;
  moveToNextEleAfterEnter?: boolean;
};

export const TdTextBox = React.forwardRef<TextFieldProps, TdTextBoxProps>(({ shrink = true, ...props }: TdTextBoxProps, refs) => {
  const {
    label,
    labelI18nKey,
    name,
    InputLabelProps,
    inputProps,
    isSelectWhenFocus,
    debounceTimeSetting,
    onChange,
    textColor,
    sx,
    onKeyDown,
    moveToNextEleAfterEnter,
    ...remainProps
  } = props;
  const { t } = useTranslation();

  const inputLabelPropsCustom = shrink ? { shrink: true, ...InputLabelProps } : InputLabelProps;
  const inputPropsDefault = {
    maxLength: 4000,
    autocomplete: 'new-password',
    ...inputProps,
  };

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
      inputRef={refs}
      label={label ? label : t(labelI18nKey)}
      {...remainProps}
      name={name}
      InputLabelProps={inputLabelPropsCustom}
      inputProps={inputPropsDefault}
      sx={{ input: { color: textColor }, ...sx }}
      onFocus={(event) => {
        if (isSelectWhenFocus) {
          event.target.select();
        }
      }}
      onChange={_onTextChange}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        if (moveToNextEleAfterEnter && e.keyCode === 13) {
          const inputs: any = document.querySelectorAll(
            `input, textarea:not([class*="Mui-disabled"])[class^=MuiInputBase-input]`
          );
          const index = Array.from(inputs).indexOf(e.target);
          const nextElement = inputs[index + 1];
          nextElement?.focus();
          nextElement?.select();
        }
      }}
    />
  );
});
