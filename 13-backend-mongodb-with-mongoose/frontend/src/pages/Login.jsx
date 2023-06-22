import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles['form']} action='' method='POST'>
        <div className={styles['form-control']}>
          <label for='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className={styles['form-control']}>
          <label for='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>

        <div className={styles['form-buttons']}>
          <button type='submit'>Login</button>
          <div>
            Don't have an account? <NavLink to='/signup'>Sign up</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};
