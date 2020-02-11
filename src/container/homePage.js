import React, { Component } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import Header from '../components/navbar/header'
import Products from './Products/Products'
import ProductRecords from './Products/ProductRecords'
import Employees from './Employee/Employees'


const ConDiv = styled.div`
    background: #d8d8f0;
    width: 100%;
    min-height: 100vh;
`

const NotFound = () => (<h6 className="text-center">404</h6>);
const ServerDown = () =>(<h6 className="text-center">500 Server Down</h6>)

class HomePage extends Component {
    render() {
        return (
            <Router>
                <ConDiv>
                    <Header/>
                    <Switch>
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/createProduct" component={Products} />
                        <Route exact path="/staffRecords" component={Employees} />
                        {/* <Route exact path="/staffRecords/:ID" component={Products} /> */}
                        <Route  path="/products/:id" component={ProductRecords}/>
                        <Redirect from='/' to="/products" />
                        <Route exact path="/error" render={() => <ServerDown />} />
                        <Route exact path="*" render={() => <NotFound />} />
                    </Switch>
                </ConDiv>
            </Router>
        )
    }
}

export default HomePage
