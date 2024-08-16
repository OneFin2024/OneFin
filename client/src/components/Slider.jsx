import React from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

function MainSliderOne() {
  return (
    <section className="main-slider-one" id="home" style={{ position: 'relative' }}>
      <div className="main-slider-one_carousel easilon-owl_carousel owl-carousel">
        <div className="item">
          <div className="main-slider-one__item">
            {/* Uncomment and adjust the background image if needed */}
            {/* <div className="main-slider-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-bg-1-1.jpg)' }}></div> */}
            <div className="main-slider-one__container container">
              <div className="row gutter-y-60 align-items-center">
                <div className="col-lg-7">
                  <div className="main-slider-one__content">
                    <div className="main-slider-one__top">
                      <div className="main-slider-one_top_inner">
                        <div className="main-slider-one__sub-title-shape">
                          <div className="main-slider-one_sub-title-shape_one"></div>
                          <div className="main-slider-one_sub-title-shape_two"></div>
                        </div>
                        <h5 className="main-slider-one__sub-title">Smart Loans for <span>Bright Futures</span></h5>
                      </div>
                    </div>
                    <h2 className="main-slider-one__title">
                      <span className="main-slider-one_title_inner">
                        <span className="main-slider-one_titletext main-slider-onetitle_text--1">Smart Financial</span>
                      </span>
                      <br />
                      <span className="main-slider-one_title_inner">
                        <span className="main-slider-one_titletext main-slider-onetitle_text--2">Solutions For Your</span>
                      </span>
                      <span className="main-slider-one_title_inner">
                        <span className="main-slider-one_titletext main-slider-onetitle_text--3">Business</span>
                      </span>
                    </h2>
                    <div className="main-slider-one__button-group">
                      <div className="main-slider-one_button_group_inner">
                        <div className="main-slider-one_button main-slider-one_button--1">
                          <a href="services.html" className="main-slider-one__btn-1 easilon-btn">
                            <span>Our Service</span>
                            <span className="easilon-btn__icon">
                              <i className="icon-double-right-arrow"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="main-slider-one_button_inner">
                        <div className="main-slider-one_button main-slider-one_button--2">
                          <a href="apply-loan.html" className="easilon-btn easilon-btn--border">
                            <span>Get Started</span>
                            <span className="easilon-btn__icon">
                              <i className="icon-double-right-arrow"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-slider-one__form-wrapper" style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
        <div className="main-slider-one_form-wrapper_inner" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
          <div className="container">
            <div className="main-slider-one__form">
              <div className="loan-calculator-form wow fadeInUp" data-wow-duration="1500ms" style={{ backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', padding: '30px', border: '1px solid #dee2e6' }}>
                <h3 className="loan-calculator-form__title" style={{ fontSize: '26px', fontWeight: '700', color: '#333', marginBottom: '20px' }}>
                  Discover Your Optimal Loan
                </h3>
                <div className="loan-calculator-form__content">
                  <p className="loan-calculator-form__info" style={{ fontSize: '18px', color: '#495057', marginBottom: '20px', lineHeight: '1.6' }}>
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '20px', marginBottom: '0' }}>
                      We support loans ranging from <span>$50K to $500K</span>.
                    </span>
                  </p>
                  <p className="loan-calculator-form__info" style={{ fontSize: '18px', color: '#495057', marginBottom: '20px', lineHeight: '1.6' }}>
                    <strong>Loan Types:</strong>
                    <ul className="loan-types-list" style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                      <li style={{ padding: '10px 0', borderBottom: '1px solid #dee2e6' }}><strong>SBA:</strong> Small Business Administration</li>
                      <li style={{ padding: '10px 0', borderBottom: '1px solid #dee2e6' }}><strong>MCA:</strong> Merchant Cash Advance</li>
                      <li style={{ padding: '10px 0' }}><strong>LOC:</strong> Line of Credit</li>
                    </ul>
                  </p>
                  <button type="submit" className="easilon-btn loan-calculator-form__btn" >
                    <span>Apply for loan</span>
                    <span className="easilon-btn__icon" style={{ marginLeft: '12px' }}><i className="icon-right-arrow"></i></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSliderOne;
