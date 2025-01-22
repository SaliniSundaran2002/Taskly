import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Taskform from './components/Taskform';
import Header from './components/Header';
import Tasklist from './components/Tasklist';
import Taskitem from './components/Taskitem';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <ToastContainer /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<Taskform />} />
          <Route path="/viewtask" element={<Tasklist />} />
          <Route path="/taskitem" element={<Taskitem />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
