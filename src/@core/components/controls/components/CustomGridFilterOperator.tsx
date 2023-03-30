import { parseNumber } from "@core/utils/appHelper";
import { Sync } from "@mui/icons-material";
import { TextFieldProps, Box } from "@mui/material";
import { GridFilterInputValueProps, GridFilterOperator, GridFilterItem } from "@mui/x-data-grid";
import React from "react";
import { TdNumericInput } from "../TdNumericInput";
import { TdSelect } from "../TdSelect";

const SUBMIT_FILTER_STROKE_TIME = 500;

function InputNumberInterval(props: GridFilterInputValueProps) {
  const { item, applyValue, focusElementRef = null } = props;

  const filterTimeout = React.useRef<any>();
  const [filterValueState, setFilterValueState] = React.useState<[string, string]>(
    item.value ?? [undefined,undefined],
  );
  const [applying, setIsApplying] = React.useState(false);

  React.useEffect(() => {
    return () => {
      clearTimeout(filterTimeout.current);
    };
  }, []);

  React.useEffect(() => {
    const itemValue = item.value ?? [undefined, undefined];
    setFilterValueState(itemValue);
  }, [item.value]);

  const updateFilterValue = (lowerBound: string, upperBound: string) => {
    clearTimeout(filterTimeout.current);
    setFilterValueState([lowerBound, upperBound]);

    setIsApplying(true);
    filterTimeout.current = setTimeout(() => {
      setIsApplying(false);
      applyValue({ ...item, value: [lowerBound, upperBound] });
    }, SUBMIT_FILTER_STROKE_TIME);
  };

  const handleUpperFilterChange: TextFieldProps['onChange'] = (event) => {
    const newUpperBound = event.target.value;
    updateFilterValue(filterValueState[0], newUpperBound);
  };
  const handleLowerFilterChange: TextFieldProps['onChange'] = (event) => {
    const newLowerBound = event.target.value;
    updateFilterValue(newLowerBound, filterValueState[1]);
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'end',
        height: 48,
        pl: '20px',
      }}
    >
      <TdNumericInput
        name="lower-bound-input"
        placeholder="From"
        label="Từ"
        variant="standard"
        value={parseNumber(filterValueState[0])}
        onChange={handleLowerFilterChange}
        inputRef={focusElementRef}
        sx={{ mr: 2 }}
        isSelectWhenFocus
      />
      <TdNumericInput
        name="upper-bound-input"
        placeholder="To"
        label="Đến"
        variant="standard"
        value={parseNumber(filterValueState[1])}
        onChange={handleUpperFilterChange}
        isSelectWhenFocus
        InputProps={applying ? { endAdornment: <Sync /> } : {}}
      />
    </Box>
  );
}

export const NumberBetweenOperators: GridFilterOperator[] = [
  {
    label: 'Nằm giữa',
    value: 'between',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
      if (!Array.isArray(filterItem.value) || filterItem.value.length !== 2) {
        return null;
      }
      if (filterItem.value[0] == null || filterItem.value[1] == null) {
        return null;
      }

      return ({ value }) => {
        return (
          value !== null &&
          filterItem.value[0] <= value &&
          value <= filterItem.value[1]
        );
      };
    },
    InputComponent: InputNumberInterval,
  },
];

function GenderInputValue(props: GridFilterInputValueProps) {
  const { item, applyValue } = props;

  return (
    <TdSelect
      size='small'
      data={[{id:'Nam', value: 'Nam'},{id:'Nữ', value: 'Nữ'}]}
      width={1}
      sx={{mt: 1,ml: 1}}
      keyValue={'id'}
      textValue={'value'}
      value={item.value}
      onChange={(e)=>applyValue({...item, value: e.target.value})}
    />
  );
}

export const GenderOperators: GridFilterOperator[] = [
  {
    label: 'là',
    value: 'is',
    getApplyFilterFn: (filterItem: GridFilterItem) => {
      if (
        !filterItem.columnField ||
        !filterItem.value ||
        !filterItem.operatorValue
      ) {
        return null;
      }
      
      return (params) => {
        return (filterItem.value?.trim())?.includes(params.value?.trim())
      };
    },
    InputComponent: GenderInputValue,
    InputComponentProps: { type: 'string' }
  },
];