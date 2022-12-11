
import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home'
const App=()=> {
  return (
   <div>
     <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Home />}/> 
    </Routes>
   </div>
  );
}

export default App;
