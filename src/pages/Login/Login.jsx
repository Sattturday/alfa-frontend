import { Link } from 'react-router-dom';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <Link className={styles.login__link} to={'/leader'}>
        leader
      </Link>
      <Link className={styles.login__link} to={'/employee'}>
        employee
      </Link>
    </div>
  );
};

export default Login;
