import React from 'react';
import './App.css';
import Form from './Component/Form/Form.jsx'
import TableApi from './Component/Table/TableAPI.jsx'
import Navbar from './Component/Navbar/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <br/>
      <Form /> 
      <br />
      <TableApi/>
    </div>
  );
}

export default App;
