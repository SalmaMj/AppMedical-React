import React, { Component } from 'react';
import DoctorService from '../Services/DoctorService';

class ViewDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            doctor: {}
         
        }
    }
    componentDidMount(){
        DoctorService.getDoctorById(this.state.id).then( res => {
            this.setState({doctor: res.data});
        })
    }

    render() {
        return (
            <div className='container'>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Doctor Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='gras' > Doctor First Name: </label>
                            <div> { this.state.doctor.firstName }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'>  Doctor Last Name: </label>
                            <div> { this.state.doctor.lastName }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'>   Doctor Email ID: </label>
                            <div> { this.state.doctor.emailId }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Doctor Phone: </label>
                            <div> { this.state.doctor. phone }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Doctor Speciality: </label>
                            <div> { this.state.doctor.speciality }</div>
                        </div>
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewDoctorComponent;