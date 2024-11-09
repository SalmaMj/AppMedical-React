import React, { Component } from 'react';
import AdminService from '../Services/AdminService';


class UpdateAdmins extends Component {
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
        this.updateAdmin = this.updateAdmin.bind(this);
    }
    componentDidMount(){
        AdminService.getAdminById(this.state.id) .then( (res) =>{
        let admin = res.data;
        this.setState({
            phone :admin.phone,
            fullName: admin.fullName,
             email : admin.email
           
        });
    });
        }
  updateAdmin= (a) => {
     a.preventDefault();
            let admin = {fullName: this.state.fullName, email: this.state.email,  phone: this.state.phone };
            console.log('admin => ' + JSON.stringify(admin));
            console.log('id => ' + JSON.stringify(this.state.id))
            AdminService.updateAdmins(admin,this.state.id).then( res => {
                this.props.history.push('/admins');
            }
            )}
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
            getTitle(){
                if(this.state.id === '_add'){
                    return <h3 className="text-center">Add Admin</h3>
                }else{
                    return <h3 className="text-center">Update Admin</h3>
                }}
                
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
                                       
                                        <button className="btn btn-success" onClick={this.updateAdmin}>Save</button>
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

export default UpdateAdmins;