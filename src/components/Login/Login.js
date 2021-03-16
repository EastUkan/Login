import React from 'react';
import style from './Login.module.css';

const Login = props => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className={style.login}>
      <div className={style.loginContainer}>
        <label className={style.loginContainer_label}>Username</label>
        <input
          className={style.loginContainer_input}
          type="text"
          autoFocus
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={style.errorMessage}>{emailError}</p>
        <label className={style.loginContainer_label}>Password</label>
        <input
          className={style.loginContainer_input}
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <p className={style.errorMessage}>{passwordError}</p>
        <div className={style.btnContainer}>
          {hasAccount ? (
            <>
              <button className={style.login_button} onClick={handleLogin}>
                Sign in
              </button>
              <p className={style.btnContainer_text}>
                Don't have an account ?
                <span
                  className={style.text_accent}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <button className={style.login_button} onClick={handleSignup}>
                Sign up
              </button>
              <p className={style.btnContainer_text}>
                Have an account ?
                <span
                  className={style.text_accent}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign in
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
