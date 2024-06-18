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
           
            <a href="apply-loan.html" className="easilon-btn main-header__btn">
              <span>Apply for loan</span>
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
