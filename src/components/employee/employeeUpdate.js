import React, {useState} from "react"

import { Form } from 'react-bootstrap'
import styled from 'styled-components'

const Border = 'border-bottom text-white px-2'
const Divider = styled.span`
    border-right: 2px solid #6c6c7861;
    margin: 0 4px;
`
const editButton = {
    margin: "auto 0",
    cursor: "pointer"
}
const I = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`

const employeeSetting = (props)=> {
    // eslint-disable-next-line
    const [dropID, setDropID] = useState(0);
    // eslint-disable-next-line
    const [updatePage, setUpdate] = useState(false);
    // eslint-disable-next-line
    const [name, setName] = useState("")
    // eslint-disable-next-line
    const [errorMessage, setError] = useState(null)

    const DropIdSetter = (id)=> {
        if(id === dropID){
        setError(null)
        setDropID(0)
        } else {
            setDropID(id)
        setError(null)
        setUpdate(false)
        }
    }

    const editSetter = (value) =>{
        setUpdate(value)
        setError(null)
    } 

    const verifyEmployee = ()=> {
        if(name === props.employeeData.name){
            props.deleteProduct()
        } else {
            setError("Employee name is not the same")
        }
    }
    return (
        <div>
            <div className="border-bottom pb-3">
                <div className={updatePage? "d-none": null}>
                    <div className="d-flex justify-content-between  mb-2">
                        <span className="Lead"> {props.employeeData.name} </span>
                        <span onClick={()=>editSetter(true)} style={editButton} className='text-warning bg-light font-weight-normal py-1 px-4 rounded'> Edit </span>
                    </div> 
                    <div className="d-flex">
                        <p className="mb-2 rounded bg-light lead col-sm-6 pl-0 p-1"> {props.employeeData.description} </p>
                    </div>
                    <span className='text-muted  mb-2'> {props.employeeData.email} </span>
                    <div className="text-capitalize my-2 d-flex" >
                        <span> {props.employeeData.role} </span>
                            <Divider></Divider> 
                        <span className={Border.concat(props.employeeData.level === "intern"? " bg-secondary" : props.employeeData.level === "junior"? " bg-warning" : props.employeeData.level === "senior"? " bg-danger" : " bg-success" )}> {props.employeeData.level} </span>
                    </div>
                    <div className="my-3"> 
                        <span  className="px-2 py-0 mr-2 mb-2 btn btn-danger text-light font-weight-normal rounded"> Pro1 / icon</span>
                        <span  className="px-2 py-0 mr-2 mb-2 btn btn-danger text-light font-weight-normal rounded"> Pro2 / icon</span>
                        <span  className="px-2 py-0 mr-2 mb-2 btn btn-danger text-light font-weight-normal rounded"> Pro3 / icon</span>
                    </div>
                </div>
                <Form className={!updatePage? "d-none": null}>
                    <div>
                        <div className="d-flex justify-content-between  mb-2">
                            <Form.Control required name="name" className="rounded-0 col-sm-6 mr-3" size="sm" type="text" placeholder="Full-Name" />
                            <span onClick={()=>editSetter(false)} style={editButton} className='text-danger bg-light font-weight-normal py-1 px-4 rounded'> Back </span>
                        </div>
                        <div className="d-flex">
                            <Form.Control required name="description" className="rounded-0 bg-light col-sm-6 mr-3" size="sm" as="textarea" placeholder="description" rows="4" />
                        </div>
                        <div className="text-capitalize my-2 d-flex justify-content-between" >
                                <Form.Control required name="skill" className="rounded-0 col-sm-6" size="sm" type="text" placeholder="Skill" />
                                <Form.Control name="level" className="rounded-0 col-sm-5" size="sm" as="select">
                                    <option> Level </option> 
                                    <option value="intern"> Intern  </option>
                                    <option value="junior">Junior</option>
                                    <option value="mid-level">Mid-Level</option>
                                    <option value="senior">Senior</option>
                                </Form.Control>
                        </div>
                    </div>
                    <button className=" font-weight-bold btn btn-sm btn-outline-success rounded-0" size="sm" type="submit">
                        Update
                    </button>
                </Form>
            </div>
            <div className="p-3 border-bottom mb-4">
                <div className="d-flex justify-content-between">
                    <span className="font-weight-bold text-danger"> Delete </span>
                    <span onClick={()=>DropIdSetter(2)}><I className={dropID===0? "down" : "up"}></I> </span>
                </div>
                <div className={dropID === 2? "d-block pt-3" : "d-none"}>
                    <div className="d-flex justify-content-between pt-2">
                        <Form className="w-50 rounded-0">
                            <Form.Control 
                            className="rounded-0 bg-light" size="sm" type="text" 
                            placeholder="enter employee name"
                            onChange={e => {
                                const name = e.target.value;
                                setName(name); // Doesn't work
                                }} />
                        </Form>
                        <button onClick={()=>verifyEmployee()} className="btn btn-outline-danger btn-sm w-25 rounded-0"> Delete </button>
                    </div>
                </div>
                    <p className={errorMessage? "text-danger mb-0 d-block": "text-danger mb-0 d-none"}><small>{errorMessage}</small></p>
            
                </div>
        </div>
    )
}

export default employeeSetting
