import React, { Component } from 'react';
import DoctorService from '../Services/DoctorService';

class ListDoctorsComponent extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
                doctors: []
        }

        
        this.addDoctor= this.addDoctor.bind(this);
        this.editDoctor= this.editDoctor.bind(this);
        this.deleteDoctor = this.deleteDoctor.bind(this);
        this.viewDoctor=this.viewDoctor.bind(this);
    }

    deleteDoctor(id){
        DoctorService.deleteDoctor(id).then( res => {
            this.setState({doctors: this.state.doctors.filter(doctor => doctor.id !== id)});
        });
    }
    viewDoctor(id){
        this.props.history.push(`/view-doctor/${id}`);}

    editDoctor(id){
        this.props.history.push(`/add-doctor/${id}`);
    }

    componentDidMount(){
        DoctorService.getDoctors().then((res) => {
            this.setState({ doctors: res.data});
        });
    }

    addDoctor(){
        this.props.history.push('/add-doctor/_add');
    }

    render() {
        return (
            <div>
                 <div  className='container'>
                    <button className="btn btn-primary" onClick={this.addDoctor}> Add Doctor</button>
                 
                <h2 className="text-center">Doctors List</h2>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Doctor First Name</th>
                                    <th> Doctor Last Name</th>
                                    <th> Doctor Email Id</th>
                                    <th> Doctor phone</th>
                                    <th> Doctor Speciality</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                               this.state.doctors.map(
                                doctor => 
                                <tr key = {doctor.id}>
                                     <td> {doctor.firstName} </td>   
                                     <td> {doctor.lastName}</td>
                                     <td> {doctor.emailId}</td>
                                     <td> {doctor.phone} </td>
                                     <td>  {doctor.speciality}</td>
                                     <td>
                                     <th scope="col">   <button onClick={ () => this.editDoctor(doctor.id)} className="btn btn-info"><i class="fa-solid fa-pen"></i></button></th>
                                     <th scope="col">   <button style={{marginLeft: "2px"}} onClick={ () => this.deleteDoctor(doctor.id)} className="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button></th>
                                     <th scope="col">         <button style={{marginLeft: "2px"}} onClick={ () => this.viewDoctor(doctor.id)} className="btn btn-info"><i class="fa-solid fa-eye"></i></button></th>
                                             </td>
                                     </tr>
                               )
                                
                                }
                               
                               </tbody>
                            </table>
                            
              </div>  
        
            </div>
            </div>
        );
    }
}


export default ListDoctorsComponent;