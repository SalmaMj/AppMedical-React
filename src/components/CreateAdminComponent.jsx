import React, { Component } from 'react';
import AdminService from '../Services/AdminService';

class CreateAdminComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            fullName: '',
            email: '',
            phone: ''
           
        }
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.save = this.save.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
        AdminService.getAdminById(this.state.id) .then( (res) =>{
        let admin = res.data;
        this.setState({
            fullName: admin.lastName,
            emailId : admin.emailId,
            phone :admin.phone
            
        });
    });
        }}

        save = (a) => {
            a.preventDefault();
            let admin = {fullName: this.state.fullName, email: this.state.email,
            phone :this.state.phone};
            console.log('admin=> ' + JSON.stringify(admin));
             AdminService.createAdmin(admin).then(res =>{
                    this.props.history.push('/admins');
                });
            }   

        
           

           
    

    changeFullNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }
    

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
   
    cancel(){
        this.props.history.push('/admins');
    }

  
    render() {
        return (
            <div>
                 <div className = "container">
                        <div  className="row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                         <h3>Create Admin</h3>
                            <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> FullName: </label>
                                            <input placeholder="Full Name" name="fullName" className="form-control" 
                                            value={this.state.fullName} onChange={this.changeFullNameHandler}/>
                                        </div>
                                     
                                        <div className = "form-group">
                                            <label> Email : </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone : </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                            value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={this.save}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                     </form>
                  </div>
                  </div>
                  </div>
            </div>
            </div>
          );
        }}

export default CreateAdminComponent;