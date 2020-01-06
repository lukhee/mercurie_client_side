import React, { Component } from 'react'

import ProductCard from '../components/products/productCard'

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
                    <h3>Create new Product</h3>
                </div>
                <div style={grid}> 
                    {products}
                </div>
            </div>
        )
    }
}

export default Products
