import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                 <div className='main-content'>
                 <div className='left-box'>
                     <h2>About us</h2>
                     <div className='content'>
                         <p>
                         A senior over the age of 60 who no longer has the autonomy 
                          necessary to live alone at home independently or 
                          at home independently or who would like 
                         an alternative solution to accommodation</p> 
                        
                          <div className='social'>
                              <a href='#'><span className='fab fa-facebook-f'></span></a>
                              <a href='#'><span className='fab fa-twitter'></span></a>
                              <a href='#'><span className='fab fa-instagram'></span></a>
                              <a href='#'><span className='fab fa-youtube'></span></a>
                          </div>
                     </div>
                     </div>
                     <div className='center-box'>
                         <h2>Address</h2>
                         <div className='content'>
                         <div className='place'>

                             <span className='fas fa-map-marker-alt'></span>
                             <span className='text'> Centre D'affaires, 14 Rue Imem Abou Hanifa 2078 -
                             LA MARSA - TUNISIE</span>
                         </div>
                         <div className='phone'>
                             <span className='fas fa-phone-alt'></span>
                             <span className='text'>(+216) 26 250 668</span>
                         </div>
                         <div className='email'>
                             <span className='fas fa-envelope'></span>
                             <span className='text'> resortmedical@outlook.com</span>
                         </div>
                         </div>
                         </div>
                       <div className='right box'>
                           <h2>Contact Us</h2>
                           <div className='content'>
                               <form action= '#'>
                                   <div className='email'>
                                       <div className="text">Email *</div>
                                       <input type="email" required/>
                                        </div>
                                        <div className="msg">
                                            <div className="text">Message *</div>
                                            <textarea  rows="2" cols ="25" required></textarea>
                                        </div>
                                        <div className='btn'>
                                            <button type='submit'>Send</button>
                                        </div>
                               </form>
                           </div>
                    
                      
                     </div>
                     
                     </div>
                </footer>
            </div>
            
        );
    }
}

export default FooterComponent;