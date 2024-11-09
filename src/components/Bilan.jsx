import React, { Component } from 'react';
import './Design.css'
import Etat from './navbar/Etat';

import BilanService from '../Services/BilanService';
class Bilan extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
           bilans: [],

            id: this.props.match.params.id,
            date:'',
           lignes_bilan:'',}
           this.addBilan= this.addBilan.bind(this);
        }
        addBilan(){
            this.props.history.push('/ajoutebilan');
        }
    render() {
        return (
            <div>
                <Etat id={this.state.Patient.id}/>
                <div className='bb'>
                <button className="btn btn-success"onClick={this.addBilan}>Ajouter <i class="fa-solid fa-user-plus"></i> </button>
                <button className="btn btn-info"  style={{marginLeft: "10px"}}>modifier </button>
                <button className="btn btn-danger"  style={{marginLeft: "10px"}}>supprimer</button>
                <button className="btn btn-info"  style={{marginLeft: "10px"}}>imprimer</button>
                <div className='wrapper'>
                 <div className='container'>
                   <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                   
                                    <th> Date</th>
                                    <th>Lignes Bilan</th>
                                 
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                               this.state.bilans.map(
                                bilan => 
                                <tr key = {bilan.id}>
                                     <td> {bilan.date} </td>   
                                     <td> {bilan.  lignes_bilan}</td>
                                    

                                    
  
                                            
                                     </tr>
                               )
                                
                                }
                               
                               </tbody>
                            </table>
                            </div>
                            
              </div>  
                    <div>
                        <h3>Resultat des bilans</h3>
                        Resultat ligne des bilans
                        <textarea col="8" row="8"></textarea>
                        <br></br>
                        Resultat Totale des bilans
                        <textarea col="8" row="8"></textarea>
                        </div>
                </div>
                </div>
                </div>
           
        );
    }
        }


export default Bilan;