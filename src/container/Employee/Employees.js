import React, { Component } from 'react'
import EmployeeRecord from '../../components/employee/EmployeeRecordCard'

class Employees extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <h5>Filter</h5>
                    <h5>View</h5>
                    <h5>New</h5>
                </div>
                <div>
                    Header here
                </div>
                <EmployeeRecord/>
            </div>
        )
    }
}

export default Employees