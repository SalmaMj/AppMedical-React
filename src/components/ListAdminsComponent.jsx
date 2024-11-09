import React, { Component } from 'react';
import AdminService from '../Services/AdminService';


class ListAdminsComponent extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
                admins: []
        }
        this.createAdmin= this.createAdmin.bind(this);
        this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
        this.viewAdmin=this.viewAdmin.bind(this);
    }
    deleteAdmin(id){
        AdminService.deleteAdmin(id).then( res => {
            this.setState({admins: this.state.admins.filter(admin => admin.id !== id)});
        });
    }
    viewAdmin(id){
        this.props.history.push(`/vv/${id}`);}

    editAdmin(id){
        this.props.history.push(`/update-admin/${id}`);
    }

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({ admins: res.data});
        });
    }

    createAdmin(){
        this.props.history.push('/add-admin/_add');
    }

   
    render() {
        return (
            <div className='container'>
                <button className="btn btn-primary" onClick={this.createAdmin}> Create Admin</button>
            
            
           <h2 className="text-center">Admins List</h2>
           <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th>Admin FullName</th>
                               <th> Admin Email Id</th>
                               <th> Admin phone</th>
                               
                               <th> Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                          this.state.admins.map(
                           admin => 
                           <tr key = {admin.id}>
                                <td> {admin.fullName} </td>   
                               
                                <td> {admin.email}</td>
                                <td> {admin.phone} </td>
                                
                                <td> 
                                            
                                            <button onClick={ () => this.editAdmin(admin.id)} className="btn btn-info"> </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAdmin(admin.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewAdmin(admin.id)} className="btn btn-info">View </button>
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

export default ListAdminsComponent;