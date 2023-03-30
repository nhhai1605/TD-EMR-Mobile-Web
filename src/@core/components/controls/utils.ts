import { GridColumns } from '@mui/x-data-grid';

const generateCssToFreezeColumn = (columns: GridColumns) => {
  const sxProps = {};
  if (columns.some((o) => o.pinnable)) {
    sxProps['& .MuiDataGrid-main'] = {
      //enable scroll of parent
      overflow: 'auto !important',
      // overflowY: 'hidden !important',
    };
    sxProps['& .MuiDataGrid-columnHeaders'] = {
      //remove scroll of children
      overflowX: 'unset !important',
      overflowY: 'unset !important',
    };

    sxProps['& .MuiDataGrid-virtualScroller'] = {
      //remove scroll of children
      overflow: 'unset !important',
    };

    for (const item of columns) {
      sxProps[`& .MuiDataGrid-columnHeaders [data-field="${item.field}"]`] = {
        top: 0,
        zIndex: 102,
        position: 'sticky',
      };
    }

    let totalContentWidth = 0;
    const columnContentHasPinned = columns.filter((o) => o.pinnable);
    for (const item of columnContentHasPinned) {
      const index = columnContentHasPinned.indexOf(item);
      totalContentWidth +=
        index == 0 ? 0 : columns[index - 1].width || columns[index - 1].maxWidth || columns[index - 1].minWidth;

      sxProps[`& .MuiDataGrid-columnHeaders [data-field="${item.field}"]`] = {
        zIndex: 103,
        top: 0
      };

      sxProps[`&  [data-field="${item.field}"]`] = {
        position: 'sticky',
        left: `${totalContentWidth}px`,
        backgroundColor: '#fbfbfb',
        zIndex: 101,
        boxShadow: index == columnContentHasPinned.length - 1 ? 'rgb(0 0 0 / 21%) 2px 0px 4px -2px' : 'unset',
      };
    }
  }
  return sxProps;
};

export { generateCssToFreezeColumn };

// import { GridColumns } from '@mui/x-data-grid';

// const generateCssToFreezeColumn = (columns: GridColumns) => {
//   const sxProps = {};
//   if (columns.some((o) => o.pinnable)) {
//     // const totalWidth = columns.reduce((total, item)=> total + (item.width || item.maxWidth || item.minWidth), 0)
//     // sxProps['& .MuiDataGrid-main'] = {
//     //   //enable scroll of parent
//     //   overflowX: 'auto !important',
//     //   overflowY: 'hidden !important',
//     // };
//     // sxProps['& .MuiDataGrid-columnHeaders'] = {
//     //   //remove scroll of children
//     //   overflowX: 'unset !important',
//     //   overflowY: 'unset !important',
//     // };

//     // sxProps['& .MuiDataGrid-virtualScroller'] = {
//     //   //remove scroll of children
//     //   overflow: 'unset !important',
//     // };

//      sxProps['& .MuiDataGrid-columnHeadersInner, & .MuiDataGrid-virtualScrollerRenderZone'] = {
//       transform: `translate3d(0px, 0px, 0px)!important`,

//     };


    // let totalHeaderWidth = 0;

    // const totalColumnPinedWidth = columns
    //   .filter((o) => o.pinnable)
    //   .reduce((total, item) => total + (item.width || item.minWidth || item.maxWidth), 0);
    // for (const item of columns) {
    //   const index = columns.indexOf(item);
    //   totalHeaderWidth += index == 0 ? 0 : columns[index - 1].width || columns[index - 1].maxWidth || columns[index - 1].minWidth;

    //   if (item.pinnable) {
    //     //header
    //     sxProps[`& .MuiDataGrid-columnHeaders [data-field="${item.field}"]`] = {
    //       position: 'absolute',
    //       left: `${totalHeaderWidth}px`,
    //       backgroundColor: '#fbfbfb',
    //       zIndex: 101,
    //       boxShadow: index == columns.length - 1 ? 'rgb(0 0 0 / 21%) 2px 0px 4px -2px' : 'unset',
    //     };
    //   } else {
    //     sxProps[`& .MuiDataGrid-columnHeaders [data-field="${item.field}"]`] = {
    //       transform: `translate3d(${totalColumnPinedWidth}px, 0px, 0px)`,
    //     };
    //   }
    // }
//     let totalContentWidth = 0;
//     const columnContentHasPinned = columns.filter((o) => o.pinnable);
//     for (const item of columnContentHasPinned) {
//       const index = columnContentHasPinned.indexOf(item);
//       totalContentWidth +=
//         index == 0 ? 0 : columns[index - 1].width || columns[index - 1].maxWidth || columns[index - 1].minWidth;
//       //       const beforeColumnWidth =  item.width || item.maxWidth || item.minWidth;
//       //       index == 0 ? 0 : (columns[index - 1].width || columns[index - 1].maxWidth || columns[index - 1].minWidth +
//       //         item.width || item.maxWidth || item.minWidth);
//       // console.log(beforeColumnWidth)

//       //body

//       sxProps[`&  [data-field="${item.field}"]`] = {
//         position: 'sticky',
//         left: `${totalContentWidth}px`,
//         backgroundColor: '#fbfbfb',
//         zIndex: 101,
//         boxShadow: index == columnContentHasPinned.length - 1 ? 'rgb(0 0 0 / 21%) 2px 0px 4px -2px' : 'unset',
//       };
//     }
//   }
//   return sxProps;
// };

// // function viewportConvert(px = 0, vw = 0, vh = 0){
// //   if(px != 0){
// //       if(vw){

// //           return (100 * px / window.innerWidth);
// //       } else {
// //           return (100 * px / window.innerHeight);
// //       }
// //   } else if(vw != 0 && vh != 0){
// //       const w_h_arr = [];
// //       w_h_arr["width"] = Math.ceil((window.innerWidth * vw / 100));
// //       w_h_arr["height"] = Math.ceil((window.innerHeight * vh / 100));
// //       return w_h_arr;
// //   } else if(vw != 0){
// //       return Math.ceil((window.innerWidth * vw / 100));
// //   } else if(vh != 0){
// //       return Math.ceil((window.innerHeight * vh / 100));
// //   }
// // }

// export { generateCssToFreezeColumn };
export const GRID_DEFAULT_LOCALE_TEXT = {
    // Filter operators text
    filterOperatorContains: 'gồm',
    filterOperatorEquals: 'bằng',
    filterOperatorStartsWith: 'bắt đầu với',
    filterOperatorEndsWith: 'kết thúcvới',
    filterOperatorIs: 'là',
    filterOperatorNot: 'không là',
    filterOperatorAfter: 'đứng sau',
    filterOperatorOnOrAfter: 'trên hoặc đứng sau',
    filterOperatorBefore: 'đứng trước',
    filterOperatorOnOrBefore: 'trên hoặc đứng trước',
    filterOperatorIsEmpty: 'không có dữ liệu',
    filterOperatorIsNotEmpty: 'có dữ liệu',
    filterOperatorIsAnyOf: 'bất kỳ trong',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Hiện các cột',
    columnMenuManageColumns: 'Manage columns',
    columnMenuFilter: 'Lọc dữ liệu',
    columnMenuHideColumn: 'Ẩn cột',
    columnMenuSortAsc: 'Sắp xếp tăng dần',
    columnMenuSortDesc: 'Sắp xếp giảm dần',
}
