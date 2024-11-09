import { useEffect, useState } from 'react';
import ConsultationService from '../Services/ConsultationService';
import './p.css'





export default function ListeConsultation2() {
    const [consult,setConsulte] = useState(null)
    const getLocalItem = ()  => {

      let user = JSON.parse(localStorage.getItem('user'));
      let list=user["consultation"]
      console.log(list);
      return list ; 

      
    }
     //DidMount 
     useEffect(()=>{
  
      let list=getLocalItem();
      setConsulte(list);
         },[]
       
 
    )
     
//DidUpdate




// const getCons = async () => {
//     let resultas = await ConsultationService.getConsultationById("1");
//     setConsulte(resultas.data)
 
//  }
//  getCons()

  return (
    <div>
     <div >
    <div className = "row">
            <table className = "table table-striped">

                <thead>
                    <tr>
                      
                       <th> Date</th>
                       <th> Poids</th>
                       <th> Taille</th>
                       <th> Temperature</th>
                       <th> Frequence</th>
                       <th> Glycemie</th>
                       <th>Pid</th>

                    </tr>
                </thead>
                
                <tbody >
                {
                    
                          consult &&
                                     consult.map(
                                consultations => 
                                <tr key = {consultations.id}>
                               
                                 
                                 
                                  <td> {consultations.date}</td>
                                  <td> {consultations.poids}</td>
                                  <td> {consultations.taille}</td>
                                  <td> {consultations.temperature}</td>
                                  <td> {consultations.frequence}</td>
                                  <td> {consultations.glycemie}</td>
                                  <td> {consultations.glycemie}</td>
                                  
 
                                   </tr>


                    


                                   
                               )
                                
                                }
                   
                   </tbody>
                </table>
                
  </div>  

</div>
</div>
  )
}