import React, { Component } from 'react'
import ConsultationService from '../Services/ConsultationService';


export default class CreateConsultation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            details: '',
            motifs: '',
            date: ''
        }
        this.changeDetailsHandler = this.changeDetailsHandler.bind(this);
        this.changeMotifsHandler= this.changeMotifsHandler.bind(this);
        this.saveOrUpdateConsultation = this.saveOrUpdateConsultation.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
        ConsultationService.getConsultationById(this.state.id) .then( (res) =>{
        let Consultation = res.data;
        this.setState({ details: Consultation.details,
            motifs: Consultation.motifs,
           date : Consultation.date
            
        });
    });
        }}

        saveOrUpdateConsultation = (c) => {
            c.preventDefault();
            let Consultation = {details: this.state.details, motifs: this.state.motifs, date: this.state.date};
            console.log('consultation=> ' + JSON.stringify(Consultation));
    
            // step 5
            if(this.state.id === '_add'){
                ConsultationService.createConsultation(Consultation).then(res =>{
                    this.props.history.push('/Consultation');
                });
            }else{
                ConsultationService.updateConsultation(Consultation, this.state.id).then( res => {
                    this.props.history.push('/Consultation');
                });
            }   

        }


        changeDetailsHandler= (event) => {
            this.setState({details: event.target.value});
        }
        changeMotifsHandler= (event) => {
            this.setState({motifs: event.target.value});
        }
    
        changeDateHandler = (event) => {
            this.setState({date: event.target.value});
        }
        cancel(){
            this.props.history.push('/Consultation');
        }
    
        getTitle(){
            if(this.state.id === '_add'){
                return <h3 className="text-center">Add Consultation</h3>
            }else{
                return <h3 className="text-center">Update Consultation</h3>
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
                                            <label> Details : </label>
                                            <input placeholder="Details" name="details" className="form-control" 
                                                value={this.state.details} onChange={this.changeDetailsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Motifs: </label>
                                            <input placeholder="Motifs" name="motifs" className="form-control" 
                                                value={this.state.motifs} onChange={this.changeMotifsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date : </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                      
                                        <button className="btn btn-success" onClick={this.saveOrUpdateConsultation}>Save</button>
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
