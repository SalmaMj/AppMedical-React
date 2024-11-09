import React, { Component } from 'react'
import RegistrationService from '../../Services/RegistrationService';
import Register from './Register'

export default class Registerr extends Component {
  constructor(props) {
  super(props)

  this.state = {
      // step 2
      id: this.props.match.params.id
    }
    this.handleSave = this.handleSave.bind(this);
  }
    handleSave=e=>{
      console.log('reg=>-----------------2103 ');
    e.preventDefault();
      let reg = { usename: reg.username,
        email:reg.email,
       password : reg.password,
       confirmPassword : reg.confirmPassword};
        console.log('reg=> ' + JSON.stringify(reg));
         RegistrationService.createRegistration(reg).then(res =>{
                this.props.history.push(`/`);
            });
        }   

  componentDidMount(){
   RegistrationService.getRegistrationById(this.state.id) .then( (res) =>{
    let reg= res.data;
    this.setState({
      usename: reg.username,
      email:reg.email,
     password : reg.password,
     confirmPassword : reg.confirmPassword
        

    });
});
RegistrationService.getRegistration().then((res) => {
    this.setState({ reg: res.data});
});
    }
  render() {
    return (
      <div>
          <Register/>
         
      </div>
    )
  }
}
