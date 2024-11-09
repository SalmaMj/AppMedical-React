import React , { Component, useState ,useRef } from 'react'
import SignUpForm from './SignUpForm';

import './Form.css'

const Register = () => {
   
    const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    
    <>
    <div className='form-container'>
    
      <span className='close-btn'>×</span>
      <div className='form-content-left'>
        <img className='form-img' src='https://beamian.com/wp-content/uploads/2020/08/Building_an_event_registration_strategy-scaled.jpg'
           alt='spaceship' />
           
               

         
      </div>
      <SignUpForm/>
    </div>
  </>
);
};
export default Register


