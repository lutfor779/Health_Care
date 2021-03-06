import React from 'react';
import "./Service.css";
import { Col, Card } from 'react-bootstrap';

const Service = (props) => {
    const { title, about, img } = props.service;
    
    return (
        <Col>
            <Card className="card">
                <Card.Img variant="top" src={img} alt="Service Image" className="little-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <br />
                    <Card.Text>{about}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;