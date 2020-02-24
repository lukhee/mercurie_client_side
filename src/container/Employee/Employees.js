import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import Spinner from '../../components/Util/Spinner/Spinner'
import Modal from '../../components/Util/modals/productModals/AddStaffModal'
import  CreateEmployee from '../../components/Util/CreateForm/EmployeeForm'
import EmployeeRecordCard from '../../components/employee/EmployeeRecordCard'
import EmployeeSetting from '../../components/employee/employeeUpdate'
import { getAllEmployees, createEmployee, getEmployeeByID, deleteEmployeeByID } from '../../API'

const I = styled.i`
    font-size: 100px;
    color: #d8d8f085;
    margin: auto;
    &:hover{
        color: #d8d8f0
    }
`
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

class Employees extends Component {
    state = {
        query: { limit: 20, status: ''},
        errorMessage: null,
        employeesData: [],
        employeeData: null,
        isLoading: true,
        showModal: false,
    }

    getAllEmployeeFunc(){
        let query = {...this.state.query}
        getAllEmployees({employee: null}, query.limit, query.status)
        .then(result=>{
            let data = result.data.message
            this.setState({
                isLoading: false,
                employeesData: data
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
        this.getAllEmployeeFunc()
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
        }, ()=>{this.getAllEmployeeFunc()})
    }

    toggleModal (e) {
        this.setState({
            showModal: !this.state.showModal,
            employeeData: null,
            errorMessage: null
        })
    }

    handleChangeHandler (e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmitHandler (e) {
        e.preventDefault()
        const payload = {
            name: this.state.name.trim(),
            email: this.state.email,
            level: this.state.level,
            description: this.state.description.trim(),
            role: this.state.role,
            password: "password"
        }
        createEmployee(payload)
        .then(res=>{
            window.location.reload()
        })
        .catch(err=>{
            const errorStatus = err.response.status
            if(errorStatus === 301){
                this.setState({
                    errorMessage: "employee with email already found"
                })
            }
            console.log(err)
        })
    }

    employeeRecordHandler (id) {
        getEmployeeByID(id)
        .then(result=>{
            let employee = result.data.message
            this.setState({
                showEmployeeModal: true,
                employeeData: employee,
                showModal: !this.state.showModal
            })
        })
        .catch(err=> console.log(err))
    }

    deleteProductHandler () {
        const ID = this.state.employeeData._id
        deleteEmployeeByID(ID)
        .then(result=>{
            window.location.reload()
            this.setState({
                showModal: false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        let Employees, modalBody, modalHead
        Employees = this.state.employeesData.map(employee=>{
            return(
                <EmployeeRecordCard 
                key={employee._id} 
                employeeData= {employee}
                employeeRecordFunc= {this.employeeRecordHandler.bind(this)}/>
            )
        })
        if(this.state.employeeData){
            modalHead = "Setting"
            modalBody = <EmployeeSetting
                deleteProduct = {this.deleteProductHandler.bind(this)}
                employeeData={this.state.employeeData}/>
        } else {
            modalHead = "New Employee"
            modalBody = <CreateEmployee
                handleChange={this.handleChangeHandler.bind(this)}
                handleSubmit={this.handleSubmitHandler.bind(this)}
                errorMessage={this.state.errorMessage}/>
        }
        return (
            <div className='container pb-4'>
            {this.state.isLoading? <Spinner/> : null}
            <div> 
                <Form className='d-flex justify-content-between my-2'>
                    <Form.Control id="limit" name="viewLimit" className="col-sm-2 mr-3" size="sm" as="select" onChange={this.FilterHandler.bind(this)}>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </Form.Control>
                    <Form.Control id="status" name="viewStatus" className="col-sm-2" size="sm" as="select" onChange={this.FilterHandler.bind(this)}>
                        <option value="">Filter</option>
                        <option value="senior">Senior Dev</option>
                        <option value="mid-level">Mid-level Dev</option>
                        <option value="junior">Junior Dev</option>
                        <option value="intern">Intern Dev</option>
                    </Form.Control>
                </Form>
            </div>
            <div style={grid}>
                {Employees}
                <Card style={{width: '100%', background: '#fffff', color: "#181830" }} className='text-center p-3 shadow-sm'>
                    <StyleDiv onClick={this.toggleModal.bind(this)}>
                        <I className="fa fa-plus" aria-hidden="true"></I>
                    </StyleDiv>
                </Card>
            </div>
            <Modal
            header = {modalHead}
            show={this.state.showModal}
            onHide={this.toggleModal.bind(this)}
            >
                {modalBody}
            </Modal>
        </div>
        )
    }
}

export default Employees