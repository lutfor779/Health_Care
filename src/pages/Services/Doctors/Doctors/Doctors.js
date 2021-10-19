import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFakeDB from '../../../../hooks/useFakeDB';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useFakeDB();

    return (
        <div>
            <Container>
                <div className="my-5">
                    <div className="text-center mb-5 w-50 mx-auto">
                        <h1>Here are our some Doctors</h1>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                    </div>
                    <div className="p-4">
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                doctors && doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};


export default Doctors;