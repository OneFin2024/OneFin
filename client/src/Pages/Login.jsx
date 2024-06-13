import React from 'react'

function Login() {
  return (
    <div>
    <div className="custom-cursor__cursor" />
    <div className="custom-cursor__cursor-two" />
    {/* <div className="preloader">
      <div className="preloader__image" style={{backgroundImage: 'url(assets/images/loader.png)'}} />
    </div> */}
    {/* /.preloader */}
    <div className="page-wrapper">
      <div className="topbar">
        <div className="container-fluid">
          <div className="topbar__inner">
            <ul className="list-unstyled topbar__info">
              <li>
                <span className="topbar__info__icon">
                  <i className="icon-mail-1" />
                </span>
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </li>
              <li>
                <span className="topbar__info__icon topbar__info__icon--phone">
                  <i className="icon-headset" />
                </span>
                <a href="tel:16205">16205</a>
              </li>
            </ul>{/* /.list-unstyled topbar__info */}
            <div className="topbar__right">
              <ul className="list-unstyled topbar__pages">
                <li><a href="login.html">log in</a></li>
                <li><a href="about.html">career</a></li>
                <li><a href="about.html">media</a></li>
                <li><a href="faq.html">Faq’s</a></li>
              </ul>{/* /.topbar__pages */}
              <div className="topbar__social">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-f" aria-hidden="true" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <i className="fab fa-twitter" aria-hidden="true" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                  <span className="sr-only">Linkedin</span>
                </a>
                <a href="https://youtube.com">
                  <i className="fab fa-youtube" aria-hidden="true" />
                  <span className="sr-only">Youtube</span>
                </a>
              </div>{/* /.topbar__social */}
            </div>{/* /.list-unstyled topbar__right */}
          </div>{/* /.topbar__inner */}
        </div>{/* /.container-fluid */}
      </div>{/* /.topbar */}
      <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo logo-retina">
              <a href="index.html">
                <img src="assets/images/logo-dark.png" alt="Easilon HTML" width={150} />
              </a>
            </div>{/* /.main-header__logo */}
            <div className="main-header__right">
              <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                  <li className="megamenu megamenu-clickable megamenu-clickable--toggler">
                    <a href="index.html">Demos</a>
                    <ul>
                      <li>
                        <div className="megamenu-popup">
                          <a href="#" className="megamenu-clickable--close"><span className="icon-close" /></a>
                          {/* /.megamenu-clickable--close */}
                          <div className="megamenu-popup__content">
                            <div className="demo-one">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-1.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index.html" className="easilon-btn demo-one__btn">
                                            <span>Multi Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                          <a href="index-one-page.html" className="easilon-btn demo-one__btn">
                                            <span>One Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index.html">Home Page 01</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-2.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index-2.html" className="easilon-btn demo-one__btn">
                                            <span>Multi Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                          <a href="index-2-one-page.html" className="easilon-btn demo-one__btn">
                                            <span>One Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-2.html">Home Page 02</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-3.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index-3.html" className="easilon-btn demo-one__btn">
                                            <span>Multi Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                          <a href="index-3-one-page.html" className="easilon-btn demo-one__btn">
                                            <span>One Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-3.html">Home Page 03</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-dark.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index-dark.html" className="easilon-btn demo-one__btn">
                                            <span>View Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-dark.html">Home Dark</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-boxed.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index-boxed.html" className="easilon-btn demo-one__btn">
                                            <span>View Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-boxed.html">Home Boxed</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img src="assets/images/landing/home-rtl.jpg" alt="" />
                                        <div className="demo-one__btns">
                                          <a href="index-rtl.html" className="easilon-btn demo-one__btn">
                                            <span>View Page</span>
                                            <span className="easilon-btn__icon">
                                              <i className="icon-double-right-arrow" />
                                            </span>
                                          </a>{/* /.thm-btn demo-one__btn */}
                                        </div>{/* /.demo-one__btns */}
                                      </div>{/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index.html">Home RTL</a>
                                        </h3>{/* /.demo-one__title */}
                                      </div>{/* /.demo-one__content */}
                                    </div>{/* /.demo-one__card */}
                                  </div>{/* /.col-md-6 col-lg-3 */}
                                </div>{/* /.row */}
                              </div>{/* /.container */}
                            </div>{/* /.demos-one */}
                          </div>{/* /.megamenu-popup__content */}
                        </div>{/* /.megamenu-popup */}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Our Services</a>
                    <ul>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="services-carousel.html">Services Carousel 01</a></li>
                      <li><a href="services-carousel-2.html">Services Carousel 02</a></li>
                      <li><a href="service-d-home-loan.html">home loan</a></li>
                      <li><a href="service-d-auto-loan.html">auto loan</a></li>
                      <li><a href="service-d-personal-loan.html">personal loan</a></li>
                      <li><a href="service-d-business-loan.html">business loan</a></li>
                      <li><a href="service-d-study-loan.html">study loan</a></li>
                      <li><a href="service-d-bike-loan.html">bike loan</a></li>
                      <li><a href="service-d-property-loan.html">property loan</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                      <li><a href="team.html">Our Team</a></li>
                      <li><a href="team-carousel.html">Team Carousel 01</a></li>
                      <li><a href="team-carousel-2.html">Team Carousel 02</a></li>
                      <li><a href="team-details.html">Team Details</a></li>
                      <li><a href="testimonials-carousel.html">testimonials carousel 01</a></li>
                      <li><a href="testimonials-carousel-2.html">testimonials carousel 02</a></li>
                      <li><a href="history.html">Our History</a></li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                        <ul>
                          <li><a href="gallery.html">Gallery masonry</a></li>
                          <li><a href="gallery-filter.html">Gallery filter</a></li>
                          <li><a href="gallery-grid.html">Gallery Grid</a></li>
                          <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                        </ul>
                      </li>
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="apply-loan.html">apply loan</a></li>
                      <li><a href="loan-eligibility.html">loan eligibility</a></li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="404.html">404 Error</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Shop</a>
                    <ul>
                      <li className="dropdown">
                        <a href="#">Products</a>
                        <ul>
                          <li><a href="products.html">No sidebar</a></li>
                          <li><a href="products-left.html">Left sidebar</a></li>
                          <li><a href="products-right.html">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li><a href="products-carousel.html">Products carousel</a></li>
                      <li><a href="product-details.html">Product details</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">News</a>
                    <ul>
                      <li className="dropdown">
                        <a href="#">News grid</a>
                        <ul>
                          <li><a href="blog-grid.html">No sidebar</a></li>
                          <li><a href="blog-grid-left.html">Left sidebar</a></li>
                          <li><a href="blog-grid-right.html">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">News list</a>
                        <ul>
                          <li><a href="blog-list.html">No sidebar</a></li>
                          <li><a href="blog-list-left.html">Left sidebar</a></li>
                          <li><a href="blog-list-right.html">Right sidebar</a></li>
                        </ul>
                      </li>
                      <li><a href="blog-carousel.html">News carousel 01</a></li>
                      <li><a href="blog-carousel-2.html">News carousel 02</a></li>
                      <li className="dropdown">
                        <a href="#">News details</a>
                        <ul>
                          <li><a href="blog-details.html">No sidebar</a></li>
                          <li><a href="blog-details-left.html">Left sidebar</a></li>
                          <li><a href="blog-details-right.html">Right sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>{/* /.main-header__nav */}
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
              </div>{/* /.mobile-nav__toggler */}
              <a href="#" className="search-toggler main-header__search">
                <i className="icon-search" aria-hidden="true" />
                <span className="sr-only">Search</span>
              </a>{/* /.search-toggler */}
              <a href="cart.html" className="main-header__cart">
                <i className="icon-cart" aria-hidden="true" />
                <span className="sr-only">Shopping Cart</span>
              </a>{/* /.search-toggler */}
              <a href="apply-loan.html" className="easilon-btn main-header__btn">
                <span>Apply for loan</span>
                <span className="easilon-btn__icon"><i className="icon-right-arrow" /></span>
              </a>{/* /.easilon-btn main-header__btn */}
            </div>{/* /.main-header__right */}
          </div>{/* /.main-header__inner */}
        </div>{/* /.container-fluid */}
      </header>{/* /.main-header */}
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
                    <li data-tab="#login" className="easilon-btn easilon-btn--white tab-btn active-btn"><span>log
                        in</span></li>
                    <li data-tab="#register" className="easilon-btn easilon-btn--white tab-btn">
                      <span>register</span>
                    </li>
                  </ul>{/* /.tab-buttons */}
                </div>{/* /.login-page__wrap__top */}
                <div className="tabs-content">
                  <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="login" style={{display: 'block'}}>
                    <span className="login-page__tab-title">sign in your account</span>
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
                    </form>{/* /.login-page__form */}
                    <div className="login-page__signin">
                      <h4 className="login-page__signin__title">don’t have an account? <a href="#">register</a>
                      </h4>{/* /.login-page__signin__title */}
                      <span className="login-page__signin__text">or sign in with</span>
                      {/* /.login-page__signin__text */}
                      <div className="login-page__signin__buttons">
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/google.png" alt="google" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/apple.png" alt="apple" /></button>
                        <button type="button" className="login-page__signin__btn"><img src="assets/images/shapes/facebook.png" alt="facebook" /></button>
                      </div>{/* /.login-page__signin__buttons */}
                    </div>{/* /.login-page__signin */}
                  </div>{/* /.login-tab */}
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
      <footer className="main-footer @@extraClassName">
        <div className="main-footer__bg" style={{backgroundImage: 'url(assets/images/shapes/footer-bg-1-1.png)'}} />
        {/* /.main-footer__bg */}
        <div className="main-footer__top">
          <div className="container">
            <div className="row gutter-y-40">
              <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                <div className="footer-widget footer-widget--about">
                  <a href="index.html" className="footer-widget__logo">
                    <img src="assets/images/logo-light.png" width={150} alt="Easilon HTML Template" />
                  </a>
                  <p className="footer-widget__about-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>{/* /.footer-widget__about-text */}
                  <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
                    <input type="text" name="EMAIL" placeholder="Enter Email" />
                    <button type="submit">
                      <span className="sr-only">submit</span>{/* /.sr-only */}
                      <i className="icon-right-arrow" />
                    </button>
                  </form>{/* /.footer-widget__newsletter mc-form */}
                  <div className="mc-form__response" />{/* /.mc-form__response */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-xl-4 col-lg-6 */}
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                <div className="footer-widget footer-widget--links footer-widget--links-one">
                  <h2 className="footer-widget__title">Explore</h2>{/* /.footer-widget__title */}
                  <ul className="list-unstyled footer-widget__links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Our Services</a></li>
                    <li><a href="team.html">Meet the Team</a></li>
                    <li><a href="blog-grid-right.html">Recent News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>{/* /.list-unstyled footer-widget__links */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-xl-2 col-lg-3 col-md-3 col-sm-6 */}
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                <div className="footer-widget footer-widget--links footer-widget--links-two">
                  <h2 className="footer-widget__title">Loan Services</h2>{/* /.footer-widget__title */}
                  <ul className="list-unstyled footer-widget__links">
                    <li><a href="service-d-bike-loan.html">bike loan</a></li>
                    <li><a href="service-d-home-loan.html">home loan</a></li>
                    <li><a href="service-d-study-loan.html">abroad study loan</a></li>
                    <li><a href="service-d-business-loan.html">business loan</a></li>
                    <li><a href="service-d-personal-loan.html">personal loan</a></li>
                  </ul>{/* /.list-unstyled footer-widget__links */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-xl-3 col-lg-3 col-md-4 col-sm-6 */}
              <div className="col-xl-3 col-lg-6 col-md-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="footer-widget footer-widget--contact">
                  <h2 className="footer-widget__title">Get inTouch</h2>{/* /.footer-widget__title */}
                  <ul className="list-unstyled footer-widget__info">
                    <li><a href="https://www.google.com/maps">85 Ketch Harbour Road Bensal PA 19020</a></li>
                    <li>
                      <span className="footer-widget__info__icon"><i className="icon-paper-plane" /></span>
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </li>
                    <li>
                      <span className="footer-widget__info__icon"><i className="icon-telephone" /></span>
                      <a href="tel:+9156980036420">+91 5698 0036 420</a>
                    </li>
                  </ul>{/* /.list-unstyled */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-xl-3 col-lg-6 col-md-5 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.main-footer__top */}
        <div className="main-footer__bottom">
          <div className="container">
            <div className="main-footer__bottom__inner">
              <div className="row gutter-y-40 align-items-center">
                <div className="col-md-5 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                  <div className="main-footer__social social-links-two">
                    <a href="https://facebook.com">
                      <span className="social-links-two__icon">
                        <i className="fab fa-facebook-f" aria-hidden="true" />
                      </span>{/* /.social-links-two__icon */}
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://twitter.com">
                      <span className="social-links-two__icon">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </span>{/* /.social-links-two__icon */}
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://instagram.com">
                      <span className="social-links-two__icon">
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </span>{/* /.social-links-two__icon */}
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="https://youtube.com">
                      <span className="social-links-two__icon">
                        <i className="fab fa-youtube" aria-hidden="true" />
                      </span>{/* /.social-links-two__icon */}
                      <span className="sr-only">Youtube</span>
                    </a>
                  </div>{/* /.main-footer__social */}
                </div>{/* /.col-md-5 */}
                <div className="col-md-7 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                  <div className="main-footer__bottom__copyright">
                    <p className="main-footer__copyright">
                      © Copyright <span className="dynamic-year" /> by Easilon HTML Template.
                    </p>
                  </div>{/* /.main-footer__bottom__copyright */}
                </div>{/* /.col-md-7 */}
              </div>{/* /.row */}
            </div>{/* /.main-footer__inner */}
          </div>{/* /.container */}
        </div>{/* /.main-footer__bottom */}
      </footer>{/* /.main-footer */}
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
        <div className="mobile-nav__social">
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

export default Login
