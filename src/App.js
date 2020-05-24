import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <Router>
      <MainPage/>
    </Router>
  );
}

export default App;
