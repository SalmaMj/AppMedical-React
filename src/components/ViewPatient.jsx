import React, { Component } from 'react';
import PatientService from '../Services/PatientService';
import Etat from './navbar/Etat';
import './ZZZ.css'


class ViewPatient extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Patient: {}
         
        }
    }
    componentDidMount(){
       
        PatientService.getPatientById(this.state.id).then( res => {
            this.setState({ Patient: res.data});
        })
    }
    render() {
        return (
            <div>
                <div className='backg'>
                    
                <i class=" imgg fa-solid fa-wheelchair"></i>
        
                <label className='gras'>Full Name :</label>
                          { this.state.Patient.firstName }
                          
          
        
                </div>
               
                <Etat id={this.state.id}/>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Details Patients</h3>
                    <div className = "card-body">
                        
                        <div className = "row">
                            <label className='gras'>Nom:</label>
                            <div> { this.state. Patient.firstName }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Email: </label>
                            <div> { this.state.Patient.email}</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Maladie: </label>
                            <div> { this.state.Patient.sickness }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Mobile: </label>
                            <div> { this.state. Patient.phone }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> date de naissance: </label>
                            <div> { this.state. Patient.date }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Age: </label>
                            <div> { this.state. Patient.age }</div>
                        </div>
                      
                        
                       
        </div>

                </div>
            </div>
            
        )

    }
}
export default ViewPatient;