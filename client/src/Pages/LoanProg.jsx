import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoanProg() {
  const navigate = useNavigate();

  const [state, setstate] = useState("BusinessLoanApplication");
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    taxID: '',
    companyName: '',
    address: '',
    BusinessStarted: '',
    phoneNumber: '',
    email: '',
    website: '',
    licenseNumber: '',
    employerID: '',
    principalBusinessActivity: '',
    dateBusinessStarted: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const switchView = (option) => {
    setstate(option)
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
  
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(selectedFile);
    console.log('FormData:', formData);
  
    try {
      const response = await axios.post('http://localhost:3001/api/uploadDoc', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Response:', response);
  
      const extractedData = response.data;
      setFormData({
        taxID: extractedData.taxID,
        companyName: extractedData.companyName,
        address: extractedData.address,
        BusinessStarted: extractedData.BusinessStarted,
        phoneNumber: extractedData.phoneNumber,
        email: extractedData.email,
        website: extractedData.website,
        licenseNumber: extractedData.licenseNumber,
        employerID: extractedData.employerID,
        principalBusinessActivity: extractedData.principalBusinessActivity,
        dateBusinessStarted: extractedData.dateBusinessStarted
      });
      handleClose();
    } catch (error) {
      console.error('Error uploading file:', error);
      // You can also display an error message to the user here
    }
  };
  const styles = {
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%'
    },
    fileUpload: {
      marginBottom: '20px'
    },
    dragDropArea: {
      border: '2px dashed #007bff',
      borderRadius: '5px',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer'
    },
    dragDropLabel: {
      display: 'block',
      cursor: 'pointer',
      fontSize: '18px',
      color: '#007bff'
    },
    modalHeader: {
      borderBottom: '1px solid #dee2e6'
    },
    modalBody: {
      padding: '20px'
    },
    modalFooter: {
      borderTop: '1px solid #dee2e6'
    }
  };

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
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                        value={formData.taxID}
                        onChange={e => setFormData({ ...formData, taxID: e.target.value })}
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
                        value={formData.employerID}
                        onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" onClick={() => { switchView("ContactInformation") }} className="apply-loan__form__btn easilon-btn">
                <span>NEXT</span>
                <span className="easilon-btn__icon">
                  <i className="icon-double-right-arrow" />
                </span>
              </button>
              <p style={{ margin: '10px', fontSize: '16px' }}>or upload doc to fill in faster</p>

              <button type="submit" onClick={handleShow} className="apply-loan__form__btn easilon-btn">
                <span>Upload Tax Document</span>
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
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
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
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
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
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
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
                        value={formData.address}
                        onChange={e => setFormData({ ...formData, address: e.target.value })}
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
                        value={formData.employerID}
                        onChange={e => setFormData({ ...formData, employerID: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" onClick={() => { switchView("BusinessDetails") }} className="apply-loan__form__btn easilon-btn">
                <span>NEXT</span>
                <span className="easilon-btn__icon">
                  <i className="icon-double-right-arrow" />
                </span>
              </button>
              <button onClick={() => { switchView("BusinessLoanApplication") }} type="submit" className="apply-loan__form__btn easilon-btn">
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
                        value={formData.employerID}
                        onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                        value={formData.dateBusinessStarted}
                        onChange={e => setFormData({ ...formData, dateBusinessStarted: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" onClick={() => { switchView("TaxLiens") }} className="apply-loan__form__btn easilon-btn">
                <span>NEXT</span>
                <span className="easilon-btn__icon">
                  <i className="icon-double-right-arrow" />
                </span>
              </button>
              <button onClick={() => { switchView("ContactInformation") }} type="submit" className="apply-loan__form__btn easilon-btn">
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
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                        value={formData.taxID}
                        onChange={e => setFormData({ ...formData, taxID: e.target.value })}
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
                        value={formData.employerID}
                        onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" onClick={() => { switchView("RequestDetails") }} className="apply-loan__form__btn easilon-btn">
                <span>NEXT</span>
                <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
            <button onClick={() => { switchView("BusinessDetails") }} type="submit" className="apply-loan__form__btn easilon-btn">
              <span>PREV</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>}

    {state === "RequestDetails" && <div className="page-wrapper">
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
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                      value={formData.taxID}
                      onChange={e => setFormData({ ...formData, taxID: e.target.value })}
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
                      value={formData.employerID}
                      onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" onClick={() => { switchView("purchaseequipment") }} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
            <button onClick={() => { switchView("TaxLiens") }} type="submit" className="apply-loan__form__btn easilon-btn">
              <span>PREV</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>}

    {state === "purchaseequipment" && <div className="page-wrapper">
      <section className="apply-loan section-space">
        <div className="container">
          <form className="apply-loan__form">
            <div className="apply-loan__details">
              <h2 className="apply-loan__details__title">purchase equipment</h2>
              <div className="apply-loan__form__row row">
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="full-name">Legal Business Name</label>
                    <input
                      type="text"
                      id="Legal-Business-Name"
                      name="Legal Business Name"
                      placeholder="Legal Business Name"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                      value={formData.taxID}
                      onChange={e => setFormData({ ...formData, taxID: e.target.value })}
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
                      value={formData.employerID}
                      onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" onClick={() => { switchView("ApplicantInformation") }} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
            <button onClick={() => { switchView("RequestDetails") }} type="submit" className="apply-loan__form__btn easilon-btn">
              <span>PREV</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>}

    {state === "ApplicantInformation" && <div className="page-wrapper">
      <section className="apply-loan section-space">
        <div className="container">
          <form className="apply-loan__form">
            <div className="apply-loan__details">
              <h2 className="apply-loan__details__title">Applicants</h2>
              <div className="apply-loan__form__row row">
                <div className="col-md-4">
                  <div className="apply-loan__form__control">
                    <label htmlFor="full-name">Legal Business Name</label>
                    <input
                      type="text"
                      id="Legal-Business-Name"
                      name="Legal Business Name"
                      placeholder="Legal Business Name"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
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
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
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
                      value={formData.taxID}
                      onChange={e => setFormData({ ...formData, taxID: e.target.value })}
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
                      value={formData.employerID}
                      onChange={e => setFormData({ ...formData, employerID: e.target.value })}
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
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" onClick={() => { switchView("RequestDetails") }} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
            <button onClick={() => { switchView("purchaseequipment") }} type="submit" className="apply-loan__form__btn easilon-btn">
              <span>PREV</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>}

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={styles.modalHeader}>
        <Modal.Title>Upload Tax Document</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        <div
          style={styles.dragDropArea}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            hidden
          />
          <label htmlFor="file-input" style={styles.dragDropLabel}>
            {selectedFile ? selectedFile.name : 'Drag & drop a file here or click to select'}
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer style={styles.modalFooter}>
        <Button variant="primary" onClick={handleUpload}>
          Upload and Prefill
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default LoanProg;