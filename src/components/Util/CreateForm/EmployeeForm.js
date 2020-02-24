import React from 'react'
import { Form } from 'react-bootstrap'

function employeeForm(props) {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <Form.Group>
                                <Form.Control required name="name" className="rounded-0" size="sm" type="text" placeholder="Full-Name" onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group> 
                            <Form.Group>
                                <Form.Control required name="role" className="rounded-0" size="sm" type="text" placeholder="skill" onChange={props.handleChange} />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="level" className="rounded-0" size="sm" as="select" onChange={props.handleChange}>
                                <option> Level </option> 
                                <option value="intern"> Intern  </option>
                                <option value="junior">Junior</option>
                                <option value="mid-level">Mid-Level</option>
                                <option value="senior">Senior</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group>
                                <Form.Control required name="email" className="rounded-0" size="sm" type="text" placeholder="Email" onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required name="description" className="rounded-0" size="sm" as="textarea" placeholder="description" rows="3" onChange={props.handleChange} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                <p className="text-danger"><small>{props.errorMessage}</small></p>
                <button className=" font-weight-bold btn btn-outline-success rounded-0" size="sm" type="submit">
                    Submit
                </button>
                </div> 
            </Form>
        </div>
    )
}

export default employeeForm
