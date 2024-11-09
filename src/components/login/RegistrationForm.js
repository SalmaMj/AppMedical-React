import { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import DoctorRegistration from './DoctorRegistration';
import FAQ from './FAQ';

const RegistrationForm = () => {
    const [activeButton, setActiveButton] = useState('patient');
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }
    return (
       <div> 
           <div >
                    <div className="login d-flex align-items-center py-0"></div>
                          
          <div className="col-md-9 col-lg-8 mx-auto">
                                    <div className="text-center my-container-reg">
                                        <h1 className="display-6 mb-3">Register Now!</h1>
                                        <div className="col-lg-6 mx-auto">
                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                            <div class="form_inner">
                                                <button type="button" className={`btn btn-sm btn-outline-dark btn-lg px-3 shadow-none ${activeButton === 'patient' ? 'active' : ' '}`} onClick={clickHandler} value='patient'>Patient</button>
                                                <button type="button" className={`btn btn-sm btn-outline-dark btn-lg px-3 shadow-none ${activeButton === 'doctor' ? 'active' : ' '}`} onClick={clickHandler} value='doctor'>Doctor</button>
                                            </div>
                                        </div>
                                        </div>
                                        <div >
                                            { activeButton === 'patient' ? <FAQ/> : <DoctorRegistration/> }
                                            
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                 
                                    
                                   
                               
            
    )
}

export default RegistrationForm
