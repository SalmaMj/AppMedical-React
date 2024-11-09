import React, { Component } from 'react';
import MedicamentService from '../Services/MedicamentService';
import'./ZZZ.css';

class Fichedeconsltation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            medicament: [],
             medicaments:'',
            quantite:'',
            posologie:'',
            date:''
        }
    
        this.changeMedicaments = this.changeMedicaments.bind(this);
        this.calendar = this.calendar.bind(this);
        this.changeQuantite = this.changeQuantite.bind(this);
       this.ajouteMedicaments=this.ajouteMedicaments.bind(this);
        this.changePosologie = this.changePosologie.bind(this);
        this.save = this.save.bind(this);
        
    }
        changeMedicaments= (event) => {this.setState({medicaments : event.target.value});}
        changePosologie= (event) => {this.setState({posologie : event.target.value});}
        changeQuantite  = (event) => {this.setState({quantite : event.target.value});}
        changedate= (event) => {this.setState({date: event.target.value});}
        calendar(){ this.props.history.push('/calendar')}

        ajouteMedicaments() {
            this.props.history.push('/medicaments');
        }
        
     componentDidMount(){

        MedicamentService. vnMedicament(this.state.id) .then( (res) =>{
        let med = res.data;
        this.setState({
            medicaments: med.medicaments,
            quantite: med.quantite,
            posologie:med.posologie
           
            

        });
    });
   
        }
    
    
    save = (a) => {
          a.preventDefault();
            let med = {medicaments: this.state.medicaments,
                       quantite: this.state.quantite,
                       posologie:this.state.posologie};
            console.log('med=> ' + JSON.stringify(med));
            MedicamentService.createMedicament(med).then(res =>{
                    this.props.history.push(`/fiche`);
                });
            }   
     render() {
        return (
            <div>
                <h3>Fiche Ordonnances</h3>
                <div className='wrapper'>
                 <div>
                 <div className = "form-group">
                     <label> MEDICAMENTS: </label>
                    <input placeholder="MEDICAMENTS" name="MEDICAMENTS" className="form-control" 
                     value={this.state.medicaments} onChange={this.changeMedicaments}/>
                                        </div>
                    <div className = "form-group">
                     <label> Quantité: </label>
                    <input placeholder="quantite" name="quantite" className="form-control" 
                     value={this.state.quantite} onChange={this.changeQuantite}/>
                    </div>
                    <div className = "form-group">
                     <label> Posologie: </label>
                    <input placeholder="posologie" name="posologie" className="form-control" 
                     value={this.state.posologie} onChange={this.changePosologie}/>
                    </div>
                     
                 </div>

<div>
                <div class="row" >Date de consultation:
                 <input placeholder="Date" type="date" name="date" className='sasi'
                     value={this.state.date} onChange={this.changedate}/>
                    
                </div>   
<button className="btn btn-success" onClick={this.ajouteMedicaments}>Liste des médicamments </button><br></br>
                 <button className="btn btn-info"  style={{marginTop: "10px"}} onClick={this.save} >ajouter</button>
                <button className="btn btn-danger"  style={{margin: "10px 0px 0px 10px"}}>supprimer</button>
              </div>
              </div>
           
             <div className = "row">
             {/* <h3 text-align="center">consultation de patient</h3>*/}
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Medicaments</th>
                                    <th> Qte</th>
                                    <th>Posologie</th>
                                    <th>Action</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                              
                               
                               </tbody>
                            </table>
                </div>
                </div>
                         
        
        );
    }
}

export default Fichedeconsltation;