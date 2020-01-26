import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import productData from '../../data'

import ProductCard from '../../components/products/productCard'
import CreateForm from '../../components/Util/CreateForm/ProductForm'
import Modal from '../../components/Util/modals/productModals/AddStaffModal'

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
    color: black

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const StyleDiv = styled.div`
    text-decoration: none;
    margin: auto;
    color: black

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
        showModal: false,
        projectName: "",
        description: "",
        status: "pending",
        teamLead: "",
    }

    setModalShowHandler (e) { 
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleSubmitHandler (e) {
        e.preventDefault()
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleChangeHandler (event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        
    }

    render() {
        const modalHeaderTitle = "New Project"
        const products = productData.map(key=>{
            return(
                <ProductCard key={key.id} productData= {key}/>
            )
        })
        return (
            <div className='container pb-4'>
                <div> 
                    <Form className='d-flex justify-content-between my-2'>
                        <Form.Control name="viewLimit" className="rounded-0 col-2" size="sm" as="select" onChange={this.FilterHandler}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </Form.Control>
                        <Form.Control name="viewStatus" className="rounded-0 col-2" size="sm" as="select" onChange={this.FilterHandler}>
                            <option value="pending">Pending</option>
                            <option value="success">Success</option>
                            <option value="progress">progress</option>
                        </Form.Control>
                    </Form>
                </div>
                <div style={grid}> 
                    {products}
                    <Card style={{width: '100%', background: '#fffff', color: "#181830" }} className='text-center shadow-sm'>
                        <StyleDiv onClick={this.setModalShowHandler.bind(this)}>
                            <I className="fa fa-plus" aria-hidden="true"></I>
                        </StyleDiv>
                    </Card>
                </div>
                <Modal
                header = {modalHeaderTitle}
                show={this.state.showModal}
                onHide={this.setModalShowHandler.bind(this)}
                >
                    <CreateForm
                    name={this.state.name}
                    handleChange={this.handleChangeHandler.bind(this)}
                    handleSubmit={this.handleSubmitHandler.bind(this)}/>
                </Modal>
            </div>
        )
    }
}

export default Products
