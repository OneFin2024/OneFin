import React, { useState } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
function MainSliderOne() {
  const [loanAmount, setLoanAmount] = useState(1000); // Default loan amount
  const [loanDuration, setLoanDuration] = useState(1); // Default loan duration in months

  const onLoanAmountChange = (value) => {
    setLoanAmount(value);
  };

  const onLoanDurationChange = (value) => {
    setLoanDuration(value);
  };

  return (
    <section className="main-slider-one" id="home">
      <div className="main-slider-one_carousel easilon-owl_carousel owl-carousel">
        <div className="item">
          <div className="main-slider-one__item">
            <div className="main-slider-one__bg" style={{ backgroundImage: 'url(assets/images/backgrounds/main-slider-bg-1-1.jpg)' }}></div>
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
                        <span className="main-slider-one_titletext main-slider-onetitle_text--1">Smart finance</span>
                      </span>
                      <span className="main-slider-one_title_inner">
                        <span className="main-slider-one_titletext main-slider-onetitle_text--2">solutions for your</span>
                      </span>
                      <span className="main-slider-one_title_inner">
                        <span className="main-slider-one_titletext main-slider-onetitle_text--3">business</span>
                      </span>
                    </h2>
                    <div className="main-slider-one__button-group">
                      <div className="main-slider-one_button-group_inner">
                        <div className="main-slider-one_button main-slider-one_button--1">
                          <a href="services.html" className="main-slider-one__btn-1 easilon-btn">
                            <span>our service</span>
                            <span className="easilon-btn__icon">
                              <i className="icon-double-right-arrow"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="main-slider-one_button_inner">
                        <div className="main-slider-one_button main-slider-one_button--2">
                          <a href="apply-loan.html" className="easilon-btn easilon-btn--border">
                            <span>get started</span>
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
            <img src="assets/images/shapes/main-slider-shape-1-1.png" alt="shape" className="main-slider-one__shape-one" />
            <img src="assets/images/shapes/main-slider-shape-1-2.png" alt="shape" className="main-slider-one__shape-two" />
          </div>
        </div>
      </div>

      <div className="main-slider-one__form-wrapper">
        <div className="main-slider-one_form-wrapper_inner">
          <div className="container">
            <div className="main-slider-one__form">
              <form action="#" id="loan-calculator-01" className="loan-calculator-form wow fadeInUp" data-wow-duration="1500ms">
                <h3 className="loan-calculator-form__title">How Much Do You Need?</h3>
                <div className="loan-calculator-form__content">
                  <div className="input-box__top">
                    <span>$1000</span>
                    <span>$50000</span>
                  </div>
                  <div className="input-box">
                    <Slider
                      min={1000}
                      max={50000}
                      step={1000}
                      value={loanAmount}
                      onChange={onLoanAmountChange}
                      handle={handle}
                      railStyle={{ backgroundColor: '#ccc' }}
                      trackStyle={{ backgroundColor: '#1890ff' }}
                      dotStyle={{ borderColor: '#1890ff' }}
                      activeDotStyle={{ backgroundColor: '#1890ff' }}
                    />
                  </div>
                  <div className="input-box_top input-box_top-border">
                    <span>1 Month</span>
                    <span>12 Months</span>
                  </div>
                  <div className="input-box">
                    <Slider
                      min={1}
                      max={12}
                      step={1}
                      value={loanDuration}
                      onChange={onLoanDurationChange}
                      handle={handle}
                      railStyle={{ backgroundColor: '#ccc' }}
                      trackStyle={{ backgroundColor: '#1890ff' }}
                      dotStyle={{ borderColor: '#1890ff' }}
                      activeDotStyle={{ backgroundColor: '#1890ff' }}
                    />
                  </div>
                  <p>
                    <span>Pay Monthly</span>
                    <b>$<i className="loan-monthly-pay">{loanAmount}</i></b>
                  </p>
                  <p>
                    <span>Term of Use</span>
                    <b><i className="loan-month">{loanDuration}</i> Months</b>
                  </p>
                  <p>
                    <span>Total Pay Back amount</span>
                    <b>$<i className="loan-total">{loanAmount}</i></b>
                  </p>
                  <button type="submit" className="easilon-btn loan-calculator-form__btn">
                    <span>Apply for loan</span>
                    <span className="easilon-btn__icon"><i className="icon-right-arrow"></i></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MainSliderOne;