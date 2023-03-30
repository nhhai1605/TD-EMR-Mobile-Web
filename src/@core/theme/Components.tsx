import { Theme } from "@mui/material";

export const createThemeComponents = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(3),
        "&.Mui-expanded:last-of-type": {
          marginBottom: theme.spacing(3),
        },
        "&:before": {
          content: "none",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1, 3, 3),
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
      content: {
        margin: 0,
        flexGrow: 0
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        "&.MuiAppBar-colorDefault": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        color: "inherit",
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        // padding: "16px 24px",
        textTransform: "none" as any,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        
      },
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      }
      // ,
      // text: {
      //   padding: "16px 16px",
      // },
      
    }
  },
  MuiButtonBase: {
    defaultProps: {
      //disableRipple: true, 
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        justifyContent: "flex-end",
        padding: "0 24px 24px 24px",
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: theme.spacing(3),
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        padding: "16px 16px 0 16px",
      },
    },
  },
  // MuiCheckbox: {
  //   defaultProps: {
  //     checkedIcon: <CheckCircle />,
  //     indeterminateIcon: <RemoveCircle />,
  //     icon: <RadioButtonUnchecked />,
  //   },
  // },
  MuiChip: {
    styleOverrides: {
      label: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 24,
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 24,
        "& .MuiTypography-root": {
          fontSize: "1.25rem",
        },
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        border: "none; !important",
      },
    },
  },
  MuiFab: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        lineHeight: "inherit",
        textTransform: "none" as any,
        "&.MuiFab-secondary": {
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        backgroundColor: 'rgb(108 108 108 / 6%)',
        border: '1px solid #ebebeb',
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  MuiInternalClock: {
    styleOverrides: {
      clock: {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiInternalDateTimePickerTabs: {
    styleOverrides: {
      tabs: {
        backgroundColor: theme.palette.background.default,
        "& MuiTabs-indicator": {
          height: 0,
        },
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        height: 12,
      },
    },
  },
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
        "&.Mui-selected": {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        paddingRight: 8,
        paddingLeft: 8,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-inputSizeSmall': {
          fontSize: '0.8125rem'
        },
        '& .MuiInputBase legend': {
          fontSize: '0.85rem'
        },
        '&.Mui-disabled': {
          backgroundColor: '#f3f3f3'
        }
      },
      input: {
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.paper} inset`,
        },
      },
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: {
        backgroundImage: "none",
      },
    },
  },
  MuiRadio: {
    defaultProps: {
      // color: "primary",
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        // borderRadius: "50rem",
        // padding: "10px 16px",
        // maxWidth: "initial !important",
        // minHeight: "initial !important",
        // minWidth: "initial !important",
        textTransform: "none" as any,
        // "&.Mui-selected": {
        //   backgroundColor: theme.palette.background.paper,
        //   color: theme.palette.text.primary,
        // },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      sizeMedium: {
        padding: "12px 16px",
      },
      sizeSmall: {
        // padding: "6px 16px",
        paddingTop: 4,
        paddingBottom: 4,
        "&:last-child": {
          paddingRight: 5
        }
      },
    },
  },
  MuiTimeline: {
    styleOverrides: {
      root: {
        padding: "0 0 0 16px",
      },
    },
  },
  MuiTimelineContent: {
    styleOverrides: {
      root: {
        padding: "12px 16px",
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        color: theme.palette.text.secondary,
        borderRadius: "12px !important",
        border: "none",
        textTransform: "none" as any,
        "&.Mui-selected": {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
        padding: 5,
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: {
        border: '1px solid rgb(224, 224, 224)',
        '& .MuiDataGrid-cell': { //, & .MuiDataGrid-columnHeaders
          borderBottom: '1px solid rgb(224, 224, 224)',
        },
        '& .MuiDataGrid-columnSeparator': {
          color: 'rgb(224 224 224)'
        },
        '& .Mui-selected': {
          backgroundColor: '#deeaff !important'
        },
        "& .MuiDataGrid-colCell:focus": {
          outline: "none"
        },
        "& .MuiLinearProgress-root": {
          height: '2px'
        }
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        // '&.MuiFormLabel-filled': {
        //   fontWeight: 600,
        // },
        // '&.MuiInputLabel-outlined.MuiFormLabel-filled': {
        //   transform: 'translate(14px, -9px) scale(0.85)'
        // },
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(14px, -9px) scale(0.85)',
          fontWeight: 600,
        },

      }
    }
  },
  MuiFormControl: {
    styleOverrides: {
      root: {
        '& legend': {
          fontSize: '0.88rem'
        }
      }
    }
  },
  MuiTable: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-stickyHeader ': {
          backgroundColor: '#fff'
        }
      }
    }
  },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: "#db3131",
        "&$error": {
          color: "#db3131",
        },
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        '&.MuiAlert-filledSuccess ': {
          color: 'rgb(255 255 255 / 87%)',
          backgroundColor: '#108251'
        },
        '&.MuiAlert-filledError ': {
          backgroundColor: '#cd5a36'
        },
      }
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        '&.MuiPopover-root.MuiMenu-root': {
          zIndex: 1302
        },
      }
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
       fontSize: '15px'
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
          {
            display: 'none',
          },
        '& input[type=number]': {
          MozAppearance: 'textfield',
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      option: {
        fontSize: 14
      },
      noOptions: {
        fontSize: 14
      }
    }
  }
  // MuiPopper: {
  //   styleOverrides: {
  //     root: {
  //       '&.MuiAutocomplete-popper': {
  //         zIndex: 1302
  //       },
  //     }
  //   },
  // }
});
