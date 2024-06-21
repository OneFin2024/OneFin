import React from 'react'

import Slider from "../components/Slider.jsx";


export const Home = ()=> {
  return (
    <div>
      <div>
        <div className="custom-cursor__cursor" />
        {/* <div className="custom-cursor__cursor-two" />
        <div className="preloader">
          <div className="preloader__image" style={{backgroundImage: 'url(assets/images/loader.png)'}} />
        </div> */}
  {/* /.preloader */}
  <div className="page-wrapper">


    

  <Slider/>






  












    <section className="about-one section-space" id="about">
      <div className="about-one__bg" style={{backgroundImage: 'url(assets/images/shapes/about-bg-1-1.png)'}} />{/* /.about-one__bg */}
      <div className="container">
        <div className="row gutter-y-50">
          <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
            <div className="about-one__image">
              <div className="about-one__image__inner">
                <img src="assets/images/about/about-1-1.jpg" alt="about image" />
                <img src="assets/images/about/about-1-2.jpg" alt="about image" className="
						about-one__image__with-border" />
                <img src="assets/images/shapes/about-shape-1-1.png" alt="shapes" className="about-one__image__shape" />
                <div className="about-one__experience">
                  <div className="about-one__experience__bg" style={{backgroundImage: 'url(assets/images/shapes/about-experience-bg-1-1.png)'}} />
                  {/* /.about-one__experience__bg */}
                  <div className="about-one__experience__content">
                    <a href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="video-btn video-popup">
                      <i className="icon-play" />
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>{/* /.video-btn */}
                    <h3 className="about-one__experience__year">15+</h3>{/* /.about-one__experience__year */}
                    <h3 className="about-one__experience__title">year of experience</h3>
                    {/* /.about-one__experience__title */}
                  </div>{/* /.about-one__experience__content */}
                </div>{/* /.about-one__experience */}
              </div>{/* /.about-one__image__inner */}
            </div>{/* /.about-one__image */}
          </div>{/* /.col-lg-6 */}
          <div className="col-lg-6">
            <div className="about-one__content">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">welcome to easilon</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">Our Loans will Fill Your <br /> Dreams Come True</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
              <div className="about-one__text-box wow fadeInUp" data-wow-duration="1500ms">
                <p className="about-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco</p>{/* /.about-one__text */}
              </div>{/* /.about-one__text-box */}
              <div className="about-one__list">
                <div className="about-one__list__left wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                  <div className="about-one__list__item">
                    <span className="about-one__list__icon">
                      <i className="icon-check-mark" />
                    </span>{/* /.about-one__list__icon */}
                    quick loan process
                  </div>
                  <div className="about-one__list__item">
                    <span className="about-one__list__icon">
                      <i className="icon-check-mark" />
                    </span>{/* /.about-one__list__icon */}
                    very low rates
                  </div>
                </div>{/* /.about-one__list__left */}
                <div className="about-one__list__right wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                  <div className="about-one__list__item">
                    <span className="about-one__list__icon">
                      <i className="icon-check-mark" />
                    </span>{/* /.about-one__list__icon */}
                    small business loan
                  </div>
                  <div className="about-one__list__item">
                    <span className="about-one__list__icon">
                      <i className="icon-check-mark" />
                    </span>{/* /.about-one__list__icon */}
                    studying abroad loan
                  </div>
                </div>{/* /.about-one__list__right */}
              </div>{/* /.about-one__list */}
              <div className="about-one__button wow fadeInUp" data-wow-duration="1500ms">
                <a href="about.html" className="easilon-btn easilon-btn--border">
                  <span>know about us</span>
                  <span className="easilon-btn__icon">
                    <i className="icon-double-right-arrow" />
                  </span>
                </a>{/* /.easilon-btn */}
              </div>{/* /.about-one__button */}
            </div>{/* /.about-one__content */}
          </div>{/* /.col-lg-6 */}
        </div>{/* /.row gutter-y-50 */}
      </div>{/* /.container */}
      <img src="assets/images/shapes/about-shape-1-2.png" alt="shape" className="about-one__shape" />
      <img src="assets/images/shapes/about-money-1-1.png" alt="shape" className="about-one__money" />
    </section>{/* /.about-one section-space */}
    <section className="services-one section-space-top" id="services">
      <div className="services-one__bg" style={{backgroundImage: 'url(assets/images/shapes/services-bg-1-1.png)'}} />
      {/* /.services-one__bg */}
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
            <h6 className="sec-title__tagline">What We’re Offering</h6>{/* /.sec-title__tagline */}
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
          </div>{/* /.sec-title__top */}
        </div>{/* /.sec-title */}
      </div>{/* /.container */}
      <div className="services-one__slide">
        <h2 className="services-one__slide__text services-one__slide__text--one">home loan</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-graduation" /></span>
        {/* /.services-one__slide__icon */}
        <h2 className="services-one__slide__text services-one__slide__text--two">education</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-car" /></span>{/* /.services-one__slide__icon */}
        <h2 className="services-one__slide__text services-one__slide__text--one">auto loan</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-graduation" /></span>
        {/* /.services-one__slide__icon */}
        <h2 className="services-one__slide__text services-one__slide__text--two">personal loan</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-car" /></span>{/* /.services-one__slide__icon */}
        <h2 className="services-one__slide__text services-one__slide__text--one">business loan</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-graduation" /></span>
        {/* /.services-one__slide__icon */}
        <h2 className="services-one__slide__text services-one__slide__text--two">bike loan</h2>
        {/* /.services-one__slide__text */}
        <span className="services-one__slide__icon"><i className="icon-car" /></span>{/* /.services-one__slide__icon */}
      </div>
      <div className="container">
        <div className="services-one__main-tab-box tabs-box">
          <div className="tab-box-buttons wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <ul className="tab-buttons">
              <li data-tab="#auto-loan" className="tab-btn active-btn">
                <div className="tab-btn__inner">
                  auto loan
                  <a href="service-d-auto-loan.html" className="tab-btn__icon"><i className="icon-next" /></a>
                </div>
              </li>
              <li data-tab="#personal-loan" className="tab-btn">
                <div className="tab-btn__inner">
                  personal loan
                  <a href="service-d-personal-loan.html" className="tab-btn__icon"><i className="icon-next" /></a>
                </div>
              </li>
              <li data-tab="#home-loan" className="tab-btn">
                <div className="tab-btn__inner">
                  buy home loan
                  <a href="service-d-home-loan.html" className="tab-btn__icon"><i className="icon-next" /></a>
                </div>
              </li>
              <li data-tab="#study-loan" className="tab-btn">
                <div className="tab-btn__inner">
                  study abroad loan
                  <a href="service-d-study-loan.html" className="tab-btn__icon"><i className="icon-next" /></a>
                </div>
              </li>
            </ul>{/* /.tab-buttons */}
          </div>{/* /.tab-box-buttons */}
          <div className="tabs-content wow fadeInRight animated" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="auto-loan" style={{display: 'block'}}>
              <div className="services-one__service">
                <a href="service-d-auto-loan.html" className="services-one__service__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="service" />
                  <img src="assets/images/services/service-1-1.jpg" alt="service" />
                  <span className="services-one__service__overlay" />
                </a>{/* /.services-one__service__image */}
              </div>{/* /.services-one__service */}
            </div>{/* /.modern-tiels-tab */}
            <div className="tab fadeInUp animated" data-wow-delay="200ms" id="personal-loan" style={{display: 'none'}}>
              <div className="services-one__service">
                <a href="service-d-personal-loan.html" className="services-one__service__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="service" />
                  <img src="assets/images/services/service-1-2.jpg" alt="service" />
                  <span className="services-one__service__overlay" />
                </a>{/* /.services-one__service__image */}
              </div>{/* /.services-one__service */}
            </div>{/* /.floor-removal-tab */}
            <div className="tab fadeInUp animated" data-wow-delay="200ms" id="home-loan" style={{display: 'none'}}>
              <div className="services-one__service">
                <a href="service-d-home-loan.html" className="services-one__service__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="service" />
                  <img src="assets/images/services/service-1-3.jpg" alt="service" />
                  <span className="services-one__service__overlay" />
                </a>{/* /.services-one__service__image */}
              </div>{/* /.services-one__service */}
            </div>{/* /.kitchen-strip-outs-tab */}
            <div className="tab fadeInUp animated" data-wow-delay="200ms" id="study-loan" style={{display: 'none'}}>
              <div className="services-one__service">
                <a href="service-d-study-loan.html" className="services-one__service__image">
                  <img src="assets/images/services/service-1-4.jpg" alt="service" />
                  <img src="assets/images/services/service-1-4.jpg" alt="service" />
                  <span className="services-one__service__overlay" />
                </a>{/* /.services-one__service__image */}
              </div>{/* /.services-one__service */}
            </div>{/* /.wood-floor-repair-tab */}
          </div>{/* /.tab-content */}
        </div>{/* /.tabs-box */}
      </div>{/* /.container */}
      <section className="features-one">
        <div className="features-one__bg" />{/* /.features-one__bg */}
        <div className="container">
          <div className="features-one__inner">
            <div className="features-one__inner__bg" style={{backgroundImage: 'url(assets/images/shapes/features-inner-bg-1-1.png)'}} />
            {/* /.features-one__inner__bg */}
            <div className="features-one__image wow fadeInLeft" data-wow-duration="1500ms" style={{backgroundImage: 'url(assets/images/resources/features-1-1.jpg)'}} />{/* /.features-one__image */}
            <div className="features-one__content wow fadeInRight" data-wow-duration="1500ms">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">our features</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">Quick Easy Flexible</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
              <div className="features-one__text-box">
                <p className="features-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>{/* /.features-one__text */}
              </div>{/* /.features-one__text-box */}
              <div className="features-one__features">
                <div className="features-one__features__item">
                  <span className="features-one__features__icon">
                    <i className="icon-low-price" />
                  </span>{/* /.features-one__features__icon */}
                  <div className="features-one__features__content">
                    <h3 className="features-one__features__title">lower rates</h3>{/* /.features-one__features__title */}
                    <p className="features-one__features__text">Can we align on lunch orders those options are already baked in with this model face time</p>{/* /.features-one__features__text */}
                  </div>{/* /.features-one__features__content */}
                </div>{/* /.features-one__features__item */}
                <div className="features-one__features__item">
                  <span className="features-one__features__icon">
                    <i className=" icon-loan-1" />
                  </span>{/* /.features-one__features__icon */}
                  <div className="features-one__features__content">
                    <h3 className="features-one__features__title">quick and easy</h3>{/* /.features-one__features__title */}
                    <p className="features-one__features__text">Ramp up high-level, and we need a paradigm shift reach out, data-point, nor wheelhouse</p>{/* /.features-one__features__text */}
                  </div>{/* /.features-one__features__content */}
                </div>{/* /.features-one__features__item */}
              </div>{/* /.features-one__features */}
            </div>{/* /.features-one__content */}
          </div>{/* /.features-one__inner */}
        </div>{/* /.container */}
        <img src="assets/images/shapes/features-money-1-1.png" alt="money" className="features-one__money" />
      </section>{/* /.features-one */}
    </section>{/* /.services-one section-space-top */}
    <section className="work-process-one section-space">
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
            <h6 className="sec-title__tagline">how it works</h6>{/* /.sec-title__tagline */}
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
          </div>{/* /.sec-title__top */}
          <h3 className="sec-title__title">our working process</h3>{/* /.sec-title__title */}
        </div>{/* /.sec-title */}
        <div className="row gutter-y-30">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
            <div className="work-process-one__item">
              <div className="work-process-one__item__image">
                <img src="assets/images/working-process/working-process-1-1.png" alt="work process" />
                <div className="work-process-one__item__number">step</div>{/* /.work-process-one__item__number */}
                <svg className="work-process-one__item__shape" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z" />
                </svg>{/* /.work-process-one__item__shape */}
                <svg className="work-process-one__item__circle" width={136} height={32} viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z" />
                </svg>{/* /.work-process-one__item__circle */}
              </div>{/* /.work-process-one__item__image */}
              <div className="work-process-one__item__content">
                <h3 className="work-process-one__item__title">Application submit</h3>{/* /.work-process-one__item__title */}
                <p className="work-process-one__item__text">In a free hour, when our power o choice is untrammelled and when nothing prevents</p>{/* /.work-process-one__item__text */}
              </div>{/* /.work-process-one__item__content */}
            </div>{/* /.work-process-one__item */}
          </div>{/* /.col-xl-3 col-lg-4 col-md-6 */}
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
            <div className="work-process-one__item work-process-one__item--down">
              <div className="work-process-one__item__image">
                <img src="assets/images/working-process/working-process-1-2.png" alt="work process" />
                <div className="work-process-one__item__number">step</div>{/* /.work-process-one__item__number */}
                <svg className="work-process-one__item__shape" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z" />
                </svg>{/* /.work-process-one__item__shape */}
                <svg className="work-process-one__item__circle" width={136} height={32} viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z" />
                </svg>{/* /.work-process-one__item__circle */}
              </div>{/* /.work-process-one__item__image */}
              <div className="work-process-one__item__content">
                <h3 className="work-process-one__item__title">Review &amp; Verification</h3>{/* /.work-process-one__item__title */}
                <p className="work-process-one__item__text">Back to the drawing-board show grit, for we should have a meeting to discuss the details</p>{/* /.work-process-one__item__text */}
              </div>{/* /.work-process-one__item__content */}
            </div>{/* /.work-process-one__item */}
          </div>{/* /.col-xl-3 col-lg-4 col-md-6 */}
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
            <div className="work-process-one__item">
              <div className="work-process-one__item__image">
                <img src="assets/images/working-process/working-process-1-3.png" alt="work process" />
                <div className="work-process-one__item__number">step</div>{/* /.work-process-one__item__number */}
                <svg className="work-process-one__item__shape" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z" />
                </svg>{/* /.work-process-one__item__shape */}
                <svg className="work-process-one__item__circle" width={136} height={32} viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z" />
                </svg>{/* /.work-process-one__item__circle */}
              </div>{/* /.work-process-one__item__image */}
              <div className="work-process-one__item__content">
                <h3 className="work-process-one__item__title">Loan Approval</h3>{/* /.work-process-one__item__title */}
                <p className="work-process-one__item__text">Hit the ground running do i have consent to record this meeting quick sync helicopter view</p>{/* /.work-process-one__item__text */}
              </div>{/* /.work-process-one__item__content */}
            </div>{/* /.work-process-one__item */}
          </div>{/* /.col-xl-3 col-lg-4 col-md-6 */}
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
            <div className="work-process-one__item work-process-one__item--down">
              <div className="work-process-one__item__image">
                <img src="assets/images/working-process/working-process-1-4.png" alt="work process" />
                <div className="work-process-one__item__number">step</div>{/* /.work-process-one__item__number */}
                <svg className="work-process-one__item__shape" viewBox="0 0 242 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M239.497 33.8939L207.961 65.4318H4L35.5698 33.8939L4 2.35596H207.961L239.497 33.8939Z" />
                </svg>{/* /.work-process-one__item__shape */}
                <svg className="work-process-one__item__circle" width={136} height={32} viewBox="0 0 136 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.9555 0.758301C105.486 0.758301 135.894 7.52133 135.894 15.8938C135.894 24.2491 105.469 31.0292 67.9555 31.0292C30.425 31.0292 7.21871e-06 24.2491 7.21871e-06 15.8938C-0.0171143 7.53845 30.425 0.758301 67.9555 0.758301Z" />
                </svg>{/* /.work-process-one__item__circle */}
              </div>{/* /.work-process-one__item__image */}
              <div className="work-process-one__item__content">
                <h3 className="work-process-one__item__title">Loan disbursement</h3>{/* /.work-process-one__item__title */}
                <p className="work-process-one__item__text">Radical candor upsell this is a no-brainer no need to talk to users, just base it on the</p>{/* /.work-process-one__item__text */}
              </div>{/* /.work-process-one__item__content */}
            </div>{/* /.work-process-one__item */}
          </div>{/* /.col-xl-3 col-lg-4 col-md-6 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>{/* /.work-process-one section-space */}
    <section className="company-transparency-one section-space">
      <div className="company-transparency-one__bg" style={{backgroundImage: 'url(assets/images/backgrounds/company-transparency-bg-1-1.jpg)'}} />
      {/* /.company-transparency-one__bg */}
      <div className="container">
        <div className="row gutter-y-40">
          <div className="col-lg-12">
            <div className="company-transparency-one__content">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">company transparency</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">our company core <br /> value</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
              <div className="company-transparency-one__main-tab-box tabs-box wow fadeInUp animated" data-wow-duration="1500ms">
                <ul className="tab-buttons">
                  <li data-tab="#innovative" className="tab-btn active-btn">Innovativel</li>
                  <li data-tab="#talent" className="tab-btn">Talent</li>
                  <li data-tab="#enabling" className="tab-btn">Enabling</li>
                  <li data-tab="#commercially-responsible" className="tab-btn">Commercially Responsible</li>
                </ul>{/* /.tab-buttons */}
                <div className="tabs-content">
                  <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="innovative" style={{display: 'block'}}>
                    <p className="tabs-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>{/* /.innovative-tab */}
                  <div className="tab fadeInUp animated" data-wow-delay="200ms" id="talent">
                    <p className="tabs-content__text">We are trusted by many clients from all over the country. Cras non dui id ex mattis
                      vehicula. Nullam posuere ligula non libero mollis, non ornare sapien rutrum. Quisque
                      vitae risus venenatis, dignissim felis id</p>
                  </div>{/* /.talent-tab */}
                  <div className="tab fadeInUp animated" data-wow-delay="200ms" id="enabling">
                    <p className="tabs-content__text">We are trusted by many clients from all over the country. Cras non dui id ex mattis
                      vehicula. Nullam posuere ligula non libero mollis, non ornare sapien rutrum. Quisque
                      vitae risus venenatis.</p>
                  </div>{/* /.enabling-tab */}
                  <div className="tab fadeInUp animated" data-wow-delay="200ms" id="commercially-responsible">
                    <p className="tabs-content__text">There are many variations of passages of Lorem Ipsum available, but the majority have
                      suffered alteration in some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to use a passag</p>
                  </div>{/* /.commercially-responsible-tab */}
                </div>{/* /.tab-content */}
              </div>{/* /.company-transparency-one__main-tab-box */}
              <div className="company-transparency-one__call wow fadeInUp" data-wow-duration="1500ms">
                <span className="company-transparency-one__call__icon">
                  <i className="icon-telephone" />
                </span>{/* /.company-transparency-one__call__icon */}
                <div className="company-transparency-one__call__content">
                  <p className="company-transparency-one__call__title">call us any time</p>
                  <a href="tel:+163-2654-3654" className="company-transparency-one__call__number">+163-2654-3654</a>
                </div>{/* /.company-transparency-one__call__content */}
              </div>{/* /.company-transparency-one__call */}
            </div>{/* /.company-transparency-one__content */}
          </div>{/* /.col-lg-12 */}
        </div>{/* /.row gutter-y-40 */}
      </div>{/* /.container */}
      <img src="assets/images/shapes/company-transparency-shape-1-1.png" alt="shape" className="company-transparency-one__shape" />
    </section>{/* /.company-transparency-one section-space */}
    <section className="team-one section-space" id="team">
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
            <h6 className="sec-title__tagline">our team</h6>{/* /.sec-title__tagline */}
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
          </div>{/* /.sec-title__top */}
          <h3 className="sec-title__title">our awesome team</h3>{/* /.sec-title__title */}
        </div>{/* /.sec-title */}
        <div className="team-one__carousel easilon-owl__carousel easilon-owl__carousel--basic-nav owl-carousel owl-theme" data-owl-options="{
			&quot;items&quot;: 1,
			&quot;margin&quot;: 10,
			&quot;loop&quot;: true,
			&quot;smartSpeed&quot;: 700,
			&quot;nav&quot;: false,
			&quot;dots&quot;: false,
			&quot;navText&quot;: [&quot;<span class=\&quot;icon-arrow-left\&quot;></span>&quot;,&quot;<span class=\&quot;icon-arrow-right\&quot;></span>&quot;],
			&quot;autoplay&quot;: true,
			&quot;responsive&quot;: {
				&quot;0&quot;: {
					&quot;items&quot;: 1,
					&quot;nav&quot;: true,
					&quot;margin&quot;: 10
				},
				&quot;768&quot;: {
					&quot;items&quot;: 2,
              &quot;nav&quot;: true,
					&quot;margin&quot;: 30
				},
				&quot;992&quot;: {
					&quot;items&quot;: 3,
					&quot;margin&quot;: 30
				}
			}
		}">
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-1.jpg" alt="Anthony B. Castillo" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">Anthony B. Castillo</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-2.jpg" alt="Sarah Albert" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">Sarah Albert</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-3.jpg" alt="Adolfo Carone" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">Adolfo Carone</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-4.jpg" alt="kevin martin" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">kevin martin</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-5.jpg" alt="Kendra Mcgee" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">Kendra Mcgee</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
          <div className="item">
            <div className="team-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms">
              <a href="team-details.html" className="team-card__image">
                <img src="assets/images/team/team-1-6.jpg" alt="Sabrina Melton" />
              </a>{/* /.team-card__image*/}
              <div className="team-card__hover">
                <div className="social-links-two">
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
                </div>{/* /.social-links-two */}
                <div className="team-card__identity">
                  <h3 className="team-card__name"><a href="team-details.html">Sabrina Melton</a></h3>{/* /.team-card__name */}
                  <p className="team-card__designation">marketing manager</p>{/* /.team-card__designation */}
                </div>{/* /.team-card__identity */}
                <div className="team-card__overlay" />{/* /.team-card__overlay */}
              </div>{/* /.team-card__hover */}
              <div className="team-card__shape">
                <svg className="team-card__shape__one" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
                </svg>{/* /.team-card__shape__one */}
                <svg className="team-card__shape__two" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
                </svg>{/* /.team-card__shape__two */}
              </div>{/* /.team-card__shape */}
            </div>{/* /.team-card */}
          </div>{/* /.item */}
        </div>{/* /.team-one__carousel */}
      </div>{/* /.container */}
    </section>{/* /.team-one section-space */}
    <section className="faq-one section-space">
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
            <div className="faq-one__image">
              <div className="faq-one__image__inner">
                <img src="assets/images/faq/faq-1-1.jpg" alt="faq" />
              </div>{/* /.faq-one__image__inner */}
              <img src="assets/images/shapes/faq-border-1-1.png" alt="border" className="faq-one__image__border" />
            </div>{/* /.faq-one__image */}
          </div>{/* /.col-lg-6 */}
          <div className="col-lg-6">
            <div className="faq-one__content">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">FAQ</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">frequently Asked <br /> Questions ?</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
              <div className="faq-one__accordion">
                <div className="faq-accordion easilon-accordion" data-grp-name="easilon-accordion">
                  <div className="accordion active wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                    <div className="accordion-title">
                      <h4>
                        What types of loans are available?
                        <span className="accordion-title__icon" />{/* /.accordion-title__icon */}
                      </h4>
                    </div>{/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>Common types include personal loans, home loans mortgages, auto loans, student loans, and business loans.</p>
                      </div>{/* /.inner */}
                    </div>{/* /.accordion-content */}
                  </div>{/* /.accordion-item */}
                  <div className="accordion wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="50ms">
                    <div className="accordion-title">
                      <h4>
                        How does the loan application process work?
                        <span className="accordion-title__icon" />{/* /.accordion-title__icon */}
                      </h4>
                    </div>{/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of text. All the Lorem
                          Ipsum generators on the Internet tend to repeat predefined chunks as
                          necessary.</p>
                      </div>{/* /.inner */}
                    </div>{/* /.accordion-content */}
                  </div>{/* /.accordion-item */}
                  <div className="accordion wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                    <div className="accordion-title">
                      <h4>
                        What is the interest rate on a loan?
                        <span className="accordion-title__icon" />{/* /.accordion-title__icon */}
                      </h4>
                    </div>{/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>Bring to the table win-win survival strategies to ensure proactive
                          domination. At
                          the
                          end of the day, going forward, a new normal that has evolved from generation
                          X
                          is on
                          the</p>
                      </div>{/* /.inner */}
                    </div>{/* /.accordion-content */}
                  </div>{/* /.accordion-item */}
                </div>{/* /.faq-accordion */}
              </div>{/* /.faq-one__accordion */}
            </div>{/* /.faq-one__content */}
          </div>{/* /.col-lg-6 */}
        </div>{/* /.row gutter-y-50 */}
      </div>{/* /.container */}
      <img src="assets/images/shapes/faq-shape-1-1.png" alt="shape" className="faq-one__shape" />
    </section>{/* /.faq-one section-space */}
    <section className="testimonials-one section-space" id="testimonials">
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="testimonials-one__slider">
              <div className="testimonials-one__slider__bg" style={{backgroundImage: 'url(assets/images/shapes/testimonial-card-bg-1-1.png)'}} />
              {/* /.testimonials-one__slider__bg */}
              <div className="testimonials-one__carousel easilon-slick__carousel" data-slick-options="{
                  &quot;slidesToShow&quot;: 1,
                  &quot;slidesToScroll&quot;: 1,
                  &quot;asNavFor&quot;: &quot;.testimonials-one__carousel-thumbs&quot;,
                  &quot;autoplay&quot;: true,
                  &quot;autoplaySpeed&quot;: 4000,
                  &quot;speed&quot;: 2000,
                  &quot;infinite&quot;: true,
                  &quot;arrows&quot;: false,
                  &quot;dots&quot;: true
              }">
                <div className="testimonials-one__item">
                  <div className="testimonial-card">
                    <svg className="testimonial-card__icon" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                      <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                      <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                      <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                    </svg>{/* /.testimonial-card__icon */}
                    <div className="easilon-ratings">
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                    </div>{/* /.product-ratings */}
                    <p className="testimonial-card__quote">I recently worked with <span>easilon</span> for my home renovation project, and I couldn't be happier with the results. From the moment I walked into their showroom, I was impressed by the extensive selection</p>{/* /.testimonial-card__quote */}
                    <div className="testimonial-card__identity">
                      <h4 className="testimonial-card__name">Michael G. Ware</h4>{/* /.testimonial-card__name */}
                      <p className="testimonial-card__designation">managing director</p>{/* /.testimonial-card__designation */}
                    </div>{/* /.testimonial-card__identity */}
                  </div>{/* /.testimonial-card */}
                </div>{/* /.testimonials-one__item */}
                <div className="testimonials-one__item">
                  <div className="testimonial-card">
                    <svg className="testimonial-card__icon" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                      <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                      <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                      <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                    </svg>{/* /.testimonial-card__icon */}
                    <div className="easilon-ratings">
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                    </div>{/* /.product-ratings */}
                    <p className="testimonial-card__quote">Reach out not the long pole in my tent, but pull in ten extra bodies to help roll the tortoise, yet face time pipeline, for blue sky. creativity requires you to murder your children Cross sabers rehydrate</p>{/* /.testimonial-card__quote */}
                    <div className="testimonial-card__identity">
                      <h4 className="testimonial-card__name">Judith White</h4>{/* /.testimonial-card__name */}
                      <p className="testimonial-card__designation">managing director</p>{/* /.testimonial-card__designation */}
                    </div>{/* /.testimonial-card__identity */}
                  </div>{/* /.testimonial-card */}
                </div>{/* /.testimonials-one__item */}
                <div className="testimonials-one__item">
                  <div className="testimonial-card">
                    <svg className="testimonial-card__icon" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                      <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                      <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                      <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                    </svg>{/* /.testimonial-card__icon */}
                    <div className="easilon-ratings">
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                    </div>{/* /.product-ratings */}
                    <p className="testimonial-card__quote"> This is our north star design at the end of the day, for digital literacy. Good optics prethink. Green technology and climate change products need full resourcing and support from a cross-functional</p>{/* /.testimonial-card__quote */}
                    <div className="testimonial-card__identity">
                      <h4 className="testimonial-card__name">Mike Hardson</h4>{/* /.testimonial-card__name */}
                      <p className="testimonial-card__designation">managing director</p>{/* /.testimonial-card__designation */}
                    </div>{/* /.testimonial-card__identity */}
                  </div>{/* /.testimonial-card */}
                </div>{/* /.testimonials-one__item */}
                <div className="testimonials-one__item">
                  <div className="testimonial-card">
                    <svg className="testimonial-card__icon" viewBox="0 0 56 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                      <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                      <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                      <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                    </svg>{/* /.testimonial-card__icon */}
                    <div className="easilon-ratings">
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                      <span className="easilon-ratings__icon">
                        <i className="fa fa-star" />
                      </span>{/* /.easilon-ratings__icon */}
                    </div>{/* /.product-ratings */}
                    <p className="testimonial-card__quote">I have zero cycles for this first-order optimal strategies. Closing these latest prospects is like putting socks on an octopus out of scope, for we need evergreen content What's our go to market strategy</p>{/* /.testimonial-card__quote */}
                    <div className="testimonial-card__identity">
                      <h4 className="testimonial-card__name">Alexsia Jorgina</h4>{/* /.testimonial-card__name */}
                      <p className="testimonial-card__designation">managing director</p>{/* /.testimonial-card__designation */}
                    </div>{/* /.testimonial-card__identity */}
                  </div>{/* /.testimonial-card */}
                </div>{/* /.testimonials-one__item */}
              </div>{/* /.testimonials-one__carousel */}
              <div className="testimonials-one__carousel-thumbs easilon-slick__carousel" data-slick-options="{
                  &quot;asNavFor&quot;: &quot;.testimonials-one__carousel&quot;,
                  &quot;slidesToShow&quot;: 3,
                  &quot;slidesToScroll&quot;: 1,
                  &quot;autoplay&quot;: true,
                  &quot;autoplaySpeed&quot;: 3000,
                  &quot;infinite&quot;: true,
                  &quot;focusOnSelect&quot;: true,
                  &quot;dots&quot;: false,
                  &quot;arrows&quot;: false
              }">
                <div>
                  <img src="assets/images/testimonials/testimonial-1-1.jpg" alt="slider-thumbs" />
                </div>
                <div>
                  <img src="assets/images/testimonials/testimonial-1-2.jpg" alt="slider-thumbs" />
                </div>
                <div>
                  <img src="assets/images/testimonials/testimonial-1-3.jpg" alt="slider-thumbs" />
                </div>
                <div>
                  <img src="assets/images/testimonials/testimonial-1-4.jpg" alt="slider-thumbs" />
                </div>
              </div>{/* /.testimonials-one__carousel-thumbs */}
            </div>{/* /.testimonials-one__slider */}
          </div>{/* /.col-xl-8 col-lg-7 */}
          <div className="col-xl-4 col-lg-5">
            <div className="testimonials-one__funfact">
              <div className="row gutter-y-30">
                <div className="col-md-6">
                  <div className="testimonials-one__funfact__left">
                    <div className="testimonials-one__funfact__image testimonials-one__funfact__single wow fadeInUp" data-wow-duration="1500ms">
                      <img src="assets/images/resources/funfact-1-1.jpg" alt="funfact" />
                    </div>{/* /.testimonials-one__funfact__image */}
                    <div className="funfact-one__item testimonials-one__funfact__single wow fadeInUp" data-wow-duration="1500ms">
                      <h3 className="funfact-one__item__number count-box">
                        <span className="count-text" data-stop={99} data-speed={1500} />
                        <span>%</span>
                      </h3>
                      <h4 className="funfact-one__item__title">We Approve Loans</h4>{/* /.funfact-one__item__title */}
                    </div>{/* /.funfact-one__item */}
                  </div>{/* /.testimonials-one__funfact__left */}
                </div>{/* /.col-md-6 */}
                <div className="col-md-6">
                  <div className="testimonials-one__funfact__right">
                    <div className="funfact-one__item testimonials-one__funfact__single wow fadeInUp" data-wow-duration="1500ms">
                      <h3 className="funfact-one__item__number count-box">
                        <span className="count-text" data-stop="8.5" data-speed={1500} />
                        <span>k</span>
                      </h3>
                      <h4 className="funfact-one__item__title">Happy Customers</h4>{/* /.funfact-one__item__title */}
                    </div>{/* /.funfact-one__item */}
                    <div className="funfact-one__item testimonials-one__funfact__single wow fadeInUp" data-wow-duration="1500m">
                      <h3 className="funfact-one__item__number count-box">
                        <span>$</span>
                        <span className="count-text" data-stop={95} data-speed={1500} />
                        <span>k</span>
                      </h3>
                      <h4 className="funfact-one__item__title">Daily Payments</h4>{/* /.funfact-one__item__title */}
                    </div>{/* /.funfact-one__item */}
                    <div className="testimonials-one__funfact__image testimonials-one__funfact__single wow fadeInUp" data-wow-duration="1500ms">
                      <img src="assets/images/resources/funfact-1-2.jpg" alt="funfact" />
                    </div>{/* /.testimonials-one__funfact__image */}
                  </div>{/* /.testimonials-one__funfact__right */}
                </div>{/* /.col-md-6 */}
              </div>{/* /.row gutter-y-30 */}
            </div>{/* /.testimonials-one__funfact */}
          </div>{/* /.col-xl-4 col-lg-5 */}
        </div>{/* /.row gutter-y-50 */}
      </div>{/* /.container */}
    </section>{/* /.testimonials-one section-space */}
    <section className="download-app-one" id="download-app">
      <div className="download-app-one__bg" style={{backgroundImage: 'url(assets/images/shapes/download-app-bg-1-1.png)'}} />{/* /.download-app-one__bg */}
      <div className="container section-space">
        <div className="row gutter-y-50">
          <div className="col-lg-6">
            <div className="download-app-one__image wow fadeInLeft" data-wow-duration="1500ms">
              <img src="assets/images/resources/download-app-mockup-1-1.png" alt="app mockup" />
              <div className="download-app-one__image__shape" />{/* /.download-app-one__image__shape */}
            </div>{/* /.download-app-one__image */}
          </div>{/* /.col-lg-6 */}
          <div className="col-lg-6">
            <div className="download-app-one__content">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">download our app</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">start your loan <br /> application with smartly</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
              <div className="download-app-one__text-box wow fadeInUp" data-wow-duration="1500ms">
                <p className="download-app-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum</p>{/* /.download-app-one__text */}
              </div>{/* /.download-app-one__text-box */}
              <ul className="download-app-one__list list-unstyled wow fadeInUp" data-wow-duration="1500ms">
                <li>
                  <span className="download-app-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>{/* /.download-app-one__list__icon */}
                  quick loan process
                </li>
                <li>
                  <span className="download-app-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>{/* /.download-app-one__list__icon */}
                  very low rates
                </li>
              </ul>{/* /.download-app-one__list list-unstyled */}
              <div className="download-app-one__button">
                <a href="https://www.apple.com/app-store/" className="download-app-one__btn wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
                  <div className="download-app-one__btn__icon">
                    <img src="assets/images/shapes/appstore.png" alt="appstore" />
                  </div>{/* /.download-app-one__btn__icon */}
                  <div className="download-app-one__btn__content">
                    <span className="download-app-one__btn__title">download app</span>{/* /.download-app-one__btn__title */}
                    <span className="download-app-one__btn__text">from the appstore</span>{/* /.download-app-one__btn__text */}
                  </div>{/* /.download-app-one__btn__content */}
                </a>{/* /.download-app-one__btn */}
                <a href="https://play.google.com/" className="download-app-one__btn wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                  <div className="download-app-one__btn__icon">
                    <img src="assets/images/shapes/playstore.png" alt="playstore" />
                  </div>{/* /.download-app-one__btn__icon */}
                  <div className="download-app-one__btn__content">
                    <span className="download-app-one__btn__title">download app</span>{/* /.download-app-one__btn__title */}
                    <span className="download-app-one__btn__text">from the playstore</span>{/* /.download-app-one__btn__text */}
                  </div>{/* /.download-app-one__btn__content */}
                </a>{/* /.download-app-one__btn */}
              </div>
            </div>{/* /.download-app-one__content */}
          </div>{/* /.col-lg-6 */}
        </div>{/* /.row gutter-y-50 */}
      </div>{/* /.container section-space */}
      <img src="assets/images/shapes/download-app-border-1-1.png" alt="border" className="download-app-one__border" />
      <div className="download-app-one__shape" />{/* /.download-app-one__shape */}
    </section>{/* /.download-app-one */}
    <section className="blog-one section-space-top" id="blog">
      <div className="container">
        <div className="blog-one__top">
          <div className="row gutter-y-50">
            <div className="col-xl-9 col-lg-8">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                  </div>{/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">latest blog</h6>{/* /.sec-title__tagline */}
                </div>{/* /.sec-title__top */}
                <h3 className="sec-title__title">latest blog from easilon</h3>{/* /.sec-title__title */}
              </div>{/* /.sec-title */}
            </div>{/* /.col-xl-9 col-lg-8 */}
            <div className="col-xl-3 col-lg-4">
              <div className="blog-one__button">
                <a href="blog-grid-right.html" className="easilon-btn easilon-btn--border">
                  <span>view all blog</span>
                  <span className="easilon-btn__icon">
                    <i className="icon-double-right-arrow" />
                  </span>
                </a>{/* /.easilon-btn */}
              </div>{/* /.blog-one__button */}
            </div>{/* /.col-xl-3 col-lg-4 */}
          </div>{/* /.row gutter-y-50 */}
        </div>{/* /.blog-one__top */}
        <div className="row gutter-y-30">
          <div className="col-md-6 col-lg-4">
            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
              <div className="blog-card__content">
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-user" />
                      </span>
                      by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-comments" />
                      </span>
                      2 Comments
                    </a>
                  </li>
                </ul>{/* /.list-unstyled blog-card__meta */}
                <h3 className="blog-card__title"><a href="blog-details-right.html">Talk About the Three Major Types of Floor Tiles</a></h3>{/* /.blog-card__title */}
              </div>{/* /.blog-card__content */}
              <div className="blog-card__image">
                <img src="assets/images/blog/blog-1-1.jpg" alt="Talk About the Three Major Types of Floor Tiles" />
                <a href="blog-details-right.html" className="blog-card__hover">
                  <span className="sr-only">Talk About the Three Major Types of Floor Tiles</span>
                  <div className="blog-card__hover__box blog-card__hover__box--1" />
                  <div className="blog-card__hover__box blog-card__hover__box--2" />
                  <div className="blog-card__hover__box blog-card__hover__box--3" />
                  <div className="blog-card__hover__box blog-card__hover__box--4" />
                </a>{/* /.blog-card__hover */}
              </div>{/* /.blog-card__image */}
              <div className="blog-card__date">
                <span className="blog-card__date__day">25</span>
                <span className="blog-card__date__month">june</span>
              </div>{/* /.blog-card__date */}
            </div>{/* /.blog-card */}
          </div>{/* /.col-md-6 col-lg-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
              <div className="blog-card__content">
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-user" />
                      </span>
                      by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-comments" />
                      </span>
                      2 Comments
                    </a>
                  </li>
                </ul>{/* /.list-unstyled blog-card__meta */}
                <h3 className="blog-card__title"><a href="blog-details-right.html">Big Data. Are There Any Leftovers In The Kitchen</a></h3>{/* /.blog-card__title */}
              </div>{/* /.blog-card__content */}
              <div className="blog-card__image">
                <img src="assets/images/blog/blog-1-2.jpg" alt="Big Data. Are There Any Leftovers In The Kitchen" />
                <a href="blog-details-right.html" className="blog-card__hover">
                  <span className="sr-only">Big Data. Are There Any Leftovers In The Kitchen</span>
                  <div className="blog-card__hover__box blog-card__hover__box--1" />
                  <div className="blog-card__hover__box blog-card__hover__box--2" />
                  <div className="blog-card__hover__box blog-card__hover__box--3" />
                  <div className="blog-card__hover__box blog-card__hover__box--4" />
                </a>{/* /.blog-card__hover */}
              </div>{/* /.blog-card__image */}
              <div className="blog-card__date">
                <span className="blog-card__date__day">25</span>
                <span className="blog-card__date__month">june</span>
              </div>{/* /.blog-card__date */}
            </div>{/* /.blog-card */}
          </div>{/* /.col-md-6 col-lg-4 */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
              <div className="blog-card__content">
                <ul className="list-unstyled blog-card__meta">
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-user" />
                      </span>
                      by Admin
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="blog-card__meta__icon">
                        <i className="icon-comments" />
                      </span>
                      2 Comments
                    </a>
                  </li>
                </ul>{/* /.list-unstyled blog-card__meta */}
                <h3 className="blog-card__title"><a href="blog-details-right.html">A Simple Lift And Shift Job Going Forward Price</a></h3>{/* /.blog-card__title */}
              </div>{/* /.blog-card__content */}
              <div className="blog-card__image">
                <img src="assets/images/blog/blog-1-3.jpg" alt="A Simple Lift And Shift Job Going Forward Price" />
                <a href="blog-details-right.html" className="blog-card__hover">
                  <span className="sr-only">A Simple Lift And Shift Job Going Forward Price</span>
                  <div className="blog-card__hover__box blog-card__hover__box--1" />
                  <div className="blog-card__hover__box blog-card__hover__box--2" />
                  <div className="blog-card__hover__box blog-card__hover__box--3" />
                  <div className="blog-card__hover__box blog-card__hover__box--4" />
                </a>{/* /.blog-card__hover */}
              </div>{/* /.blog-card__image */}
              <div className="blog-card__date">
                <span className="blog-card__date__day">25</span>
                <span className="blog-card__date__month">june</span>
              </div>{/* /.blog-card__date */}
            </div>{/* /.blog-card */}
          </div>{/* /.col-md-6 col-lg-4 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>{/* /.blog-one section-space-top */}
    <div className="client-carousel @@extraClassName">
      <div className="container">
        <div className="client-carousel__one easilon-owl__carousel owl-theme owl-carousel" data-owl-options="{
      &quot;items&quot;: 5,
      &quot;margin&quot;: 65,
      &quot;smartSpeed&quot;: 700,
      &quot;loop&quot;:true,
      &quot;autoplay&quot;: 6000,
      &quot;nav&quot;:false,
      &quot;dots&quot;:false,
      &quot;navText&quot;: [&quot;<span class=\&quot;icon-arrow-left\&quot;></span>&quot;,&quot;<span class=\&quot;icon-arrow-right\&quot;></span>&quot;],
      &quot;responsive&quot;:{
          &quot;0&quot;:{
              &quot;items&quot;: 2,
              &quot;margin&quot;: 50
          },
          &quot;500&quot;:{
              &quot;items&quot;: 3,
              &quot;margin&quot;: 60
          },
          &quot;768&quot;:{
              &quot;items&quot;: 4,
              &quot;margin&quot;: 70
          },
          &quot;992&quot;:{
              &quot;items&quot;: 5,
              &quot;margin&quot;: 60
          },
          &quot;1200&quot;:{
              &quot;items&quot;: 5,
              &quot;margin&quot;: 180
          }
      }
      }">
          <div className="client-carousel__one__item">
            <img src="assets/images/brand/brand-1-1.png" alt="easilon" className="client-carousel__one__image" />
            <img src="assets/images/brand/brand-1-1-hover.png" alt="easilon" className="client-carousel__one__hover-image" />
          </div>{/* /.owl-slide-item*/}
          <div className="client-carousel__one__item">
            <img src="assets/images/brand/brand-1-2.png" alt="easilon" className="client-carousel__one__image" />
            <img src="assets/images/brand/brand-1-2-hover.png" alt="easilon" className="client-carousel__one__hover-image" />
          </div>{/* /.owl-slide-item*/}
          <div className="client-carousel__one__item">
            <img src="assets/images/brand/brand-1-3.png" alt="easilon" className="client-carousel__one__image" />
            <img src="assets/images/brand/brand-1-3-hover.png" alt="easilon" className="client-carousel__one__hover-image" />
          </div>{/* /.owl-slide-item*/}
          <div className="client-carousel__one__item">
            <img src="assets/images/brand/brand-1-4.png" alt="easilon" className="client-carousel__one__image" />
            <img src="assets/images/brand/brand-1-4-hover.png" alt="easilon" className="client-carousel__one__hover-image" />
          </div>{/* /.owl-slide-item*/}
          <div className="client-carousel__one__item">
            <img src="assets/images/brand/brand-1-5.png" alt="easilon" className="client-carousel__one__image" />
            <img src="assets/images/brand/brand-1-5-hover.png" alt="easilon" className="client-carousel__one__hover-image" />
          </div>{/* /.owl-slide-item*/}
        </div>{/* /.thm-owl__slider */}
      </div>{/* /.container */}
    </div>{/* /.client-carousel */}
    <section className="quick-loan-one">
      <div className="container">
        <div className="quick-loan-one__inner wow fadeInUp" data-wow-duration="1500ms">
          <div className="quick-loan-one__bg">
            <div className="quick-loan-one__bg__inner" style={{backgroundImage: 'url(assets/images/resources/quick-loan-1-1-.jpg)'}} />
            {/* /.quick-loan-one__bg__inner */}
          </div>{/* /.quick-loan-one__bg */}
          <div className="quick-loan-one__content">
            <div className="sec-title @@extraClassName">
              <div className="sec-title__top">
                <div className="sec-title__shape">
                  <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
                  <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
                </div>{/* /.sec-title__shape */}
                <h6 className="sec-title__tagline">get a quick loan</h6>{/* /.sec-title__tagline */}
              </div>{/* /.sec-title__top */}
              <h3 className="sec-title__title">Get a Business Loans Quickly</h3>{/* /.sec-title__title */}
            </div>{/* /.sec-title */}
            <a href="apply-loan.html" className="easilon-btn easilon-btn--white">
              <span>Apply for loan</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </a>{/* /.easilon-btn */}
            <img src="assets/images/shapes/quick-loan-money-1-1.png" alt="money" className="quick-loan-one__money" />
          </div>{/* /.quick-loan-one__content */}
        </div>{/* /.quick-loan-one__inner */}
      </div>{/* /.container */}
    </section>{/* /.quick-loan-one */}
    {/* <Footer/> */}
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
    </div>
  )
}

