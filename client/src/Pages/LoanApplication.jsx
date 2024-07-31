import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPrequalify } from '../reducers/prequalifySlice.js'; 
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button'; 

function LoanApplication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [lowCreditScore, setLowCreditScore] = useState(false);
  const [shortBusinessDuration, setShortBusinessDuration] = useState(false);

  const handleClose = () => {
    setShow(false);
    setLowCreditScore(false);
    setShortBusinessDuration(false);

  };
  const handleShow = () => setShow(true);

  const submitForm = () => {
    if (localStorage.getItem('user')) {
      navigate('/LoanProg');
    } else {
      navigate('/Login');
    }
  };

  const [formData, setFormData] = useState({  
    fullName: 'r',
    email: 'r',
    mobileNumber: '9',
    BusinessName: '',
    StreetAdresse: '',
    ZipCode: '',
    Industry: '',
    InitiationYear: '',
    CreditScore: '',
    CreditRating: '',
    state: 'x'
  });

  useEffect(() => {
    dispatch(fetchPrequalify());

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFormData((prevData) => ({
        ...prevData,
        fullName: user.fullName,
        email: user.email,
        mobileNumber: user.phone,
      }));
    }
  }, [dispatch]);

  const loanPurposeOptions = [
    { value: 'home', label: 'Home Loan' },
    { value: 'bike', label: 'Bike Loan' },
    { value: 'business', label: 'Business Loan' },
    { value: 'education', label: 'Education Loan' },
    { value: 'study', label: 'Study Loan' },
    { value: 'property', label: 'Property Loan' },
  ];

  const loanYearsOptions = [
    { value: '1', label: '1 year' },
    { value: '2', label: '2 years' },
    { value: '3', label: '3 years' },
    { value: '4', label: '4 years' },
    { value: '5', label: '5 years' },
  ];

  const Creditrating = [
    { value: 'Bad', label: 'Bad' },
    { value: 'Fair', label: 'Fair' },
    { value: 'Good', label: 'Good' },
    { value: 'Excellent', label: 'Excellent' },
  ];

  const stateOptions = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Delaware', label: 'Delaware' },
    { value: 'District Of Columbia', label: 'District Of Columbia' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Illinois', label: 'Illinois' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Maine', label: 'Maine' },
    { value: 'Maryland', label: 'Maryland' },
    { value: 'Massachusetts', label: 'Massachusetts' },
    { value: 'Michigan', label: 'Michigan' },
    { value: 'Minnesota', label: 'Minnesota' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Montana', label: 'Montana' },
    { value: 'Nebraska', label: 'Nebraska' },  
    { value: 'Nevada', label: 'Nevada' },
    { value: 'New Hampshire', label: 'New Hampshire' },
    { value: 'New Jersey', label: 'New Jersey' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'New York', label: 'New York' },
    { value: 'North Carolina', label: 'North Carolina' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Vermont', label: 'Vermont' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;

    // Check business duration
    const currentYear = new Date().getFullYear();
    const initiationYear = parseInt(formData.InitiationYear);
    if (isNaN(initiationYear) || (currentYear - initiationYear) < 2) {
      setShortBusinessDuration(true);
      return;
    }
    if (formData.CreditScore < 600) {
      setLowCreditScore(true);
      return;
    }
  
      const loanApplicationData = {
        ...formData,
        userId: user?.user.id,
      };

    

    try {
      console.log(formData);
      const response = await axios.post('http://localhost:3001/api/Prequalify/addPrequalify', loanApplicationData);
      console.log('Form submitted successfully:', response.data);
      handleShow();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/page-header-bg-1-1.jpg)"
          }}
        />
        <div className="container">
          <div className="page-header__content">
            <h2 className="page-header__title">Prequalify</h2>
            <ul className="easilon-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>Prequalify</span>
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
      <section className="apply-loan section-space">
        <div className="container">
          <form className="apply-loan__form" onSubmit={handleSubmit}>
            <div className="apply-loan__details">
              <h2 className="apply-loan__details__title">Fill the form below to prequalify</h2>
              <div className="apply-loan__form__row row">
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="full-name">Full Name*</label>
                    <input
                      type="text"
                      id="full-name"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="enter-email">Email*</label>
                    <input
                      type="email"
                      id="enter-email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Mobile Number*</label>
                    <input
                      type="tel"
                      id="mobile-number"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="Business-Name">Business Name</label>
                    <input
                      type="text"
                      id="Business-Name"
                      name="BusinessName"
                      placeholder="Business Name"
                      value={formData.BusinessName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="StreetAdresse">Street Address</label>
                    <input
                      type="text"
                      id="Street-Adresse"
                      name="StreetAdresse"
                      placeholder="Street Address"
                      value={formData.StreetAdresse}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="state">State</label>
                    <Select
                      options={stateOptions}
                      onChange={(selectedOption) => handleSelectChange('state', selectedOption)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="ZipCode">Zip Code</label>
                    <input
                      type="text"
                      id="Zip-Code"
                      name="ZipCode"
                      placeholder="Zip Code"
                      value={formData.ZipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="Industry">Industry</label>
                    <input
                      type="text"
                      id="Industry"
                      name="Industry"
                      placeholder="Industry"
                      value={formData.Industry}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="InitiationYear">Initiation Year *</label>
                    <input
                      type="text"
                      id="InitiationYear"
                      name="InitiationYear"
                      placeholder="Min (2 years in business)"
                      value={formData.InitiationYear}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label>Credit Rating*</label>
                    <Select
                      options={Creditrating}
                      onChange={(selectedOption) => handleSelectChange('CreditRating', selectedOption)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="CreditScore">Credit Score</label>
                    <input
                      type="text"
                      id="CreditScore"
                      name="CreditScore"
                      placeholder="Credit Score"
                      value={formData.CreditScore}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <button
                style={{ "zIndex": 0 }}
                type="submit"
                onClick={() => handleShow()}
                className="apply-loan__form__btn easilon-btn"
              >
                <span>Submit Now</span>
                <span className="easilon-btn__icon">
                  <i className="icon-double-right-arrow" />
                </span>
              </button>
            </div>
          </form>

          {/* Modal for low credit score */}
          <Modal show={lowCreditScore} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Credit Score Too Low</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your credit score is too low to proceed with the application.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={shortBusinessDuration} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Business Duration Too Short</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your business needs to be established for at least 2 years to qualify for this loan.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Modal for successful submission */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Prequalify Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>You can now create an account with us.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => {
                handleClose();
                submitForm();
              }}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default LoanApplication;
