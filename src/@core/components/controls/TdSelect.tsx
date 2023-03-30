import internalApiService from '@core/services/base/internalApiService';
import { FormControl, FormHelperText, InputLabel, MenuItem,  Select, SelectProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@mui/styles';
// import {makeStyles} from "@mui/styles";
type TdSelectProps = {
  data: any;
  labelI18nKey?: string;
  label?: string;
  keyValue?: string;
  margin?: 'none' | 'dense' | 'normal';
  size?: 'medium' | 'small';
  textValue?: string;
  width?: number;
  helperText?: JSX.Element;
  inputRef?: any;
  /**
   * If `hasValue`, the component will be get data itself
   */
  requestUrl?: string;
  getDataSource?: (dataSources) => void;
  requestPayload?: any;
  publicFuncRef?: any;
  required?: boolean;
  shrink?: boolean;
  placeholder?: string;
  // notched? : boolean;
} & SelectProps;

//make value default
const defaultProps: TdSelectProps = {
  data: undefined,
  keyValue: 'Id',
  textValue: 'Text',
  size: 'medium',
  fullWidth: true,
  notched: true,
  shrink: true,
};

export const TdSelect = (props: TdSelectProps & typeof defaultProps) => {
  const {
    labelI18nKey,
    inputRef,
    size,
    data,
    textValue,
    keyValue,
    margin,
    label,
    width,
    helperText,
    error,
    requestUrl,
    publicFuncRef,
    getDataSource,
    requestPayload,
    fullWidth,
    required,
    shrink,
    notched,
    placeholder,
    sx: sxProps,
    ...selectProps
  } = props;
  const { t } = useTranslation();
  const fullWidthCalc = width ? false : fullWidth;
  const [dataSources, setDataSources] = useState<any>([]);
  const [_requestPayload] = useState(requestPayload);

  useEffect(() => {
    if (requestUrl && requestUrl != '') {
      getData();
    }
  }, [requestUrl]);

  useEffect(() => {
    if (data) {
      setDataSources(data);
    }
  }, [data]);

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
    const response: any = await internalApiService.postAsync(requestUrl, _requestPayload);
    if (response) {
      const data = response.data ?? response;
      setDataSources(data);
    } else {
      setDataSources([]);
    }
  };

  const StyleTypography = withStyles({
    root: {
      color: '#c4c2c2',
    },
  })(Typography);

  return (
    <FormControl margin={margin} size={size} error={error} sx={{ width: width, ...sxProps }} fullWidth={fullWidthCalc}>
      <InputLabel shrink={shrink} required={required} id={`${labelI18nKey}`}>
        {labelI18nKey ? t(`${labelI18nKey}`) : label}
      </InputLabel>
      <Select
        {...selectProps}
        notched={notched}
        inputRef={inputRef}
        labelId={`${labelI18nKey}`}
        label={labelI18nKey ? t(`${labelI18nKey}`) : label}
        displayEmpty
        renderValue={selectProps.value ? undefined : () => <StyleTypography variant='body2'>{placeholder}</StyleTypography>}
      >
        {/* fake for removing the warning from mui. */}
        <MenuItem sx={{ display: 'none' }} key={`${labelI18nKey}+Empty`} value={undefined}></MenuItem>
        <MenuItem sx={{ display: 'none' }} key={`${labelI18nKey}+Empty3`} value={null}></MenuItem>
        <MenuItem sx={{ display: 'none' }} key={`${labelI18nKey}+Empty4`} value={-1}></MenuItem>
        <MenuItem sx={{ display: 'none' }} key={`${labelI18nKey}+Empty5`} value={0}></MenuItem>
        {dataSources &&
          dataSources.map((item, index) => {
            return (
              <MenuItem key={`${labelI18nKey}+${index}`} value={item[keyValue]}>
                <Typography variant='body2'>{item[textValue]}</Typography>
              </MenuItem>
            );
          })}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
TdSelect.defaultProps = defaultProps;
