import React from 'react'

function ContactUs() {
  return (
    <>
    
  
  
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
          <h2 className="page-header__title">Contact Us</h2>
          <ul className="easilon-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Contact Us</span>
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
    <section className="contact-one section-space">
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          <div className="col-lg-6">
            <div
              className="contact-one__image wow fadeInLeft"
              data-wow-duration="1500ms"
              style={{
                backgroundImage: "url(assets/images/resources/contact-1-1.jpg)"
              }}
            >
              <div className="contact-one__info list-unstyled">
                <div className="contact-one__info__shape" />
                {/* /.contact-one__info__shape */}
                <div className="contact-one__info__inner">
                  <div className="contact-one__info__item">
                    <span className="contact-one__info__icon">
                      <i className="icon-location" />
                    </span>
                    {/* /.contact-one__info__icon */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        Mailing Address
                      </h4>
                      {/* /.contact-one__info__title */}
                      <a
                        href="https://maps.app.goo.gl/wpr8sgirX4NK6VsU7"
                        className="contact-one__info__text"
                      >
                        901 N Pitt Str., Suite <br /> 170 Alexandria, USA
                      </a>
                      {/* /.contact-one__info__text */}
                    </div>
                    {/* /.contact-one__info__content */}
                  </div>
                  {/* /.contact-one__info__item */}
                  <div className="contact-one__info__item">
                    <span className="contact-one__info__icon">
                      <i className="icon-telephone" />
                    </span>
                    {/* /.contact-one__info__icon */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        Quick Contact
                      </h4>
                      {/* /.contact-one__info__title */}
                      <a
                        href="tel:(406)555-0120"
                        className="contact-one__info__text"
                      >
                        (406) 555-0120
                      </a>
                      {/* /.contact-one__info__text */}
                    </div>
                    {/* /.contact-one__info__content */}
                  </div>
                  {/* /.contact-one__info__item */}
                  <div className="contact-one__info__item">
                    <span className="contact-one__info__icon">
                      <i className="icon-mail" />
                    </span>
                    {/* /.contact-one__info__icon */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        support email
                      </h4>
                      {/* /.contact-one__info__title */}
                      <a
                        href="mailto:info@easilon.com"
                        className="contact-one__info__text"
                      >
                        info@easilon.com
                      </a>
                      {/* /.contact-one__info__text */}
                    </div>
                    {/* /.contact-one__info__content */}
                  </div>
                  {/* /.contact-one__info__item */}
                </div>
                {/* /.contact-one__info__inner */}
              </div>
              {/* /.contact-one__info */}
            </div>
            {/* /.contact-one__image */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6">
            <form
              className="contact-one__form contact-form-validated form-one wow fadeInRight"
              data-wow-duration="1500ms"
              action="inc/sendemail.php"
            >
              <h2 className="contact-one__form__title">Leave us a message</h2>
              {/* /.contact-one__form__title */}
              <div className="form-one__group">
                <div className="form-one__control">
                  <input type="text" name="name" placeholder="Your Name" />
                </div>
                {/* /.form-one__control */}
                <div className="form-one__control">
                  <input type="email" name="email" placeholder="Your Email" />
                </div>
                {/* /.form-one__control */}
                <div className="form-one__control form-one__control--full">
                  <div className="form-one__control__select">
                    <label className="sr-only" htmlFor="select-subject">
                      Select Subject
                    </label>
                    <select
                      className="selectpicker"
                      id="select-subject"
                      aria-label="Subject line"
                    >
                      <option selected="">Select Subject</option>
                      <option value={1}>home loan</option>
                      <option value={2}>personal loan</option>
                      <option value={3}>business loan</option>
                      <option value={4}>study loan</option>
                      <option value={5}>bike loan</option>
                      <option value={6}>property loan</option>
                    </select>
                  </div>
                  {/* /.form-one__control__select */}
                </div>
                {/* /.form-one__control form-one__control--full */}
                <div className="form-one__control form-one__control--full">
                  <textarea
                    name="message"
                    placeholder="Write Message"
                    defaultValue={""}
                  />
                </div>
                {/* /.form-one__control */}
                <div className="form-one__control form-one__control--full">
                  <button
                    type="submit"
                    className="contact-one__form__btn easilon-btn"
                  >
                    <span>send message</span>
                  </button>
                </div>
                {/* /.form-one__control */}
              </div>
              {/* /.form-one__group */}
            </form>
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row gutter-y-50 */}
      </div>
      {/* /.container */}
    </section>
    {/* /.contact-one section-space */}
 











    {/* /.main-footer */}
 

</>

      
   
  )
}

export default ContactUs
