import React, { Component } from 'react';
import DoctorService from '../Services/DoctorService';

class CreateDoctorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            phone: '',
            speciality:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateDoctor = this.saveOrUpdateDoctor.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
        DoctorService.getDoctorById(this.state.id) .then( (res) =>{
        let doctor = res.data;
        this.setState({firstName: doctor.firstName,
            lastName: doctor.lastName,
            emailId : doctor.emailId,
            phone :doctor.phone,
            speciality : doctor.speciality
        });
    });
        }}

        saveOrUpdateDoctor = (d) => {
            d.preventDefault();
            let doctor = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
            phone :this.state.phone,speciality:this.state.speciality};
            console.log('doctor=> ' + JSON.stringify(doctor));
    
            // step 5
            if(this.state.id === '_add'){
                DoctorService.createDoctor(doctor).then(res =>{
                    this.props.history.push('/doctors');
                });
            }else{
                DoctorService.updateDoctors(doctor, this.state.id).then( res => {
                    this.props.history.push('/doctors');
                });
            }   

        }

           
    

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
    changeSpecialityHandler= (event) => {
        this.setState({speciality: event.target.value});
    }
    cancel(){
        this.props.history.push('/doctors');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Doctor</h3>
        }else{
            return <h3 className="text-center">Update Doctor</h3>
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
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone : </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Speciality: </label>
                                            <input placeholder="speciality" name="speciality" className="form-control" 
                                                value={this.state.speciality} onChange={this.changeSpecialityHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateDoctor}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                  </div>
                  </div>
            </div>
            </div>
            </div>
        );
    }
}

    

export default CreateDoctorComponent;