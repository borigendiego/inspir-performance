import React from 'react';
import './App.css';
//Components
import Header from "./components/header";
import Home from "./components/home";
import Form from "./components/contact/Form";
import Performance from "./components/performance";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Performance />
      <Form />
    </div>
  );
}

export default App;
