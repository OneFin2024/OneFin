import React, { useState, useEffect } from 'react';

function LoanProg() {

  const [state, setstate] = useState("BusinessLoanApplication");

  const switchView=(option)=>{
    setstate(option)
}

  return (
    <>

   <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"
          }}
        />
        <div className="container">
          <div className="page-header__content">
            <h2 className="page-header__title">Apply Loan</h2>
            <ul className="easilon-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>Apply Loan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-header__border-box">
          <div className="page-header__border page-header__border--1" />
          <div className="page-header__border page-header__border--2" />
          <div className="page-header__border page-header__border--3" />
          <div className="page-header__border page-header__border--4" />
          <div className="page-header__border page-header__border--5" />
        </div>
    </section>


  {state === "BusinessLoanApplication" && <div className="page-wrapper">
      
      <section className="apply-loan section-space">
        <div className="container">
          <form className="apply-loan__form">
           


            <div className="apply-loan__details">
              <h2 className="apply-loan__details__title">General Information</h2>
              <div className="apply-loan__form__row row">
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="full-name">Legal Business Name</label>
                    <input
                      type="text"
                      id="Legal-Business-Name"
                      name="Legal Business Name"
                      placeholder="Legal Business Name"
                    //   value={formData.fullName}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="enter-email">DBA</label>
                    <input
                      type="text"
                      id="DBA"
                      name="DBA"
                      placeholder="Doing Business As"
                    //   value={formData.email}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">General Nature of Business</label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">State Tax ID Number</label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Contact Number</label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>


            <button type="submit" onClick={()=>{switchView("ContactInformation")}} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>}


  {state === "ContactInformation" && <div className="page-wrapper">
    
      <section className="apply-loan section-space">
        <div className="container">
          <form className="apply-loan__form">         


            <div className="apply-loan__details">
              <h2 className="apply-loan__details__title"> Contact Information </h2>
              <div className="apply-loan__form__row row">
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="full-name">Street</label>
                    <input
                      type="text"
                      id="Street"
                      name="Street"
                      placeholder="Street"
                    //   value={formData.fullName}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="enter-email">Unit</label>
                    <input
                      type="text"
                      id="Unit"
                      name="unit"
                      placeholder="Unit"
                    //   value={formData.email}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">State</label>
                    <input
                      type="text"
                      id="State"
                      name="State"
                      placeholder="State"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                    //   value={formData.mobileNumber}
                    //   onChange={handleChange}
                      required
                    />
                  </div>
                </div>
               
              </div>
            </div>
            

            <button type="submit" onClick={()=>{switchView("BusinessDetails")}} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
            <button onClick={()=>{switchView("BusinessLoanApplication")}} type="submit" className="apply-loan__form__btn easilon-btn">
              <span>PREV</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>



    </div>}


  {state === "BusinessDetails" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title"> Business Details  </h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Dun & Bradstreet # </label>
                  <input
                    type="text"
                    id="dun"
                    name="dun"
                    placeholder="Dun"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="text"
                    id="DBA"
                    name="DBA"
                    placeholder="DBA"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Business inception Date</label>
                  <input
                    type="text"
                    id="Business-inception-Date"
                    name="BusinessinceptionDate"
                    placeholder="Business inception Date"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("TaxLiens")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("ContactInformation")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}

  {state === "TaxLiens" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Tax Liens </h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Legal Business Name</label>
                  <input
                    type="text"
                    id="Legal-Business-Name"
                    name="Legal Business Name"
                    placeholder="Legal Business Name"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="email"
                    id="enter-email"
                    name="email"
                    placeholder="Enter Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">General Nature of Business</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">State Tax ID Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Contact Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("RequestDetails")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("BusinessDetails")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}


  { state === "RequestDetails" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Request Details</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Legal Business Name</label>
                  <input
                    type="text"
                    id="Legal-Business-Name"
                    name="Legal Business Name"
                    placeholder="Legal Business Name"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="email"
                    id="enter-email"
                    name="email"
                    placeholder="Enter Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">General Nature of Business</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">State Tax ID Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Contact Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("purchaseequipment")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("TaxLiens")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}





     { state === "purchaseequipment" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">purchase equipment
            </h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Legal Business Name</label>
                  <input
                    type="text"
                    id="Legal-Business-Name"
                    name="Legal Business Name"
                    placeholder="Legal Business Name"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="email"
                    id="enter-email"
                    name="email"
                    placeholder="Enter Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">General Nature of Business</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">State Tax ID Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Contact Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("ApplicantInformation")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("RequestDetails")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}




     { state === "ApplicantInformation" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title"> Applicants
            </h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Legal Business Name</label>
                  <input
                    type="text"
                    id="Legal-Business-Name"
                    name="Legal Business Name"
                    placeholder="Legal Business Name"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="email"
                    id="enter-email"
                    name="email"
                    placeholder="Enter Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">General Nature of Business</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">State Tax ID Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Contact Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("RequestDetails")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("purchaseequipment")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}

     { state === "ApplicantInformation" && <div className="page-wrapper">
    
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
         


          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title"> Applicants
            </h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Legal Business Name</label>
                  <input
                    type="text"
                    id="Legal-Business-Name"
                    name="Legal Business Name"
                    placeholder="Legal Business Name"
                  //   value={formData.fullName}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="enter-email">DBA</label>
                  <input
                    type="email"
                    id="enter-email"
                    name="email"
                    placeholder="Enter Email"
                  //   value={formData.email}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">General Nature of Business</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">State Tax ID Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Fedral Tax ID Number </label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
              <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Contact Number</label>
                  <input
                    type="tel"
                    id="mobile-number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                  //   value={formData.mobileNumber}
                  //   onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


          <button type="submit" onClick={()=>{switchView("RequestDetails")}}  className="apply-loan__form__btn easilon-btn">
            <span>NEXT</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-right-arrow" />
            </span>
          </button>
          <button onClick={()=>{switchView("purchaseequipment")}} type="submit" className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>



     </div>}
      
    </>
  )
}

export default LoanProg
