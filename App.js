import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Form from './components/Form';


const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
