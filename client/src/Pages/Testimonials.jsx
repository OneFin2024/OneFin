import React from 'react'

function Testimonials() {
  return (
    <>
   
   
  <div className="page-wrapper">
  
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"
        }}
      />
      {/* /.page-header__bg */}
      <div className="container">
        <div className="page-header__content">
          <h2 className="page-header__title">testimonials Carousel</h2>
          <ul className="easilon-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Our testimonials</span>
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
    <section className="testimonials-page testimonials-page--carousel-1 section-space">
      <div className="container">
        <div
          className="testimonials-page__carousel easilon-owl__carousel easilon-owl__carousel--with-shadow easilon-owl__carousel--basic-nav owl-carousel owl-theme"
          data-owl-options='{
			"items": 1,
			"margin": 10,
			"loop": true,
			"smartSpeed": 700,
			"nav": false,
			"dots": true,
			"navText": ["<span class=\"icon-arrow-left\"></span>","<span class=\"icon-arrow-right\"></span>"],
			"autoplay": true,
			"responsive": {
				"0": {
					"items": 1,
					"nav": true,
					"dots": false,
					"margin": 10
				},
				"992": {
					"items": 2,
					"margin": 30
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
                  Introduccion quick win we should have a meeting to discuss the
                  details of the next meeting this medium needs to be more
                  dynamic, so let's
                </p>
                {/* /.testimonial-card-two__quote */}
                <div className="testimonial-card-two__bottom">
                  <div className="testimonial-card-two__identity">
                    <h4 className="testimonial-card-two__name">Mike Hardson</h4>
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
                  We need to harvest synergy effects this vendor is incompetent
                  , or business impact. Land the plane we want to see more
                  charts at the end of the day
                </p>
                {/* /.testimonial-card-two__quote */}
                <div className="testimonial-card-two__bottom">
                  <div className="testimonial-card-two__identity">
                    <h4 className="testimonial-card-two__name">Judith White</h4>
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
                  Introduccion quick win we should have a meeting to discuss the
                  details of the next meeting this medium needs to be more
                  dynamic, so let's
                </p>
                {/* /.testimonial-card-two__quote */}
                <div className="testimonial-card-two__bottom">
                  <div className="testimonial-card-two__identity">
                    <h4 className="testimonial-card-two__name">Mike Hardson</h4>
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
                  We need to harvest synergy effects this vendor is incompetent
                  , or business impact. Land the plane we want to see more
                  charts at the end of the day
                </p>
                {/* /.testimonial-card-two__quote */}
                <div className="testimonial-card-two__bottom">
                  <div className="testimonial-card-two__identity">
                    <h4 className="testimonial-card-two__name">Judith White</h4>
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
        {/* /.testimonials-page__carousel */}
      </div>
      {/* /.container */}
    </section>
    {/* /.testimonials-page section-space */}
   
  </div>
  {/* /.page-wrapper */}
</>

      
   
  )
}

export default Testimonials
