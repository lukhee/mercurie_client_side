import React from 'react';
import { Form } from 'react-bootstrap'
import styled from "styled-components"
import ChangeTeamLead from "../Util/modals/productModals/AddStaffModal"

const I = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`

function productRecordCard (props) {
    let modalBody, header
    if(props.staffs){
        header = "Change Teamlead"
        modalBody = props.staffs.map((val, i)=>(
            <div className="d-flex justify-content-between mb-2" key={i}>
                <h5> { val.name}</h5>
                <button 
                onClick={()=>props.AddToProject()}
                className="btn rounded-0 btn-outline-warning px-4 btn-sm">Add</button>
            </div>
        ))
    }
        
    return (
        <div>
            <div className=" border-bottom p-3 bg-light">
                <div className="row justify-content-between px-3">
                    <h5 className={(props.data.teamLead? 'underline1' : 'underline2' )}> {props.data.name} </h5> 
                        <span
                            onClick={()=> props.showMoreToggle (props.data.id)}
                            className='px-4 rounded-0'
                            ><I className={(props.showMore === props.data.id)? "up": "down"}></I>
                        </span> 
                </div>
                <div className={ props.showMore !== props.data.id ? "d-none" : "d-block" }>
                { props.data.teamLead ? 
                    <div className="d-flex justify-content-between">
                        <span className="blockquote-footer pt-1"> You can change the Team Lead here </span>
                        <button
                            onClick={props.setModalShow}
                            className='px-4 rounded-0 btn  btn-sm btn-warning'> Change
                        </button>
                    </div>
                    : 
                    <div className="d-flex justify-content-between pt-2">
                        <Form className="w-50 rounded-0">
                            <Form.Control className="rounded-0 " size="sm" type="text" placeholder="enter employee name" />
                        </Form>
                        <button className="btn btn-outline-danger btn-sm w-25 rounded-0"> Delete </button>
                    </div>
                }
                </div>
            </div>
            <ChangeTeamLead
                show={props.viewModal}
                onHide={props.setModalShow}
                header={header}
            > 
                {modalBody}
            </ChangeTeamLead>
        </div>
    )
}

export default productRecordCard