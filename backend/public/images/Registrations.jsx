
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react"
import axios from 'axios'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineNumbers } from "react-icons/md";


export default function Registrations() {
    const [empname, setempname] = useState("")
    const [empid, setempid] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [age, setage] = useState("")
    // const [skills, setSkills] = useState("")
    const [gender, setgender] = useState("")
    const [city, setcity] = useState("")
    const [joiningdate, setjoiningdate] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        let newData = {empname,empid,email,password,age,skills,gender,city,joiningdate }
        
        
        axios.post('http://localhost:8080/employee/add', newData)
        .then(res => {
          console.log(res.newData);
        })
        .catch(err => {
          console.log(err);
        })
        setempname("")
        setempid("")
        setemail("")
        setpassword("")
        setage("")
        setSkills("")
        setgender("")
        setcity("")
        setjoiningdate("")

    }

    const [skills, setSkills] = useState([]);

    const handleSkillsChange = (skill) => {
      // Check if the skill is already in the array
      
      if (skills.includes(skill)) {
        // If it's in the array, remove it
        setSkills(skills.filter((s) => s !== skill));
      } else {
        // If it's not in the array, add it
        setSkills([...skills, skill]);
      }
    };

    

    // const handleSkillsChange = (skill) => {
    //     setSkills(prevSkills => {
    //       // Check if the skill is already in the array
    //       if (prevSkills.includes(skill)) {
    //         // If it's in the array, remove it
    //         return prevSkills.filter((s) => s !== skill);
    //       } else {
    //         // If it's not in the array, add it
    //         return [...prevSkills, skill];
    //       }
    //     });
    //   };
    

    










    return (
        <>
            <Form noValidate onSubmit={handleSubmit} >
                <Row className=" mx-3 mt-5">
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label>Empolyee name</Form.Label>
                        <Form.Control value={empname} required
            onChange={(e) => setempname(e.target.value)}
                        
                            type="text"
                            placeholder="Empolyee name"

                        />
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Employee ID</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <MdOutlineNumbers /> </InputGroup.Text>
                            <Form.Control
                             value={empid} required
                             onChange={(e) => setempid(e.target.value)}
                                type="text"
                                placeholder="Employee ID"
                                aria-describedby="inputGroupPrepend"
                                
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Employee ID.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className='mx-3 mt-5'>
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            value={email} required
                            onChange={(e) => setemail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend"> <RiLockPasswordFill /> </InputGroup.Text>
                            <Form.Control
                            value={password} required
                            onChange={(e) => setpassword(e.target.value)}
                                type="Password"
                                placeholder=""
                                aria-describedby="inputGroupPrepend"
                                
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Passwarod.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Row className="mt-5 mx-3">
                    <Form.Group as={Col} md="2" controlId="validationCustom03">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Age" value={age} required
                            onChange={(e) => setage(e.target.value)}/>

                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustom04">
                        <Form.Label>Gender</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check 
                                onChange={() => setgender('male')}
                                checked={gender === 'male'}
                            required
                                    inline
                                    label="Male"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                onChange={() => setgender('female')}
                                checked={gender === 'female'}
                                required
                                    inline
                                    label="Female"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />

                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom04">
               <Form.Label>Skills</Form.Label>
               <div>
             {['HTML5', 'CSS', 'Bootstrap', 'Javascript', 'Jquery'].map((skill, index) => (
              <Form.Check
          key={index}
          inline
          label={skill}
          type="checkbox"
          id={`inline-checkbox-${index}`}
          onChange={() => handleSkillsChange(skill)}
          checked={skills.includes(skill)}
          required
        />
       
      ))}
       </div>
    </Form.Group>

{/* <div>
      <h3>Select Skills:</h3>
      <label>
        <input
          type="checkbox"
          value="JavaScript"
          checked={skills.includes('JavaScript')}
          onChange={() => handleSkillsChange('JavaScript')}
        />
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          value="Node.js"
          checked={skills.includes('Node.js')}
          onChange={() => handleSkillsChange('Node.js')}
        />
        Node.js
      </label>
      <label>
        <input
          type="checkbox"
          value="React"
          checked={skills.includes('React')}
          onChange={() => handleSkillsChange('React')}
        />
        React
      </label>
      
      </div> */}
    
                </Row>

                <Row className="mt-5 mx-3">
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>City</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            value={city} 
                            onChange={(e) => setcity(e.target.value)}
                            required
                                type="text"
                                placeholder="City"
                                aria-describedby="inputGroupPrepend"
                                
                            />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Joining date</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            value={joiningdate} 
                            onChange={(e) => setjoiningdate(e.target.value)}
                            required
                            type="date"
                                placeholder="Joining date"
                                aria-describedby="inputGroupPrepend"
                                
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>

                <Form.Group className="mt-3 mx-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button className='mt-5 mx-3' type="submit">Submit form</Button>
            </Form>

        </>
    )
}
