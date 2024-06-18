import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import Navbare from '../components/Navbare.jsx';
import Topbar from "../components/Topbar.jsx";
import Footer from "../components/Footer.jsx";
 
export const Login = () => {

  const [hasaccount,sethasaccount] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const { email, password,fullName } = formData;

  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      console.log('User logged in successfully');
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

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <div>
    <div className="custom-cursor__cursor" />
    <div className="custom-cursor__cursor-two" />
    {/* <div className="preloader">
      <div className="preloader__image" style={{backgroundImage: 'url(assets/images/loader.png)'}} />
    </div> */}
    {/* /.preloader */}
    <div className="page-wrapper">

      
      
    <Topbar/>
    <Navbare/>
     




      <section className="page-header">
        <div className="page-header__bg" style={{backgroundImage: 'url(assets/images/backgrounds/page-header-bg-1-1.jpg)'}} />
        {/* /.page-header__bg */}
        <div className="container">
          <div className="page-header__content">
            <h2 className="page-header__title">Log in</h2>
            <ul className="easilon-breadcrumb list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><span>Log In</span></li>
            </ul>{/* /.thm-breadcrumb list-unstyled */}
          </div>{/* /.page-header__content */}
        </div>{/* /.container */}
        <div className="page-header__border-box">
          <div className="page-header__border page-header__border--1" />{/* /.page-header__border */}
          <div className="page-header__border page-header__border--2" />{/* /.page-header__border */}
          <div className="page-header__border page-header__border--3" />{/* /.page-header__border */}
          <div className="page-header__border page-header__border--4" />{/* /.page-header__border */}
          <div className="page-header__border page-header__border--5" />{/* /.page-header__border */}
        </div>{/* /.page-header__border-box */}
      </section>{/* /.page-header */}

      
      <section className="login-page section-space">
        <div className="container">
          <div className="row gutter-y-80">
            <div className="col-xl-6 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="login-page__image">
                <div className="login-page__image__inner">
                  <img src="assets/images/resources/login-1-1.jpg" alt="login" />
                </div>{/* /.login-page__image__inner */}
              </div>{/* /.login-page__image */}
            </div>{/* /.col-xl-6 */}
            <div className="col-xl-6 wow fadeInRight fadeInRight" data-wow-duration="1500ms">
              <div className="login-page__wrap login-page__main-tab-box tabs-box">
                <div className="login-page__wrap__bg" style={{backgroundImage: 'url("assets/images/shapes/login-bg-1.png")'}} />
                {/* /.login-page__wrap__bg */}
                <div className="login-page__wrap__top">
                  <div className="login-page__wrap__content">
                    <h3 className="login-page__wrap__title">welcome</h3>
                  </div>{/* /.login-page__wrap__content */}
                  <ul className="tab-buttons">
                    <li data-tab="#login" className="easilon-btn easilon-btn--white tab-btn active-btn"><span  onClick={()=>{sethasaccount(true)}} >log
                        in</span></li>
                    <li data-tab="#register" className="easilon-btn easilon-btn--white tab-btn">
                      <span onClick={()=>{sethasaccount(false)}}  >register </span>
                    </li>
                  </ul>{/* /.tab-buttons */}
                </div>{/* /.login-page__wrap__top */}
                <div className="tabs-content">
                   { hasaccount ? 
                  <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="login" style={{display: 'block'}}>
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
                        </span>{/* /.login-page__form__icon */}
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box">
                        <input  type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              placeholder="Password"
                              required className="login-page__password" />
                        <span className="login-page__form__icon">
                          <i className="icon-padlock" />
                        </span>{/* /.login-page__form__icon */}
                        <i className="toggle-password pass-field-icon fa fa-fw fa-eye-slash" />
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box login-page__form__input-box--bottom">
                        <div className="login-page__form__checked-box">
                          <input type="checkbox" name="remember-policy" id="remember-policy" />
                          <label htmlFor="remember-policy"><span />remember me</label>
                        </div>
                        <a href className="login-page__form__forgot">forgot password?</a>
                        {/* /.login-page__form__forgot */}
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box login-page__form__input-box--button">
                        <button type="submit" className="easilon-btn login-page__form__btn"><span>log
                            in</span></button>
                      </div>{/* /.login-page__form__button */}
                    </form>
                    {isLoading && <p>Loading...</p>}
                          {isError && <p>{message}</p>}
                          {isSuccess && <p>User logged in successfully</p>}
                    <div className="login-page__signin">
                      <h4 className="login-page__signin__title">don’t have an account? <a  onClick={()=>{sethasaccount(false)}} >register</a>
                      </h4>{/* /.login-page__signin__title */}
                      <span className="login-page__signin__text">or sign in with</span>
                      {/* /.login-page__signin__text */}
                      <div className="login-page__signin__buttons">
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                      </div>{/* /.login-page__signin__buttons */}
                    </div>{/* /.login-page__signin */}
                  </div>
                   :  
                   <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="login" style={{display: 'block'}}>
                    <span className="login-page__tab-title">Register a new account</span>     
                    <form onSubmit={onSubmit} className="login-page__form">
                    <div className="login-page__form__input-box">
                    <input
                          type="text"
                          name="test"
                          value={fullName}
                          onChange={onChange}
                          placeholder="fullName"
                          required
                        />
                     
                    </div>{/* /.login-page__form__input-box */}
                    <div className="login-page__form__input-box">
                      <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email"
                            required
                          />
                       
                      </div>
                    <div className="login-page__form__input-box">
                      <input  type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Password"
                            required className="login-page__password" />
                     
                      <i className="toggle-password pass-field-icon fa fa-fw fa-eye-slash" />
                    </div>{/* /.login-page__form__input-box */}
                    <div className="login-page__form__input-box login-page__form__input-box--bottom">
                      <div className="login-page__form__checked-box">
                        <input type="checkbox" name="remember-policy" id="remember-policy" />
                        <label htmlFor="remember-policy"><span />remember me</label>
                      </div>
                     
                    </div>{/* /.login-page__form__input-box */}
                    <div className="login-page__form__input-box login-page__form__input-box--button">
                      <button type="submit" className="easilon-btn login-page__form__btn"><span>Register</span></button>
                    </div>{/* /.login-page__form__button */}
                  </form>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>{message}</p>}
                    {isSuccess && <p>User logged in successfully</p>}
              <div className="login-page__signin">
                <h4 className="login-page__signin__title">don’t have an account? <a  onClick={()=>{sethasaccount(true)}} >Login</a>
                </h4>{/* /.login-page__signin__title */}
                <span className="login-page__signin__text">or Register in with</span>
                {/* /.login-page__signin__text */}
                <div className="login-page__signin__buttons">
                  <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                  <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                  <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                </div>{/* /.login-page__signin__buttons */}
              </div>{/* /.login-page__signin */}
            </div>


                   
                    
                    }

                    {/* Registre form */}
                    
                    
                  
                  <div className="tab fadeInUp animated" data-wow-delay="200ms" id="register" style={{display: 'none'}}>
                    <span className="login-page__tab-title">sign up your account</span>
                    <form className="login-page__form">
                      <div className="login-page__form__input-box">
                        <input type="email" placeholder="Your Email" />
                        <span className="login-page__form__icon">
                          <i className="icon-mail-2" />
                        </span>{/* /.login-page__form__icon */}
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box">
                        <input type="password" placeholder="Password" className="login-page__password" />
                        <span className="login-page__form__icon">
                          <i className="icon-padlock" />
                        </span>{/* /.login-page__form__icon */}
                        <i className="toggle-password pass-field-icon fa fa-fw fa-eye-slash" />
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box login-page__form__input-box--bottom">
                        <div className="login-page__form__checked-box">
                          <input type="checkbox" name="accept-policy" id="accept-policy" />
                          <label htmlFor="accept-policy"><span />I accept company privacy policy.</label>
                        </div>
                      </div>{/* /.login-page__form__input-box */}
                      <div className="login-page__form__input-box login-page__form__input-box--button">
                        <button type="submit" className="easilon-btn login-page__form__btn"><span>Register</span></button>
                      </div>{/* /.login-page__form__button */}
                    </form>{/* /.login-page__form */}
                    <div className="login-page__signin">
                      <h4 className="login-page__signin__title">Already have an account? <a href="#">Sign In</a>
                      </h4>{/* /.login-page__signin__title */}
                      <span className="login-page__signin__text">or sign in with</span>
                      {/* /.login-page__signin__text */}
                      <div className="login-page__signin__buttons">
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                      </div>{/* /.login-page__signin__buttons */}
                    </div>{/* /.login-page__signin */}
                  </div>{/* /.register-tab */}
                </div>{/* /.tab-content */}
                <div className="login-page__top-shape">
                  <div className="login-page__top-shape__one" />{/* /.login-page__top-shape__one */}
                  <div className="login-page__top-shape__two" />{/* /.login-page__top-shape__two */}
                </div>{/* /.login-page__top-shape */}
                <div className="login-page__bottom-shape">
                  <div className="login-page__bottom-shape__one" />{/* /.login-page__bottom-shape__one */}
                  <div className="login-page__bottom-shape__two" />{/* /.login-page__bottom-shape__two */}
                </div>{/* /.login-page__bottom-shape */}
              </div>{/* /.login-page__main-tab-box */}
            </div>{/* /.col-xl-6 */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.login-page section-space */}


    <Footer/>

    {/* /.main-footer */}
    </div>{/* /.page-wrapper */}
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler" />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler"><i className="icon-close" /></span>
        <div className="logo-box logo-retina">
          <a href="index.html" aria-label="logo image"><img src="assets/images/logo-light.png" width={155} alt="" /></a>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container" />
        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <span className="mobile-nav__contact__icon"><i className="fa fa-envelope" /></span>
            <a href="mailto:needhelp@easilon.com">needhelp@easilon.com</a>
          </li>
          <li>
            <span className="mobile-nav__contact__icon"><i className="fa fa-phone-alt" /></span>
            <a href="tel:+9156980036420">+91 5698 0036 420</a>
          </li>
        </ul>{/* /.mobile-nav__contact */}
        <div className="mobile-nav__social" style={{backgroundColor:"#00CDE5"}}>
          <a href="https://facebook.com">
            <i className="fab fa-facebook-f" aria-hidden="true" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter" aria-hidden="true" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram" aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://youtube.com">
            <i className="fab fa-youtube" aria-hidden="true" />
            <span className="sr-only">Youtube</span>
          </a>
        </div>{/* /.mobile-nav__social */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
    {/* /.mobile-nav__wrapper */}
    <div className="search-popup">
      <div className="search-popup__overlay search-toggler" />
      {/* /.search-popup__overlay */}
      <div className="search-popup__content">
        <form role="search" method="get" className="search-popup__form" action="#">
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="easilon-btn">
            <span className="easilon-btn__icon"><i className="icon-search" /></span>
          </button>
        </form>
      </div>
      {/* /.search-popup__content */}
    </div>
    {/* /.search-popup */}
    <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
      <span className="scroll-to-top__text">back top</span>
      <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner" /></span>
    </a>
    {/* template js */}
  </div>
  
  )
}

