import React from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, emailPasswordLogin, error, setUser, setError, setEmail, setPassword, signInWithGithub } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                setUser(result.user);
                setError("");
                history.push(from)
            })
            .catch(err => {
                setError(err.message)
            })
    }

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

    const handleEmailPasswordLogin = (event) => {
        event.preventDefault();
        emailPasswordLogin()
            .then((userCredential) => {
                setError("");
                history.push(from)
            })
            .catch((err) => setError(err.message))

    }

    return (
        <>

            <Container>
                <div className="form mt-5 p-5 bg-primary bg-opacity-25 rounded-3">
                    <h3>Please Login</h3>
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
                                onClick={()=>setError("")}
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
                            onClick={handleEmailPasswordLogin}
                            className="mt-3">
                            Login
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
                    <p className="mt-3 text-center">New to <span className="fw-bold">Health Care</span>? <Link to="/resister" onClick={() => setError("")}>Resister</Link></p>
                </div>
            </Container>
        </>

    );
};

export default Login;