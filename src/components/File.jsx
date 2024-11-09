import React, { Component } from 'react';
import'./ZZZ.css';
import Fileservice from '../Services/Fileservice';
import PatientService from '../Services/PatientService';
import Etat from './navbar/Etat';



class File extends Component {
    constructor(props) {
    
        super(props)

        this.state = {

            fichiers: [],
            Patient :{},
            id: this.props.match.params.id,
            type: '',
            title: '',
            date: '',
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.addfile= this.addfile.bind(this);
        this.editfile= this.editfile.bind(this);
        this.deletefile= this.deletefile.bind(this);
        this.viewfile=this.viewfile.bind(this);
    }

    deletefile(id){
      Fileservice.deleteFile(id).then( res => {
            this.setState({fichiers: this.state.fichiers.filter(fichier =>fichier.id !== id)});
        });
    }
    viewfile(id){
        this.props.history.push(`/file/${id}`);}

    editfile(id){
        this.props.history.push(`/updatefile/${id}`);
    }

    componentDidMount(){
        Fileservice.getAllFile().then((res) => {
            this.setState({fichiers: res.data});
        });
        PatientService.getPatientById(this.state.id).then( res => {
            this.setState({ Patient: res.data});
                                           })
    }

    addfile(){
        this.props.history.push('/createfile/_add');
    }
    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }
   
    render() {
       
        return (
             <div>
                 <div className='backg'>
                        <label className='gras'>Full Name :</label>
                            { this.state. Patient.fullName }
                        </div>
                
                 <Etat id={this.state.id}/>
                 
                  <img  className="nn" src="data:image/jpeg;base64,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"/>
                 <div className='wrapper'>
                     <div>
                        
                     <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder=" title" name="title" className="form-control" 
                                                value={this.state. title} onChange={this.changeTitleHandler}/>
                                        </div>
                     </div>
                     <div>
                         
                     <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date"  type="date" name="Date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>

                                        </div>
                     </div>
             
                     </div>
                     <div>
                     <div  className='container'>
                    <button className="btn btn-primary" onClick={this.addfile}> Add File</button>
                 </div>
                <h2 className="text-center">List Files</h2>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Type</th>
                                    <th> Title</th>
                                    <th> Posologie</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                               this.state.fichiers.map(
                                fichier => 
                                <tr key = {fichier.id}>
                                     <td>{fichier.type} </td>   
                                     <td> {fichier.title}</td>
                                     <td> {fichier.date}</td>
                                    
                                     <td>
                                                 <button style={{marginLeft: "50px"}} onClick={ () => this.editfile(fichier.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "100px"}} onClick={ () => this.deletefile(fichier.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "100px"}} onClick={ () => this.viewfile(fichier.id)} className="btn btn-info">View </button>
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

export default File;