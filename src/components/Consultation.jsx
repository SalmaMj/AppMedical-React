import React, { Component } from 'react';
import './ZZZ.css';
import Etat from './navbar/Etat';
import ConsultationService from '../Services/ConsultationService';
import PatientService from '../Services/PatientService';
import ListeConsultation2 from './ListeConsultation2';


class Consultation extends Component {
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
        this.changeconsultation = this.changeconsultation.bind(this);
        this.changepoids = this.changepoids.bind(this);
        this.changedate = this.changedate.bind(this);
        this.save = this.save.bind(this);
        

    }
      changeconsultation= (event) => {
            this.setState({ consultation: event.target.value});}
      changedate= (event) => {
           this.setState({date: event.target.value});}
      changepoids= (event) => {
           this.setState({ poids: event.target.value});}
      changetaille= (event) => {
            this.setState({ taille: event.target.value});}

    changetemperature= (event) => {
            this.setState({ temperature: event.target.value});}
    changefrequence= (event) => {
            this.setState({ frequence: event.target.value});}
                            
    changeglycemie= (event) => {
         this.setState({ glycemie: event.target.value});}
       

     componentDidMount(){

        ConsultationService.getConsultationById(this.state.id).then( (res) =>{
            console.log("test",res)
        let consultat = res.data;
        
        this.setState({
            consulta:res.data
            

        });
    })
    .catch(error=>console.log(error))
    
    PatientService.getPatientById(this.state.id).then((res) => {
        this.setState({ Patient: res.data});
    });
        }
    
        save = (a) => {
            a.preventDefault();
            let consultat = {date: this.state.date,poids: this.state.poids,
            taille:this.state.taille,temperature:this.state.temperature,frequence:this.state.frequence,glycemie:this.state.glycemie};
            console.log('consultat=> ' + JSON.stringify(consultat));
             ConsultationService.createConsultation(consultat).then(res =>{
                    this.props.history.push(`/consultat/`);
                });
            }   

  
    
      
 

        
    render() {
        return (
          
           <div>
                <div className='backg'>
                        <label className='gras'>Full Name :</label>
                             { this.state.Patient.firstName }
                        </div>
                        <Etat id={this.state.id}/>
            <div className='wrapper'>
               
            
               
                   
                <div className='App' >
                    
                
                <h2 >Fiche de consultation</h2>
                
                <button className="bttn btn-info"  data-toggle="button" aria-pressed="false" style={{marginLeft: "10px"}}>modifier <i class="fa-solid fa-pen"></i></button>
                <button className="bttn btn-danger" data-toggle="button" aria-pressed="false" style={{marginLeft: "10px"}}>supprimer<i class="fa-regular fa-trash-can"></i> </button>
                <button className="bttn btn-info" data-toggle="button" aria-pressed="false"  style={{marginLeft: "10px"}}>imprimer <i class="fa-solid fa-print"></i></button>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <th>
                                 <ListeConsultation2/>
                                   
                                </th>
                            </thead>
                            <tbody>
                                {
                               this.state.consulta.map(
                                consultat=> 
                                <tr key = {consultat.date}>
                                     <th> {consultat.date} </th>   
                                     <th> {consultat.poids} </th>   
                                     <th> {consultat.taille}</th>
                                     <th> {consultat.temperature}</th>
                                     <th> {consultat.frequence}</th>
                                     <th> {consultat.glycemie}</th>
                                    
                                     </tr>
                               )
                                
                                }
                               
                               </tbody>
                            </table>
                            
              </div>  </div>
                <div className='container'>
                    <h4>Constante Vitale</h4>
                <div className = "form-group">
                <label> date: </label>
                    <input placeholder="Date" type="date" name="date" className="form-control" 
                     value={this.state.date} onChange={this.changedate}/>
                        
                     <label> poids: </label>
                    <input placeholder="poids" name="poids" className="form-control" 
                     value={this.state.poids} onChange={this.changepoids}/>
                        </div>
                <div className = "form-group">
                     <label> taille: </label>
                    <input placeholder="taille" name="taille" className="form-control" 
                     value={this.state.taille} onChange={this.changetaille}/>
                                        </div>
                    <div className = "form-group">
                     <label> temperature: </label>
                    <input placeholder="T°C" name="temp" className="form-control" 
                     value={this.state.temperature} onChange={this.changetemperature}/>
                                        </div>
                    <div className = "form-group">
                     <label> fréquence cardiaque: </label>
                    <input placeholder="freq" name="freq" className="form-control" 
                     value={this.state.frequence} onChange={this.changefrequence}/>
                                        </div>
                     <div className = "form-group">
                     <label> Glycémie: </label>
                    <input placeholder="glyc" name="glyc" className="form-control" 
                     value={this.state.glycemie} onChange={this.changeglycemie}/>
                                        </div>
             <div>
                 <h4>Resultat</h4>
                 Resultat de text de jour 
                 <div> <textarea cols="13" rows="8"></textarea></div>
               diagnostic médicale 
                 <div> <textarea cols="13" rows="8"></textarea></div>
              <h3>consultation de patient</h3>
              </div>
            
            
              
              
              <div className='text-right'>
              <button  className="btn btn-success" onClick={this.save}>valider</button>
              </div>
            </div>
            
            </div>
</div>
                           
                                     
               
            
        
        );
    }
}

export default Consultation;