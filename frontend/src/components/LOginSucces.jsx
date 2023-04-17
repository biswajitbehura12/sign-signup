import React from 'react';
import {  toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function LOginSucces({setToken}) {
  
  const navigate = useNavigate();

  const Logout=async()=>{
    setToken("")
    navigate("/")
  }

  return (
    <div>
      Login sucees fully  <button  onClick={Logout}>Logout</button>
    </div>
  )
}


export default LOginSucces
