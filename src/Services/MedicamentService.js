import axios from 'axios';


const MEDICAMENTS_API_BASE_URL = "http://localhost:8080/api/v7/medicaments";


class MedicamentSercice {
             
    getAllMedicament(){
        return axios.get(MEDICAMENTS_API_BASE_URL);
    }
    createMedicament( medicament){
        return axios.post( MEDICAMENTS_API_BASE_URL,  medicament);
    }
    vnMedicament(medicamentsId){
        return axios.get( MEDICAMENTS_API_BASE_URL + '/' + medicamentsId);
    }
    updateMedicament( medicament, medicamentsId){
        return axios.put( MEDICAMENTS_API_BASE_URL + '/' + medicamentsId, medicament);
    }
    deleteMedicament(medicamentsId){
        return axios.delete( MEDICAMENTS_API_BASE_URL + '/' + medicamentsId);
    }

}


export default new MedicamentSercice()