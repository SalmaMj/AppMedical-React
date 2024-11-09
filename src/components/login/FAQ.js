import React, { Component } from 'react'
import './Registration.css'

import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PatientService from '../../Services/PatientService';
const FAQ= () => {
	
  const history = useHistory();
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });
  const password = useRef({});
  password.current = watch("password", "");
  
  const submitHandler = (patient) => {
      console.log(JSON.stringify());
      PatientService.createPatient(patient)
          .then(resp=>{
              console.log(resp.patient);
              history.push({
                  pathname: '/loginn',
                  state: { message: resp.patient}
              });
          }).catch(err => {
              console.log(err);
          })
  }  
	
	
	return(
    
  <div>
    <form onSubmit={handleSubmit(submitHandler)} method="post" className="needs-validation" noValidate autoComplete="off">
 <body>
<section class="login_box_area section_gap">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="login_box_img">
          <img class="img-fluid" src="img/login.jpg" alt=""/>
		 <div class="hover">
            <h4>Have you an account?</h4>
            <a class="primary-btn" href="">Login</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="login_form_inner">
       
          
           <div class="col-md-12 form-group">
        <input type="text"
        className={classNames("form-control",{"is-invalid": errors.fullName})} name="fullName" placeholder="Entrer votre nom" 
        {...register('fullName', { 
            required: "Please enter your full name.",
            minLength: {
                value: 4,
                message: "Should be at least 4 characters"
            },
            pattern: {
                value: /^(?![\. ])[a-zA-Z\. ]+(?<! )$/,
                message: "Invalid name."
            }
        })}
        />
        {errors.fullName && <div className="invalid-tooltip">{errors.fullName.message}</div>} 
            </div>
        
            <div class="col-md-12 form-group">
            <input type="email" className={classNames("form-control",{"is-invalid": errors.email})}  name="email" placeholder="Email"
                        {...register('email', { 
                                required: "Please enter your email.",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email."
                                }
                            }
                        )}
                    />
                    {errors.email && <div className="invalid-tooltip">{errors.email.message}</div>}
            </div>
           
           <div class="col-md-12 form-group">
           <input type="password" className={classNames("form-control",{"is-invalid": errors.password})} name="password" placeholder="Password" 
                            {...register('password', { 
                                    required: "Please enter your password.",
                                    minLength: {
                                        value: 8,
                                        message: "Should be at least 8 characters."
                                    }
                                }
                            )}
                        />
                        {errors.password && <div className="invalid-tooltip">{errors.password.message}</div>}
            </div>
         
            <div class="col-md-12 form-group">
            <input type="password" className={classNames("form-control",{"is-invalid": errors.confirmpassword})} name="confirmpassword" placeholder="Confirm Password" 
                            {...register('confirmpassword', {
                                validate: value =>
                                    value === password.current || "The passwords do not match."
                                }
                            )}
                        />
                        {errors.confirmpassword && <div className="invalid-tooltip">{errors.confirmpassword.message}</div>}
            </div>
       
                          <div class="col-md-12 form-group">
                        
                    <input type="text" className={classNames("form-control",{"is-invalid": errors.mobile})} name="mobile" placeholder="Mobile" 
                        {...register('mobile', { 
                                required: "Please enter your mobile.",
                                pattern: {
                                    value: /^[2594]\d{7}$/,
                                    message: "Invalid mobile number."
                                }
                            }
                        )}
                    />
                    {errors.mobile && <div className="invalid-tooltip">{errors.mobile.message}</div>}
                  
                   
            </div>
          
            <div class="col-md-12 form-group">
            <div className="row">
                
                <div  className="col position-relative">
                    <input type="text" className={classNames("form-control",{"is-invalid": errors.city})}  name="city" placeholder="City" 
                        {...register('city', { 
                                required: "Please enter your city.",
                                minLength: {
                                    value: 5,
                                    message: "Should be at least 5 characters."
                                }
                            }
                        )}
                    />
                    {errors.city && <div className="invalid-tooltip">{errors.city.message}</div>}
                </div>
            </div>
        </div>
       
        <div class="col-md-12 form-group">
            <div className="row">
                <div className="col position-relative">
           <input type="text" className={classNames("form-control",{"is-invalid": errors.date})} name="date" placeholder="Date of birth in yyyy-MM-dd" 
             {...register('date', { 
                        required: "Please enter your date of birth.",
                        pattern: {
                            value: /^\d{2}-\d{2}-\d{4}$/,
                            message: "Invalid date of birth."
                        }
                    }
                )}
            />
            {errors.date && <div className="invalid-tooltip">{errors.date.message}</div>}
        </div>
     
        <div className="col position-relative">
           
           <input type="text" className={classNames("form-control",{"is-invalid": errors.date})} name="age" placeholder="age" 
               {...register('age', { 
                       required: "Please enter your age.",
                       pattern: {
                           value: 2,
                           message: "Invalid age."
                       }
                   }
               )}
           />
           {errors.age && <div className="invalid-tooltip">{errors.age.message}</div>}
             </div>
            </div>
         </div>
         <div class="col-md-12 form-group">
         <input className={classNames("form-control",{"is-invalid": errors.date})} name="sexe" placeholder="sexe" 
                    {...register('sexe', { 
                            required: "Please enter your sexe.",
                            pattern: {
                                value: 7,
                                message: "Invalid sexe."
                            }
                        }
                    )}
                />
                {errors.sexe && <div className="invalid-tooltip">{errors.sexe.message}</div>}
                <div class="col-md-12 form-group">
                <label className="form-check-label">
                    <input type="checkbox" className={classNames("form-check-input", {"is-invalid": errors.tnc})} name="tnc"
                        {...register('tnc', { 
                                required: "Please agree to the terms and conditions."
                            }
                        )} 
                    /> I hereby declare that the above information is true to the best of my knowledge.
                </label>
                </div>

         </div>
            <div class="col-md-12 form-group">
              <button type="submit" value="submit" class="primary-btn" >Signup</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
</form>
</div>

);
}

export default FAQ;