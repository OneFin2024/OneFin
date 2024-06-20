import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup, reset } from '../features/auth/authSlice';



export const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const { email, password, fullName,phone } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      console.log('Operation successful');
    }

    if (isError) {
      console.error(message);
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (hasAccount) {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    } else {
      const userData = {
        email,
        password,
        fullName,
        phone,

      };

      dispatch(signup(userData));
    }
  };

  return (
    <div>
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
      <div className="page-wrapper">
     

        <section className="page-header">
          <div className="page-header__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/page-header-bg-1-1.jpg)' }} />
          <div className="container">
            <div className="page-header__content">
              <h2 className="page-header__title">{hasAccount ? 'Log In' : 'Register'}</h2>
              <ul className="easilon-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span>{hasAccount ? 'Log In' : 'Register'}</span></li>
              </ul>
            </div>
          </div>
          <div className="page-header__border-box">
            <div className="page-header__border page-header__border--1" />
            <div className="page-header__border page-header__border--2" />
            <div className="page-header__border page-header__border--3" />
            <div className="page-header__border page-header__border--4" />
            <div className="page-header__border page-header__border--5" />
          </div>
        </section>

        <section className="login-page section-space">
          <div className="container">
            <div className="row gutter-y-80">
              <div className="col-xl-6 wow fadeInLeft" data-wow-duration="1500ms">
                <div className="login-page__image">
                  <div className="login-page__image__inner">
                    <img src="assets/images/resources/login-1-1.jpg" alt="login" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight fadeInRight" data-wow-duration="1500ms">
                <div className="login-page__wrap login-page__main-tab-box tabs-box">
                  <div className="login-page__wrap__bg" style={{ backgroundImage: 'url("assets/images/shapes/login-bg-1.png")' }} />
                  <div className="login-page__wrap__top">
                    <div className="login-page__wrap__content">
                      <h3 className="login-page__wrap__title">welcome</h3>
                    </div>
                    <ul className="tab-buttons">
                      <li className="easilon-btn easilon-btn--white tab-btn active-btn">
                        <span onClick={() => setHasAccount(true)}>log in</span>
                      </li>
                      <li className="easilon-btn easilon-btn--white tab-btn">
                        <span onClick={() => setHasAccount(false)}>register</span>
                      </li>
                    </ul>
                  </div>
                  <div className="tabs-content">
                    {hasAccount ? (
                      <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="login" style={{ display: 'block' }}>
                        <span className="login-page__tab-title">sign in your account</span>
                        <form onSubmit={onSubmit} className="login-page__form">
                          <div className="login-page__form__input-box">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              placeholder="Email"
                              required
                            />
                            <span className="login-page__form__icon">
                              <i className="icon-mail-2" />
                            </span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              placeholder="Password"
                              required
                              className="login-page__password"
                            />
                            <span className="login-page__form__icon">
                              <i className="icon-padlock" />
                            </span>
                            <i className="toggle-password pass-field-icon fa fa-fw fa-eye-slash" />
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--bottom">
                            <div className="login-page__form__checked-box">
                              <input type="checkbox" name="remember-policy" id="remember-policy" />
                              <label htmlFor="remember-policy"><span />remember me</label>
                            </div>
                            <a href="#" className="login-page__form__forgot">forgot password?</a>
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--button">
                            <button type="submit" className="easilon-btn login-page__form__btn"><span>log in</span></button>
                          </div>
                        </form>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p>{message}</p>}
                        {isSuccess && <p>User logged in successfully</p>}
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">don’t have an account? <a onClick={() => setHasAccount(false)}>register</a></h4>
                          <span className="login-page__signin__text">or sign in with</span>
                          <div className="login-page__signin__buttons">
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="register" style={{ display: 'block' }}>
                        <span className="login-page__tab-title">Register a new account</span>
                        <form onSubmit={onSubmit} className="login-page__form">
                          <div className="login-page__form__input-box">
                            <input
                              type="text"
                              name="fullName"
                              value={fullName}
                              onChange={onChange}
                              placeholder="Full Name"
                              required
                            />
                            <span className="login-page__form__icon">
                              <i className="icon-user" />
                            </span>
                          </div>
                          <div className="login-page__form__input-box">
                          <input
                              type="phone"
                              name="phone"
                              value={phone}
                              onChange={onChange}
                              placeholder="phone"
                              required
                            />
                            <span className="login-page__form__icon">
                              <i className="icon-telephone" />
                            </span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              placeholder="Email"
                              required
                            />
                         
                            <span className="login-page__form__icon">
                              <i className="icon-mail-2" />
                            </span>
                          </div>
                          <div className="login-page__form__input-box">
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              placeholder="Password"
                              required
                              className="login-page__password"
                            />
                            <span className="login-page__form__icon">
                              <i className="icon-padlock" />
                            </span>
                            <i className="toggle-password pass-field-icon fa fa-fw fa-eye-slash" />
                          </div>
                          <div className="login-page__form__input-box login-page__form__input-box--button">
                            <button type="submit" className="easilon-btn login-page__form__btn"><span>register</span></button>
                          </div>
                        </form>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p>{message}</p>}
                        {isSuccess && <p>User registered successfully</p>}
                        <div className="login-page__signin">
                          <h4 className="login-page__signin__title">already have an account? <a onClick={() => setHasAccount(true)}>log in</a></h4>
                          <span className="login-page__signin__text">or register with</span>
                          <div className="login-page__signin__buttons">
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                            <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     
      </div>
    </div>
  );
};
