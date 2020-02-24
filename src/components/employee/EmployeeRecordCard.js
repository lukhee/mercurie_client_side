import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'
import EmployeeModal from '../Util/modals/productModals/AddStaffModal'

const skilledCSS = " col-6 rounded"
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CardHover = styled(Card)`
    width: 100%;
    background: #464159;
    color: #ffffff;
    &:hover {
        transform: scale(1.05);
    }
`

const Skills = styled.span`
    height: 10px;
    margin: auto;
`

const employeeCard = (props)=> {
    return (
        <div>
            <div onClick={()=>props.employeeRecordFunc(props.employeeData._id)}>
                <CardHover className='text-center shadow-sm'>
                    <Card.Body>
                    <Card.Title>{props.employeeData.name}</Card.Title>
                        <Card.Subtitle style={{ fontSize: "14px"}} className="mb-4 text-white-50 text-dark-50">{props.employeeData.description}</Card.Subtitle>
                        <div className='d-flex justify-content-between' style={{ fontSize: "12px"}} >
                            <span className='p-1 text-capitalize'> {props.employeeData.role}</span>
                            <Skills className={skilledCSS.concat(props.employeeData.level === "intern"? " bg-secondary" : props.employeeData.level === "junior"? " bg-warning" : props.employeeData.level === "senior"? " bg-danger" : " bg-success" )}>  </Skills>
                        </div>
                    </Card.Body>
                </CardHover>
            </div>
        </div>
    )
}

export default withRouter(employeeCard)