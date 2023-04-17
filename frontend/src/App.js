
import './App.css';
import React, {  useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate, } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import LOginSucces from "./components/LOginSucces"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [token,setToken]=useState("")
  useMemo(()=>{
setToken(localStorage.getItem("token"))
  },[])

  return (
    <div><ToastContainer/>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={
      token ? <Navigate to="/login-success"/>:<Login setToken={setToken} />
     } />
     <Route path="/sign-up" element={
     token ? <Navigate to="/login-success"/>:<Signup setToken={setToken}/> 
     } />
     <Route path="/login-success" element={  token?<LOginSucces setToken={setToken} />:<Navigate to="/"/>}/>
          
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
