import axios from 'axios';


const FILE_API_BASE_URL = "http://localhost:8080/api/v9/fichiers";


class Fileservice {
             
    getAllFile(){
        return axios.get(FILE_API_BASE_URL);
    }
    createFile( fichier){
        return axios.post(FILE_API_BASE_URL,  fichier);
    }
    getFileById ( fichierId){
        return axios.get(FILE_API_BASE_URL + '/' +  fichierId);
    }
    updateFile( fichier,  fichierId){
        return axios.put(FILE_API_BASE_URL + '/' +  fichierId,fichier);
    }
    deleteFile( fichierId){
        return axios.delete(FILE_API_BASE_URL + '/' +  fichierId);
    }

}


export default new Fileservice()