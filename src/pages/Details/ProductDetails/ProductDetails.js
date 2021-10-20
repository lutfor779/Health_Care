import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFakeDB from '../../../hooks/useFakeDB';
import Extra from '../../Shared/Header/Extra/Extra';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useFakeDB();

    console.log(products);

    return (
        <div>
            <Extra></Extra>
            <Container className="text-center pt-5">
                <div className="my-5 p-5 bg-info bg-opacity-25 rounded-3">
                    <h1>It is the {productId}nd Product</h1>
                </div>                
            </Container>
        </div>
    );
};

export default ProductDetails;