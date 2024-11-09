import React, { Component } from 'react'
import MedicamentService from '../Services/MedicamentService';

export default class ViewMedicament extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            medicament: {},
            medicament: '',
            quantite: '',
            posologie: ''
        
         
        }
    }
    componentDidMount(){
       
        MedicamentService.vnMedicament(this.state.id).then( res => {
            this.setState({ medicament: res.data});
        })
    }
  render() {
    return (
    
    <div>
        <br></br>
     <div className = "card col-md-6 offset-md-3">
            <h3 className = "text-center"> View Medicament Details</h3>
            <div className = "card-body">
                
                <div className = "row">
                    <label>Medicaments :</label>
                    <div> { this.state. medicament.medicament}</div>
                </div>
                <div className = "row">
                    <label> Quantite :</label>
                    <div> { this.state.medicament.quantite }</div>
                </div>
                <div className = "row">
                    <label> Posologie: </label>
                    <div> { this.state.medicament.posologie}</div>
                </div>
                
                
                
           </div>

     </div>
    </div>
    
    )
  }
}
