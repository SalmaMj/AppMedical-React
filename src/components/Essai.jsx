import React, { Component } from 'react';
import'./ZZZ.css';
class Essai extends Component {
    constructor(props) {
        super(props)

        this.state = {
            consulta: [],
            // step 2
           
            consultation: '',
            poids:'',
            taille:'',
            temperature:'',
            frequence:'',
            glycemie:''

           
        }
        this.changeconsultation = this.changeconsultation.bind(this);
        this.changepoids = this.changepoids.bind(this);
        this.ajouteConsultation = this.ajouteConsultation.bind(this);


    }
    ajouteConsultation(){
        this.props.history.push('/fiche');
    }
        changeconsultation= (event) => {
            this.setState({ consultation: event.target.value});}
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
    
    render() {
        return (
            <div>
           {/*<h1 text-align="center">Fiche de consultation</h1>*/}
        
           
            <div  className='wrapper'>
            
                  
                  <div className = "row">
                 {/* <h3 text-align="center">consultation de patient</h3>*/}
                            <table className = "table table-striped table-bordered">
    
                                <thead>
                                    <tr>
                                        <th> Details</th>
                                        <th> Date</th>
                                        <th> Motif</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                   this.state.consulta.map(
                                    consultationn => 
                                    <tr key = {consultationn.id}>
                                         <td> {consultationn.details} </td>   
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
               
                
                <div className='container'>
                <button className="btn btn-success" onClick={this.ajouteConsultation}>Ajouter </button>
<button className="btn btn-info"  style={{marginLeft: "3px"}}>modifier</button>
<button className="btn btn-danger"  style={{marginLeft: "3px"}}>supprimer</button>

                    <h4>Constante Vitale</h4>
                <div className = "form-group">
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
                    <input placeholder="poids" name="poids" className="form-control" 
                     value={this.state.temperature} onChange={this.changetemperature}/>
                                        </div>
                    <div className = "form-group">
                     <label> fréquence cardiaque: </label>
                    <input placeholder="poids" name="poids" className="form-control" 
                     value={this.state.temperature} onChange={this.changefrequence}/>
                                        </div>
                     <div className = "form-group">
                     <label> Glycémie: </label>
                    <input placeholder="poids" name="poids" className="form-control" 
                     value={this.state.temperature} onChange={this.changeglycemie}/>
                                        </div>
             <div>
                 <h4>Resultat</h4>
                 Resultat de text de jour 
                 <div> <textarea cols="5" rows="2"></textarea></div>
               diagnostic médicale 
                 <div> <textarea cols="5" rows="2"></textarea></div>
             
              </div>
              </div>
              </div></div></div>
           
            
        );
    }
}

export default Essai;