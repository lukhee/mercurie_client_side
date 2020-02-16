import React from 'react'
import './Spinner.css'
import styled from 'styled-components'

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: black;
    z-index: 1000;
    opacity: 0.8;
`

const loading = ()=> {
    return (
        <Backdrop>
            <div className="lds-ripple"><div></div><div></div></div>
        </Backdrop>
    )
}

export default loading
