import axios from 'axios';


const BILAN_API_BASE_URL = "http://localhost:8080/api/v12/bilans";


class BilanService {
             
    getBilans(){
        return axios.get(BILAN_API_BASE_URL);
    }
    createBilan(bilan){
        return axios.post(BILAN_API_BASE_URL, bilan);
    }
    getBilanById(bilanId){
        return axios.get(BILAN_API_BASE_URL + '/' + bilanId);
    }
    updateBilans(bilan, bilanId){
        return axios.put(BILAN_API_BASE_URL  + '/' + bilanId,bilan );
    }
    deleteBilan(bilanId){
        return axios.delete(BILAN_API_BASE_URL + '/' + bilanId);
    }
    

}


export default new BilanService()