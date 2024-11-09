import React, { Component } from 'react'
import MedicamentService from '../Services/MedicamentService';

 class UpdateMedicament  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            medicament: '',
            quantite: '',
            posologie: '',
        }
        this.changeMedicamentHandler = this.changeMedicamentHandler.bind(this);
        this.changeQuantiteHandler = this.changeQuantiteHandler.bind(this);
        this.updateMedicament = this.updateMedicament.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
        MedicamentService.vnMedicament(this.state.id) .then( (res) =>{
        let medicament = res.data;
        this.setState({ medicament: medicament. medicament,
            quantite: medicament.quantite,
            posologie : medicament.posologie,
          
        });
    });
        }}

        updateMedicament= (d) => {
            d.preventDefault();
            let medicament = { medicament: this.state. medicament,  quantite: this.state. quantite, posologie: this.state.posologie};
            console.log('medicament => ' + JSON.stringify(medicament));
            console.log('id => ' + JSON.stringify(this.state.id))
            MedicamentService.updateMedicament(medicament,this.state.id).then( res => {
                this.props.history.push('/medicaments');
            }
            )}

           
    

        changeMedicamentHandler= (event) => {
        this.setState({medicament: event.target.value});
    }
    changeQuantiteHandler= (event) => {
        this.setState({quantite: event.target.value});
    }

    changePostolgieHandler= (event) => {
        this.setState({posologie: event.target.value});
    }
   
    cancel(){
        this.props.history.push('/doctors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Medicaments</h3>
        }else{
            return <h3 className="text-center">Update Medicaments</h3>
        }
    }
  render() {
    return (
        <div>
        <div className = "container">
              <div  className="row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3">
                 {
                     this.getTitle()
                 }
                  <div className = "card-body">
                          <form>
                              <div className = "form-group">
                                  <label> Medicament: </label>
                                  <input placeholder="Medicament" name="Medicament" className="form-control" 
                                      value={this.state.medicament} onChange={this.changeMedicamentHandler}/>
                              </div>
                              <div className = "form-group">
                                  <label> Quantite: </label>
                                  <input placeholder=" Quantite" name="Quantite" className="form-control" 
                                      value={this.state. quantite} onChange={this.changeQuantiteHandler}/>
                              </div>
                              <div className = "form-group">
                                  <label> Posologie: </label>
                                  <input placeholder="Posologie" name="Posologie" className="form-control" 
                                      value={this.state.posologie} onChange={this.changePostolgieHandler}/>

                              </div>
                              <button className="btn btn-success" onClick={this. updateMedicament}>Save</button>
                              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                             </form>
        </div>
        </div>
  </div>
  </div>
  </div>

    )
  }
}

export default UpdateMedicament;
