import React from 'react';
import "./Spinner.css";
import spinner from "../../assets/images/spinner.gif";

const Spinner = () => {
    return (
        <div className='spinner-container'>
            <img src={spinner} alt='spinner' title='spinner'/>
        </div>
    );
};

export default Spinner;