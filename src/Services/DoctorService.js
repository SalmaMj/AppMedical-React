import axiosSecure  from "../utils/Api.js"



const DOCTOR_API_BASE_URL = "http://localhost:8080/api/v3/getAllDoctors";
const DOCTOR_API_BASE_CREATE = "http://localhost:8080/api/v3/createDoctor";
const DOCTOR_API_BASE_UPDATE = "http://localhost:8080/api/v3/updateDoctor";
const DOCTOR_API_BASE_BYID = "http://localhost:8080/api/v3/getDoctorById";
const DOCTOR_API_BASE_DELETE = "http://localhost:8080/api/v3/deleteDoctor";


class DoctorService {
             
    getDoctors(){
        return axiosSecure.get(DOCTOR_API_BASE_URL);
    }
    createDoctor(doctor){
        return axiosSecure.post(DOCTOR_API_BASE_CREATE, doctor);
    }
    getDoctorById(doctorId){
        return axiosSecure.get(DOCTOR_API_BASE_BYID + '/' + doctorId);
    }
    updateDoctors(doctor, doctorId){
        return axiosSecure.put(DOCTOR_API_BASE_UPDATE + '/' + doctorId, doctor);
    }
    deleteDoctor(doctorId){
        return axiosSecure.delete(DOCTOR_API_BASE_DELETE + '/' + doctorId);
    }

}


export default new DoctorService()

