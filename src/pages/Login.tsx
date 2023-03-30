import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import BoxedLayout from '@core/components/BoxedLayout';
import { useSnackbar } from '@core/contexts/SnackbarProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from '@core/contexts/AuthProvider';
import bgImage from 'assets/images/bg.png';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TdTextBox } from '@core/components/controls/TdTextBox';
import { ErrorMessage } from '@core/components/ErrorMessage';
export const Login = () => {
  const { isLoggingIn, login, isNotSucceed } = useAuth();

  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { t } = useTranslation();
  const handleLogin = async () => {
    //login
    const validate = await trigger();
    if (!validate) {
      return;
    }
    const data: any = getValues();
    const response = await login(data.username, data.password);
    if (response) {
      snackbar.success(t('common.loginSuccess'));
      navigate('/trang-chu');
    }
  };

  const validateSchema = Yup.object({
    username: Yup.string().required(t('common.validations.required')),
    password: Yup.string()
      .required(t('common.validations.required'))
      .min(1, t('common.validations.min', { size: 1 })),
  });

  const {
    trigger,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    resolver: yupResolver(validateSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          bgcolor: 'background.default',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component='h1' variant='h5'>
            {t('auth.login.title')}
          </Typography>
          <Box component='form' marginTop={3} noValidate>
            <Controller
              name='username'
              control={control}
              render={({ field: { ref, ...otherField } }) => (
                <TdTextBox
                  {...otherField}
                  inputRef={ref}
                  fullWidth
                  margin='normal'
                  variant='filled'
                  moveToNextEleAfterEnter
                  required
                  disabled={isLoggingIn}
                  error={errors.username && Boolean(errors.username)}
                  helperText={errors.username && errors.username.message}
                  label={t('auth.login.username')}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field: { ref, ...otherField } }) => (
                <TdTextBox
                  {...otherField}
                  inputRef={ref}
                  sx={{ marginBottom: '20px' }}
                  fullWidth
                  margin='normal'
                  moveToNextEleAfterEnter
                  type='password'
                  variant='filled'
                  required
                  disabled={isLoggingIn}
                  error={errors.password && Boolean(errors.password)}
                  helperText={errors.password && errors.password.message}
                  label={t('auth.login.password')}
                />
              )}
            />

            {/* <TdAutocomplete options={rooms} variant='filled' labelI18nKey={'Phòng khám'} /> */}
            {/* <Box sx={{ textAlign: 'right' }}>
              <Link component={RouterLink} to={`/forgot-password`} variant='body2'>
                {t('auth.login.forgotPassword')}
              </Link>
            </Box> */}
            <LoadingButton type='button' onClick={handleLogin} fullWidth loading={isLoggingIn} variant='contained' sx={{ mt: 3 }}>
              {t('auth.login.submit')}
            </LoadingButton>

            {isNotSucceed && <ErrorMessage>Sai tên đăng nhập hoặc mật khẩu.</ErrorMessage>}

            <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
              <Link component={RouterLink} to={`/register`} variant='body2'>
                {t('auth.login.newAccount')}
              </Link>
            </Box>
          </Box>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};
