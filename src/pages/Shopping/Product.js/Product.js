import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';


const Product = (props) => {
    const { title, about, img } = props.product;

    return (
        <Col>
            <Card className="card" style={{ height: "550px" }}>
                <Card.Img variant="top" src={img} alt="Service Image" className="little-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Detail</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};
export default Product;