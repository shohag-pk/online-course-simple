import React from 'react';
import './Course.css';


const Course = (props) => {
    

    const {picture, name, price} = props.course;

    return (
        <div className="course">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div>
                <h3 className="course-name">{name}</h3>
                <p> Course Price: $ {price}</p>
                <button
             className="main-button"
             onClick = {() => props.handleAddCourse(props.course)}

            >Enroll Now</button>
            </div>
            
        </div>
    );
};

export default Course;