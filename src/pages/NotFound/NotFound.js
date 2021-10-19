import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>        
            <div className="text-center mt-5">
                <img src="https://lh5.googleusercontent.com/proxy/HqNXitJgBNhVPckrtEpfERRRr6xfen-fyra7vcCQu2ggo9UGqkRmtv33ztNwcCRKhgAqKp0g6j6q=s0-d" alt="Not Found"className="img-fluid mb-5" />
                <br />
                <br />
                <Link to="/home">
                    <button type="button" className="btn btn-primary mt-5">Home</button>
                </Link>
            </div>
        </Container>
    );
};

export default NotFound;