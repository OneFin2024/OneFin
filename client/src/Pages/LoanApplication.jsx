import React, { useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPrequalify } from '../reducers/prequalifySlice.js'; 
import Modal from 'react-bootstrap/Modal'; 
import Button from 'react-bootstrap/Button'; 
  
function LoanApplication() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const { DataPrequalify } =useSelector (state => state.prequalify)
  // console.log("this is the data user in doc profile",DataPrequalify);

  // const { DataPrequalify } =useSelector (state => state.prequalify)





  const submitForm = () => {
     
    if(localStorage.getItem('user')){
    
    navigate('/LoanProg')
    
  }else{

    navigate('/Login')

  }
  }


  const [formData, setFormData] = useState({  
   
    fullName: '',
    email: '',
    mobileNumber: '',
    BusinessName:'',
    StreetAdresse:'',
    ZipCode:'',
    maritalStatus: '',
    street: '',
    Industry: '',
    state: '',
    InitiationYear: '',
    CreditScore: '',
    CreditRating: '',
  });
  useEffect(() => {

    dispatch(fetchPrequalify())

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
    { value: 'Illinois', label: 'Illinois ' },
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
    const response = await axios.post('http://localhost:3001/loan-application', loanApplicationData);
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
                    <label htmlFor="StreetAdresse"> Street Adresse</label>
                    <input
                      type="text"
                      id="Street-Adresse"
                      name="StreetAdresse"
                      placeholder="Street Adresse"
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
                      onChange={(selectedOption) => handleSelectChange('State', selectedOption)}
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
                    <label htmlFor="InitiationYear">Initiation Year *
                    </label>
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
                    <label>Credit Rating
                    *</label>
                    <Select
                      options={Creditrating}
                      onChange={(selectedOption) => handleSelectChange('Creditrating', selectedOption)}
                    />
                  </div>
              </div>

              <div className="col-md-6">
                  <div className="apply-loan__form__control">
                  <label htmlFor="CreditScore">Credit Score
                    </label>
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
             
               
              
            </div>
            </div>
          

            {/* */}

            <button  style={{"zIndex":0}} type="submit"
              // onClick={()=>{
              // handleShow()
             
              // }} 
               className="apply-loan__form__btn easilon-btn">
              <span  >submit now</span>
              <span className="easilon-btn__icon">
                <i className="icon-double-right-arrow" />
              </span>
            </button>            
          </form>

       

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prequalify success</Modal.Title>
        </Modal.Header>
        <Modal.Body>You can now Create account with us </Modal.Body>
        <Modal.Footer>
        
          <button className="apply-loan__form__btn easilon-btn" 
          onClick={()=>{
            handleClose()
          
          }

          }> 
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
        </div>
      </section>
    </div>
  );
}

export default LoanApplication;
