import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Form} from 'react-bootstrap';


// cntl + f2 ==   selelects types elemetns on page
export default () => {
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-10">
                        <h1>CONTACT US</h1>
                        <Form className="p-">
                            <Form.Group controlId="contactForm.Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="email@......com" />
                            </Form.Group>
                            <Form.Group controlId="contactForm.Subject">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="subject..." />
                            </Form.Group>
                            <Form.Group controlId="contactForm.Message">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}