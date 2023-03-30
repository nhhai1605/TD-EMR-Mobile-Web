import { Autocomplete, AutocompleteProps, Checkbox, TextField } from '@mui/material';
import {  ReactNode, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import _debounce from 'lodash/debounce';
import internalApiService from '@core/services/base/internalApiService';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

type TdMultiselectProps<T> = AutocompleteProps<T, boolean, boolean, boolean> & {
  options?: any;
  keyValue: string;
  textValue: string;
  labelI18nKey?: string;
  error?: boolean;
  helperText?: JSX.Element;
  required?: boolean;
  placeholderI18nKey?: string;
  size: 'medium' | 'small';
  margin?: 'none' | 'normal' | 'dense';
  variant?: 'filled' | 'outlined' | 'standard';
  name?: string;
  label?: string;
  onChange?: (event: any, newValue: T) => void;
  onBlur?: (event: any) => void;
  renderInput: (event: any) => ReactNode;
  inputRef?: any;
  width?: number;
  
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
  /**
   *   It's help you can trigger some functions of child's component.
   */
  publicFuncRef?: any;
};
//make value default
const defaultProps:TdMultiselectProps<unknown> = {
  keyValue: 'Id',
  textValue: 'Text',
  renderInput: undefined,
  error: false,
  helperText: undefined,
  required: true,
  size: 'medium',
  margin: 'normal',
  variant: 'outlined',
  multiple: true,
  fullWidth: true,
  isFilterServerSide: false,
  options: undefined,
  debounceTimeSetting: 500
};
export const TdMultiselect = <T,>(props: TdMultiselectProps<T> & typeof defaultProps) => {
  const {
    options,
    labelI18nKey,
    textValue,
    sx,
    keyValue,
    value,
    getOptionLabel,
    placeholderI18nKey,
    size,
    renderOption,
    error,
    helperText,
    required,
    variant,
    fullWidth,
    name,
    label,
    multiple,
    limitTags,
    width,
    requestUrl,
    publicFuncRef,
    getDataSource,
    isFilterServerSide,
    requestPayload,
    debounceTimeSetting,
    inputRef
  } = props;
  const { t } = useTranslation();
  const [dataSources, setDataSources] = useState<any>([]);
  const [_requestPayload, setRequestPayload] = useState(requestPayload);

  const fullWidthCalc = width ? false : fullWidth;

  useEffect(() => {
    if (!isFilterServerSide) {
      getData();
    }
  }, []);

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

  const getData = async () => {
    const response: any = await internalApiService.postAsync(requestUrl, _requestPayload, false);
    if (response) {
      const data = response.data ?? response;
      setDataSources(data);
    } else {
      setDataSources([]);
    }
  };

  const textChangeDebounce = useCallback(
    _debounce((keyword) => {
      if (props.onTextChange) {
        props.onTextChange(keyword);
      }
      if (isFilterServerSide) {
        _requestPayload[textValue] = keyword;
        getData();
        setRequestPayload({ ..._requestPayload });
      }
    }, debounceTimeSetting),
    []
  );

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
    return option ? option[textValue] : '';
  };
  const renderOptionDefault = (props, option: T, { selected }) => {
    return (
      <li key={`${labelI18nKey}_${option[keyValue]}`} {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          style={{ marginRight: 8 }}
          checked={selected}
          // || checkAll
        />
        {option ? option[textValue] : ''}
      </li>
    );
  };
  return (
    <Autocomplete
      onChange={(event, newValue: T) => {
        onChange(event, newValue);
      }}
      limitTags={limitTags}
      disableCloseOnSelect={true}
      getOptionLabel={(option: string | T) => (getOptionLabel ? getOptionLabel(option) : getOptionLabelDefault(option))}
      renderOption={(props, option: T, state) =>
        renderOption ? renderOption(props, option, state) : renderOptionDefault(props, option, state)
      }
      onBlur={onBlur}
      options={dataSources}
      
      fullWidth={fullWidthCalc}
      sx={{
        width: width,
        ...sx,
      }}
      size={size}
      multiple={multiple}
      // defaultValue={defaultValue}
      value={value}
      // PaperComponent={(props) => (
      //     <Paper>
      //         <Paper
      //             sx={{
      //                 backgroundColor: "white",
      //                 height: "50px",
      //                 textOverflow: "ellipsis",
      //                 overflow: "hidden",
      //                 whiteSpace: "nowrap",
      //                 display: "flex",
      //                 alignItems: "center",
      //                 marginLeft: "14px"
      //             }}
      //         >
      //             <Checkbox
      //                 icon={icon}
      //                 checkedIcon={checkedIcon}
      //                 checked={checkAll}
      //                 onChange={checkAllChange}
      //                 id="check-all"
      //                 onMouseDown={(e) => e.preventDefault()}
      //             />
      //             Select All
      //         </Paper>
      //         <Divider />
      //         <Paper elevation={8} {...props} />
      //     </Paper>
      // )}
      title={t(labelI18nKey)}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          inputRef={inputRef}
          sx={{ width: '100%' }}
          variant={variant}
          helperText={helperText}
          name={name}
          onChange={onTextChange}
          required={required}
          placeholder={t(placeholderI18nKey ?? labelI18nKey)}
          label={labelI18nKey ? t(labelI18nKey) : label}
        />
      )}
    />
  );
};
TdMultiselect.defaultProps = defaultProps;
