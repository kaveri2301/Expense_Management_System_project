// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const VendorForm = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     legalBusinessName: '',
//     contactPerson: '',
//     position: '',
//     emailAddress: '',
//     phoneNumber: '',
//     address: '',
//     bankName: '',
//     accountName: '',
//     accountNumber: '',
//     gstNumber: '',
//     additionalNotes: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle the form submission here
//     console.log('Form submitted:', formData);
//     // You can send the data to your backend or perform any other action
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       {/* Company Information */}
//       <Form.Group controlId="companyName">
//         <Form.Label>Company Name:</Form.Label>
//         <Form.Control
//           type="text"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="legalBusinessName">
//         <Form.Label>Legal Business Name:</Form.Label>
//         <Form.Control
//           type="text"
//           name="legalBusinessName"
//           value={formData.legalBusinessName}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Contact Information */}
//       <Form.Group controlId="contactPerson">
//         <Form.Label>Contact Person:</Form.Label>
//         <Form.Control
//           type="text"
//           name="contactPerson"
//           value={formData.contactPerson}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Add other fields for Contact Information... */}

//       {/* Financial Information */}
//       <Form.Group controlId="bankName">
//         <Form.Label>Bank Name:</Form.Label>
//         <Form.Control
//           type="text"
//           name="bankName"
//           value={formData.bankName}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Add other fields for Financial Information... */}

