import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';


const Doctor = (props) => {
    const { title, detail, img } = props.doctor;


    return (
        <Col>
            <Card className="card" >
                <Card.Img variant="top" src={img} alt="Service Image" className="little-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{detail}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;