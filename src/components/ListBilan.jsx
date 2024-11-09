import React, { Component } from 'react';
import Bilanservice from '../services/Bilanservice';

class ListBilan extends Component {
    constructor(props) {
    
        super(props)

        this.state = {
            bilans: [],

            id: this.props.match.params.id,
            date:'',
           lignes_bilan:'',}}


           
  componentDidMount(){
 Bilanservice.getAllBilan().then((res) => {
                this.setState({bilans: res.data});
            });
        }
    

    render() {
        return (
           
            
            <div className='container'>
            <div className = "row">
                 <table className = "table table-striped table-bordered">

                     <thead>
                         <tr>
                            
                             <th> Date</th>
                             <th>Lignes Bilan</th>
                           
                         </tr>
                     </thead>
                     <tbody>
                         {
                        this.state.bilans.map(
                         bilan => 
                         <tr key = {bilan.id}>
                              <td> {bilan.date} </td>   
                              <td> {bilan.  lignes_bilan}</td>
                             

                             

                                     
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

export default ListBilan;