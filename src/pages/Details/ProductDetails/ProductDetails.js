import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
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
            <Container className="text-center pt-5">
                <div className="my-5 p-5">
                    <SingleProduct product={found}></SingleProduct>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;