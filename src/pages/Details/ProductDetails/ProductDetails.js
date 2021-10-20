import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { duplicateData } from '../../../fakedb';
import Extra from '../../Shared/Header/Extra/Extra';
import SingleProduct from './SingleProduct';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = duplicateData;

    const found = products.find(product => product.id.toString() === productId);

    return (
        <div>
            <Extra></Extra>
            <Container className="text-center mb-5">
                <div className="mb-5 p-5 detail">
                    <SingleProduct product={found}></SingleProduct>
                </div>

                <Link to="/shop"><Button variant="danger" className="px-4">Back</Button></Link>
            </Container>
        </div>
    );
};

export default ProductDetails;