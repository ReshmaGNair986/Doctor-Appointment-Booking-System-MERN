// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Appointments from './pages/Appointment';
import Profile from './pages/Profile';

import About from './pages/About';
import View from './pages/View';
import Doctors from './pages/Doctor';
import Book from './pages/Book';
import Update from './pages/Update';
import Home from './pages/Home';
import AdminRoute from './admin/AdminRoute';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';




function App() {
  return (
   
      <>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/upcoming-appointments" element={<Appointments />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/view" element={<View/>}/>
          <Route path="/add" element={<Book/>}/>
          <Route path="/update" element={<Update />} />
          {/* <Route path="/admin" element={<Admin/>} /> */}
          <Route path="/admin/adminroute" element={<AdminRoute/>}/>
          <Route path="/admin/login" element={<AdminLogin/>}/>
          <Route path="/admin/admindashboard" element={<AdminDashboard/>}/>
        </Routes>
      </>
  
  );
}

export default App;
