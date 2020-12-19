import React, {Component} from "react";
import Logo from '../../asset/logo.png'

import {Form, Button, Container, Row} from 'react-bootstrap'

class RegisterPage extends Component{
    render(){
        return(
            <main><style>{'body { background-color: #e6e5e5; }'}</style>
                <Container>
                    <Row className="justify-content-center mt-2 mt-md-5 mt-xl-3" >
                        <img className="col-8 col-sm-6 col-md-5 col-lg-6 col-xl-3" src={Logo} alt="logo team" />
                    </Row>
                    <Row className="justify-content-center mt-4 mt-md-5 mt-xl-3">
                        <div className="col-xl-7 col-md-10 col-sm-12 col-11 border border-2-dark rounded" style={{ backgroundColor: "#ffffff"}}>
                            <Form action="#" className="container">
                                <Form.Group className="row mt-3 mb-4 mt-md-5 mb-md-5 mt-xl-5 mb-xl-4" > 
                                    <Form.Label  className="col-sm-3 col-11 px-md-5 px-1" style={{ fontSize : 1.5 + "rem" }} htmlFor="name-input" id="name" >Name:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12"  type="text" id="name-input" name="name" />
                                </Form.Group>
                                <Form.Group className="row mt-3 mb-4 mt-md-5 mb-md-5 mt-xl-5 mb-xl-4" > 
                                    <Form.Label  className="col-sm-3 col-11 px-md-5 px-1" style={{ fontSize : 1.5 + "rem" }} htmlFor="email-input" id="email" >Email:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12"  type="email" id="email-input" name="email" />
                                </Form.Group>
                                <Form.Group className="row mt-3 mb-4 mt-md-5 mb-md-5 mt-xl-5 mb-xl-4" > 
                                    <Form.Label  className="col-sm-3 col-11 px-md-5 px-1" style={{ fontSize : 1.5 + "rem" }} htmlFor="phone-input" id="phone" >Phone Number:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12" id="phone-input" name="phone" />
                                </Form.Group>
                                <Form.Group className="row mt-3 mb-4 mt-md-5 mb-md-5 mt-xl-5 mb-xl-4" > 
                                    <Form.Label  className="col-sm-3 col-11 px-md-5 px-1" style={{ fontSize : 1.5 + "rem" }} htmlFor="address-input" id="address" >Phone Number:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12" id="address-input" name="address" />
                                </Form.Group>
                                <Form.Group className="row mb-0" >
                                    <Form.Label className="col-sm-3 col-10 px-xl-4 px-xl-3 px-md-4 px-0" style={{ fontSize : 1.5 + "rem" }} htmlFor="password-input" id="password" >Password:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12" type="password" id="password-input"  name="password"/>
                                </Form.Group>
                                <Form.Group className="row mb-0" >
                                    <Form.Label className="col-sm-3 col-10 px-xl-4 px-xl-3 px-md-4 px-0" style={{ fontSize : 1.5 + "rem" }} htmlFor="repassword-input" id="repassword" >Confirm Password:</Form.Label>
                                    <Form.Control className="col-sm-8 col-12" type="password" id="repassword-input"  name="repassword"/>
                                </Form.Group>
                                <div className="row mb-4" >
                                    <a className="col-7 p-0 offset-sm-3 offset-0" href="null" >Log in</a>
                                </div>
                                <div className="row my-4 justify-content-center" >
                                    <Button className="col-md-4 col-5" style={{ fontSize : 1.2 + "rem" }}  variant = "primary" type="submit">Register</Button>
                                </div>
                            </Form>
                        </div>
                    </Row>
                    <Row className="justify-content-center">
                        <div style={{ fontSize : 1.5 + "rem" }} > Or </div>
                    </Row>
                    <Row className="justify-content-center">
                        <div className="mt-2 mb-5" style={{fontSize : 1.35 + "rem"}} ><span><a href="null"> Register here </a></span> or use social media </div>
                    </Row>
                    
                </Container>    
            </main>
        );
    }
}

export default RegisterPage;