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
                 
                </div>{/* /.about-one__experience */}
              </div>{/* /.about-one__image__inner */}
            </div>{/* /.about-one__image */}
          </div>{/* /.col-lg-6 */}
          <div className="col-lg-6">
  <div className="about-one__content">
    <div className="sec-title">
      <div className="sec-title__top">
        <div className="sec-title__shape">
          <div className="sec-title__shape__one" />
          <div className="sec-title__shape__two" />
        </div>
      </div>
      <h3 className="sec-title__title">
        Empowering Your Business with SBA Loans
      </h3>
    </div>
    <div className="about-one__text-box wow fadeInUp" data-wow-duration="1500ms">
      <p className="about-one__text">
        Founded in 2020, our company is dedicated to helping businesses through our <strong>Free SBA Assistance Program</strong>. We provide comprehensive support from application initiation to documentation, qualification, and submission.
      </p>
    </div>
    <div className="about-one__list">
      <div className="about-one__list__left wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
        <div className="about-one__list__item">
          <span className="about-one__list__icon">
            <i className="icon-check-mark" />
          </span>
          Free SBA assistance for businesses
        </div>
        <div className="about-one__list__item">
          <span className="about-one__list__icon">
            <i className="icon-check-mark" />
          </span>
          Comprehensive support throughout the loan process
        </div>
      </div>
    </div>
    <div className="about-one__button wow fadeInUp" data-wow-duration="1500ms">
      <a href="about.html" className="easilon-btn easilon-btn--border">
        <span>Learn More About Our SBA Assistance</span>
        <span className="easilon-btn__icon">
          <i className="icon-double-right-arrow" />
        </span>
      </a>
    </div>
  </div>
</div>

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
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__one */}
            </div>{/* /.sec-title__shape */}
          </div>{/* /.sec-title__top */}
        </div>{/* /.sec-title */}
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
      </section>
    </section>
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
        <div className="sec-title">
          <div className="sec-title__top">
            <div className="sec-title__shape">
              <div className="sec-title__shape__one" />{/* /.sec-title__shape__one */}
              <div className="sec-title__shape__two" />{/* /.sec-title__shape__two */}
            </div>{/* /.sec-title__shape */}
            <h6 className="sec-title__tagline">Company Values</h6>{/* /.sec-title__tagline */}
          </div>{/* /.sec-title__top */}
          <h3 className="sec-title__title">Core Values That Drive Our Innovation</h3>{/* /.sec-title__title */}
        </div>{/* /.sec-title */}
        <div className="company-transparency-one__main-tab-box tabs-box wow fadeInUp animated" data-wow-duration="1500ms">
          <ul className="tab-buttons">
            <li data-tab="#values" className="tab-btn active-btn">Core Values</li>
            <li data-tab="#services" className="tab-btn">Our Services</li>
          </ul>{/* /.tab-buttons */}
          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated" data-wow-delay="200ms" id="values" style={{display: 'block'}}>
              <p className="tabs-content__text">
                The values of our organization are our core beliefs and guide our culture and operations. They create a positive environment where we can innovate and thrive. Our commitment is to operate with integrity, transparency, and dedication to excellence.
              </p>
            </div>{/* /.values-tab */}
            <div className="tab fadeInUp animated" data-wow-delay="200ms" id="services">
              <p className="tabs-content__text">
                At OneFin Capital, we specialize in matching business owners with the right lenders. Our prequalification process is designed to identify the best lending options based on your financial needs, company size, revenue, and growth. This personalized approach ensures you find the most suitable funding solutions for your business.
              </p>
            </div>{/* /.services-tab */}
          </div>{/* /.tabs-content */}
        </div>{/* /.company-transparency-one__main-tab-box */}
        <div className="company-transparency-one__call wow fadeInUp" data-wow-duration="1500ms">
          <span className="company-transparency-one__call__icon">
            <i className="icon-telephone" />
          </span>{/* /.company-transparency-one__call__icon */}
          <div className="company-transparency-one__call__content">
            <p className="company-transparency-one__call__title">Call Us Anytime</p>
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
          <h3 className="sec-title__title">Our Business Loan Experts are here to help you </h3>{/* /.sec-title__title */}
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
                <img src="https://i.ibb.co/ZNWY27S/Link.png" alt="Anthony B. Castillo" />
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
       
          <div className="item" style={{margin:20}}>
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
        
       
        </div>{/* /.team-one__carousel */}
      </div>{/* /.container */}
    </section>{/* /.team-one section-space */}
    <section className="loan-process" style={{ padding: '50px 0', backgroundColor: '#f4f4f4' }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2 style={{ textAlign: 'center', color: '#2198CF', marginBottom: '40px' }}>
          Business Loan Step-by-Step Process
        </h2>
        <div className="row">
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                            <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Pre Qualification</h3>
              <p style={{ color: '#333' }}>
                Begin the process by completing a prequalification application online, or with one of our business loan experts. This step helps us understand your financial situation and determine how much you may be eligible to borrow.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
         
              <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Documentation Gathering</h3>
              <p style={{ color: '#333' }}>
                Gather and submit the necessary financial documents, income statements, ownership documents, bank statements, and tax returns. This documentation is crucial for your business loan application.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>

              <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Loan Application</h3>
              <p style={{ color: '#333' }}>
                Our team will assist you in completing a formal loan application. We'll help you select the right loan program and guide you through the application process.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>

              <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Loan Processing</h3>
              <p style={{ color: '#333' }}>
                Once your application is submitted, our experienced business loan experts will review and verify your documents, income statements, credit history, and application details. This step ensures your application is accurate and complete.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                            <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Underwriting</h3>
              <p style={{ color: '#333' }}>
                Your application will be sent to our underwriting team for a thorough evaluation. They will assess the risk associated with your loan and make a final decision on its approval.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                            <h3 style={{ color: '#2198CF', marginBottom: '10px' }}>Funding</h3>
              <p style={{ color: '#333' }}>
                Congratulations! Upon approval, we'll coordinate the funding process, where you'll sign the necessary documents and finalize the business loan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



   
  
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

