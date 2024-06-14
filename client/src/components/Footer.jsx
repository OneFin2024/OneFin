import React from 'react'

function Footer() {
  return (
    <>

    
    <footer className="main-footer main-footer--home">
      <div className="main-footer__bg" style={{backgroundImage: 'url(assets/images/shapes/footer-bg-1-1.png)'}} />
      {/* /.main-footer__bg */}
      <div className="main-footer__top">
        <div className="container">
          <div className="row gutter-y-40">
            <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms">
              <div className="footer-widget footer-widget--about">
                <a href="index.html" className="footer-widget__logo">
                  <img src="assets/images/logo.png" width={150} alt="Easilon HTML Template" />
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
      
    </>
  )
}

export default Footer
