import React from 'react'
import { Form } from 'react-bootstrap'

function componentName(props) {
    let teamOptionDropDown
    if(props.employees){
        teamOptionDropDown = props.employees.map(val=>(
            <option key={val._id} value={val._id}>{val.name}</option>
        ))
    }
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <div className="row justify-content-between">
                    <div className="col-md-5">
                        <Form.Group>
                                <Form.Control required name="projectName" className="rounded-0" size="sm" type="text" placeholder={props.productProps? props.productProps.title: "Title"} onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            {/* <Form.Control required name="teamLead" className="rounded-0" size="sm" type="text" placeholder="Team Lead" onChange={props.handleChange}/> */}
                                {!props.update?  
                            <Form.Control name="teamLead" className="rounded-0" size="sm" as="select" onChange={props.handleChange}>
                                <option>TeamLead</option>
                                {teamOptionDropDown}
                            </Form.Control> : 
                            <Form.Group>
                                <Form.Control required name="projectFontAwesome" className="rounded-0" size="sm" type="text" placeholder=" Search: https://fontawesome.com/v4.7.0" onChange={props.handleChange} />
                            </Form.Group>
                                }
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="status" className="rounded-0" size="sm" as="select" onChange={props.handleChange}>
                                {/* <option> Status </option>  */}
                                <option value={props.productProps? props.productProps.status : "new"}> {props.productProps? props.productProps.status: "New"}</option>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="rejected">Rejected</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group>
                            <Form.Control required name="description" className="rounded-0" size="sm" maxLength={!props.update? "25" : "300" } minLength={props.update? "100" : "10" } as="textarea" rows="6" onChange={props.handleChange} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                <p className="text-danger"><small>{props.errorMessage}</small></p>
                <button className=" font-weight-bold btn btn-outline-warning rounded-0" size="sm" type="submit">
                    Submit
                </button>
                </div> 
            </Form>
        </div>
    )
}

export default componentName
