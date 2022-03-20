import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
          {/* Home Page */}
          <Route exact path="/" element={<Home/>}></Route>
          {/* Login Page */}
          <Route exact path="/login" element={<Login/>}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
