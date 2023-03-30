import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import _debounce from 'lodash/debounce';
import { useMemo } from 'react';

export const TextArea = styled(TextField)(() => ({
  '& textarea': {
    resize: 'both !important',
  },
}));

type TdTextareaProps = TextFieldProps & {
  labelI18nKey?: string;
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

  inputRef?: any;
  moveToNextEleAfterEnter?: boolean;
};

const defaultProps = {
  rows: 2,
  shrink: true,
  debounceTimeSetting: 500,
};

export const TdTextarea = (props: TdTextareaProps & typeof defaultProps) => {
  const {
    label,
    labelI18nKey,
    name,
    shrink,
    InputLabelProps,
    inputProps,
    onChange,
    debounceTimeSetting,
    isSelectWhenFocus,
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
    <TextArea
      multiline
      name={name}
      label={label ? label : t(labelI18nKey)}
      {...remainProps}
      InputLabelProps={inputLabelPropsCustom}
      inputProps={{ maxLength: 4000, ...inputProps }}
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
    ></TextArea>
  );
};
TdTextarea.defaultProps = defaultProps;
