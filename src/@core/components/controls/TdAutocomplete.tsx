import { Autocomplete, AutocompleteInputChangeReason, AutocompleteProps, Paper, TextField } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _debounce from 'lodash/debounce';
import internalApiService from '@core/services/base/internalApiService';

export type TdAutocompleteProps<T> = AutocompleteProps<T, boolean, boolean, boolean> & {
  options: any;
  keyValue: string;
  textValue: string;
  labelI18nKey?: string;
  error?: boolean;
  helperText?: JSX.Element | string;
  required?: boolean;
  placeholderI18nKey?: string;
  size: 'medium' | 'small';
  margin: 'none' | 'normal' | 'dense';
  variant: 'filled' | 'outlined' | 'standard';
  name?: string;
  label?: string;
  width?: number;
  onBlur?: (event: any) => void;
  renderInput: (event: any) => ReactNode;
  onKeyDown?: (event: any) => void;
  inputRef?: any;

  onChange?: (event: any, newValue: T) => void;
  /**
   * The onTextChange function delays the processing of the
   * keyup event until the user
   * has stopped typing for a predetermined amount of time.
   */
  onTextChange?: (event: any) => void;
  debounceTimeSetting?: number;
  /**
   * If `hasValue`, the component will be get data itself
   */
  requestUrl?: string;
  getDataSource?: (dataSources) => void;
  isFilterServerSide: boolean;
  requestPayload?: any;
  publicFuncRef?: any;
  clearDataSourceTrigger?: number;

  inputValue?: string;
  onInputChange?: (event: React.SyntheticEvent<Element, Event>, value: string, reason: AutocompleteInputChangeReason) => void;
  moveToNextEleAfterEnter?: boolean;
};

//make value default
const defaultProps = {
  keyValue: 'Id',
  textValue: 'Text',
  renderInput: undefined,
  error: false,
  helperText: undefined,
  require: true,
  debounceTimeSetting: 1000,
  size: 'medium',
  margin: 'normal',
  variant: 'outlined',
  fullWidth: true,
  isFilterServerSide: false,
  options: undefined,
};

export const TdAutocomplete = <T,>(props: TdAutocompleteProps<T> & typeof defaultProps) => {
  const {
    options,
    labelI18nKey,
    textValue,
    sx,
    defaultValue,
    keyValue,
    value,
    onKeyDown,
    getOptionLabel,
    placeholderI18nKey,
    size,
    renderOption,
    error,
    helperText,
    required,
    debounceTimeSetting,
    variant,
    fullWidth,
    width,
    name,
    label,
    inputRef,
    disabled,
    margin,
    freeSolo,
    filterOptions,
    requestUrl,
    publicFuncRef,
    getDataSource,
    isFilterServerSide,
    requestPayload,
    inputValue,
    onInputChange,
    isOptionEqualToValue,
    disableClearable,
    moveToNextEleAfterEnter,
    onFocus,
    onClose,
    clearDataSourceTrigger,
  } = props;
  const { t } = useTranslation();

  const [dataSources, setDataSources] = useState<any>([]);
  const [_requestPayload, setRequestPayload] = useState(requestPayload);

  const fullWidthCalc = width ? false : fullWidth;

  useEffect(() => {
    if (!isFilterServerSide && requestUrl) {
      getData();
    }
  }, []);
  
  useEffect(() => {
    setDataSources([]);
  }, [clearDataSourceTrigger]);

  useEffect(() => {
    if (options) {
      setDataSources(options);
    }
  }, [options]);

  useEffect(() => {
    if (publicFuncRef) {
      publicFuncRef.current = {
        reload: getData,
      };
    }
  }, []);

  useEffect(() => {
    if (getDataSource) {
      getDataSource(dataSources);
    }
  }, [dataSources]);

  useEffect(() => {
    setRequestPayload(requestPayload);
  }, [requestPayload]);

  const getData = async () => {
    const response: any = await internalApiService.postAsync(requestUrl, _requestPayload, false);
    if (response) {
      const data = response.data ?? response;
      setDataSources(data);
    } else {
      setDataSources([]);
    }
  };

  // const textChangeDebounce = useMemo(() => {
  //   return _debounce((keyword) => {
  //     if (props.onTextChange) {
  //       props.onTextChange(keyword);
  //     }
  //     if (_requestPayload && isFilterServerSide) {
  //       _requestPayload[textValue] = keyword;
  //       getData();
  //       setRequestPayload({ ..._requestPayload });
  //     }
  //   }, debounceTimeSetting);
  // }, [_debounce]);



  const textChangeDebounce = _debounce((keyword) => {
    if (props.onTextChange) {
      props.onTextChange(keyword);
    }
    if (_requestPayload && isFilterServerSide) {
      _requestPayload[textValue] = keyword;
      getData();
      setRequestPayload({ ..._requestPayload });
    }
  }, debounceTimeSetting);

  const onTextChange = (event) => {
    textChangeDebounce(event.target.value);
  };

  const onChange = (event, newValue: T) => {
    if (props.onChange) {
      props.onChange(event, newValue);
    }
  };

  const onBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  const getOptionLabelDefault = (option: string | T) => {
    if (typeof option === 'string') {
      return option;
    }
    return option && option[textValue] ? option[textValue] : '';
  };

  const renderOptionDefault = (props, option: T) => {
    return (
      <li key={`${labelI18nKey}_${option[keyValue]}`} {...props}>
        {option && option[textValue] ? option[textValue] : ''}
      </li>
    );
  };

  return (
    <Autocomplete
      onChange={(event, newValue: T) => {
        onChange(event, newValue);
      }}
      getOptionLabel={(option: string | T) => (getOptionLabel ? getOptionLabel(option) : getOptionLabelDefault(option))}
      renderOption={(props, option: T) =>
        renderOption ? renderOption(props, option, undefined) : renderOptionDefault(props, option)
      }
      onBlur={onBlur}
      isOptionEqualToValue={isOptionEqualToValue ? isOptionEqualToValue : (option, value) => option[keyValue] === value[keyValue]}
      disableClearable={disableClearable}
      options={dataSources}
      freeSolo={freeSolo}
      fullWidth={fullWidthCalc}
      disabled={disabled}
      sx={{
        width: width,
        ...sx,
      }}
      size={size}
      defaultValue={defaultValue}
      value={value}
      inputValue={inputValue}
      onInputChange={onInputChange}
      title={t(labelI18nKey)}
      filterOptions={filterOptions}
      PaperComponent={(props) => <Paper elevation={8} {...props} />}
      onFocus={onFocus}
      onClose={onClose}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ width: '100%' }}
          inputRef={inputRef}
          error={error}
          variant={variant}
          margin={margin}
          helperText={helperText}
          name={name ?? keyValue}
          onChange={onTextChange}
          onKeyDown={(e) => {
            onKeyDown?.(e);
            if (moveToNextEleAfterEnter && e.keyCode === 13) {
              const inputs: any = document.querySelectorAll(
                `textarea,input:not([class*="Mui-disabled"])[class^=MuiInputBase-input]`
              );
              const index = Array.from(inputs).indexOf(e.target);
              const nextElement = inputs[index + 1];
              nextElement?.focus();
              nextElement?.select();
            }
          }}
          required={required}
          placeholder={t(placeholderI18nKey ?? labelI18nKey)}
          label={labelI18nKey ? t(labelI18nKey) : label}
          inputProps={{ ...params.inputProps, maxLength: 3999 }}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};
TdAutocomplete.defaultProps = defaultProps;
