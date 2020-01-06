import React, { Component } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import Header from '../components/navbar/header'
import Products from './Products'
import ProductRecords from './ProductRecords'


const ConDiv = styled.div`
    background: #d8d8f0;
    width: 100%;
    min-height: 100vh;
`

class HomePage extends Component {
    render() {
        return (
            <Router>
                <ConDiv>
                    <Header/>
                    <Switch>
                        <Route exact path="/products" component={Products} />
                        <Route  path="/products/:id" component={ProductRecords}/>
                        <Redirect from='/' to="/products" />
                    </Switch>
                </ConDiv>
            </Router>
        )
    }
}

export default HomePage
