import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFakeDB from '../../../hooks/useFakeDB';
import Doctor from '../../Services/Doctors/Doctor/Doctor';
import Service from '../../Services/Service/Service';
import Medicine from '../../Shopping/Medicines/Medicine/Medicine';
import Product from '../../Shopping/Product.js/Product';
import Banner from '../Banner/Banner';

const Home = () => {
    const fakeData = useFakeDB();
    const { services, doctors, medicines, products } = fakeData;
    const homeServices = services && services.slice(0, 3);
    const homeDoctors = doctors && doctors.slice(0, 3);
    const homeMedicines = medicines && medicines.slice(0, 3);
    const homeProducts = products && products.slice(0, 3);



    return (
        <div>
            <Banner></Banner>
            <div>

                {/* Products */}
                <div className="p-5" style={{ background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)" }}>
                    <Container className="text-center">
                        <h1 className="mb-5 pb-3 text-white">Our some Products</h1>
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                homeProducts && homeProducts.map(product => <Product key={product.id} product={product} />)
                            }
                        </Row>
                        <br />
                        <Link to="/shop"><Button variant="warning">See More</Button></Link>
                    </Container>
                </div>


                {/* Medicines */}
                <div className="p-5" style={{ background: "linear-gradient(to right, #be93c5, #7bc6cc)" }}>
                    <Container className="text-center">
                        <h1 className="mb-5 pb-3 text-white">Our some Medicines</h1>
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                homeMedicines && homeMedicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine>)
                            }
                        </Row>
                        <br />
                        <Link to="/medicines"><Button variant="warning">See More</Button></Link>
                    </Container>
                </div>


                {/* doctors */}
                <div className="p-5" style={{ background: "linear-gradient(to right, #f64f59,#c471ed,#12c2e9)" }}>
                    <Container className="text-center">
                        <h1 className="mb-5 pb-3 text-white">Our some Doctors</h1>
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                homeDoctors && homeDoctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                            }
                        </Row>
                        <br />
                        <Link to="/doctors"><Button variant="warning">See More</Button></Link>
                    </Container>
                </div>


                {/* service */}
                <div className="p-5" style={{ background: "linear-gradient(to right, #4bc0c8, #c779d0, #feac5e)" }}>
                    <Container className="text-center">
                        <h1 className="mb-5 pb-3 text-white">Our best services</h1>
                        <Row xs={1} md={2} lg={3} className="g-4 handle-service px-3 pb-4">
                            {
                                homeServices && homeServices.map(service => <Service key={service.id} service={service} />)
                            }
                        </Row>
                        <br />
                        <Link to="/services"><Button variant="warning">See More</Button></Link>
                    </Container>
                </div>

                {/*  */}

            </div>
        </div>
    );
};

export default Home;