import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header';
import Main from './components/main';
import MainContent from './components/mainContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() { 
  return (
    <Router>
      <Header />
      <Main />
      <MainContent />  
      <Footer/>    
    </Router>
  );
}

export default App;
