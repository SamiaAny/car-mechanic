import React from 'react';
import { Container, Row } from 'react-bootstrap';
import mechanic1 from '../../../images/mechanics/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanics/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanics/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanics/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanics/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
    {
        img: mechanic5,
        name: 'Tamim Anderson',
        expertize: '-Alrounder Expert-'
    }
]

const Experts = () => {
    return (
        <div className="mt-5">
            <h2 className="text-primary mb-4">Our Experts</h2>
            <Container>
                <Row>
                    {
                        experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;