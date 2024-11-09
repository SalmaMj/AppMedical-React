
import Home from "./Home" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar"

function Dashboard() {
  return (
    <Router>
     
      <div className="container">
        <Sidebar />
       
        
      
      </div>
    </Router>
  );
}

export default Dashboard;