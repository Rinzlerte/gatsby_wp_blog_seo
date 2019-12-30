import React from "react";
import PrimaryLayout from "../layouts/PrimaryLayout";
import {Form, Button} from 'react-bootstrap';


// cntl + f2 ==   selelects types elemetns on page
export default () => {
    return(
        <PrimaryLayout>
                    <div className="p-5">
                        <h1>CONTACT US</h1>
                            <Form >
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
                                 <Form.Group controlId="contactForm.Submit">
                                    <Button>Submit</Button>
                                </Form.Group>
                            </Form>
                        </div>
                        </PrimaryLayout>
    );
}