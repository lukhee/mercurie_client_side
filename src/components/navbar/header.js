import React, { Component } from 'react';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Navbar, Button } from 'react-bootstrap'
import { changePage } from '../../redux/actions/index'
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    border: 2px solid #ffc107;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        border: 2px solid #ffc107
    }
`;


const header = (props)=> {
    const switchPage = () => {
        let nextPage
        if(props.productPage === true){
            props.TogglePage(false)
            nextPage = "/employees"
        } else {
            props.TogglePage(true)
            nextPage = "/products"
        }
        props.history.push(nextPage);
    }
    return (
        <div className="container-fluid shadow-sm mb-5" style={{ background: '#181830' }}>
            <Navbar variant="dark" className="container d-flex justify-content-between">
                <StyledLink className="btn btn-sm text-light font-weight-bold" to="/"> LOGO-WA </StyledLink>
                <Button className="font-weight-bold" onClick={switchPage} size='sm' variant="warning">{props.productPage ==! true? "Products" : "Employees"}</Button>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    productPage : state.pageChangeReducer.ProductPage
})

const mapDispatchToProps = dispatch => ({
    TogglePage: (val) => dispatch(changePage(val)),
    // changePage: itemState => dispatch(setActionTemplate(ownProps.prop))
})
export default
compose( withRouter, connect(mapStateToProps, mapDispatchToProps))(header)
