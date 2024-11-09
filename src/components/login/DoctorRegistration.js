import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useRef } from 'react';
import './Form.css'
import { useHistory } from 'react-router-dom';
import DoctorService from '../../Services/DoctorService';


const DoctorRegistration = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

const submitHandler = (doctor) => {
        console.log(JSON.stringify(doctor));
      DoctorService.createDoctor(doctor)
            .then(resp=>{
                history.push({
                    pathname: '/loginn',
                    state: { message: resp.doctor}
                });
            }).catch(err => {
                console.log(err);
            })
    }  

    return (
        
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
        <div class="form_inner">
       
          
        <div class="col-md-12 form-group">
            <div className="row">
                <div className="col position-relative">
           <input type="text" className={classNames("form-control",{"is-invalid": errors.lastName})} name="lastName" placeholder="Votre Nom..." 
             {...register('lastName', { 
                        required: "SVP ENTRER VOTRE NOM",
                        pattern: {
                            value: 4,
                            message: "Invalid nom."
                        }
                    }
                )}
            />
            {errors.lastName && <div className="invalid-tooltip">{errors.lastName.message}</div>}
        </div>
     
        <div className="col position-relative">
           
           <input type="text" className={classNames("form-control",{"is-invalid": errors.firstName})} name="firstName" placeholder="Votre prénom..." 
               {...register('firstName', { 
                       required: "SVP ENTRER VOTRE PRENOM.",
                       pattern: {
                           value: 4,
                           message: "Invalid prénom."
                       }
                   }
               )}
           />
           {errors.firstName && <div className="invalid-tooltip">{errors.firstName.message}</div>}
             </div>
            </div>
         </div>
        
            <div class="col-md-12 form-group">
            <input type="email" className={classNames("form-control",{"is-invalid": errors.emailId})}  name="emailId" placeholder="Email..."
                        {...register('emailId', { 
                                required: "SVP ENTRER VOTRE EMAIL.",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email."
                                }
                            }
                        )}
                    />
                    {errors.emailId && <div className="invalid-tooltip">{errors.emailId.message}</div>}
            </div>
           
           <div class="col-md-12 form-group">
           <input type="password" className={classNames("form-control",{"is-invalid": errors.password})} name="password" placeholder="Mot de passe" 
                            {...register('password', { 
                                    required: "SVP ENTRER VOTRE MOT DE PASSE.",
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
            <input type="password" className={classNames("form-control",{"is-invalid": errors.confirmpassword})} name="confirmpassword" placeholder="Confirmer Mot de passe" 
                            {...register('confirmpassword', {
                                validate: value =>
                                    value === password.current || "The passwords do not match."
                                }
                            )}
                        />
                        {errors.confirmpassword && <div className="invalid-tooltip">{errors.confirmpassword.message}</div>}
            </div>
       
                          <div class="col-md-12 form-group">
                        
                    <input type="text" className={classNames("form-control",{"is-invalid": errors.phone})} name="phone" placeholder="Mobile" 
                        {...register('phone', { 
                                required: "SVP ENTRER VOTRE NUMERO.",
                                pattern: {
                                    value: /^[2597]\d{7}$/,
                                    message: "Invalid mobile number."
                                }
                            }
                        )}
                    />
                    {errors.phone && <div className="invalid-tooltip">{errors.phone.message}</div>}
                  
                   
            </div>
          
            
         <div class="col-md-12 form-group">
         <input className={classNames("form-control",{"is-invalid": errors.speciality})} name="speciality" placeholder="Spécialité..." 
                    {...register('speciality', { 
                            required: "SVP ENTRER VOTRE SPECIALITE.",
                            pattern: {
                                value: 7,
                                message: "Invalid speciality."
                            }
                        }
                    )}
                />
                {errors.speciality && <div className="invalid-tooltip">{errors.speciality.message}</div>}
             
             
                <div className="form-group">
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
    
    
        
    )
    }

export default DoctorRegistration
 