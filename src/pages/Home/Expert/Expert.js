import React from 'react';
import { Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const { name, img, expertize } = expert;
    return (
        <>
            <Col lg={4} md={6}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{expertize}</h5>
            </Col>
        </>
    );
};

export default Expert;