import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='container'>
<div class="row no-gutters bg-light position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src="http://www.resortmedical.net/images/map.jpg" class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0">
    <h3 class="mt-0">Entrer en contact</h3>
    
    
    <ul>
       
        
            <div class="vk-contact-us-info-text-icon"> <span class="ti-location-pin"></span> </div>
              <div  class="vk-contact-us-info-text-right">
              
                 <h4 className="mt-2"><i class="fa-solid fa-location-dot"></i>LOCATION</h4>
                 <p className="mt-3">La Marsa Gammarth-Tunisie</p>
            </div>
        
      
           <div class="vk-contact-us-info-text-right">
                 <h4 className="mt-2"> <i class="fa-solid fa-envelope-open-text"></i>EMAIL</h4>
                 <p className="mt-3">resortmedical@outlook.com</p> 
          </div> 
     
                  
                    <div class="vk-contact-us-info-text-icon"> <span class="ti-mobile"></span> </div>
                    <div class="vk-contact-us-info-text-right">
                      <h4 className="mt-2"> <i class="fa-solid fa-tty"></i>TEL</h4>
                      <p className="mt-3">(+216) 26 25 06 68</p>
                    </div>
                  
    </ul>
   
        </div>
      </div>
      <div class="vk-contact-form-info-header">
                      <h3>Formulaire de contact</h3>
                      <h2>Envoyez-nous un e-mail</h2>
                      <div class="clearfix"></div>
                    
     </div>
     <div class="vk-contact-border"></div>
 <div class="mb-1" className='mt-4'>
 <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Votre nom..."/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Tel..."/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Votre email..."/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Sujet" className='form-control'/>
    </div>
 
 
  </div>
</form>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Votre demande" cols="45" rows ="8"
  ></textarea>

</div>
<button type="submit" class="button">ENVOYER <i class="fa fa-paper-plane" aria-hidden="true"></i></button>


</div>

</div>



        );
    }
}

export default Contact;


