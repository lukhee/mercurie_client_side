import React from 'react'
import { Navbar, Button } from 'react-bootstrap'

const header = ()=> {
    return (
        <div className="container-fluid shadow-sm mb-5" style={{ background: '#181830' }}>
            <Navbar variant="dark" className="container d-flex justify-content-between">
                <Navbar.Brand className="font-weight-bold" href="#home">LOGO</Navbar.Brand>
                <Button size='sm' variant="warning">Sign-Up/Log-In</Button>
            </Navbar>
        </div>
    )
}

export default header