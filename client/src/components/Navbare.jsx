import React from 'react'

function Navbare() {
  return (
    <>
     <header className="main-header sticky-header sticky-header--normal">
      <div className="container-fluid">
        <div className="main-header__inner">
          <div className="main-header__logo logo-retina">
            <a href="index.html">
              <img src="assets/images/logo.png" alt="Easilon HTML" width={150} />
            </a>
          </div>{/* /.main-header__logo */}
          <div className="main-header__right">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <a href="/">Home</a>
               
                </li>
                <li>
                  <a href="AboutUs">About Us</a>
                </li>
                {/* <li className="dropdown">
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
                </li> */}
                <li className="dropdown">
                  <a href="#">Loan Programs</a>
                  <ul>
                    
                    <li><a href="team-carousel.html">Program 1</a></li>
                    <li><a href="team-carousel-2.html">Program 2</a></li>
                    <li><a href="team-carousel-2.html">Program 3</a></li>
                    
                   
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="Testimonials">Testimonials</a>
                 
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                  {/* <ul>
                    
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
                  </ul> */}
                </li>
                <li>
                  <a href="ContactUs">Contact Us</a>
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
           
            <a href="LoanApplication" className="easilon-btn main-header__btn">
              <span>Prequalify Now
              </span>
              <span className="easilon-btn__icon"><i className="icon-right-arrow" /></span>
            </a>{/* /.easilon-btn main-header__btn */}
          </div>{/* /.main-header__right */}
        </div>{/* /.main-header__inner */}
      </div>{/* /.container-fluid */}
    </header>{/* /.main-header */}


      
    </>
  )
}

export default Navbare