//       {/* Tax Information */}
//       <Form.Group controlId="gstNumber">
//         <Form.Label>GST Number:</Form.Label>
//         <Form.Control
//           type="text"
//           name="gstNumber"
//           value={formData.gstNumber}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       {/* Additional Notes */}
//       <Form.Group controlId="additionalNotes">
//         <Form.Label>Additional Notes:</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           name="additionalNotes"
//           value={formData.additionalNotes}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default VendorForm;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const VendorUpdate = () => {
  const [companyName, setcompanyName] = useState('');
  const [LegalBusinessName, setLegalBusinessName] = useState('');
  const [contactPerson, setcontactPerson] = useState('');
  const [position, setposition] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [address, setaddress] = useState('');
  const [bankName, setbankName] = useState('');
  const [accountName, setaccountName] = useState('');
  const [accountNumber, setaccountNumber] = useState('');
  const [gstNumber, setgstNumber] = useState('');
  const [notes, setnotes] = useState('');
  const navigate = useNavigate();
  
  const xyz = localStorage.getItem('vendoremail')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!companyName || !LegalBusinessName || !contactPerson || !position || 
      !email ||!phoneNumber ||!address ||!bankName ||!accountName
      ||!accountNumber ||!gstNumber ||!notes) {
      // Show an alert message if any of the fields is empty
      alert('Please fill in all the fields');
      return;
    }
    else{
        alert("Data Updated!")
        navigate('/vendortable')
    }

    

    let newData = {
      companyName,
      LegalBusinessName,
      contactPerson,
      position,
      email,
      phoneNumber,
      address,
      bankName,
      accountName,
      accountNumber,
      gstNumber,
      notes
    };
    axios.put(`http://localhost:8080/Vendor/update/${xyz}`, newData)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    console.log({newData})
  
    setcompanyName('');
    setLegalBusinessName('');
    setcontactPerson('');
    setposition('');
    setemail('');
    setphoneNumber('');
    setaddress('');
    setbankName('');
    setaccountName('');
    setaccountNumber('');
    setgstNumber('');
    setnotes('');


  };

  useEffect(() => {
    axios.get(`http://localhost:8080/Vendor/find/${xyz}`)
        .then(res => {
            console.log(res.data.data);
            const vData = res.data.data
            
           
            setcompanyName(vData.companyName);
            setLegalBusinessName(vData.LegalBusinessName);
            setcontactPerson(vData.contactPerson);
            setposition(vData.position);
            setemail(vData.email);
            setphoneNumber(vData.phoneNumber);
            setaddress(vData.address);
            setbankName(vData.bankName);
            setaccountName(vData.accountName);
            setaccountNumber(vData.accountNumber);
            setgstNumber(vData.gstNumber);
            setnotes(vData.notes);               
        })
        .catch(err => {
            console.log(err);
        })
}, [])



  return (
    <div className="bg-primary" >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <Card className="shadow-lg border-0 rounded-lg mt-5">
              <Card.Header>
                <h3 className="text-center font-weight-light my-4">
                  Vendor Form
                </h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <h3>Company Information</h3>
                  <Row className="mb-3">

                    <Col md={6}>

                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="text"
                          id="companyName"
                          placeholder="Enter your Company  Name"
                          value={companyName}
                          onChange={(e) => setcompanyName(e.target.value)}
                          required
                        />
                        <label htmlFor="companyName"> Company  Name</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="text"
                          id="LegalBusinessName"
                          placeholder="Enter your Legal Business Name"
                          value={LegalBusinessName}
                          onChange={(e) => setLegalBusinessName(e.target.value)}
                          required
                        />
                        <label htmlFor="LegalBusinessName"> Legal Business Name</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <h3>Contact Information</h3>
                  <Row className="mb-3 mt-3">

                    <Col md={6}>

                      <Form.Floating className="mb-3 mb-md-0">
                        <Form.Control
                          type="text"
                          id="contactPerson"
                          placeholder="Enter Contact Person"
                          value={contactPerson}
                          onChange={(e) => setcontactPerson(e.target.value)}
                          required
                        />
                        <label htmlFor="contactPerson">Contact Person</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating>
                        <Form.Control
                          type="text"
                          id="position"
                          placeholder="Enter your Position"
                          value={position}
                          onChange={(e) => setposition(e.target.value)}
                          required
                        />
                        <label htmlFor="position"> Position</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>

                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="text"
                          id="phoneNumber"
                          placeholder="Enter your Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setphoneNumber(e.target.value)}
                          required
                        />
                        <label htmlFor="phoneNumber"> Phone Number</label>
                      </Form.Floating>
                    </Col>
                    <Col md={12} >
                      {/* <Form.Floating className="mb-3 mb-md-0 mt-3" >
                       <Form.Control
                         type="textarea"
                         id="address"
                         placeholder="Enter your Address"
                         value={address}
                         onChange={(e) => setaddress(e.target.value)}
                         required
                       />
                       <label htmlFor="address">Address</label>
                     </Form.Floating> */}
                      <FloatingLabel className="mb-3 mb-md-0 mt-3"
                        controlId="floatingTextarea2" label="Address">
                        <Form.Control
                          as="textarea"
                          placeholder="Enter your Address"
                          value={address}
                          onChange={(e) => setaddress(e.target.value)}
                          required
                          style={{ height: '100px' }}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <h3>Financial Information</h3>
                  <Row className="mb-3 ">
                    <Col md={12} >
                      <Form.Floating className="mb-3 mb-md-0 mt-3" >
                        <Form.Control
                          type="text"
                          id="bankName"
                          placeholder="Enter your Bank Name"
                          value={bankName}
                          onChange={(e) => setbankName(e.target.value)}
                          required
                        />
                        <label htmlFor="bankName">Bank Name</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="text"
                          id="accountName"
                          placeholder="Enter a Account Name"
                          value={accountName}
                          onChange={(e) => setaccountName(e.target.value)}
                          required
                        />
                        <label htmlFor="accountName">Account Name</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6}>
                      <Form.Floating className="mb-3 mb-md-0 mt-3">
                        <Form.Control
                          type="text"
                          id="accountNumber"
                          placeholder="Enter a Account Number"
                          value={accountNumber}
                          onChange={(e) => setaccountNumber(e.target.value)}
                          required
                        />
                        <label htmlFor="accountNumber">Account Number</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <h3>Taxt Information</h3>
                  <Row className="mb-3 ">
                    <Col md={12} >
                      <Form.Floating className="mb-3 mb-md-0 mt-3" >
                        <Form.Control
                          type="text"
                          id="gstNumber"
                          placeholder="Enter your GST Number"
                          value={gstNumber}
                          onChange={(e) => setgstNumber(e.target.value)}
                          required
                        />
                        <label htmlFor="gstNumber">GST Number</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <h3>Aditional Notes</h3>
                  <Row className="mb-3 ">
                    <Col md={12} >
                      <Form.Floating className="mb-3 mb-md-0 mt-3" >
                        <Form.Control
                          type="text"
                          id="notes"
                          placeholder="Enter your  Notes"
                          value={notes}
                          onChange={(e) => setnotes(e.target.value)}
                          required
                        />
                        <label htmlFor="notes">Notes</label>
                      </Form.Floating>
                    </Col>
                  </Row>


                  <div className="mt-4 mb-0">
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn-block"
                        // onClick={() => {
                        //   navigate('/vendortable')}}
                        >
                        Update
                      </Button>
                    </div>
                  </div>
                </Form>
              </Card.Body>
              <Card.Footer className="text-center py-3">

              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VendorUpdate;
