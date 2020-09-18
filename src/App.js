import React from 'react';
import './App.css';
import PatientManagement from './Component/PatientManagement/PatientManagement';
import ReducerCount from './Component/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
