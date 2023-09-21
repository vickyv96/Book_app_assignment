import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="Books/:id" element={<BookDetails />}></Route>
            </Routes>
        </div>
    );
};

export default App;
