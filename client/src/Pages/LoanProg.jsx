import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoanProg() {
  const navigate = useNavigate();

  const [state, setstate] = useState("PersonalInformation");
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
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/uploadDo`, formData, {
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

      {state === "PersonalInformation" && (
  <div className="page-wrapper">
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Personal Information</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={e => setFormData({ ...formData, dob: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="ssn">Social Security Number</label>
                  <input
                    type="text"
                    id="ssn"
                    name="ssn"
                    placeholder="123-45-6789"
                    value={formData.ssn}
                    onChange={e => setFormData({ ...formData, ssn: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="home-address">Home Address</label>
                  <input
                    type="text"
                    id="home-address"
                    name="homeAddress"
                    placeholder="123 Main St"
                    value={formData.homeAddress}
                    onChange={e => setFormData({ ...formData, homeAddress: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="citizenship">Citizenship Status</label>
                  <select
                    id="citizenship"
                    name="citizenship"
                    value={formData.citizenship}
                    onChange={e => setFormData({ ...formData, citizenship: e.target.value })}
                    className="form-control"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="us-citizen">US Citizen</option>
                    <option value="permanent-resident">Permanent Resident</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="marital-status">Marital Status</label>
                  <select
                    id="marital-status"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={e => setFormData({ ...formData, maritalStatus: e.target.value })}
                    className="form-control"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="dependents">Number of Dependents</label>
                  <input
                    type="number"
                    id="dependents"
                    name="dependents"
                    placeholder="0"
                    value={formData.dependents}
                    onChange={e => setFormData({ ...formData, dependents: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="apply-loan__form__buttons">
            <button type="button" onClick={() => switchView("BusinessInformation")} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
)}



 {state === "BusinessInformation" && (
  <div className="page-wrapper">
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Business Information</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-legal-name">Business Legal Name</label>
                  <input
                    type="text"
                    id="business-legal-name"
                    name="businessLegalName"
                    placeholder="ABC Corp"
                    value={formData.businessLegalName}
                    onChange={e => setFormData({ ...formData, businessLegalName: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="dba-name">Doing Business As (DBA) Name</label>
                  <input
                    type="text"
                    id="dba-name"
                    name="dbaName"
                    placeholder="ABC Services"
                    value={formData.dbaName}
                    onChange={e => setFormData({ ...formData, dbaName: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="tax-id">Tax Identification Number (TIN)</label>
                  <input
                    type="text"
                    id="tax-id"
                    name="taxId"
                    placeholder="12-3456789"
                    value={formData.taxId}
                    onChange={e => setFormData({ ...formData, taxId: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-address">Business Address</label>
                  <input
                    type="text"
                    id="business-address"
                    name="businessAddress"
                    placeholder="456 Business Rd"
                    value={formData.businessAddress}
                    onChange={e => setFormData({ ...formData, businessAddress: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-phone">Business Phone Number</label>
                  <input
                    type="tel"
                    id="business-phone"
                    name="businessPhone"
                    placeholder="(987) 654-3210"
                    value={formData.businessPhone}
                    onChange={e => setFormData({ ...formData, businessPhone: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-email">Email Address</label>
                  <input
                    type="email"
                    id="business-email"
                    name="businessEmail"
                    placeholder="info@abccorp.com"
                    value={formData.businessEmail}
                    onChange={e => setFormData({ ...formData, businessEmail: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="industry-type">Industry Type</label>
                  <select
                    id="industry-type"
                    name="industryType"
                    value={formData.industryType}
                    onChange={e => setFormData({ ...formData, industryType: e.target.value })}
                    className="form-control"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-start-date">Business Start Date</label>
                  <input
                    type="date"
                    id="business-start-date"
                    name="businessStartDate"
                    value={formData.businessStartDate}
                    onChange={e => setFormData({ ...formData, businessStartDate: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-structure">Business Structure</label>
                  <select
                    id="business-structure"
                    name="businessStructure"
                    value={formData.businessStructure}
                    onChange={e => setFormData({ ...formData, businessStructure: e.target.value })}
                    className="form-control"
                    required
                  >
                    <option value="">Select Structure</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="partnership">Partnership</option>
                    <option value="sole-proprietor">Sole Proprietor</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="num-employees">Number of Employees</label>
                  <input
                    type="number"
                    id="num-employees"
                    name="numEmployees"
                    placeholder="0"
                    value={formData.numEmployees}
                    onChange={e => setFormData({ ...formData, numEmployees: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="annual-revenue">Annual Revenue</label>
                  <input
                    type="number"
                    id="annual-revenue"
                    name="annualRevenue"
                    placeholder="$0"
                    value={formData.annualRevenue}
                    onChange={e => setFormData({ ...formData, annualRevenue: e.target.value })}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="apply-loan__form__buttons">
            <button type="button" onClick={() => switchView("PersonalInformation")} className="apply-loan__form__btn easilon-btn">
              <span>BACK</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-left-arrow" />
              </span>
            </button>
            <button type="button" onClick={() => switchView("FinancialDocumentation")} className="apply-loan__form__btn easilon-btn">
              <span>NEXT</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
)}

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

  
    {state === "FinancialDocumentation" && (
  <div className="page-wrapper">
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Financial Documentation</h2>

            <div className="apply-loan__form__row row">
              {/* Business Financial Statements */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-financial-statements" className="apply-loan__form__label">
                    Business Financial Statements
                  </label>
                  <input
                    type="file"
                    id="business-financial-statements"
                    name="businessFinancialStatements"
                    onChange={e => setFormData({ ...formData, businessFinancialStatements: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="business-financial-statements"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.businessFinancialStatements
                        ? formData.businessFinancialStatements.name
                        : 'Choose Business Financial Statements'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Profit and Loss Statement */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="profit-loss-statement" className="apply-loan__form__label">
                    Profit and Loss Statement
                  </label>
                  <input
                    type="file"
                    id="profit-loss-statement"
                    name="profitLossStatement"
                    onChange={e => setFormData({ ...formData, profitLossStatement: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="profit-loss-statement"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.profitLossStatement
                        ? formData.profitLossStatement.name
                        : 'Choose Profit and Loss Statement'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Current Balance Sheet */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="current-balance-sheet" className="apply-loan__form__label">
                    Current Balance Sheet
                  </label>
                  <input
                    type="file"
                    id="current-balance-sheet"
                    name="currentBalanceSheet"
                    onChange={e => setFormData({ ...formData, currentBalanceSheet: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="current-balance-sheet"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.currentBalanceSheet
                        ? formData.currentBalanceSheet.name
                        : 'Choose Current Balance Sheet'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Projected Financials */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="projected-financials" className="apply-loan__form__label">
                    Projected Financials
                  </label>
                  <input
                    type="file"
                    id="projected-financials"
                    name="projectedFinancials"
                    onChange={e => setFormData({ ...formData, projectedFinancials: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="projected-financials"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.projectedFinancials
                        ? formData.projectedFinancials.name
                        : 'Choose Projected Financials'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Personal Financial Statements */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="personal-financial-statements" className="apply-loan__form__label">
                    Personal Financial Statements
                  </label>
                  <input
                    type="file"
                    id="personal-financial-statements"
                    name="personalFinancialStatements"
                    onChange={e => setFormData({ ...formData, personalFinancialStatements: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="personal-financial-statements"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.personalFinancialStatements
                        ? formData.personalFinancialStatements.name
                        : 'Choose Personal Financial Statements'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Income Tax Returns */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="income-tax-returns" className="apply-loan__form__label">
                    Income Tax Returns
                  </label>
                  <input
                    type="file"
                    id="income-tax-returns"
                    name="incomeTaxReturns"
                    onChange={e => setFormData({ ...formData, incomeTaxReturns: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="income-tax-returns"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.incomeTaxReturns
                        ? formData.incomeTaxReturns.name
                        : 'Choose Income Tax Returns'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Business Legal Documents */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-legal-documents" className="apply-loan__form__label">
                    Business Legal Documents
                  </label>
                  <input
                    type="file"
                    id="business-legal-documents"
                    name="businessLegalDocuments"
                    onChange={e => setFormData({ ...formData, businessLegalDocuments: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="business-legal-documents"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.businessLegalDocuments
                        ? formData.businessLegalDocuments.name
                        : 'Choose Business Legal Documents'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Business Debt Schedule */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-debt-schedule" className="apply-loan__form__label">
                    Business Debt Schedule
                  </label>
                  <input
                    type="file"
                    id="business-debt-schedule"
                    name="businessDebtSchedule"
                    onChange={e => setFormData({ ...formData, businessDebtSchedule: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="business-debt-schedule"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.businessDebtSchedule
                        ? formData.businessDebtSchedule.name
                        : 'Choose Business Debt Schedule'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Ownership and Affiliation Documents */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="ownership-affiliation-documents" className="apply-loan__form__label">
                    Ownership and Affiliation Documents
                  </label>
                  <input
                    type="file"
                    id="ownership-affiliation-documents"
                    name="ownershipAffiliationDocuments"
                    onChange={e => setFormData({ ...formData, ownershipAffiliationDocuments: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="ownership-affiliation-documents"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.ownershipAffiliationDocuments
                        ? formData.ownershipAffiliationDocuments.name
                        : 'Choose Ownership and Affiliation Documents'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Personal Identification */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="personal-identification" className="apply-loan__form__label">
                    Personal Identification
                  </label>
                  <input
                    type="file"
                    id="personal-identification"
                    name="personalIdentification"
                    onChange={e => setFormData({ ...formData, personalIdentification: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="personal-identification"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.personalIdentification
                        ? formData.personalIdentification.name
                        : 'Choose Personal Identification'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Business Lease */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-lease" className="apply-loan__form__label">
                    Business Lease
                  </label>
                  <input
                    type="file"
                    id="business-lease"
                    name="businessLease"
                    onChange={e => setFormData({ ...formData, businessLease: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="business-lease"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.businessLease
                        ? formData.businessLease.name
                        : 'Choose Business Lease'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Bank Statements */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="bank-statements" className="apply-loan__form__label">
                    Bank Statements
                  </label>
                  <input
                    type="file"
                    id="bank-statements"
                    name="bankStatements"
                    onChange={e => setFormData({ ...formData, bankStatements: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="bank-statements"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.bankStatements
                        ? formData.bankStatements.name
                        : 'Choose Bank Statements'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="apply-loan__form__actions">
              <button type="button" className="apply-loan__form__btn easilon-btn" onClick={() => switchView("BusinessInformation")}>
                Previous
                <span className="easilon-btn__icon">
                  <i className="icon-arrow-left" />
                </span>
              </button>
              <button type="button" className="apply-loan__form__btn easilon-btn" onClick={() => switchView("LegalDocumentation")}>
                Next
                <span className="easilon-btn__icon">
                  <i className="icon-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
)}





{state === "LegalDocumentation" && (
  <div className="page-wrapper">
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Legal Documentation</h2>

            <div className="apply-loan__form__row row">
              {/* Business Licenses and Permits */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-licenses-permits" className="apply-loan__form__label">
                    Business Licenses and Permits
                  </label>
                  <input
                    type="file"
                    id="business-licenses-permits"
                    name="businessLicensesPermits"
                    onChange={e => setFormData({ ...formData, businessLicensesPermits: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="business-licenses-permits"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.businessLicensesPermits
                        ? formData.businessLicensesPermits.name
                        : 'Choose Business Licenses and Permits'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Articles of Incorporation or Organization */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="articles-of-incorporation" className="apply-loan__form__label">
                    Articles of Incorporation or Organization
                  </label>
                  <input
                    type="file"
                    id="articles-of-incorporation"
                    name="articlesOfIncorporation"
                    onChange={e => setFormData({ ...formData, articlesOfIncorporation: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="articles-of-incorporation"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.articlesOfIncorporation
                        ? formData.articlesOfIncorporation.name
                        : 'Choose Articles of Incorporation or Organization'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Bylaws or Operating Agreement */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="bylaws-operating-agreement" className="apply-loan__form__label">
                    Bylaws or Operating Agreement
                  </label>
                  <input
                    type="file"
                    id="bylaws-operating-agreement"
                    name="bylawsOperatingAgreement"
                    onChange={e => setFormData({ ...formData, bylawsOperatingAgreement: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="bylaws-operating-agreement"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.bylawsOperatingAgreement
                        ? formData.bylawsOperatingAgreement.name
                        : 'Choose Bylaws or Operating Agreement'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Commercial Lease Agreement */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="commercial-lease-agreement" className="apply-loan__form__label">
                    Commercial Lease Agreement (if applicable)
                  </label>
                  <input
                    type="file"
                    id="commercial-lease-agreement"
                    name="commercialLeaseAgreement"
                    onChange={e => setFormData({ ...formData, commercialLeaseAgreement: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="commercial-lease-agreement"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.commercialLeaseAgreement
                        ? formData.commercialLeaseAgreement.name
                        : 'Choose Commercial Lease Agreement'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Franchise Agreements */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="franchise-agreements" className="apply-loan__form__label">
                    Franchise Agreements (if applicable)
                  </label>
                  <input
                    type="file"
                    id="franchise-agreements"
                    name="franchiseAgreements"
                    onChange={e => setFormData({ ...formData, franchiseAgreements: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="franchise-agreements"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.franchiseAgreements
                        ? formData.franchiseAgreements.name
                        : 'Choose Franchise Agreements'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Contracts or Agreements with Suppliers, Vendors, or Customers */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="contracts-agreements" className="apply-loan__form__label">
                    Contracts or Agreements with Suppliers, Vendors, or Customers
                  </label>
                  <input
                    type="file"
                    id="contracts-agreements"
                    name="contractsAgreements"
                    onChange={e => setFormData({ ...formData, contractsAgreements: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="contracts-agreements"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.contractsAgreements
                        ? formData.contractsAgreements.name
                        : 'Choose Contracts or Agreements'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>

              {/* Insurance Policies */}
              <div className="col-md-6">
                <div className="apply-loan__form__control">
                  <label htmlFor="insurance-policies" className="apply-loan__form__label">
                    Insurance Policies
                  </label>
                  <input
                    type="file"
                    id="insurance-policies"
                    name="insurancePolicies"
                    onChange={e => setFormData({ ...formData, insurancePolicies: e.target.files[0] })}
                    hidden
                  />
                  <label
                    htmlFor="insurance-policies"
                    className="apply-loan__form__file-btn easilon-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                     
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '0.75rem'
                    }}
                  >
                    <span>
                      {formData.insurancePolicies
                        ? formData.insurancePolicies.name
                        : 'Choose Insurance Policies'}
                    </span>
                    <span className="easilon-btn__icon">
                      <i className="icon-upload" />
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="apply-loan__form__actions">
              <button type="button" className="apply-loan__form__btn easilon-btn" onClick={() => switchView("FinancialDocumentation")}>
                Previous
                <span className="easilon-btn__icon">
                  <i className="icon-arrow-left" />
                </span>
              </button>
              <button type="button" className="apply-loan__form__btn easilon-btn" onClick={() => switchView("LoanApplicationSteps")}>
                Next
                <span className="easilon-btn__icon">
                  <i className="icon-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
)}


{state === "LoanApplicationSteps" && (
  <div className="page-wrapper">
    <section className="apply-loan section-space">
      <div className="container">
        <form className="apply-loan__form">
          <div className="apply-loan__details">
            <h2 className="apply-loan__details__title">Loan Application Steps</h2>
            <div className="apply-loan__form__row row">
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="general-information">General Information</label>
                  <input
                    type="text"
                    id="general-information"
                    name="generalInformation"
                    placeholder="General Information"
                    value={formData.generalInformation}
                    onChange={e => setFormData({ ...formData, generalInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="contact-information">Contact Information</label>
                  <input
                    type="text"
                    id="contact-information"
                    name="contactInformation"
                    placeholder="Contact Information"
                    value={formData.contactInformation}
                    onChange={e => setFormData({ ...formData, contactInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-details">Business Details</label>
                  <input
                    type="text"
                    id="business-details"
                    name="businessDetails"
                    placeholder="Business Details"
                    value={formData.businessDetails}
                    onChange={e => setFormData({ ...formData, businessDetails: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="loan-request-details">Loan Request Details</label>
                  <input
                    type="text"
                    id="loan-request-details"
                    name="loanRequestDetails"
                    placeholder="Loan Request Details"
                    value={formData.loanRequestDetails}
                    onChange={e => setFormData({ ...formData, loanRequestDetails: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="applicant-information">Applicant Information</label>
                  <input
                    type="text"
                    id="applicant-information"
                    name="applicantInformation"
                    placeholder="Applicant Information"
                    value={formData.applicantInformation}
                    onChange={e => setFormData({ ...formData, applicantInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-financial-information">Business Financial Information</label>
                  <input
                    type="text"
                    id="business-financial-information"
                    name="businessFinancialInformation"
                    placeholder="Business Financial Information"
                    value={formData.businessFinancialInformation}
                    onChange={e => setFormData({ ...formData, businessFinancialInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-real-estate-information">Business Real Estate Information</label>
                  <input
                    type="text"
                    id="business-real-estate-information"
                    name="businessRealEstateInformation"
                    placeholder="Business Real Estate Information"
                    value={formData.businessRealEstateInformation}
                    onChange={e => setFormData({ ...formData, businessRealEstateInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-receivables-and-purchases">Business Receivables and Purchases</label>
                  <input
                    type="text"
                    id="business-receivables-and-purchases"
                    name="businessReceivablesAndPurchases"
                    placeholder="Business Receivables and Purchases"
                    value={formData.businessReceivablesAndPurchases}
                    onChange={e => setFormData({ ...formData, businessReceivablesAndPurchases: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="business-trade-references-information">Business Trade References Information</label>
                  <input
                    type="text"
                    id="business-trade-references-information"
                    name="businessTradeReferencesInformation"
                    placeholder="Business Trade References Information"
                    value={formData.businessTradeReferencesInformation}
                    onChange={e => setFormData({ ...formData, businessTradeReferencesInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="apply-loan__form__control">
                  <label htmlFor="miscellaneous-information">Miscellaneous Information</label>
                  <input
                    type="text"
                    id="miscellaneous-information"
                    name="miscellaneousInformation"
                    placeholder="Miscellaneous Information"
                    value={formData.miscellaneousInformation}
                    onChange={e => setFormData({ ...formData, miscellaneousInformation: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="apply-loan__form__btn easilon-btn">
            <span>SUBMIT</span>
            <span className="easilon-btn__icon">
              <i className="icon-check" />
            </span>
          </button>
          <button type="button" onClick={() => { switchView("LegalDocumentation") }} className="apply-loan__form__btn easilon-btn">
            <span>PREV</span>
            <span className="easilon-btn__icon">
              <i className="icon-double-left-arrow" />
            </span>
          </button>
        </form>
      </div>
    </section>
  </div>
)}






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