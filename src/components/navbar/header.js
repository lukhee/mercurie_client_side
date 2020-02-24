import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Button } from 'react-bootstrap'
import { CHANGE_PAGE } from '../../redux/constants/action-Types'
import { changePage } from '../../redux/actions/index'


const header = (props)=> {
    console.log(props)
    return (
        <div className="container-fluid shadow-sm mb-5" style={{ background: '#181830' }}>
        {/* <pre className='text-white'>
        {
            JSON.stringify(props)
        }
        </pre> */}
            <Navbar variant="dark" className="container d-flex justify-content-between">
                <Navbar.Brand className="font-weight-bold" href="#home">LOGO</Navbar.Brand>
                <div>
                <Button onClick={props.TogglePage} size='sm' variant="warning">Sign-Up/Log-In</Button>
                </div>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    TogglePage: () => dispatch(changePage()),
    // changePage: itemState => dispatch(setActionTemplate(ownProps.prop))
})
export default connect(mapStateToProps, mapDispatchToProps)(header)
