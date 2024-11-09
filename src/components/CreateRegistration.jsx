import React, { Component } from 'react';
import Register from './login/Register';
import RegistrationService from '../Services/RegistrationService';



class CreateRegistration extends Component {

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
        RegistrationService. getRegistrationById(this.state.id) .then( (res) =>{
        let registration = res.data;
        this.setState({ username: registration.username,
            email : registration.email,
            password: registration.password,
            confirmpassword : registration.confirmpassword
          
        });
    });
        }}




    render() {
        return (
            <div>
                <Register/>
                
            </div>
        );
    }
}

export default CreateRegistration;