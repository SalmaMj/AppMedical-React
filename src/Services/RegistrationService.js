import axios from 'axios';



const REGISTRATION_API_BASE_URL = "http://localhost:8080/api/v11/registration";


class RegistrationService {
             
  getRegistration(){
      return axios.get(REGISTRATION_API_BASE_URL);
  }
getRegistrationById(registrationId){
      return axios.get(REGISTRATION_API_BASE_URL + '/' + registrationId);
  }
createRegistration(reg ){
    return axios.post( REGISTRATION_API_BASE_URL ,  reg);
}

}
  export default new RegistrationService  ()