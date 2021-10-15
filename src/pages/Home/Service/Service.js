import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div className="single-service">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;