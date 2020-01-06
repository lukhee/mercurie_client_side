import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const productCard = (props)=> {
    return (
        <div>
            <StyledLink to={props.match.path.concat('/').concat(props.productData.id)}>
                <Card style={{width: '100%', background: '#fffff', color: "#181830" }} className='text-center shadow-sm'>
                    <Card.Body>
                        <Card.Title>{props.productData.name}</Card.Title>
                        <Card.Subtitle style={{ fontSize: "14px"}} className="mb-4 text-muted">{props.productData.description}</Card.Subtitle>
                        <div className='d-flex justify-content-between' style={{ fontSize: "12px"}} >
                            <span className='p-1'> {props.productData.teamLead} </span> <span className='p-1 border px-3 border border-warning text-warning '> <i className="fa fa-circle" aria-hidden="true"></i> {props.productData.status} </span>
                        </div>
                    </Card.Body>
                </Card>
            </StyledLink>
        </div>
    )
}

export default withRouter(productCard)