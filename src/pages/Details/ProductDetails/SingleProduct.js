import React from 'react';
import { Card } from 'react-bootstrap';
import '../Details.css';

const SingleProduct = (props) => {
    const { title, about, img } = props.product;
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={img} alt="Service Image" className="single-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;