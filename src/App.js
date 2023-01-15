
import React  from 'react';
import {  Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Home from './Home'
const App=()=> {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Home />}/> 
      <Route path="*"  element={<Login />}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
