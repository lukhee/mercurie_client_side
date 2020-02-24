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

const CardHover = styled(Card)`
    width: 100%;
    background: #fffff;
    color: #181830;
    &:hover {
        transform: scale(1.05);
    }
`

const productCard = (props)=> {
    return (
        <div>
            <StyledLink to={props.match.path.concat('/').concat(props.productData._id)}>
                <CardHover className='text-center shadow-sm'>
                    <Card.Body>
                        <Card.Title>{props.productData.title}</Card.Title>
                        <Card.Subtitle style={{ fontSize: "14px"}} className="mb-4 text-muted">{props.productData.description}</Card.Subtitle>
                        <div className='d-flex justify-content-between' style={{ fontSize: "12px"}} >
                            <span className='p-1'> {props.productData.author} </span> 
                            <span className={props.productData.status === "done" ? "text-success rounded text-capitalize px-3 border border-success w-50 p-1 ": props.productData.status === "pending" ? "text-warning rounded text-capitalize px-3 border border-warning w-50 p-1 " : props.productData.status === "new" ? "text-secondary rounded text-capitalize px-3 p-1 border border-secondary w-50" : "text-danger text-capitalize rounded px-3 p-1 border border-danger w-50"}> 
                                <i className="fa fa-circle" aria-hidden="true"></i> {props.productData.status} 
                            </span>
                        </div>
                    </Card.Body>
                </CardHover>
            </StyledLink>
        </div>
    )
}

export default withRouter(productCard)