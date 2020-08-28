import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className = "Header">
       
        <nav>
            <a href="/course">Course</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
        </nav>
    </div>
    );
};

export default Header;