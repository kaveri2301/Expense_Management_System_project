import React, { useState } from 'react';
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Register = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  


  const handleSubmit = (event) => {
    event.preventDefault();

    let newData = {
      firstName ,
      lastName,
      email,
      password,
      confirmPassword
    };


  axios.post('http://localhost:8080/Person/add', newData)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="bg-primary" style={{height:'90vh'}}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <Card className="shadow-lg border-0 rounded-lg mt-5">
              <Card.Header>
                <h3 className="text-center font-weight-light my-4">
                  Create Account
                </h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0">
                        <Form.Control
                          type="text"
                          id="firstName"
                          placeholder="Enter your first name"
                          value={firstName}
                          onChange={(e) => setfirstName(e.target.value)}
                          required
                        />
                        <label htmlFor="firstName">First name</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating>
                        <Form.Control
                          type="text"
                          id="lastName"
                          placeholder="Enter your last name"
                          value={lastName}
                          onChange={(e) => setlastName(e.target.value)}
                          required
                        />
                        <label htmlFor="lastName">Last name</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                    />
                    <label htmlFor="email">Email address</label>
                  </Form.Floating>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0">
                        <Form.Control
                          type="password"
                          id="password"
                          placeholder="Create a password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0">
                        <Form.Control
                          type="password"
                          id="confirmPassword"
                          placeholder="Confirm password"
                          value={confirmPassword}
                          onChange={(e) => setconfirmPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <div className="mt-4 mb-0">
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-block"
                      >
                        Create Account
                      </Button>
                    </div>
                  </div>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center py-3">
                <div className="small">
                  <a href="/login">Have an account? Go to login</a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Register;
