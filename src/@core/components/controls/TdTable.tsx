import {
  Checkbox,
  Collapse,
  IconButton,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { groupAndMerge, isNumber } from '@core/utils/appHelper';
import { Add, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import FlexBox from '../FlexBox';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export interface TdTableColumn<T> {
  headerName: string;
  field?: string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number;
  align?: 'left' | 'right' | 'inherit' | 'center' | 'justify';
  type?: string;
  rowId?: boolean;
  hide?: boolean;
  renderCell?: (row: T, index?:number) => ReactNode;
}

type FuncPredicate<T> = (item: T) => boolean;

interface TdTableProps<T> {
  tbType: 'normal' | 'groupBy' | 'masterDetailSameParentHeader' | 'masterDetailDiffParentHeader';
  labelI18nKey?: string;
  data: T[];
  columns: TdTableColumn<T>[];
  sxBody?: SxProps;
  sxTable?: SxProps;
  size: 'small' | 'medium';
  pageSize: number;
  maxHeight?: number;
  isPagination: boolean;
  captionI18nKey?: string;
  showCheckbox?: boolean;
  sortable?: boolean;
  groupName?: string;
  masterDetailColumns?: TdTableColumn<T>[];
  masterDetailObjectName?: string;
  onGroupRemove?: (group) => void;
  rowId: string;
  expandGroup?: boolean;
  ruleForExpandRow?: FuncPredicate<T>;
  onDoubleClick?: (row: any) => void
}
//make value default
const defaultProps = {
  size: 'small',
  pageSize: 50,
  isPagination: true,
  masterDetailColumns: [],
};

type Order = 'asc' | 'desc';

export const TdTable = <T,>(props: TdTableProps<T> & typeof defaultProps) => {
  const {
    tbType,
    data,
    size,
    columns,
    maxHeight,
    sxTable,
    pageSize,
    captionI18nKey,
    showCheckbox,
    isPagination,
    groupName,
    onGroupRemove,
    masterDetailColumns,
    masterDetailObjectName,
    rowId,
    expandGroup,
    ruleForExpandRow,
    onDoubleClick,
  } = props;
  const [pageIndex, setPageIndex] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [sources, setSources] = React.useState<any>([]);
  const [expanded, setExpanded] = React.useState({});

  // Clear all expand id when new source apply
  //Tạm đóng.
  // useEffect(() => {
  //   setExpanded({});
  // }, [sources]);

  // const rowId = columns.filter(o => o.rowId == true)[0]?.field;
  const [order] = React.useState<Order>('asc');

  if (!rowId) throw new Error(`RowId cannot found`);

  const colFakeCount = (masterDetailColumns.length > 0 ? 1 : 0) + (columns.some((p) => p.field == 'actions') ? 1 : 0);

  const _masterDetailColumns = masterDetailColumns.filter((column) => column.hide != true);
  const _columns = columns.filter((column) => column.hide != true);

  const [orderBy] = React.useState(rowId);

  useEffect(() => {
    if (tbType == 'groupBy' && groupName) {
      const groups = groupAndMerge(data, groupName);
      setSources(groups);
    } else {
      setSources(data);
    }
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPageIndex(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPageIndex(0);
  };
  const { t } = useTranslation();

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const rowClick = (event: React.MouseEvent<unknown>, name: string) => {
    if(tbType == 'groupBy') {
      setSelected([name])
      return;
    }

    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };
  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n[rowId]);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const descendingComparator = <T,>(a: T, b: T, orderBy: string) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  const getComparator = (order: Order, orderBy: string) => {
    return order === 'desc'
      ? (a: T, b: T) => descendingComparator(a, b, orderBy)
      : (a: T, b: T) => -descendingComparator(a, b, orderBy);
  };
  const stableSort = <T,>(array: readonly T[], comparator: (a: T, b: T) => number) => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  // const createSortHandler =
  //     (property: string) => (event: React.MouseEvent<unknown>) => {
  //         handleRequestSort(event, property);
  //     };
  // const handleRequestSort = (
  //     event: React.MouseEvent<unknown>,
  //     property: string,
  // ) => {
  //     const isAsc = orderBy === property && order === 'asc';
  //     setOrder(isAsc ? 'desc' : 'asc');
  //     setOrderBy(property);
  // };

  const handleExpandClick = (value) => {
    setExpanded((expanded) => {
      return {
        ...expanded,
        [value]: expanded[value] ? false : true,
      };
    });
  };

  const renderMasterDetail = (item, rowKey) => {
    if (ruleForExpandRow?.(item) && expanded[item[rowId]] == undefined) {
      handleExpandClick(item[rowId]);
    }

    const jsxElements = [
      <TableRow
        sx={{ backgroundColor: _masterDetailColumns.length > 0 ? '#f8f8f8' : '#fff' }}
        key={`${rowId}_row_${rowKey}`}
        onClick={(event) => rowClick(event, item[rowId])}
        role='checkbox'
      >
        {item[masterDetailObjectName] && item[masterDetailObjectName].length > 0 && (
          <TableCell
            sx={{
              width: '50px !important',
            }}
          >
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => {
                handleExpandClick(item[rowId]);
              }}
            >
              {' '}
              {expanded[item[rowId]] ? <RemoveIcon fontSize='small' /> : <Add fontSize='small' />}
            </IconButton>
          </TableCell>
        )}
        {item[masterDetailObjectName] == undefined ||
          (item[masterDetailObjectName].length == 0 && (
            <TableCell
              sx={{
                width: '50px !important',
              }}
            >
              {/* fake */}
              <IconButton size='small' sx={{ visibility: 'hidden' }} />
            </TableCell>
          ))}
        {_columns.map(({ renderCell: Element, ...col }: TdTableColumn<T>, colKey) => (
          <TableCell key={`${rowId}_rowCol_${colKey}`} align={col.align}>
            {Element && Element(item)}
            {!Element && item[col.field]}
          </TableCell>
        ))}
      </TableRow>,
    ];
    if (expanded[item[rowId]] && tbType == 'masterDetailDiffParentHeader') {
      jsxElements.push(
        <TableRow sx={!expanded[item[rowId]] ? { display: 'none' } : {}} key={`${rowId}_row_2${rowKey}`}>
          <TableCell sx={{ padding: '12px 36px !important' }} colSpan={_columns.length + colFakeCount}>
            <Collapse in={expanded[item[rowId]]} timeout='auto' unmountOnExit>
              <Table sx={{ border: '1px solid rgb(224, 224, 224)  !important', ...sxTable }} size={size}>
                <TableHead>
                  <TableRow>
                    {_masterDetailColumns.map((col, colKey) => (
                      <TableCell
                        key={`${rowId}_col_${colKey}`}
                        align={col.align}
                        style={{
                          minWidth: col.minWidth > 0 ? col.minWidth : 'inherit',
                          maxWidth: col.maxWidth > 0 ? col.maxWidth : 'inherit',
                        }}
                      >
                        {col.headerName}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item[masterDetailObjectName] &&
                    item[masterDetailObjectName].length > 0 &&
                    item[masterDetailObjectName].map((childRow, childRowKey) => {
                      return (
                        <TableRow key={`${rowId}_row_${childRowKey}`}>
                          {_masterDetailColumns.length > 0 && (
                            <TableCell
                              sx={{
                                width: '50px !important',
                              }}
                            >
                              <IconButton size='small' sx={{ visibility: 'hidden' }} />
                            </TableCell>
                          )}
                          {_masterDetailColumns.map(
                            ({ renderCell: childElement, ...childCol }: TdTableColumn<T>, childColKey) => (
                              <TableCell key={`${rowId}_rowCol_${childColKey}`} align={childCol.align}>
                                {childElement && childElement(childRow)}
                                {!childElement && childRow[childCol.field]}
                              </TableCell>
                            )
                          )}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      );
    } else if (expanded[item[rowId]] && tbType == 'masterDetailSameParentHeader') {
      item[masterDetailObjectName]?.map((childRow, childRowKey) => {
        jsxElements.push(
          <TableRow 
            key={`${rowId}_rowchild_3${childRowKey}`} 
            selected={isSelected(childRow[rowId])}
            onClick={(event) => rowClick(event, childRow[rowId])}
            onDoubleClick={() => onDoubleClick?.(childRow)} 
            hover
            sx={{"&.Mui-selected": onDoubleClick && {backgroundColor: '#deeaff!important'}}}
          >
            {renderSameParentHeader(item, childRow)}
          </TableRow>);
      });
    }
    return jsxElements;
  };

  const renderSameParentHeader = (item, childRow) => {
    const jsxElements = [
      <TableCell
        sx={{
          width: '50px !important',
        }}
        key={`${rowId}_rowCol_Hidden`}
      >
        <IconButton size='small'>
          <RemoveIcon fontSize='small' sx={{ visibility: 'hidden' }} />
        </IconButton>
      </TableCell>,
    ];
    if (item[masterDetailObjectName] && item[masterDetailObjectName].length > 0) {
      _masterDetailColumns.map(({ renderCell: childElement, ...childCol }: TdTableColumn<T>, childColKey) =>
        jsxElements.push(
          <TableCell key={`${rowId}_rowCol_${childColKey}`} align={childCol.align}>
            {childElement && childElement(childRow)}
            {!childElement &&
              (childCol.type == 'number' && isNumber(childRow[childCol.field])
                ? Math.floor(childRow[childCol.field]).toFixed(2)
                : childRow[childCol.field])}
          </TableCell>
        )
      );
    } else {
      jsxElements.push(
        <TableCell
          key={`${rowId}_rowCol_colSpan_${_masterDetailColumns.length + colFakeCount - 1}`}
          colSpan={_masterDetailColumns.length + colFakeCount - 1}
        ></TableCell>
      );
    }
    return jsxElements;
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{ maxHeight: maxHeight ? maxHeight : 'inherit' }}>
        <Table
          sx={{ border: '1px solid rgb(224, 224, 224)  !important', ...sxTable }}
          stickyHeader
          aria-label='sticky table'
          size={size}
        >
          {captionI18nKey && <caption>{t(captionI18nKey)}</caption>}
          <TableHead>
            <TableRow>
              {showCheckbox && (
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='primary'
                    indeterminate={selected.length > 0 && selected.length < sources.length}
                    checked={sources.length > 0 && selected.length === sources.length}
                    onChange={onSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
              )}
              {_masterDetailColumns.length > 0 && sources && sources.length > 0 && (
                <TableCell
                  sx={{
                    width: '50px !important',
                  }}
                ></TableCell>
              )}

              {(tbType == 'masterDetailSameParentHeader' ? _masterDetailColumns : _columns).map((col, colKey) => (
                <TableCell
                  key={`${rowId}_col_${colKey}`}
                  align={col.align}
                  style={{
                    minWidth: col.minWidth ? col.minWidth : 'inherit',
                    maxWidth: col.maxWidth ? col.maxWidth : 'inherit',
                    ...tbType == 'groupBy' && {paddingLeft: '12px'}
                  }}
                  width={`${col.width}px`}
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {_masterDetailColumns.length > 0 &&
              sources.map((item, rowKey) => {
                return [renderMasterDetail(item, rowKey)];
              })}
            {(_masterDetailColumns.length > 0 && !sources || sources.length == 0) && (
              <TableRow>
                <TableCell
                  sx={{ height: '60px', background: '#f8f9fa', textAlign: 'center' }}
                  colSpan={_columns.length + colFakeCount}
                >
                  {t('common.noRows')}
                </TableCell>
              </TableRow>
            )}
            {_masterDetailColumns.length == 0 &&
              groupName &&
              sources.map((item, routeIndex) => {
                expandGroup && !expanded?.[item.key] && handleExpandClick(item.key)
                return (
                  <TableRow key={`${rowId}_group_${routeIndex}`}>
                    <TableCell colSpan={_columns.length} sx={{padding: 0}}>
                      <FlexBox alignItems='center'>
                        <IconButton aria-label='expand row' size='small' onClick={() => handleExpandClick(item.key)}>
                          {' '}
                          {expanded[item.key] ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />}
                        </IconButton>
                        <b>{item.key}</b>
                        {onGroupRemove && (
                          <IconButton aria-label='expand row' size='small' onClick={() => onGroupRemove(item)}>
                            {' '}
                            <DeleteOutlineIcon fontSize='small' />
                          </IconButton>
                        )}
                      </FlexBox>
                      <Collapse in={expanded[item.key]} timeout='auto' unmountOnExit>
                        <Table sx={{ border: '1px solid rgb(224, 224, 224)  !important', ...sxTable }} size={size}>
                          <TableBody>
                            {item.rows.map((row, rowKey) => {
                              const isItemSelected = isSelected(row[rowId]);
                              return (
                                <TableRow 
                                  key={`${rowId}_row_${rowKey}`} 
                                  selected={isItemSelected} 
                                  onClick={(event) => rowClick(event, row[rowId])}
                                  onDoubleClick={() => onDoubleClick?.(row)} 
                                  hover
                                  sx={{"&.Mui-selected": onDoubleClick && {backgroundColor: '#deeaff!important'}}}
                                >
                                  {_columns.map(({ renderCell: Element, ...col }: TdTableColumn<T>, colKey) => (
                                    <TableCell key={`${rowId}_rowCol_${colKey}`} align={col.align} sx={{maxWidth: col.width, minWidth: col.width}}>
                                      {Element && Element(row)}
                                      {!Element && row[col.field]}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                );
              })}
            {_masterDetailColumns.length == 0 &&
              !groupName &&
              stableSort(sources, getComparator(order, orderBy)).map((row: T, rowKey) => {
                const isItemSelected = isSelected(row[rowId]);
                const labelId = `enhanced-table-checkbox-${rowKey}`;
                return (
                  <TableRow
                    hover
                    key={`${rowId}_row_${rowKey}`}
                    //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={(event) => rowClick(event, row[rowId])}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    selected={isItemSelected}
                  >
                    {showCheckbox && (
                      <TableCell padding='checkbox'>
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                    )}
                    {_columns.map(({ renderCell: Element, ...col }: TdTableColumn<T>, colKey) => (
                      <TableCell key={`${rowId}_rowCol_${colKey}`} align={col.align}>
                        {Element && Element(row)}
                        {!Element && row[col.field]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {isPagination && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={pageIndex}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};
TdTable.defaultProps = defaultProps;
