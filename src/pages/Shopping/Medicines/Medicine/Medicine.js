import React from 'react';
import { Col, Card } from 'react-bootstrap';


const Medicine = (props) => {
    const { title, img, price } = props.medicine;

    return (
        <Col>
            <Card className="card text-center" >
                <Card.Img variant="top" src={img} alt="Service Image" className="little-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <br />
                    <Card.Title className="text-danger">{price}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Medicine;