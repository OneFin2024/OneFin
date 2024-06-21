import React from 'react'

function LoanApplication() {
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
          <h2 className="page-header__title">apply loan</h2>
          <ul className="easilon-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>apply loan</span>
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
    <section className="apply-loan section-space">
      <div className="container">
        <form action="#" className="apply-loan__form">
          {/* Loan Details */}
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Loan Details</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="loan-amount">Loan Amount*</label>
                  <input
                    type="text"
                    id="loan-amount"
                    placeholder="$25000.00"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="monthly-income">Monthly Income*</label>
                  <input
                    type="text"
                    id="monthly-income"
                    placeholder="$1000.00"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Purpose of Loan*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Purpose of Loan</option>
                    <option value={1}>home loan</option>
                    <option value={2}>bike loan</option>
                    <option value={3}>business loan</option>
                    <option value={4}>education loan</option>
                    <option value={5}>study loan</option>
                    <option value={6}>property loan</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Loan Years*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Loan Years</option>
                    <option value={1}>1 years</option>
                    <option value={2}>2 years</option>
                    <option value={3}>3 years</option>
                    <option value={4}>4 years</option>
                    <option value={5}>5 years</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
            </div>
            {/* /.pply-loan__form */}
          </div>
          {/* /.apply-loan__details */}
          {/* Personal Details */}
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Personal Details</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Full Name*</label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">Email*</label>
                  <input
                    type="email"
                    id="enter-email"
                    placeholder="Enter Email"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Mobile Number*</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    placeholder="Mobile Number"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Marital Status*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Marital Status</option>
                    <option value={1}>married</option>
                    <option value={2}>single</option>
                    <option value={3}>widowed</option>
                    <option value={4}>divorced</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="datepicker">Birth Date*</label>
                  <div className="apply-loan__form__date">
                    <input
                      type="text"
                      name="date"
                      placeholder="DD / MM / YY"
                      id="datepicker"
                      className="easilon-datepicker"
                    />
                    <span className="apply-loan__form__date__icon">
                      <i className="icon-down" />
                    </span>
                    {/* /.apply-loan__form__date__icon */}
                  </div>
                  {/* /.apply-loan__form__field */}
                </div>
                {/* /.apply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Number Of Dependents*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Number Of Dependents</option>
                    <option value={1}>1 depends</option>
                    <option value={2}>2 depends</option>
                    <option value={3}>3 depends</option>
                    <option value={4}>4 depends</option>
                    <option value={5}>5 depends</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
            </div>
            {/* /.pply-loan__form */}
          </div>
          {/* /.apply-loan__details */}
          {/* Address Details */}
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Address Details</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="house-info">House No/Name*</label>
                  <input
                    type="text"
                    id="house-info"
                    placeholder="House No/Name"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="street">Street*</label>
                  <input
                    type="text"
                    id="street"
                    placeholder="Street"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="City Name"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>State*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">State</option>
                    <option value={1}>Barisal Division</option>
                    <option value={2}>Chittagong Division</option>
                    <option value={3}>Dhaka Division</option>
                    <option value={4}>Khulna Division</option>
                    <option value={5}>Rajshahi Division</option>
                    <option value={6}>Rangpur Division</option>
                    <option value={7}>Sylhet Division</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Country*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Country</option>
                    <option value={1}>Bangladesh</option>
                    <option value={2}>Afghanistan</option>
                    <option value={3}>Russia</option>
                    <option value={4}>Indonesia</option>
                    <option value={5}>Jordan</option>
                    <option value={6}>United Kingdom</option>
                    <option value={7}>United States of America</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="pin-code">Pin Code*</label>
                  <input
                    type="text"
                    id="pin-code"
                    placeholder="Pin Code"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
            </div>
            {/* /.pply-loan__form */}
          </div>
          {/* /.apply-loan__details */}
          {/* Other Details */}
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Other Details</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="employment-industry">
                    Employment Industry*
                  </label>
                  <input
                    type="text"
                    id="employment-industry"
                    placeholder="Employment Industry"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="employer-name">Employer Name*</label>
                  <input
                    type="text"
                    id="employer-name"
                    placeholder="Employer Name"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="employer-status">Employer Status*</label>
                  <input
                    type="text"
                    id="employer-status"
                    placeholder="Employer Status"
                    required=""
                  />
                </div>
                {/* /.pply-loan__form__control */}
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label>Work Phone Number*</label>
                  <select
                    className="selectpicker"
                    aria-label="Default select example"
                  >
                    <option selected="">Work Phone Number</option>
                    <option value={1}>(206) 342-8631</option>
                    <option value={2}>(717) 550-1675</option>
                    <option value={3}>(248) 762-0356</option>
                    <option value={4}>(252) 258-3799</option>
                    <option value={5}>(209) 300-2557</option>
                  </select>
                </div>
                {/* /.pply-loan__form__control */}
              </div>
            </div>
            {/* /.pply-loan__form */}
          </div>
          {/* /.apply-loan__details */}
          <button type="submit" className="apply-loan__form__btn easilon-btn">
            <span>submit now</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          {/* /.apply-loan__form__btn easilon-btn */}
        </form>
        {/* /.apply-loan__form */}
      </div>
      {/* /.container */}
    </section>
    {/* /.apply-loan section-space */}
 
  </div>
  {/* /.page-wrapper */}
</>

  )
}

export default LoanApplication
 