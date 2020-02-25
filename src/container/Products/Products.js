import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { getAllEmployees, createProduct } from '../../API'

import { getAllprojects  } from '../../API'
import { changePage } from '../../redux/actions/index'
import ProductCard from '../../components/products/productCard'
import CreateForm from '../../components/Util/CreateForm/ProductForm'
import Modal from '../../components/Util/modals/productModals/AddStaffModal'
import Spinner from '../../components/Util/Spinner/Spinner'

const I = styled.i`
    font-size: 100px;
    color: #d8d8f085;
    margin: auto;
    &:hover{
        color: #d8d8f0
    }
`
// const StyledLink = styled(Link)`
//     text-decoration: none;
//     margin: auto;
//     color: black

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;

const IconDiv = styled.div`
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
        query: { limit: 20, status: ''},
        projectName: "",
        errorMessage: null,
        description: "",
        teamLead: "",
        productsData: [],
        employees: [],
        isLoading: true,
        showModal: false,
    }

    getAllProductAPI(){
        let query = {...this.state.query}
        getAllprojects(query.limit, query.status)
        .then(result=>{
            let data = result.data.message
            this.setState({
                isLoading: false,
                productsData: data
            })
        })
        .catch(err=>{
            console.log(err)
            // this.props.history.push("/error");

            this.setState({
                isLoading: false
            }, () => {
                // this.props.history.push("/error");
            })
        })
    }

    componentDidMount(){
        this.props.TogglePage(true)
        this.getAllProductAPI()
    }

    setModalShowHandler (e) { 
        getAllEmployees()
        .then(result=>{
            let employees = result.data.message
            console.log(employees)
            this.setState({
                showModal: !this.state.showModal,
                errorMessage: null,
                employees
            })
        })
        .catch(err=> console.log(err))
    }

    handleSubmitHandler (e) {
        e.preventDefault()
        const payload = {
            title: this.state.projectName.trim(),
            description: this.state.description.trim(),
            status: this.state.status,
            teamLead: this.state.teamLead,
            author: "Victor M."
        }
        createProduct(payload)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>{
            const errorStatus = err.response.status
            if(errorStatus === 301){
                console.log("i am here")
                this.setState({
                    errorMessage: "project already created"
                })
            }
            console.log(err)
        })
    }

    handleChangeHandler (event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        
    }

    FilterHandler (e){
        const value = e.target.value
        const query = {...this.state.query}
        if(e.target.id=== "limit"){
            query.limit = value
        } else {
            query.status = value
        }
        this.setState({
            isLoading: true,
            query
        }, ()=>{this.getAllProductAPI()})
    }

    render() {
        const modalHeaderTitle = "New Project"
        let products
        products = this.state.productsData.map(key=>{
            return(
                <ProductCard key={key._id} productData= {key}/>
            )
        })
        return (
            <div className='container pb-4'>
                {this.state.isLoading? <Spinner/> : null}
                <div> 
                    <Form className='d-flex justify-content-between my-2'>
                        <Form.Control id="limit" name="viewLimit" className="col-sm-2 mr-2" size="sm" as="select" onChange={this.FilterHandler.bind(this)}>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                        </Form.Control>
                        <Form.Control id="status" name="viewStatus" className="col-sm-2" size="sm" as="select" onChange={this.FilterHandler.bind(this)}>
                            <option value="">Filter</option>
                            <option value="new">New</option>
                            <option value="done">Done</option>
                            <option value="pending">Pending</option>
                            <option value="rejected">Rejected</option>
                        </Form.Control>
                    </Form>
                </div>
                <div style={grid}> 
                    {products}
                    <Card style={{width: '100%', background: '#fffff', color: "#181830" }} className='text-center p-3 shadow-sm'>
                        <IconDiv onClick={this.setModalShowHandler.bind(this)}>
                            <I className="fa fa-plus" aria-hidden="true"></I>
                        </IconDiv>
                    </Card>
                </div>
                <Modal
                header = {modalHeaderTitle}
                show={this.state.showModal}
                onHide={this.setModalShowHandler.bind(this)}
                >
                    <CreateForm
                    name={this.state.name}
                    employees={this.state.employees}
                    handleChange={this.handleChangeHandler.bind(this)}
                    handleSubmit={this.handleSubmitHandler.bind(this)}
                    errorMessage={this.state.errorMessage}/>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    TogglePage: (val) => dispatch(changePage(val)),
})

export default connect(null, mapDispatchToProps)(Products)
