import React from 'react';
import Extra from '../../Shared/Header/Extra/Extra';

import './About.css';

const About = () => {
    return (
        <div>
            <Extra></Extra>
            <div className="container">
                <div className="text-center my-5 w-50 mx-auto">
                    <h1>We can help you to <br /><span className="text-primary">KEEP YOUR HEALTH FIT</span></h1>
                </div>
                <div className="w-75 mx-auto">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src="https://www.renestance.com/wp-content/uploads/2017/06/insurance-health-card-medical-doctor-healthcare-1541055-pxhere.com_.jpg" className="img-fluid first-image" alt="..." />
                            </div>
                            <div className="col-md-6 ">
                                <div className="card-body">
                                    <h5 className="card-title">We are try to give our best so that you can feel us like family members. </h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit laboriosam, eius ipsa consequuntur eos. Nulla dolorem repudiandae mollitia distinctio eos pariatur dolores, voluptate impedit. Eaque quos, sapiente ipsum possimus.

                                        Odio ducimus id vero tempora eaque rem voluptatibus tempore sequi ea quod, odit commodi voluptas! Nesciunt dolorum ea repudiandae. Officia eos impedit sapiente tempore, a dolore minus eaque culpa facere.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 mt-5">
                        <div className="row g-0">
                            <div className="col-md-6 ">
                                <div className="card-body">
                                    <h5 className="card-title">We have high qualified doctors and friendly receptionist and try to give fast service.</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reprehenderit laboriosam, eius ipsa consequuntur eos. Nulla dolorem repudiandae mollitia distinctio eos pariatur dolores, voluptate impedit. Eaque quos, sapiente ipsum possimus.

                                        Odio ducimus id vero tempora eaque rem voluptatibus tempore sequi ea quod, odit commodi voluptas! Nesciunt dolorum ea repudiandae. Officia eos impedit sapiente tempore, a dolore minus eaque culpa facere.


                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src="https://images.benefitspro.com/contrib/content/uploads/sites/412/2018/12/HealthCareInvestment.jpg" className="img-fluid second-image" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;