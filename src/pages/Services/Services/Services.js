import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFakeDB from '../../../hooks/useFakeDB';
import Extra from '../../Shared/Header/Extra/Extra';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useFakeDB();

    return (
        <div>
            <Extra></Extra>
            <Container>
                <div className="my-5">
                    <div className="text-center mb-5 w-50 mx-auto">
                        <h1>What We Offer</h1>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                    </div>
                    <div className="p-4">
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                services && services.map(service => <Service key={service.id} service={service}></Service>)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;