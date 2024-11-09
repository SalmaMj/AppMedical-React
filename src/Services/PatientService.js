import axiosSecure  from "../utils/Api.js"

const PATIENT_API_BASE_URL = "http://localhost:8080/api/v3/getAllPatients";
const PATIENT_API_BASE_CREATE="http://localhost:8080/api/v3/createPatient";
const PATIENT_API_BASE_ID="http://localhost:8080/api/v3/getPatientById";

class PatientService {
             
    getPatients(){
      return axiosSecure.get(PATIENT_API_BASE_URL);
  }
  createPatient (patient){
    return axiosSecure.post( PATIENT_API_BASE_CREATE,  patient);
}
   getPatientById(patientId){
      return axiosSecure.get(PATIENT_API_BASE_ID + '/' + patientId);
  }
 
 
}
  export default new PatientService ()