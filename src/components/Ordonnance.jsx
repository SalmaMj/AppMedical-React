import React, { Component } from 'react';
import Etat from './navbar/Etat';
import PatientService from '../Services/PatientService';
import'./ZZZ.css';




class Ordonnance extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            consulta: [],
            // step 2
            Patient :{},
            consultation: '',
            poids:'',
            taille:'',
            temperature:'',
            frequence:'',
            glycemie:''

           
        }
        this.ajouteMedicaments = this.ajouteMedicaments.bind(this);}


        ajouteMedicaments(){
            this.props.history.push('/fiche');

        }
        
     componentDidMount(){
    
        PatientService.getPatientById(this.state.id).then( res => {
         this.setState({ Patient: res.data});
                                        })
                                    }

    render() {
        return (
            <div>
                   <div className='backg' >
                       
                        <label className='gras'>Full Name :</label>
                            { this.state. Patient.fullName }
                        </div>
                
                <Etat  id={this.state.id}/>
               <div className='container'>
                <div className="nn">
                <button className="btn btn-success" onClick={this.ajouteMedicaments}>Ajouter </button>
                 <button className="btn btn-info"  style={{marginLeft: "10px"}}>modifier</button>
                <button className="btn btn-danger"  style={{marginLeft: "10px"}}>supprimer</button>
                <button className="btn btn-info"  style={{marginLeft: "10px"}}>imprimer</button>
                </div >

              <div >
                  <div>
                      <h5>Table de consultation</h5>
                  <table className = "table table-striped table-bordered">
    
    <thead>
        <tr>
           
            <th> Date</th>
            <th> Motif</th>
           
        </tr>
    </thead>
    <tbody>
        {
       this.state.consulta.map(
        consultationn => 
        <tr key = {consultationn.id}>
             
             <td> {consultationn.date}</td>
             <td> {consultationn.motif}</td>
            
             <td>
                        
                         <button  className="btn btn-info">View </button>
                     </td>
             </tr>
       )
        
        }
       
       </tbody>
    </table>
                  </div>

                  <div>
                      <h5>Table des Ordonnances</h5>
                      <table className = "table table-striped table-bordered">
    
    <thead>
        <tr>
           
            <th> Date</th>
            <th> Details</th>
           
        </tr>
    </thead>
    <tbody>
        {
       this.state.consulta.map(
        consultationn => 
        <tr key = {consultationn.id}>
             
             <td> {consultationn.date}</td>
             <td> {consultationn.details}</td>
            
             <td>
                        
                         <button  className="btn btn-info">View </button>
                     </td>
             </tr>
       )
        
        }
       
       </tbody>
    </table>

                  </div>
                  <div>
                      <h5>Certificats Médicaux</h5>
                      
                      <button className="butn btn-info"  style={{marginTop: "10px"}}  >Certificat médicale de consulltation</button>
                      <button className="butn btn-info"  style={{marginTop: "10px"}}>Certificat Aptitude Sportive</button>
                      <button className="butn btn-info"  style={{marginTop: "10px"}}>Certificat des maladies chronique</button>
                      <button className="butn btn-info"  style={{marginTop: "10px"}}>Fiche Soins Locaux</button>
                      <button className="butn btn-info" style={{marginTop: "10px"}} >Lettre D'orientation</button>
                    

                      </div>
              </div>


            </div>
            </div>
        );
    }
}

export default Ordonnance;