import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateQuestion from './components/CreateQuestion';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionsPage from './pages/QuestionsPage';

function App() {
  return (

    <BrowserRouter>
      <div className="App h-[100vh]">
        <NavBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/questions' Component={QuestionsPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
