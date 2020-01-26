import React, { Component } from 'react'

import ProductRecordCard from '../../components/products/productRecordCard'
import ProductData, { staffs } from '../../data'
import AddStaffModal from '../../components/Util/modals/productModals/AddStaffModal'

class product extends Component {
    state = {
        productProperty: null,
        viewModal: false,
        addStaffModal: false,
        staffs: null,
        showMore: true,
    }

    componentWillMount(){
        const result = ProductData.filter(value=>{
            return value.id === Number((this.props.match.params.id))
        })
        this.setState({
            productProperty: result[0]
        })
    }

    setModalShowHandler () {
        this.setState({
            viewModal: !this.state.viewModal,
            staffs: null,
        })
    }

    AddToProjectHandler (action) {
        if(action==="add"){
            console.log("add to project")
        } else {
            console.log("change team lead")
        }
    }

    showMoreHandler (id) {
        if(id === this.state.showMore){
            this.setState({
                showMore : ''
            })
        } else {
            this.setState({
                showMore : id
            })
        }
    }

    ChangeTeamModalHandler () {
        this.setState({
            showModal: !this.state.showModal,
            // call api and send the new staffs list here
            staffs: ProductData
        })
    }

    render() {
        const productsData = {...this.state.productProperty}
        let productProCard = productsData.staffs.map(val=>{
            return (
                <ProductRecordCard
                    key = {val.id}
                    data = {val}
                    viewModal = {this.state.viewModal}
                    showMoreToggle = {this.showMoreHandler.bind(this)}
                    // ChangeTeamModal = {this.ChangeTeamModalHandler.bind(this)}
                    setModalShow = {this.setModalShowHandler.bind(this)}
                    staffs={this.state.staffs}
                    AddToProject={this.AddToProjectHandler.bind(this)}
                    showMore={this.state.showMore}
                />
            )
        })
        return (
            <div className="container pb-4">
                <div style={{background: '#464159', color: "#ffffff"}} className="p-4 mb-4 row">
                    <div className="col-sm-4 text-center py-4 m-auto">
                        <i style={{fontSize: "60px", color: "#464159"}} className="fa fa-handshake-o p-4  rounded-circle bg-light border border-light" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-8 py-4">
                        <h1>{this.state.productProperty.name}</h1>
                        <p style={{color: "#d8d8f0ad", fontSize:"18px", linHeight: "1.6"}} className="pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="row justify-content-between px-3">
                            <span> {this.state.productProperty.teamLead} </span>
                            <span> 20/12/2020 </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row px-4 justify-content-between mb-1">
                        <h4> Team Members </h4>
                        <span className="spanx-4 rounded-0 py-1 btn btn-light"
                        onClick={this.setModalShowHandler.bind(this)}> Add Team </span>
                    </div>
                    <div className="border rounded">
                        {productProCard}
                    </div>
                </div>
            {/* <AddStaffModal
                show={this.state.addStaffModal}
                onHide={this.setModalShowHandler.bind(this)}
                header="header"
            > 
                {modalBody}
            </AddStaffModal> */}
            </div>
        )
    }
}

export default product
