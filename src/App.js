import React from 'react';
import './App.css';
//Components
import Header from './components/header';
import Home from './components/home';
import Performance from './components/performance';
import Contact from './components/contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Performance />
      <Contact />
    </div>
  );
}

export default App;
