import axiosSecure  from "../utils/Api.js"

const CONSULTATION_API_BASE_URL = "http://localhost:8080/api/vc/userconsultation";
const PATIENT_API_BASE_URL = "http://localhost:8080/api/v2/patients";

class ConsultationService {
             
    getConsultations(){
        return axiosSecure.get(CONSULTATION_API_BASE_URL);
    }
    createConsultation( consultations){
        return axiosSecure.post(CONSULTATION_API_BASE_URL,  consultations);
    }
  async   getConsultationById( consultationsId){
        return axiosSecure.get(CONSULTATION_API_BASE_URL + '/' +  consultationsId);
    }
    updateConsultation( consultation,  consultationsId){
        return axiosSecure.put(CONSULTATION_API_BASE_URL + '/' +  consultationsId,consultation);
    }
    deleteConsultation( consultationsId){
        return axiosSecure.delete(CONSULTATION_API_BASE_URL + '/' +  consultationsId);
    }
}

export default new ConsultationService()