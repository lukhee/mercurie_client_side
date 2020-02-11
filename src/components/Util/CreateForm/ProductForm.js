import React from 'react'
import { Form } from 'react-bootstrap'

function componentName(props) {
    let teamOptionDropDown = props.employees.map(val=>(
        <option key={val._id} value={val._id}>{val.name}</option>
    ))
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <Form.Group>
                                <Form.Control required name="projectName" className="rounded-0" size="sm" type="text" placeholder="Title" onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Control required name="teamLead" className="rounded-0" size="sm" type="text" placeholder="Team Lead" onChange={props.handleChange}/> */}
                            <Form.Control name="teamLead" className="rounded-0" size="sm" as="select" onChange={props.handleChange}>
                                <option>TeamLead</option>
                                {teamOptionDropDown}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="status" className="rounded-0" size="sm" as="select" onChange={props.handleChange}>
                                <option>Status</option>
                                <option value="pending">Pending</option>
                                <option value="success">Success</option>
                                <option value="progress">progress</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Control required name="description" className="rounded-0" size="sm" as="textarea" rows="6" onChange={props.handleChange} />
                        </Form.Group>
                    </div>
                </div>

                <button className=" font-weight-bold float-right w-25 btn btn-outline-warning rounded-0" size="sm" type="submit">
                    Submit
                </button>
            </Form>
            <p className="text-danger"><small>{props.errorMessage}</small></p>
        </div>
    )
}

export default componentName
