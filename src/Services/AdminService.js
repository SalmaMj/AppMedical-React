import axios from 'axios';


const ADMIN_API_BASE_URL = "http://localhost:8080/api/v3/admins";


class AdminService {
             
    getAdmins(){
        return axios.get(ADMIN_API_BASE_URL);
    }
    createAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL, admin);
    }
    getAdminById(adminId){
        return axios.get(ADMIN_API_BASE_URL + '/' + adminId);
    }
    updateAdmins(admin, adminId){
        return axios.put(ADMIN_API_BASE_URL  + '/' + adminId, admin);
    }
    deleteAdmin(adminId){
        return axios.delete(ADMIN_API_BASE_URL + '/' + adminId);
    }
    

}


export default new AdminService()