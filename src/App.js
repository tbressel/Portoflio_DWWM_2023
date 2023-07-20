import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/knowledges' element={<Knowledges />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;