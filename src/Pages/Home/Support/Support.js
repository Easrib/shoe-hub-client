import React from 'react';
import { Form } from 'react-bootstrap';
import support from '../../../images/support/support.jfif'

const Support = () => {
    return (
        <div id='support' className='row my-2'>
            <div className="col-lg-6 my-auto">
                <h2 className='text-center'>Need a quick Support?</h2>
                <Form className='w-75 mx-auto'>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Quarries</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className='btn btn-primary'> Submit</button>

                </Form>

            </div>
            <div className="col-lg-6">
                <img className='w-100' src={support} alt="" />
            </div>
        </div>
    );
};

export default Support;