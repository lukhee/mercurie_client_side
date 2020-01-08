import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ProductCard from '../components/products/productCard'

const I = styled.i`
    font-size: 100px;
    color: #d8d8f085;
    margin: auto;
    &:hover{
        color: #d8d8f0
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    margin: auto;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '1rem',
  }

class Products extends Component {
    state = {
        products : [
            {
                id: 1,
                name: 'Food App',
                description: 'Free food for first 20 customers',
                teamLead: 'Max J.',
                status: 'Pending'
            },{
                id: 2,
                name: 'Dev App',
                description: 'recruiting Dev for Fintech',
                teamLead: 'Max J.',
                status: 'Done'
            },{
                id: 3,
                name: 'Fintech app',
                description: 'Acc analysis from your phone',
                teamLead: 'J. J.',
                status: 'Pending'
            },{
                id: 4,
                name: 'Food App',
                description: 'Free food for first 20 customers',
                teamLead: 'Max J.',
                status: 'Pending'
            },{
                id: 5,
                name: 'Dev App',
                description: 'recruiting Dev for Fintech',
                teamLead: 'Max J.',
                status: 'Done'
            },{
                id: 6,
                name: 'Fintech app',
                description: 'Acc analysis from your phone',
                teamLead: 'J. J.',
                status: 'Pending'
            }
        ]
    }
    render() {
        const products = this.state.products.map(key=>{
            return(
                <ProductCard key={key.id} productData= {key}/>
            )
        })
        return (
            <div className='container'>
                <div className='d-flex justify-content-between my-1'> 
                    <h3>Filters by Categories</h3>
                    <h3> <StyledLink to="/staffsRecord"> Staffs Record </StyledLink></h3>
                </div>
                <div style={grid}> 
                    {products}
                        <Card style={{width: '100%', background: '#fffff', color: "#181830" }} className='text-center shadow-sm'>
                            <StyledLink to="/createProduct">
                                <I className="fa fa-plus" aria-hidden="true"></I>
                            </StyledLink>
                        </Card>
                </div>
            </div>
        )
    }
}

export default Products
