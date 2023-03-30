import LoadingButton from '@mui/lab/LoadingButton';
import { Breakpoint, Button, Container, Drawer, DrawerProps, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterDialogAction } from './FooterAction';
// import LoadingContainer from './loading/LoadingContainer';

export const DrawerContainer = styled(Container)(() => ({
  paddingTop: '10px',
  overflow: 'auto',
  marginBottom: '60px',
  height: '100%',
}));

export const DrawerStopScroll = styled(Drawer)(() => ({ position: 'relative', '& .MuiPaper-root': { overflow: 'hidden' } }));

type IProps = DrawerProps & {
  isLoading?: boolean;
  title?: string;
  customToolbar?: JSX.Element;
  customActionFooter?: JSX.Element;
  children: React.ReactNode;
  /**
   * Disable click outside of modal area to close modal
   */
  disabledClickOutside: boolean;
  useFormProvider?: boolean;
  useActionFooterDefault?: boolean;
  onSubmit?: (data) => void;
  maxWidth?: false | Breakpoint;
};

const defaultProps = {
  disabledClickOutside: false,
  useActionFooterDefault: true,
  customActionFooter: undefined,
};

const TdDrawer = (props: IProps & typeof defaultProps) => {
  const { t } = useTranslation();
  const {
    title,
    customToolbar,
    customActionFooter,
    disabledClickOutside,
    children,
    useFormProvider,
    useActionFooterDefault,
    onSubmit,
    onClose,
    maxWidth,
    ref,
    ...otherProps
  } = props;

  if (!children) {
    throw new Error('Required');
  }

  if (!useActionFooterDefault && !customActionFooter && !onSubmit) {
    throw new Error('At least one variable has a value');
  }

  const handleBackdropClick = (event) => {
    event.stopPropagation();
    return false;
  };

  const handleClose = (event, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (!disabledClickOutside || reason !== 'backdropClick') {
      onClose(event, 'escapeKeyDown');
    }
  };
  const onBackDropClickCheck = disabledClickOutside ? ({ onBackdropClick: handleBackdropClick } as any) : {};
  return (
    <React.Fragment>
      <DrawerStopScroll
        ref={ref}
        anchor={'right'}
        {...otherProps}
        disableEscapeKeyDown={disabledClickOutside}
        onClose={handleClose}
        {...onBackDropClickCheck}
      >
        {!customToolbar ? (
          <Toolbar variant='dense'>
            <Typography variant='h5' component='h6'>
              {title}
            </Typography>
          </Toolbar>
        ) : (
          customToolbar
        )}
        <DrawerContainer sx={{ width: '100%' }} maxWidth={maxWidth}>
          <>
            {useFormProvider && children}
            {!useFormProvider && (
              <form onSubmit={onSubmit || undefined}>
                {children}
                {useActionFooterDefault ? (
                  <FooterDialogAction>
                    <Button variant='outlined' size={'small'} onClick={(e) => handleClose(e, 'escapeKeyDown')}>
                      {t('common.cancel')}
                    </Button>
                    <LoadingButton type='submit' size={'small'} variant='contained'>
                      {t('common.submit')}
                    </LoadingButton>
                  </FooterDialogAction>
                ) : (
                  customActionFooter
                )}
              </form>
            )}
          </>
        </DrawerContainer>
      </DrawerStopScroll>
    </React.Fragment>
  );
};
TdDrawer.defaultProps = defaultProps;
export default TdDrawer;
