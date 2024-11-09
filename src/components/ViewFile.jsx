import React, { Component } from 'react';
import Fileservice from '../Services/Fileservice';

class ViewFile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            fichier: {}
         
        }
    }
    componentDidMount(){
       
        Fileservice.getFileById(this.state.id).then( res => {
            this.setState({ fichier: res.data});
        })
    }
    
    render() {
        return (
            <div>
                                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View File Details</h3>
                    <div className = "card-body">
                        
                        <div className = "row">
                            <label className='gras'>Type :</label>
                            <div> { this.state. fichier.type }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Title: </label>
                            <div> { this.state. fichier.title }</div>
                        </div>
                        <div className = "row">
                            <label className='gras'> Date: </label>
                            <div> { this.state. fichier.date }</div>
                        </div>
                        
                       
        </div>

                </div>

            </div>
        );
    }
}

export default ViewFile;