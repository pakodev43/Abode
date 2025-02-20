import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


import Home from "./pages/Home";
import Homes from "./pages/Homes";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/homes" element={<Homes />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
)