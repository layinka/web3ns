import { /* useEffect, useState*/ } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Home from './Pages/Home';
import Search from './Pages/Search';
import Register from './Pages/Register';
import Manage from "./Pages/Manage";
import NotFound from './Pages/404';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="manage/:domain" element={<Manage />} />
          <Route path="register/:domain" element={<Register />} />
          <Route path="app" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  )
}

export default App;
