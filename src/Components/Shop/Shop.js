import React, { useState } from 'react';
import { fakeData } from '../../fakeData/fakeData';
import './Shop.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first15 = fakeData.slice(0,15);
    const [courses, setCourses] = useState(first15);

    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        console.log( 'Course Added', course);
         const newCart = [...cart, course];
         setCart(newCart);
    }


    return (
        <div className = "shop-container">
            
         <div className="course-container">
       
            {
            courses.map(crs => <Course
                handleAddCourse = {handleAddCourse}
                course={crs}
                ></Course>)
            }
            
         </div>
         <div className="cart-container">
             <Cart cart = {cart}></Cart>

         </div>

        </div>
    );
};

export default Shop;