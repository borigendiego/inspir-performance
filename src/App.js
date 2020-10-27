import React from 'react';
import './App.css';
//Components
import Header from "./components/header";
import Home from "./components/home";
import Contact from "./components/contact";
import Performance from "./components/performance";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
