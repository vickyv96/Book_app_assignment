import React from 'react';
import BookList from './BookList';
import Navbar from './Navbar';
import { BOOK_DATA } from '../../data';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">
                <BookList books={BOOK_DATA} />
            </div>
        </div>
    );
};

export default Home;
