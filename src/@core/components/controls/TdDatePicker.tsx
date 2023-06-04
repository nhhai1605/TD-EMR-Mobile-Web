import { BaseTextFieldProps, SxProps, TextField, TextFieldProps, Theme } from '@mui/material';
import {DatePickerProps, LocalizationProvider} from '@mui/x-date-pickers';
import { useTranslation } from 'react-i18next';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker  } from '@mui/x-date-pickers';

type TdDatePickerProps<TInputDate, TDate> = DatePickerProps<TInputDate, TDate> & BaseTextFieldProps & {
  labelI18nKey?: string;
  label?: string;
  mask?: string;
  views?: any;
  size: 'small' | 'medium';
  sx?: SxProps<Theme>;
  margin?: 'dense' | 'none' | 'normal';
  error?: boolean;
  helperText?: JSX.Element;
  inputRef?: any;
  renderInput?: (props: TextFieldProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  shrink: boolean;
};
//make value default
const defaultProps = {
  //mask: "DD/MM/YYYY",
  mask: '__/__/____',
  format: 'DD/MM/YYYY',
  size: 'small',
  views: ['year', 'month', 'day'],
  renderInput: undefined,
  onChange: (e) => {
    console.log(e);
  },
  shrink: true,
};

export const TdDatePicker = <TInputDate, TDate>(props: TdDatePickerProps<TInputDate, TDate> & typeof defaultProps) => {
  const {
    labelI18nKey,
    label,
    value,
    onChange,
    margin,
    format,
    sx,
    size,
    error,
    helperText,
    renderInput,
    shrink,
    InputLabelProps,
    required,
    ...datePickerProps
  } = props;
  const { t } = useTranslation();
  // const [dateOpen,setDateOpen] = useState(false);

  const styles =
    margin === 'dense'
      ? {
          marginTop: '8px',
          marginBottom: '4px',
        }
      : margin == 'normal'
      ? { marginTop: '16px', marginBottom: '8px' }
      : {};

  const onRenderInputDefault = (props: TextFieldProps) => {
    return (
      <TextField
        {...props}
        fullWidth
        InputLabelProps={{ shrink: shrink, ...InputLabelProps }}
        sx={{
          '& .MuiInputBase-inputSizeSmall': {
            height: '1.7375em !important',
          },
          ...sx,
          ...styles,
        }}
        size={size}
        error={error}
        required={required}
        helperText={helperText}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} >
      <DesktopDatePicker
        {...datePickerProps}
        // open={dateOpen}
        // onClose={() => setDateOpen(false)}
        label={labelI18nKey ? t(labelI18nKey) : label}
        value={value}
        onChange={onChange}
        inputFormat={format}
        renderInput={renderInput || onRenderInputDefault}
        // renderInput={(props) => (
        //     <TextField
        //         onClick={() => setDateOpen(true)}
        //         onKeyDown={e => {e.preventDefault()}}
        //         {...props}
        //         fullWidth
        //         InputLabelProps={{ shrink: shrink, ...InputLabelProps }}
        //         sx={{
        //           '& .MuiInputBase-inputSizeSmall': {
        //             height: '1.7375em !important',
        //           },
        //           ...sx,
        //           ...styles,
        //         }}
        //         size={size}
        //         error={error}
        //         required={required}
        //         helperText={helperText}
        //     />
        // )}
      />
    </LocalizationProvider>
  );
};
TdDatePicker.defaultProps = defaultProps;
