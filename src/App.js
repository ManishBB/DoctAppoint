import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import BookAppointment from './components/BookAppointment/BookAppointment';
import Appointments from './components/Appointments/Appointments';
import {BrowserRouter,  Routes , Route } from 'react-router-dom';
import SelectRole from './components/SelectRole/SelectRole';
import Homepage from './components/Homepage/Homepage';
import ChooseRole from './components/ChooseRole/ChooseRole';
import UserRegister from './components/UserRegister/UserRegister';
import DoctorRegister from './components/DoctorRegister/DoctorRegister';
import DoctorLogin from './components/DoctorLogin/DoctorLogin';
import DoctorsList from './components/DoctorsList/DoctorsList';
import DoctorAvailability from './components/DoctorAvailability/DoctorAvailability';
import AddAvailability from './components/AddAvailability/AddAvailability';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Homepage/> } />
        <Route exact path="login" element={ <LoginForm/> } />
        <Route exact path="doctorlogin" element={ <DoctorLogin/> } />
        <Route exact path="chooserole" element={ <ChooseRole/> } />
        <Route exact path="usersignup" element={ <UserRegister/> } />
        <Route exact path="doctorsignup" element={ <DoctorRegister/> } />
        <Route exact path="selectrole" element={ <SelectRole/> } />
        <Route exact path="bookappointment" element={ <BookAppointment/> } />
        <Route exact path="doctorslist" element={ <DoctorsList/> } />
        <Route exact path="doctoravailability" element={ <DoctorAvailability/> } />
        <Route exact path="addavailability" element={ <AddAvailability/> } />
        <Route exact path="appointments" element={ <Appointments/> } />
      </Routes>     
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
