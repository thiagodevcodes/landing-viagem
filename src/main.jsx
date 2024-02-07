import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
