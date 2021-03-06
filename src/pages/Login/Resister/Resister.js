import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../../hooks/useAuth';

const Resister = () => {
    const { signInWithGoogle, resister, error, setUser, setError, setEmail, setPassword, setName, signInWithGithub } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                setError("");
                history.push(from)
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError("");
                history.push(from)
            })
            .catch(err => {
                setError(err.message)
            })
    }



    return (
        <div>
            <Container>
                <div className="form mt-5 p-5 bg-primary bg-opacity-25 rounded-3">
                    <h3>Please Resister</h3>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email"
                                placeholder="name@example.com"
                                onBlur={(event) => {
                                    setEmail(event.target.value);
                                }}
                                onClick={() => setError("")}
                                required />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingName"
                            label="Name"
                            className="mb-3">
                            <Form.Control type="text"
                                placeholder="Name"
                                onBlur={(event) => {
                                    setName(event.target.value);
                                }}
                                onClick={() => setError("")}
                                required />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password">
                            <Form.Control type="password"
                                placeholder="Password"
                                onBlur={(event) => {
                                    setPassword(event.target.value);
                                }}
                                required />
                        </FloatingLabel>

                        {
                            error && <p className="text-danger mt-3">{error}</p>
                            
                        }

                        <Button variant="primary"
                            type="submit"
                            onClick={resister}
                            className="mt-3">
                            Resister
                        </Button>

                        <br />

                        <Button variant="warning"
                            type="button"
                            onClick={handleGoogleLogin}
                            className="mt-3">
                            Google Signin
                        </Button>

                        <br />
                        <Button variant="success"
                            type="button"
                            onClick={handleGithubLogin}
                            className="mt-3">
                            Github Signin
                        </Button>
                    </Form>
                    <p className="mt-3 text-center">Already have an account? <Link to="/login" onClick={()=>setError("")}>Login</Link></p>
                </div>
            </Container>
        </div>
    );
};

export default Resister;