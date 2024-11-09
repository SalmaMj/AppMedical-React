import React, { Component } from 'react';
import MedicamentService from '../Services/MedicamentService';

class ListMedicaments extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
            medicaments: [],
            id: this.props.match.params.id,
            medicament: '',
            quantite: '',
            posologie: ''
        }

        
        this.addmedicaments= this.addmedicaments.bind(this);
        this.editmedicaments= this.editmedicaments.bind(this);
        this.deletemedicaments = this.deletemedicaments.bind(this);
        this.viewmedicaments=this.viewmedicaments.bind(this);
    }

    deletemedicaments(id){
       MedicamentService. deleteMedicament(id).then( res => {
            this.setState({medicaments: this.state.medicaments.filter(medicament =>medicament.id !== id)});
        });
    }
    viewmedicaments(id){
        this.props.history.push(`/viewmadicaments/${id}`);}

    editmedicaments(id){
        this.props.history.push(`/update/${id}`);
    }

    componentDidMount(){
        MedicamentService.getAllMedicament().then((res) => {
            this.setState({medicaments: res.data});
        });
    }

    addmedicaments(){
        this.props.history.push('/createMed/_add');
    }

    render() {
        return (
           <div  className='container'>
            <button className="btn btn-primary" onClick={this.addmedicaments}> Add Medicament</button>
        
        <h2 className="text-center">Liste des Medicaments</h2>
        <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Medicament</th>
                            <th> Quantite</th>
                            <th> Posologie</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                       this.state.medicaments.map(
                        medicament => 
                        <tr key = {medicament.id}>
                             <td> {medicament.medicament} </td>   
                             <td> {medicament.quantite}</td>
                             <td> {medicament.posologie}</td>
                            
                             <td>
                                         <button style={{marginLeft: "50px"}} onClick={ () => this.editmedicaments(medicament.id)} className="btn btn-info">Update </button>
                                         <button style={{marginLeft: "100px"}} onClick={ () => this.deletemedicaments(medicament.id)} className="btn btn-danger">Delete </button>
                                         <button style={{marginLeft: "100px"}} onClick={ () => this.viewmedicaments(medicament.id)} className="btn btn-info">View </button>
                                     </td>
                             </tr>
                       )
                        
                        }
                       
                       </tbody>
                    </table>
                    
      </div> 
      </div> 

        );
    }
}

export default ListMedicaments;