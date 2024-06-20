import React from 'react'

function AboutUs() {
  return (
    <>



<div className="page-wrapper">
 



  <section className="page-header">

    <div
      className="page-header__bg"
      style={{
        backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"
      }}
    />
    {/* /.page-header__bg */}
    <div className="container">
      <div className="page-header__content">
        <h2 className="page-header__title">About us</h2>
        <ul className="easilon-breadcrumb list-unstyled">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <span>About us</span>
          </li>
        </ul>
        {/* /.thm-breadcrumb list-unstyled */}
      </div>
      {/* /.page-header__content */}
    </div>
    {/* /.container */}
    <div className="page-header__border-box">
      <div className="page-header__border page-header__border--1" />
      {/* /.page-header__border */}
      <div className="page-header__border page-header__border--2" />
      {/* /.page-header__border */}
      <div className="page-header__border page-header__border--3" />
      {/* /.page-header__border */}
      <div className="page-header__border page-header__border--4" />
      {/* /.page-header__border */}
      <div className="page-header__border page-header__border--5" />
      {/* /.page-header__border */}
    </div>
    {/* /.page-header__border-box */}
  </section>
  {/* /.page-header */}
  <section className="about-one about-one--about section-space">
    <div className="container">
      <div className="row gutter-y-50">
        <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1500ms">
          <div className="about-one__image">
            <div className="about-one__image__inner">
              <img src="assets/images/about/about-1-1.jpg" alt="about image" />
              <img
                src="assets/images/about/about-1-2.jpg"
                alt="about image"
                className="
						about-one__image__with-border"
              />
              <img
                src="assets/images/shapes/about-shape-1-1.png"
                alt="shapes"
                className="about-one__image__shape"
              />
              <div className="about-one__experience">
                <div
                  className="about-one__experience__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/about-experience-bg-1-1.png)"
                  }}
                />
                {/* /.about-one__experience__bg */}
                <div className="about-one__experience__content">
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="video-btn video-popup"
                  >
                    <i className="icon-play" />
                    <span />
                    <span />
                    <span />
                    <span />
                  </a>
                  {/* /.video-btn */}
                  <h3 className="about-one__experience__year">15+</h3>
                  {/* /.about-one__experience__year */}
                  <h3 className="about-one__experience__title">
                    year of experience
                  </h3>
                  {/* /.about-one__experience__title */}
                </div>
                {/* /.about-one__experience__content */}
              </div>
              {/* /.about-one__experience */}
            </div>
            {/* /.about-one__image__inner */}
          </div>
          {/* /.about-one__image */}
        </div>
        {/* /.col-lg-6 */}
        <div className="col-lg-6">
          <div className="about-one__content">
            <div className="sec-title @@extraClassName">
              <div className="sec-title__top">
                <div className="sec-title__shape">
                  <div className="sec-title__shape__one" />
                  {/* /.sec-title__shape__one */}
                  <div className="sec-title__shape__two" />
                  {/* /.sec-title__shape__one */}
                </div>
                {/* /.sec-title__shape */}
                <h6 className="sec-title__tagline">welcome to easilon</h6>
                {/* /.sec-title__tagline */}
              </div>
              {/* /.sec-title__top */}
              <h3 className="sec-title__title">
                Our Loans will Fill Your <br /> Dreams Come True
              </h3>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            <div
              className="about-one__text-box wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <p className="about-one__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              {/* /.about-one__text */}
            </div>
            {/* /.about-one__text-box */}
            <div className="about-one__list">
              <div
                className="about-one__list__left wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="about-one__list__item">
                  <span className="about-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>
                  {/* /.about-one__list__icon */}
                  quick loan process
                </div>
                <div className="about-one__list__item">
                  <span className="about-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>
                  {/* /.about-one__list__icon */}
                  very low rates
                </div>
              </div>
              {/* /.about-one__list__left */}
              <div
                className="about-one__list__right wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="about-one__list__item">
                  <span className="about-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>
                  {/* /.about-one__list__icon */}
                  small business loan
                </div>
                <div className="about-one__list__item">
                  <span className="about-one__list__icon">
                    <i className="icon-check-mark" />
                  </span>
                  {/* /.about-one__list__icon */}
                  studying abroad loan
                </div>
              </div>
              {/* /.about-one__list__right */}
            </div>
            {/* /.about-one__list */}
            <div
              className="about-one__button wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <a href="about.html" className="easilon-btn easilon-btn--border">
                <span>know about us</span>
                <span className="easilon-btn__icon">
                  <i className="icon-double-right-arrow" />
                </span>
              </a>
              {/* /.easilon-btn */}
            </div>
            {/* /.about-one__button */}
          </div>
          {/* /.about-one__content */}
        </div>
        {/* /.col-lg-6 */}
      </div>
      {/* /.row gutter-y-50 */}
    </div>
    {/* /.container */}
  </section>
  {/* /.about-one section-space */}
  <section className="why-choose-one section-space">
    <div
      className="why-choose-one__bg"
      style={{
        backgroundImage: "url(assets/images/shapes/why-choose-bg-1-1.png)"
      }}
    />
    {/* /.why-choose-one__bg */}
    <div className="container">
      <div className="row gutter-y-50 align-items-center">
        <div className="col-lg-6">
          <div className="why-choose-one__content">
            <div className="sec-title @@extraClassName">
              <div className="sec-title__top">
                <div className="sec-title__shape">
                  <div className="sec-title__shape__one" />
                  {/* /.sec-title__shape__one */}
                  <div className="sec-title__shape__two" />
                  {/* /.sec-title__shape__one */}
                </div>
                {/* /.sec-title__shape */}
                <h6 className="sec-title__tagline">our benefits</h6>
                {/* /.sec-title__tagline */}
              </div>
              {/* /.sec-title__top */}
              <h3 className="sec-title__title">why choose us</h3>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            <div
              className="why-choose-one__text-box wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <p className="why-choose-one__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passag
              </p>
              {/* /.why-choose-one__text */}
            </div>
            {/* /.why-choose-one__text-box */}
            <div className="why-choose-one__list">
              <div
                className="why-choose-one__list__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <span className="why-choose-one__list__icon">
                  <i className="icon-low-price" />
                </span>
                {/* /.why-choose-one__list__icon */}
                lower rates
              </div>
              <div
                className="why-choose-one__list__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <span className="why-choose-one__list__icon">
                  <i className="icon-loan-1" />
                </span>
                {/* /.why-choose-one__list__icon */}
                quick and easy
              </div>
            </div>
            {/* /.why-choose-one__list */}
            <div
              className="why-choose-one__progress wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <div className="why-choose-one__progress__box progress-box">
                <h4 className="progress-box__title">loan process</h4>
                <div className="progress-box__bar">
                  <div
                    className="progress-box__bar__inner count-bar"
                    data-percent="85%"
                  >
                    <div className="progress-box__number count-text">85%</div>
                  </div>
                </div>
              </div>
              {/* /.skills-item */}
              <div className="why-choose-one__progress__box progress-box">
                <h4 className="progress-box__title">business consultancy</h4>
                <div className="progress-box__bar">
                  <div
                    className="progress-box__bar__inner count-bar"
                    data-percent="95%"
                  >
                    <div className="progress-box__number count-text">95%</div>
                  </div>
                </div>
              </div>
              {/* /.skills-item */}
              <div className="why-choose-one__progress__box progress-box">
                <h4 className="progress-box__title">payments benefits</h4>
                <div className="progress-box__bar">
                  <div
                    className="progress-box__bar__inner count-bar"
                    data-percent="90%"
                  >
                    <div className="progress-box__number count-text">90%</div>
                  </div>
                </div>
              </div>
              {/* /.skills-item */}
            </div>
            {/* /.why-choose-one__progress */}
          </div>
          {/* /.why-choose-one__content */}
        </div>
        {/* /.col-lg-6 */}
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="1500ms">
          <div className="why-choose-one__image">
            <div className="why-choose-one__image__inner">
              <div className="why-choose-one__image__one">
                <img
                  src="assets/images/resources/why-choose-1-1.jpg"
                  alt="why choose image"
                />
                <img
                  src="assets/images/shapes/why-choose-shape-1-1.png"
                  alt="shape"
                  className="why-choose-one__image__one__shape"
                />
              </div>
              {/* /.why-choose-one__image__one */}
              <div className="why-choose-one__image__two">
                <img
                  src="assets/images/resources/why-choose-1-2.jpg"
                  alt="why choose image"
                />
              </div>
              {/* /.why-choose-one__image__two */}
            </div>
            {/* /.why-choose-one__image__inner */}
          </div>
          {/* /.why-choose-one__image */}
        </div>
        {/* /.col-lg-6 */}
      </div>
      {/* /.row gutter-y-50 */}
    </div>
    {/* /.container */}
    <img
      src="assets/images/shapes/why-choose-shape-1-2.png"
      alt="shape"
      className="why-choose-one__shape"
    />
  </section>
  {/* /.why-choose-one section-space */}
  <section className="loan-reasons-one section-space">
    <div className="container">
      <div className="loan-reasons-one__row row gutter-y-30">
        <div
          className="col-xl-8 col-lg-7 col-md-6 wow fadeInLeft"
          data-wow-duration="1500ms"
        >
          <div
            className="loan-reasons-one__image"
            style={{
              backgroundImage:
                "url(assets/images/resources/loan-reasons-1-1.jpg)"
            }}
          />
          {/* /.loan-reasons-one__image */}
        </div>
        {/* /.col-xl-8 col-lg-7 col-md-6 */}
        <div
          className="col-xl-4 col-lg-5 col-md-6 wow fadeInRight"
          data-wow-duration="1500ms"
        >
          <div className="loan-reasons-one__content">
            <div
              className="loan-reasons-one__content__bg"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/loan-reasons-title-bg-1-1.png)"
              }}
            />
            {/* /.loan-reasons-one__content__bg */}
            <div className="loan-reasons-one__content__inner">
              <div className="sec-title @@extraClassName">
                <div className="sec-title__top">
                  <div className="sec-title__shape">
                    <div className="sec-title__shape__one" />
                    {/* /.sec-title__shape__one */}
                    <div className="sec-title__shape__two" />
                    {/* /.sec-title__shape__one */}
                  </div>
                  {/* /.sec-title__shape */}
                  <h6 className="sec-title__tagline">loan reasons</h6>
                  {/* /.sec-title__tagline */}
                </div>
                {/* /.sec-title__top */}
                <h3 className="sec-title__title">Popular Reasons to Loan</h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
              <a
                href="apply-loan.html"
                className="loan-reasons-one__content__btn"
              >
                <span className="loan-reasons-one__content__btn__icon">
                  <i className="icon-next" />
                </span>
              </a>
              {/* /.loan-reasons-one__content__btn */}
            </div>
            {/* /.loan-reasons-one__content__inner */}
            <div className="loan-reasons-one__content__box">
              <img
                src="assets/images/shapes/loan-reasons-money-1-1.png"
                alt="money"
              />
            </div>
            {/* /.loan-reasons-one__content__box */}
          </div>
          {/* /.loan-reasons-one__content */}
        </div>
        {/* /.col-xl-4 col-lg-5 col-md-6 */}
      </div>
      {/* /.row gutter-y-30 */}
      <div className="row gutter-y-30">
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        >
          <div className="loan-reasons-one__card">
            <div
              className="loan-reasons-one__card__bg"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/loan-reasons-card-bg-1-1.png)"
              }}
            />
            {/* /.loan-reasons-one__card__bg */}
            <div className="loan-reasons-one__card__content">
              <h3 className="loan-reasons-one__card__title">Need a new car?</h3>
              {/* /.loan-reasons-one__card__title */}
              <p className="loan-reasons-one__card__text">
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents dolor sit
              </p>
              {/* /.loan-reasons-one__card__text */}
            </div>
            {/* /.loan-reasons-one__card__content */}
          </div>
          {/* /.loan-reasons-one__card */}
        </div>
        {/* /.col-lg-4 col-md-6 */}
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="100ms"
        >
          <div className="loan-reasons-one__card">
            <div
              className="loan-reasons-one__card__bg"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/loan-reasons-card-bg-1-1.png)"
              }}
            />
            {/* /.loan-reasons-one__card__bg */}
            <div className="loan-reasons-one__card__content">
              <h3 className="loan-reasons-one__card__title">
                Consolidate your debt
              </h3>
              {/* /.loan-reasons-one__card__title */}
              <p className="loan-reasons-one__card__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have
              </p>
              {/* /.loan-reasons-one__card__text */}
            </div>
            {/* /.loan-reasons-one__card__content */}
          </div>
          {/* /.loan-reasons-one__card */}
        </div>
        {/* /.col-lg-4 col-md-6 */}
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="200ms"
        >
          <div className="loan-reasons-one__card">
            <div
              className="loan-reasons-one__card__bg"
              style={{
                backgroundImage:
                  "url(assets/images/shapes/loan-reasons-card-bg-1-1.png)"
              }}
            />
            {/* /.loan-reasons-one__card__bg */}
            <div className="loan-reasons-one__card__content">
              <h3 className="loan-reasons-one__card__title">
                Home improvement
              </h3>
              {/* /.loan-reasons-one__card__title */}
              <p className="loan-reasons-one__card__text">
                Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt
                Ut Labore Et Dolore Magna
              </p>
              {/* /.loan-reasons-one__card__text */}
            </div>
            {/* /.loan-reasons-one__card__content */}
          </div>
          {/* /.loan-reasons-one__card */}
        </div>
        {/* /.col-lg-4 col-md-6 */}
      </div>
      {/* /.row gutter-y-30 */}
    </div>
    {/* /.container */}
  </section>
  {/* /.loan-reasons-one section-space */}
  <section className="funfact-one">
    <div
      className="funfact-one__bg"
      style={{
        backgroundImage: "url(assets/images/shapes/funfact-bg-1-1.jpg)"
      }}
    />
    {/* /.funfact-one__bg */}
    <div className="container">
      <div className="row gutter-y-40">
        <div
          className="funfact-one__col col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="00ms"
        >
          <div className="funfact-one__item">
            <h3 className="funfact-one__item__number count-box">
              <span className="count-text" data-stop="8.5" data-speed={1500} />
              <span>k</span>
            </h3>
            <h4 className="funfact-one__item__title">Happy Customers</h4>
            {/* /.funfact-one__item__title */}
          </div>
          {/* /.funfact-one__item */}
        </div>
        {/* /.col-lg-3 col-sm-6 */}
        <div
          className="funfact-one__col col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="100ms"
        >
          <div className="funfact-one__item">
            <h3 className="funfact-one__item__number count-box">
              <span>$</span>
              <span className="count-text" data-stop={95} data-speed={1500} />
              <span>k</span>
            </h3>
            <h4 className="funfact-one__item__title">Daily Payments</h4>
            {/* /.funfact-one__item__title */}
          </div>
          {/* /.funfact-one__item */}
        </div>
        {/* /.col-lg-3 col-sm-6 */}
        <div
          className="funfact-one__col col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="200ms"
        >
          <div className="funfact-one__item">
            <h3 className="funfact-one__item__number count-box">
              <span className="count-text" data-stop={99} data-speed={1500} />
              <span>%</span>
            </h3>
            <h4 className="funfact-one__item__title">We Approve Loans</h4>
            {/* /.funfact-one__item__title */}
          </div>
          {/* /.funfact-one__item */}
        </div>
        {/* /.col-lg-3 col-sm-6 */}
        <div
          className="funfact-one__col col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="300ms"
        >
          <div className="funfact-one__item">
            <h3 className="funfact-one__item__number count-box">
              <span className="count-text" data-stop={550} data-speed={1500} />
            </h3>
            <h4 className="funfact-one__item__title">staff members</h4>
            {/* /.funfact-one__item__title */}
          </div>
          {/* /.funfact-one__item */}
        </div>
        {/* /.col-lg-3 col-sm-6 */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /.funfact-one */}
  <section
    className="testimonials-two testimonials-two--about"
    id="testimonials"
  >
    <div className="container">
      <div className="row gutter-y-50 align-items-center">
        <div className="col-xl-6">
          <div className="testimonials-two__content">
            <div className="sec-title @@extraClassName">
              <div className="sec-title__top">
                <div className="sec-title__shape">
                  <div className="sec-title__shape__one" />
                  {/* /.sec-title__shape__one */}
                  <div className="sec-title__shape__two" />
                  {/* /.sec-title__shape__one */}
                </div>
                {/* /.sec-title__shape */}
                <h6 className="sec-title__tagline">our testimonials</h6>
                {/* /.sec-title__tagline */}
              </div>
              {/* /.sec-title__top */}
              <h3 className="sec-title__title">
                peoples talk about <br /> easilon service
              </h3>
              {/* /.sec-title__title */}
            </div>
            {/* /.sec-title */}
            <div className="testimonials-two__custome-navs" />
            {/* /.testimonials-two__custome-navs */}
          </div>
          {/* /.testimonials-two__content */}
        </div>
        {/* /.col-xl-6 */}
        <div className="col-xl-6">
          <div className="easilon-stretch-element-inside-column">
            <div
              className="testimonials-two__carousel easilon-owl__carousel owl-theme owl-carousel"
              data-owl-options='{
                  "items": 1,
                  "margin": 30,
                  "smartSpeed": 700,
                  "loop":true,
                  "autoplay": 6000,
                  "stagePadding": 186,
                  "nav":true,
                  "navContainer": ".testimonials-two__custome-navs",
                  "dots":false,
                  "navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
                  "responsive":{
                      "0":{
                          "items": 1,
                          "stagePadding": 0
                      },
                      "768":{
                          "items": 1,
                          "stagePadding": 100
                      },
                      "992":{
                          "items": 1,
                          "stagePadding": 186
                      },
                      "1200":{
                          "items": 1,
                          "stagePadding": 40
                      },
                      "1350":{
                          "items": 1,
                          "stagePadding": 60
                      },
                      "1400":{
                          "items": 1,
                          "stagePadding": 90
                      },
                      "1600":{
                          "items": 1,
                          "stagePadding": 130
                      },
                      "1800":{
                          "items": 1,
                          "stagePadding": 168
                      }
                  }
                  }'
            >
              <div className="item">
                <div className="testimonial-card-two @@extraClassName">
                  <div className="testimonial-card-two__inner">
                    <div className="testimonial-card-two__top">
                      <div className="testimonial-card-two__image">
                        <img
                          src="assets/images/testimonials/testimonial-2-1.jpg"
                          alt="Michael G. Ware"
                        />
                      </div>
                      {/* /.testimonial-card-two__image */}
                      <svg
                        className="testimonial-card-two__icon"
                        viewBox="0 0 56 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                        <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                        <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                        <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                      </svg>
                      {/* /.testimonial-card-two__icon */}
                    </div>
                    {/* /.testimonial-card-two__top */}
                    <p className="testimonial-card-two__quote">
                      I recently worked with <span>easilon</span> for my home
                      renovation project, and I couldn't be happier with the
                      results. From the moment I walked into
                    </p>
                    {/* /.testimonial-card-two__quote */}
                    <div className="testimonial-card-two__bottom">
                      <div className="testimonial-card-two__identity">
                        <h4 className="testimonial-card-two__name">
                          Michael G. Ware
                        </h4>
                        {/* /.testimonial-card-two__name */}
                        <p className="testimonial-card-two__designation">
                          managing director
                        </p>
                        {/* /.testimonial-card-two__designation */}
                      </div>
                      {/* /.testimonial-card-two__identity */}
                      <div className="easilon-ratings">
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                      </div>
                      {/* /.product-ratings */}
                    </div>
                    {/* /.testimonial-card-two__bottom */}
                  </div>
                  {/* /.testimonial-card-two__inner */}
                </div>
                {/* /.testimonial-card-two */}
              </div>
              {/* /.item */}
              <div className="item">
                <div className="testimonial-card-two @@extraClassName">
                  <div className="testimonial-card-two__inner">
                    <div className="testimonial-card-two__top">
                      <div className="testimonial-card-two__image">
                        <img
                          src="assets/images/testimonials/testimonial-2-2.jpg"
                          alt="Mike Hardson"
                        />
                      </div>
                      {/* /.testimonial-card-two__image */}
                      <svg
                        className="testimonial-card-two__icon"
                        viewBox="0 0 56 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                        <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                        <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                        <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                      </svg>
                      {/* /.testimonial-card-two__icon */}
                    </div>
                    {/* /.testimonial-card-two__top */}
                    <p className="testimonial-card-two__quote">
                      Deploy encourage &amp; support business growth. Everyone
                      thinks the soup tastes better after pissed in it in an
                      ideal world, and we need
                    </p>
                    {/* /.testimonial-card-two__quote */}
                    <div className="testimonial-card-two__bottom">
                      <div className="testimonial-card-two__identity">
                        <h4 className="testimonial-card-two__name">
                          Mike Hardson
                        </h4>
                        {/* /.testimonial-card-two__name */}
                        <p className="testimonial-card-two__designation">
                          managing director
                        </p>
                        {/* /.testimonial-card-two__designation */}
                      </div>
                      {/* /.testimonial-card-two__identity */}
                      <div className="easilon-ratings">
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                      </div>
                      {/* /.product-ratings */}
                    </div>
                    {/* /.testimonial-card-two__bottom */}
                  </div>
                  {/* /.testimonial-card-two__inner */}
                </div>
                {/* /.testimonial-card-two */}
              </div>
              {/* /.item */}
              <div className="item">
                <div className="testimonial-card-two @@extraClassName">
                  <div className="testimonial-card-two__inner">
                    <div className="testimonial-card-two__top">
                      <div className="testimonial-card-two__image">
                        <img
                          src="assets/images/testimonials/testimonial-2-3.jpg"
                          alt="Judith White"
                        />
                      </div>
                      {/* /.testimonial-card-two__image */}
                      <svg
                        className="testimonial-card-two__icon"
                        viewBox="0 0 56 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 25.4448H11.1378L3.71254 40.2951H14.8503L22.2756 25.4448V3.16919H0V25.4448Z" />
                        <path d="M29.7004 3.16919V25.4448H40.8382L33.413 40.2951H44.5508L51.976 25.4448V3.16919H29.7004Z" />
                        <path d="M14.307 21.7756H3.66919V0.5H24.9448V22.1576L17.7105 36.6259H7.69075L14.7542 22.4992L15.116 21.7756H14.307Z" />
                        <path d="M44.0082 21.7756H33.3704V0.5H54.646V22.1576L47.4117 36.6259H37.3919L44.4554 22.4992L44.8172 21.7756H44.0082Z" />
                      </svg>
                      {/* /.testimonial-card-two__icon */}
                    </div>
                    {/* /.testimonial-card-two__top */}
                    <p className="testimonial-card-two__quote">
                      Churning anomalies we don't want to boil the ocean hit the
                      ground running, and corporate synergy, and can you put it
                      into a banner
                    </p>
                    {/* /.testimonial-card-two__quote */}
                    <div className="testimonial-card-two__bottom">
                      <div className="testimonial-card-two__identity">
                        <h4 className="testimonial-card-two__name">
                          Judith White
                        </h4>
                        {/* /.testimonial-card-two__name */}
                        <p className="testimonial-card-two__designation">
                          managing director
                        </p>
                        {/* /.testimonial-card-two__designation */}
                      </div>
                      {/* /.testimonial-card-two__identity */}
                      <div className="easilon-ratings">
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                        <span className="easilon-ratings__icon">
                          <i className="fa fa-star" />
                        </span>
                        {/* /.easilon-ratings__icon */}
                      </div>
                      {/* /.product-ratings */}
                    </div>
                    {/* /.testimonial-card-two__bottom */}
                  </div>
                  {/* /.testimonial-card-two__inner */}
                </div>
                {/* /.testimonial-card-two */}
              </div>
              {/* /.item */}
            </div>
            {/* /.testimonials-two__carousel */}
          </div>
          {/* /.easilon-stretch-element-inside-column */}
        </div>
        {/* /.col-xl-6 */}
      </div>
      {/* /.row gutter-y-50 */}
    </div>
    {/* /.container */}
  </section>
  {/* /.testimonials-two */}
  <section className="team-one section-space" id="team">
    <div className="container">
      <div className="sec-title sec-title--center">
        <div className="sec-title__top">
          <div className="sec-title__shape">
            <div className="sec-title__shape__one" />
            {/* /.sec-title__shape__one */}
            <div className="sec-title__shape__two" />
            {/* /.sec-title__shape__one */}
          </div>
          {/* /.sec-title__shape */}
          <h6 className="sec-title__tagline">our team</h6>
          {/* /.sec-title__tagline */}
          <div className="sec-title__shape">
            <div className="sec-title__shape__one" />
            {/* /.sec-title__shape__one */}
            <div className="sec-title__shape__two" />
            {/* /.sec-title__shape__one */}
          </div>
          {/* /.sec-title__shape */}
        </div>
        {/* /.sec-title__top */}
        <h3 className="sec-title__title">our awesome team</h3>
        {/* /.sec-title__title */}
      </div>
      {/* /.sec-title */}
      <div
        className="team-one__carousel easilon-owl__carousel easilon-owl__carousel--basic-nav owl-carousel owl-theme"
        data-owl-options='{
			"items": 1,
			"margin": 10,
			"loop": true,
			"smartSpeed": 700,
			"nav": false,
			"dots": false,
			"navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
			"autoplay": true,
			"responsive": {
				"0": {
					"items": 1,
					"nav": true,
					"margin": 10
				},
				"768": {
					"items": 2,
              "nav": true,
					"margin": 30
				},
				"992": {
					"items": 3,
					"margin": 30
				}
			}
		}'
      >
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="000ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img
                src="assets/images/team/team-1-1.jpg"
                alt="Anthony B. Castillo"
              />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">Anthony B. Castillo</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img src="assets/images/team/team-1-2.jpg" alt="Sarah Albert" />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">Sarah Albert</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img src="assets/images/team/team-1-3.jpg" alt="Adolfo Carone" />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">Adolfo Carone</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img src="assets/images/team/team-1-4.jpg" alt="kevin martin" />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">kevin martin</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img src="assets/images/team/team-1-5.jpg" alt="Kendra Mcgee" />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">Kendra Mcgee</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div
            className="team-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <a href="team-details.html" className="team-card__image">
              <img src="assets/images/team/team-1-6.jpg" alt="Sabrina Melton" />
            </a>
            {/* /.team-card__image*/}
            <div className="team-card__hover">
              <div className="social-links-two">
                <a href="https://facebook.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://instagram.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://youtube.com">
                  <span className="social-links-two__icon">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </span>
                  {/* /.social-links-two__icon */}
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* /.social-links-two */}
              <div className="team-card__identity">
                <h3 className="team-card__name">
                  <a href="team-details.html">Sabrina Melton</a>
                </h3>
                {/* /.team-card__name */}
                <p className="team-card__designation">marketing manager</p>
                {/* /.team-card__designation */}
              </div>
              {/* /.team-card__identity */}
              <div className="team-card__overlay" />
              {/* /.team-card__overlay */}
            </div>
            {/* /.team-card__hover */}
            <div className="team-card__shape">
              <svg
                className="team-card__shape__one"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M89 5.96046e-06L89 22.6564C89 41.0383 74.0985 55.9399 55.7166 55.9399L44.9632 55.9399C32.5202 55.9399 22.4331 66.0755 22.4331 78.5185V78.5185C22.4331 90.908 12.3895 101 -4.88758e-06 101V101" />
              </svg>
              {/* /.team-card__shape__one */}
              <svg
                className="team-card__shape__two"
                viewBox="0 0 91 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 103L2 80.3436C2 61.9617 16.9015 47.0601 35.2834 47.0601H46.0368C58.4798 47.0601 68.5669 36.9245 68.5669 24.4815V24.4815C68.5669 12.092 78.6105 2 91 2V2" />
              </svg>
              {/* /.team-card__shape__two */}
            </div>
            {/* /.team-card__shape */}
          </div>
          {/* /.team-card */}
        </div>
        {/* /.item */}
      </div>
      {/* /.team-one__carousel */}
    </div>
    {/* /.container */}
  </section>
  {/* /.team-one section-space */}
 






  {/* /.main-footer */}
</div>

      
    </>
  )
}

export default AboutUs
