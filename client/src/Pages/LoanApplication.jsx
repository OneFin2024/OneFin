import React, { useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function LoanApplication() {
  const navigate = useNavigate();
  const submitForm = () => {
    
    if(localStorage.getItem('user')){
    
    navigate('/LoanProg')
    
  }else{

    navigate('/Login')

  }
  }


  const [formData, setFormData] = useState({
    loanAmount: '',
    monthlyIncome: '',
    loanPurpose: '',
    loanYears: '',
    fullName: '',
    email: '',
    mobileNumber: '',
    maritalStatus: '',
    birthDate: '',
    numberOfDependents: '',
    houseInfo: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });
  useEffect(() => {
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
  }, []);
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

  const numberOfDependentsOptions = [
    { value: '1', label: '1 dependent' },
    { value: '2', label: '2 dependents' },
    { value: '3', label: '3 dependents' },
    { value: '4', label: '4 dependents' },
    { value: '5', label: '5 dependents' },
  ];

  const stateOptions = [
    { value: 'Barisal Division', label: 'Barisal Division' },
    { value: 'Chittagong Division', label: 'Chittagong Division' },
    { value: 'Dhaka Division', label: 'Dhaka Division' },
    { value: 'Khulna Division', label: 'Khulna Division' },
    { value: 'Rajshahi Division', label: 'Rajshahi Division' },
    { value: 'Rangpur Division', label: 'Rangpur Division' },
    { value: 'Sylhet Division', label: 'Sylhet Division' },
  ];

  const countryOptions = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Afghanistan', label: 'Afghanistan' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Jordan', label: 'Jordan' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States of America', label: 'United States of America' },
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
  
  if (!user) {
    alert('User not logged in');
    return;
  }

  // const token = user.token; // Assuming your JWT token is stored in user.token
  // const header = {
  //   'Authorization': `Bearer ${token}`
  // };

  const loanApplicationData = {
    ...formData,
    userId: user.user.id,
  };

  try {
    const response = await axios.post('http://localhost:9987/loan-application', loanApplicationData);
    console.log('Form submitted successfully:', response.data);
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



            
            <div className="apply-loan__details">
              {/* <h2 className="apply-loan__details__title">Personal Details</h2> */}
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
                    <label htmlFor="mobile-number">Business Name</label>
                    <input
                      type="text"
                      id="Business-Name"
                      name="BusinessName"
                      placeholder="Business Name"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Industry</label>
                    <input
                      type="text"
                      id="Industry"
                      name="Industry"
                      placeholder="Industry"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">Initiation Year - Min (2 years in business) *
                    </label>
                    <input
                      type="text"
                      id="Industry"
                      name="Industry"
                      placeholder="Industry"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label htmlFor="mobile-number">State Tax ID
                    </label>
                    <input
                      type="text"
                      id="tax"
                      name="tax"
                      placeholder="State Tax ID"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>



                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                  <label htmlFor="mobile-number">Credit Score
                    </label>
                    <input
                      type="text"
                      id="tax"
                      name="tax"
                      placeholder="Credit Score"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
              </div>
              
                


                <div className="col-md-6">
                  <div className="apply-loan__form__control">
                    <label>Credit Score
                    *</label>
                    <Select
                      options={Creditrating}
                      onChange={(selectedOption) => handleSelectChange('Creditrating', selectedOption)}
                    />
                  </div>
              </div>


                </div>
             
               
              
            </div>
            </div>
          



            <button type="submit" onClick={()=>{submitForm()}} className="apply-loan__form__btn easilon-btn">
              <span  >submit now</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoanApplication;
