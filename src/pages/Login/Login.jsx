import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputDesktop } from '@alfalab/core-components/input/desktop';
import { ButtonDesktop } from '@alfalab/core-components/button/desktop';

import { setUser } from '../../store/userSlice';
import { useLoginMutation } from '../../api/authApi';
import { useGetMeQuery } from '../../api/userApi';
import { useForm } from '../../hooks/useForm';
import BackLink from '../../components/BackLink/BackLink';
import Helper from '../../components/Helper/Helper';

import styles from './Login.module.scss';

const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const { data: userData } = useGetMeQuery(isSubmit);
  const { values, resetForm, handleChange, errors, setErrors, isValid } =
    useForm();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      dispatch(setUser(userData));
      if (userData.is_staff === true) {
        navigate('/leader', { replace: true });
      } else {
        navigate('/employee', { replace: true });
      }
    }
  }, [userData]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsFormDisabled(true);

    try {
      const response = await login({
        username: values.name,
        password: values.password,
      }).unwrap();
      localStorage.setItem('token', response.auth_token);
      setIsSubmit(true);
      resetForm();
      setIsFormDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    resetForm();
    setErrors({});
  };

  return (
    <main className={styles.login}>
      <BackLink link={'/'} onShowPopup={() => resetForm()} />
      <h1>Сервис работы над ИПР</h1>
      <div className={styles.content}>
        <form
          onSubmit={handleSubmit}
          id='login-form'
          className={styles.form}
          noValidate
        >
          <h3>Авторизация</h3>
          <InputDesktop
            onChange={handleChange}
            required
            minLength='2'
            maxLength='30'
            name='name'
            label='Логин'
            block
            type='text'
            size='m'
            autoComplete='off'
            disabled={isFormDisabled}
            error={errors.name}
            value={values.name || ''}
          />
          <InputDesktop
            onChange={handleChange}
            required
            minLength='3'
            name='password'
            label='Пароль'
            block
            autoComplete='off'
            type='password'
            size='m'
            disabled={isFormDisabled}
            error={errors.password}
            value={values.password || ''}
          />
          <div className={styles.button__field}>
            <ButtonDesktop
              className={styles.button}
              type='submit'
              disabled={!isValid || isFormDisabled}
              view='accent'
            >
              Войти
            </ButtonDesktop>
            <ButtonDesktop
              onClick={handleCancel}
              className={styles.button}
              view='tertiary'
              disabled={(!values.name && !values.password) || isFormDisabled}
            >
              Отменить
            </ButtonDesktop>
          </div>
        </form>

        <Helper
          title='На данный момент у нас MVP'
          advices='Так как мы не находимся в контуре системы Альфа банка, мы пришли 
        к решению сделать условную авторизацию, для обособленной работы сервиса'
        />
      </div>

      <div className={styles.wrapperLink}>
        <Link className={styles.login__link} to={'/leader'}>
          leader
        </Link>
        <Link className={styles.login__link} to={'/employee'}>
          employee
        </Link>
      </div>
    </main>
  );
};

export default Login;
