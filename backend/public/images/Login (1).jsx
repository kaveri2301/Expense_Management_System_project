import React, { useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import Footer from './Footer.jsx';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8080/Person/login', { email, password });
  
        // Assuming the response structure is similar to your fetch implementation
        const data = response.data;
  
        if (response.status === 200) {
          // Login successful, handle the data as needed
          console.log('Login successful:', data);
          navigate('/vendor')
        } else {
          // Login failed, handle the error message
          seterror(data.msg || 'Login failed');
        }
      } catch (error) {
        console.error('Error during login:', error);
        seterror('An error occurred during login');
      }
    };

    return (
        <>
            <div className=' bg-primary'>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={5}>
                                        <Card className="shadow-lg border-0 rounded-lg mt-5">
                                            <Card.Header>
                                                <h3 className="text-center font-weight-light my-4">Login</h3>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form>
                                                    <Form.Group className="mb-3">
                                                        <FloatingLabel controlId="inputEmail" label="Email address">
                                                            <Form.Control type="email" placeholder="name@example.com"
                                                            value={email}
                                                            onChange={(e) => setemail(e.target.value)}
                                                            required />
                                                        </FloatingLabel>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <FloatingLabel controlId="inputPassword" label="Password">
                                                            <Form.Control type="password" placeholder="Password"
                                                            value={password}
                                                            onChange={(e) => setpassword(e.target.value)}
                                                            required  />
                                                        </FloatingLabel>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Check
                                                            type="checkbox"
                                                            id="inputRememberPassword"
                                                            label="Remember Password"
                                                        />
                                                    </Form.Group>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        {/* <a className="small" href="password.html"> */}
                                                        <a className="small" href="/pass">
                                                            Forgot Password?
                                                        </a>

                                                        <Button href='vendor' onClick={handleLogin} >Login</Button>
                                              {error && <p style={{ color:'red' }}>{error}</p>}
                                                    </div>
                                                </Form>
                                            </Card.Body>
                                            <Card.Footer className="text-center py-3">
                                                <div className="small">
                                                    <a href="/">Need an account? Sign up!</a>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <Footer />
                    </div>
                </div>
            </div>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"
            ></script>
        </>
    );
}


export default Login;



