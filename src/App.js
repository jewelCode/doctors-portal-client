import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="appointment" element={<RequireAuth>
              <Appointment/>
            </RequireAuth>}>
            </Route>
            <Route path="dashboard" element={<RequireAuth>
              <Dashboard/>
            </RequireAuth>}>
                <Route index element={<MyAppointments></MyAppointments>}></Route>
                <Route path="review" element={<MyReview></MyReview>}></Route>
                <Route path="history" element={<MyReview></MyReview>}></Route>
                <Route path="history" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<SignUp></SignUp>}></Route>
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
