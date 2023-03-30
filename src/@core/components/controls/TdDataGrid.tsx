import internalApiService from '@core/services/base/internalApiService';
import { Box, LinearProgress } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { CustomNoRowsOverlay } from './components/CustomNoRowsOverlay';
import { generateCssToFreezeColumn, GRID_DEFAULT_LOCALE_TEXT } from './utils';

type TdDataGridProps = {
  rowId?: string;
  labelI18nKey?: string;
  height?: number | string;
  /**
   * If `hasValue`, the component will be get data itself
   */
  requestUrl?: string;
  requestPayload?: any;
  getDataSource?: (dataSources) => void;
  /**
   * It's help you can trigger some functions of TdDataGrid.
   */
  publicFuncRef?: any;
} & DataGridProps;
//make value default
const defaultProps = {
  rowId: 'id',
  pageSize: 50,
  height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 480 || '350px',
  rowsPerPageOptions: [10, 25, 50, 100],
  density: 'compact',
  rows: undefined,
};

export const TdDataGrid = (props: TdDataGridProps & typeof defaultProps) => {
  const {
    requestUrl,
    rows,
    requestPayload,
    height,
    rowId,
    autoHeight,
    publicFuncRef,
    pageSize,
    getDataSource,
    loading,
    columns,
    components,
    sx,
    ...dataGridProps
  } = props;
  const [dataSources, setDataSources] = useState<any>([]);
  const [_pageSize, setPageSize] = useState<number>(pageSize);
  const [_requestPayload, setRequestPayload] = useState(requestPayload);
  const [isLoading, setIsLoading] = useState(loading);

  //default
  const _columns = columns.map((item) => ({
    disableColumnMenu: true,
    sortable: false,
    filterable: false,
    ...item
  }));

  useEffect(() => {
    if (rows) {
      setDataSources(rows);
    }
  }, [rows]);

  useEffect(() => {
    if (publicFuncRef) {
      publicFuncRef.current = {
        reload: getData
      };
    }
  }, []);

  useEffect(() => {
    if (getDataSource) {
      getDataSource(dataSources);
    }
  }, [dataSources]);

  const getData = async () => {
    setIsLoading(true);
    const response: any = await internalApiService.postAsync(requestUrl, _requestPayload).catch(() => setDataSources([]))
    .finally(() => setIsLoading(false));
    if (response) {
      const data = response.data ?? response;
      setDataSources(data);
    } else {
      setDataSources([]);
    }
  };

  const sxColumnPinProps = generateCssToFreezeColumn(_columns);

  const onPageChange = async (newPageSize) => {
    setPageSize(newPageSize);
    if (_requestPayload?.pageSize) {
      _requestPayload.pageSize = newPageSize;
      setRequestPayload({ ..._requestPayload });
    }
  };

  const getDataWithPayload = async (payload) => {
    setIsLoading(true);
    const response: any = await internalApiService.postAsync(requestUrl, payload).finally(() => setIsLoading(false));
    setRequestPayload(payload);
    if (response) {
      const data = response.data ?? response;
      setDataSources(data);
    } else {
      setDataSources([]);
    }
  };

  useEffect(() => {
    if(requestPayload) {
      setRequestPayload(requestPayload);
      // getData(); Cái này bị Bug, state chưa nhận giá trị mới nhưng vẫn gọi lại
      getDataWithPayload(requestPayload);
    }
  }, [requestPayload])

  return (
    <Box sx={{ height: autoHeight ? 'unset' : height, width: '100%' }}>
      <DataGrid
        {...dataGridProps}
        sx={{
          ...sxColumnPinProps,
          ...sx
        }}
        columns={_columns}
        rows={dataSources}
        pageSize={_pageSize}
        onPageSizeChange={onPageChange}
        components={{
          ...components,
          NoRowsOverlay: CustomNoRowsOverlay,
          LoadingOverlay: LinearProgress,
        }}
        loading={isLoading}
        autoHeight={autoHeight}
        getRowId={(row) => row[rowId]}
        localeText={GRID_DEFAULT_LOCALE_TEXT}
      />
    </Box>
  );
};

TdDataGrid.defaultProps = defaultProps;
