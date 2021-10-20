import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { id, title, about, img } = props.product;

    return (
        <Col>
            <Card className="card" style={{ height: "550px" }}>
                <Card.Img variant="top" src={img} alt="Service Image" className="little-img mb-3" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/product/${id}`}>
                        <Button variant="primary">Detail</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};
export default Product;