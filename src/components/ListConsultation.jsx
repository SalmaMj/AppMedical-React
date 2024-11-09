import React, { Component } from 'react';
import ConsultationService from '../Services/ConsultationService';


class ListConsulation extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
            Consultation: [],
           

        }  
        
    }

  

     componentDidMount(){
      ConsultationService.getConsultations().then((res) => {
            this.setState({Consultation: res.data});
        });
    }

     


    addconsultation(){
        this.props.history.push('/createConsultat/_add');
    }

    render() {
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
                                   <th>
                                       PID
                                   </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                               this.state.Consultation.map(
                                consultations => 
                                <tr key = {consultations.id}>
                                    <td> {consultations.date}</td>
                                     <td> {consultations.poids} </td>   
                                     <td> {consultations.taille}</td>
                                     <td> {consultations.temperature}</td>
                                     <td> {consultations.frequence}</td>
                                     <td> {consultations.glycemie}</td>
                                     <td> {consultations.pid}</td>
                                    
                                   
                                     </tr>
                               )
                                
                                }
                               
                               </tbody>
                            </table>
                            
              </div>  
        
            </div>
            </div>
        );
    }
}

export default ListConsulation;
