import React from 'react';

const Navbar = () => {
    return (
        <div className="logo">
            <nav>
                <ul className="flex ml-5">
                    <li>
                        <a href="/" className="mr-5 focus:text-black">
                            Home
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
