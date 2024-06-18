import React from 'react'

function Slider() {
  return (
    <>
   
    <section className="main-slider-one" id="home">
    <div
  className="main-slider-one__carousel easilon-owl__carousel owl-carousel"
  data-owl-options='{
  "margin": 0,
  "loop": true,
  "animateIn": "fadeIn",
  "animateOut": "fadeOut",
  "items": 1,
  "autoplay": true,
  "smartSpeed": 1000,
  "nav": true,
  "navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
  "dots": true
  }'
>
<div className="item">
      <div className="main-slider-one__item">
        <div className="main-slider-one__bg" style={{backgroundImage: 'url(assets/images/backgrounds/slide1.jpg)'}}>
        </div>{/* /.main-slider-one__bg */}
        <div className="main-slider-one__container container">
          <div className="row gutter-y-60 align-items-center">
            <div className="col-lg-7">
              <div className="main-slider-one__content">
                <div className="main-slider-one__top">
                  <div className="main-slider-one__top__inner">
                    <div className="main-slider-one__sub-title-shape">
                      <div className="main-slider-one__sub-title-shape__one" />
                      <div className="main-slider-one__sub-title-shape__two" />
                    </div>{/* /.main-slider-one__sub-title-shape */}
                    <h5 className="main-slider-one__sub-title">Smart Loans for <span>Bright
                        Futures</span></h5>{/* /.slider-sub-title */}
                  </div>{/* /.main-slider-one__top__inner */}
                </div>{/* /.main-slider-one__top */}
                <h2 className="main-slider-one__title">
                  <span className="main-slider-one__title__inner">
                    <span className="main-slider-one__title__text main-slider-one__title__text--1">Smart
                      finance</span>
                  </span>
                  <span className="main-slider-one__title__inner">
                    <span className="main-slider-one__title__text main-slider-one__title__text--2">solutions
                      for your</span>
                  </span>
                  <span className="main-slider-one__title__inner">
                    <span className="main-slider-one__title__text main-slider-one__title__text--3">business</span>
                  </span>
                </h2>{/* /.slider-title */}
                <div className="main-slider-one__button-group">
                  <div className="main-slider-one__button-group__inner">
                    <div className="main-slider-one__button main-slider-one__button--1">
                      <a href="services.html" className="main-slider-one__btn-1 easilon-btn">
                        <span>our service</span>
                        <span className="easilon-btn__icon">
                          <i className="icon-double-right-arrow" />
                        </span>
                      </a>{/* /.easilon-btn */}
                    </div>{/* /.main-slider-one__button */}
                  </div>{/* /.main-slider-one__button__inner */}
                  <div className="main-slider-one__button__inner">
                    <div className="main-slider-one__button main-slider-one__button--2">
                      <a href="apply-loan.html" className="easilon-btn easilon-btn--border">
                        <span>get started</span>
                        <span className="easilon-btn__icon">
                          <i className="icon-double-right-arrow" />
                        </span>
                      </a>{/* /.easilon-btn */}
                    </div>{/* /.main-slider-one__button */}
                  </div>{/* /.main-slider-one__button-group__inner */}
                </div>{/* /.main-slider-one__button-group */}
              </div>{/* /.main-slider-one__content */}
            </div>{/* /.col-lg-7 */}
          </div>{/* /.row gutter-y-60 */}
        </div>{/* /.container */}
        <img src="assets/images/shapes/main-slider-shape-1-1.png" alt="shape" className="main-slider-one__shape-one" />
        <img src="assets/images/shapes/main-slider-shape-1-2.png" alt="shape" className="main-slider-one__shape-two" />
      </div>{/* /.main-slider-one__item */}
    </div>
</div>


  {/* /.main-slider-one__carousel */}





















  <div className="main-slider-one__form-wrapper">
    <div className="main-slider-one__form-wrapper__inner">
      <div className="container">
        <div className="main-slider-one__form">
          <form action="#" id="loan-calculator-01" data-form-direction="ltr" data-interest-rate={15} className="loan-calculator-form wow fadeInUp" data-wow-duration="1500ms">
            <h3 className="loan-calculator-form__title">How Much Do You Need?</h3>
            <div className="loan-calculator-form__content">
              <div className="input-box__top">
                <span>$1000</span>
                <span>$50000</span>
              </div>{/* /.input-box__top */}
              <div className="input-box">
                <div className="range-slider-count" id="loan-calculator-01-count" />
                <input type="hidden" defaultValue className="min-count" id="loan-calculator-01-min-count" />
                <input type="hidden" defaultValue className="max-count" id="loan-calculator-01-max-count" />
              </div>{/* /.input-box */}
              <div className="input-box__top input-box__top-border">
                <span>1 Month</span>
                <span>12 Months</span>
              </div>{/* /.input-box__top */}
              <div className="input-box">
                <div className="range-slider-month" id="loan-calculator-01-month" />
                <input type="hidden" defaultValue className="min-month" id="loan-calculator-01-min-month" />
                <input type="hidden" defaultValue className="max-month" id="loan-calculator-01-max-month" />
              </div>{/* /.input-box */}
              <p>
                <span>Pay Monthly</span>
                <b>$<i className="loan-monthly-pay" /></b>
              </p>
              <p>
                <span>Term of Use</span>
                <b><i className="loan-month" /> Months</b>
              </p>
              <p>
                <span>Total Pay Back amount</span>
                <b>$<i className="loan-total" /></b>
              </p>
              <button type="submit" className="easilon-btn loan-calculator-form__btn">
                <span>Apply for loan</span>
                <span className="easilon-btn__icon"><i className="icon-right-arrow" /></span>
              </button>{/* /.easilon-btn */}
            </div>{/* /.loan-calculator-form__content */}
          </form>{/* /.loan-calculator-form */}
        </div>{/* /.main-slider-one__form */}
      </div>{/* /.container */}
    </div>{/* /.main-slider-one__form-wrapper__inner */}
  </div>
  
  
  {/* /.main-slider-one__form-wrapper */}
</section>{/* /.main-slider-one */}

      
    </>
  )
}

export default Slider
