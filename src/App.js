import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import './App.css';
import ListDoctorsComponent from './components/ListDoctorsComponent';
import CreateDoctorComponent from './components/CreateDoctorComponent';
import ViewDoctorComponent from './components/ViewDoctorComponent';
import UpdateDoctors from './components/UpdateDoctors';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListPatient from './components/ListPatient';
import ViewPatient from './components/ViewPatient';
import ListAdminsComponent from './components/ListAdminsComponent';
import CreateAdminComponent from './components/CreateAdminComponent';
import UpdateAdmins from './components/UpdateAdmins';
import ViewAdmin from './components/ViewAdmin';
import Acceuil from './components/Acceuil/Acceuil';
import Contact from './components/Acceuil/Contact';
import ListMedicaments from './components/ListMedicaments';
import UpdateMedicament from './components/UpdateMedicament';
import ViewMedicament from './components/ViewMedicament';
import Consultation from './components/Consultation';
import Etat from './components/navbar/Etat';
import Fichedeconsltation from './components/Fichedeconsultation';
import Ordonnance from './components/Ordonnance';
import CreateMedicamentComponent from './components/CreateMedicamentComponent';
import ListConsulation from './components/ListConsultation';
import File from './components/File';
import ViewFile from './components/ViewFile';
import CreateConsultation from './components/CreateConsultation';
import UpdateConsultation from './components/UpdateConsultation';
import ViewConsultation from './components/ViewConsultation';
import Registerr from './components/login/Registerr';
import Essai from './components/Essai';
import Bilan from './components/Bilan';
import Acc from './components/Acceuil/Acc';
import Rendezvous from './components/Rendezvous';
import RegistrationForm from './components/login/RegistrationForm';
import Loginn from './components/login/Loginn';
import ListeConsultation2 from './components/ListeConsultation2';
import Sidebar from './components/DashboardAdmin/Sidebar';
import About from './components/Acceuil/About';
 const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) =>{
        const token = localStorage.getItem("token");
        console.log({token})
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )}
      }
    />
  );
};
const PublicRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) =>{
        const token = localStorage.getItem("token");
        return token ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <Component {...props} />
        )}
      }
    ></Route>
  );
};


function App() {
  return (
    <div>
    <Router>
    <HeaderComponent/>
 
    <div>
     
    <Switch> 
    <PublicRoute  path="/login" component={Loginn}></PublicRoute>
    <PrivateRoute path = "/" exact component = {Acc}></PrivateRoute>
    <PrivateRoute path = "/doctors" component = {ListDoctorsComponent}></PrivateRoute>
    <Route path = "/add-doctor/:id" component = {CreateDoctorComponent}></Route>
    <Route path = "/view-doctor/:id" component = {ViewDoctorComponent}></Route>
    <Route path= "/patients" component={ListPatient}></Route>
    <Route path= "/View-patient/:id" component={ViewPatient}></Route>
    <Route path= "/admins" component={ListAdminsComponent}></Route>
    <Route path= "/add-admin/:id" component={CreateAdminComponent}></Route>
   {/* <Route path = "/update-doctor/:id" component = {UpdateDoctors}></Route> */}
   <Route path = "/update-admin/:id" component = {UpdateAdmins}></Route> 
   <Route path = "/vv"  component = {ViewAdmin}></Route>
   <Route path= "/reg" component= {Registerr}></Route>
   <Route path="/contact" component={Contact}></Route>
   <Route path="/medicaments" component={ListMedicaments}></Route>
   <Route path="/update1/:id" component={UpdateConsultation}></Route>
   <Route path="/update/:id" component={UpdateMedicament}></Route>
   <Route path="/viewmadicaments/:id" component={ViewMedicament}></Route>
   <Route path = "/createMed" component = {CreateMedicamentComponent}></Route>
   <Route path="/consultat/:id" component={Consultation}></Route>
   <Route path="/consultation" component={ListConsulation}></Route> 
   <Route path="/createConsultat/:id" component={CreateConsultation}></Route>
   <Route path="/etat" component={Etat}></Route>
   <Route path="/fiche" component={Fichedeconsltation}></Route>
   <Route path="/ordonnance/:id" component={Ordonnance}></Route>
   <Route path="/nn/:id" component={File}></Route>
   <Route path="/file/:id" component={ViewFile}></Route>
   <Route path= "/viewConsultat" component={ViewConsultation}></Route>
   <Route path= "/pp/:id" component={Essai}></Route>
   <Route path= "/bilan" component={Bilan}></Route>
   <Route path= "/rendezvous" component={Rendezvous}></Route>
   <Route exact path="/register" component={RegistrationForm}></Route>
   <Route exact path="/consult" component={ListeConsultation2}></Route>
   <Route exact path="/side" component={Sidebar}></Route>
   <Route exact path="/about" component={About}></Route>
   <Acceuil/>
   </Switch>
   </div>
   <FooterComponent/>
   </Router>
   </div>
  );
}

export default App;
