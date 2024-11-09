import React, { Component } from 'react'
import ConsultationService from '../Services/ConsultationService'

 class ViewConsultation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            consultation: {},
            details :'',
            motifs:'',
            date :''

            
         
        }
    }
    componentDidMount(){
       
        ConsultationService.getConsultationById(this.state.id).then( res => {
            this.setState({ consultation: res.data});
        })
    }
 
    render() {
   return (
      <div>
           <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Consultation</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='gras' > Details: </label>
                            <div> { this.state.consultation.details }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'>  Motifs: </label>
                            <div> { this.state.consultation.motifs }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'>   Date: </label>
                            <div> { this.state.consultation.date }</div>
                        </div>
                        
                        
                       
                    </div>

                </div>
            </div>
    

     
    )
  }
}
export default ViewConsultation
