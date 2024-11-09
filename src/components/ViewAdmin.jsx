import React, { Component } from 'react';
import AdminService from '../Services/AdminService';

class ViewAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Admin: {}
         
        }
    }
    componentDidMount(){
       
        AdminService.getAdminById(this.state.id).then( res => {
            this.setState({ admin: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Admin Details</h3>
                    <div className = "card-body">
                        
                        <div className = "row">
                            <label>Full Name :</label>
                            <div> { this.state.Admin.fullName }</div>
                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.Admin.phone }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.Admin.email }</div>
                        </div>
                        
                       
        </div>

                </div>
            </div>
            
        )

    }
}
export default ViewAdmin ;