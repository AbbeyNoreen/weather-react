import React from 'react';
import './App.css';
import Form from "./Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Hello React
       </h1>
       <Form city="Washington DC" />
      </header>
    </div>
  );
}

export default App;
