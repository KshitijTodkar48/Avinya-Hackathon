import React from 'react';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
  const [value, setValue] = useState('') ;
  const navigate = useNavigate() ;

  const handleUserJoin = useCallback(() => {
    navigate(`/room/${value}`) ;
  }, [value]);

  const buttonStyle = {
    "backgroundColor": "blue",
    "color": "white",
    "border": "none",
    "padding": "3px 15px",
    "border-radius": "0 8px 8px 0",
    "fontSize": "20px"
  }

  const inputStyle = {
    "padding": "2px 10px",
    "border-radius": "8px 0 0 8px",
    "border": "1px solid gray",
    "fontSize": "20px"
  }

  return (
    <div className='homepage' style={{"height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"}}>
        <input style={inputStyle} type="text" 
         placeholder="Enter your room ID"
         onChange={(e) => { setValue(e.target.value); }}
        />
        <button style={buttonStyle} onClick={() => { handleUserJoin() }}> Join </button>
    </div>
  )
}