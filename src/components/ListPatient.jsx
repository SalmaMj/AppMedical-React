import React, { Component } from 'react';
import PatientService from '../Services/PatientService';
import './p.css';
import { Image } from 'react-bootstrap';
import Sidebar from './DashboardAdmin/Sidebar';

class ListPatient extends Component {
    constructor(props) {
    
    super(props)

      this.state = {
                patients: [],
                user : {}
        }
      this.viewPatient=this.viewPatient.bind(this);
        
        
        
    }
    viewPatient(id){
        this.props.history.push(`/consultat/${id}`);}

    
    componentDidMount(){
      // const rememberMe = localStorage.getItem('user') === 'true';
        PatientService.getPatients().then((res) => {
            this.setState({ patients: res.data});
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const user = rememberMe ? localStorage.getItem('user') : '';
            this.setState({ user });            
        });
    }
 
    //  authUser = localStorage.getItem('user');
    render() {
   
        return (
        
            <div>
              
        <div  className='container'>
       
     <h2 className="R text-center">Patients List</h2>
   

           
 <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active">Active</a>

  </li>
  <li class="nav-item">
    <a class="nav-link" >Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="">Disabled</a>
  </li>
</ul>
            <div className='S'>    
         <nav class="navbar navbar-light bg-light">
          <div class="col">
            
           <form class="form-inline">
          
         <input class="form-control mr-sm-3" type="search" placeholder="Search" aria-label="Search"/>
       
           </form>
         </div>
     <div class="zz col">
  <form class="form-inline">
     
    <input class="form-control mr-sm-2" type="search" placeholder="Full " aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </form>
  </div>
     </nav>
</div>

                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Nom Complet</th>
                                    <th> Sexe</th>
                                    <th> Date de Naissance</th>
                                    <th> Age</th>
                                    <th> Email</th>
                                    <th> mobile</th>
                                    
                                    
                                  
                    
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                               this.state.patients.map(
                                Patient => 
                                <tr key =  {Patient.id}>
                                     <td>  {Patient.firstName} </td> 
                                     <td>  {Patient.sexe} </td>
                                     <td>  {Patient.date} </td>  
                                      <td> {Patient.age} </td>
                                      <td> {Patient.email}</td>
                                     <td>  {Patient.phone}</td>
                                    
                                     
                                  
                                     <td>
                                     <button style={{}} onClick={ () => this.viewPatient(Patient.id)} className="btn btn-info"><i class="fa-solid fa-eye"></i></button>
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
    
}}

export default ListPatient;