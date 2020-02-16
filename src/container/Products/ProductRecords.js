import React, { Component } from 'react'
import styled from 'styled-components'

import ProductRecordCard from '../../components/products/productRecordCard'
import ProductSetting from '../../components/products/productSetting'
import { getProjectById, getAllEmployees, updateProjectById, deleteProjectById } from '../../API'
import AddStaffModal from '../../components/Util/modals/productModals/AddStaffModal'
import Spinner from '../../components/Util/Spinner/Spinner'

const SettingICon = styled.i`
    top: 20px;
    right: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;
    &:hover {
        font-size: 1.6rem;
    }
`

class product extends Component {
    state = {
        productProperty: {},
        teamMember: [],
        leadModal: false,
        addStaffModal: false,
        isLoading: true,
        showMore: true,
        setting: false
    }

    componentDidMount(){
        let ID = this.props.match.params.id
        getProjectById(ID)
        .then(result=>{
            let data = result.data.message
            let clonedTeamMember = [...data.employees]
            let cloneTeamLead = {...data.teamLead}
            const filteredTeams = clonedTeamMember.filter(ele=> {
                return cloneTeamLead._id !== ele._id})
            let teamLead = Object.assign(cloneTeamLead,  {teamLead : true})
            filteredTeams.unshift(teamLead)
            this.setState({
                productProperty: data,
                isLoading: false,
                teamMember: filteredTeams
            })
        })
        .catch(err=>{
            console.log("err")
        })
    }

    showModalHandler () {
        let members = [ ]
        this.state.teamMember.map(value=>
            members.push(value._id)
        )
        getAllEmployees(members)
        .then(result=>{
            const queryMembers = result.data.message
            this.setState({
                addStaffModal: !this.state.addStaffModal,
                staffs: queryMembers,
                setting: false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    AddEmployeeToTeamHandler (userID) {
        const id = this.props.match.params.id
        updateProjectById(id, {userID : userID} )
        .then(result=>{
            window.location.reload()
        })
        .catch(err=> console.log(err))
    }

    teamLeadModalHandler () {
        this.setState({
            leadModal: !this.state.leadModal,
            // staffs: ProductData
        })
    }

    removeMemberHandler (removeID){
        const id = this.props.match.params.id
        updateProjectById(id, {removeID : removeID} )
        .then(result=>{
            window.location.reload()
        })
        .catch(err=> console.log(err))
    }

    ChangeTeamLead (teamLeadID) {
        const id = this.props.match.params.id
        updateProjectById(id, {teamLead : teamLeadID} )
        .then(result=>{
            window.location.reload()
        })
        .catch(err=> console.log(err))
    }

    deleteProductHandler () {
        deleteProjectById(this.state.productProperty._id)
        .then(result=>{
            // this.setState({addStaffModal: !this.state.addStaffModal})
            this.props.history.push("/products");
        })
        .catch(err=>console.log(err))
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

    settingModal (){
        this.setState({
            setting: true,
            addStaffModal: true,
            staff: null
        })
    }

    inputChangeHandler (e) {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        
    }

    updateSubmitHandler (e) {
        let ID = this.props.match.params.id
        e.preventDefault()
        const payload = {
            title: this.state.projectName.trim(),
            lengthyDescription: this.state.description.trim(),
            status: this.state.status,
            fontAwesome: this.state.projectFontAwesome
        }
        updateProjectById(ID, {genaralUpdate : payload} )
        .then(result=>{
            window.location.reload()
        })
        .catch(err=> console.log(err))
    }

    render() {
        let createdAt,
            modalHead,
            productEmployeesCard,
            // employees = [],
            modalBody = "noting to show for now"

        if(Object.keys(this.state.teamMember).length){
            createdAt = this.state.productProperty.createdAt.slice(0, 10)
        }

        if(this.state.staffs && !this.state.setting){
            modalHead = "Add to team"
            if(this.state.staffs.length === 0){
                modalBody = <div className="text-center lead"> No more team member to add to the project </div>
            } else {
                modalBody = this.state.staffs.map((val, i)=>(
                    <div className="d-flex justify-content-between mb-2" key={i}>
                        <h5> { val.name}</h5>
                        <button 
                        onClick={this.AddEmployeeToTeamHandler.bind(this, val._id)}
                        className="btn rounded-0 btn-outline-warning px-4 btn-sm">Add</button>
                    </div>
                ))
            }
        } else if(this.state.setting) {
            modalHead = "Setting"
            modalBody = <ProductSetting 
                productProps={this.state.productProperty} 
                deleteProduct={this.deleteProductHandler.bind(this)}
                updateSubmit={this.updateSubmitHandler.bind(this)}
                inputChangeHandler = {this.inputChangeHandler.bind(this)}/>
        }

        productEmployeesCard = this.state.teamMember.map((val, index)=>{
            return (
                <ProductRecordCard
                    key = {index}
                    data = {val}
                    leadModal = {this.state.leadModal}
                    showMoreToggle = {this.showMoreHandler.bind(this)}
                    teamLeadModal = {this.teamLeadModalHandler.bind(this)}
                    staffs={this.state.teamMember}
                    changeTeamLead={this.ChangeTeamLead.bind(this)}
                    showMore={this.state.showMore}
                    removeMember={this.removeMemberHandler.bind(this)}
                />
            )
        })

        return (
            <div className="container pb-4">
            {this.state.isLoading? <Spinner/> : null}
                <div style={{background: '#464159', color: "#ffffff"}} className="p-4 mb-4 position-relative">
                    <div>
                        <SettingICon 
                        onClick={this.settingModal.bind(this)} 
                        className="fa fa-cog text-light position-absolute" 
                        aria-hidden="true"/>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-center py-4 m-auto">
                            <i style={{fontSize: "60px", color: "#464159"}} className={this.state.productProperty.fontAwesome? `p-4  rounded-circle bg-light border border-light ${this.state.productProperty.fontAwesome}` : "fa fa-handshake-o p-4  rounded-circle bg-light border border-light"} aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-8 py-4">
                            <h3>{this.state.productProperty.title}</h3>
                            <p style={{color: "#d8d8f0ad", linHeight: "1.6"}} className="pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <div className="row justify-content-between px-3">
                                <span> {this.state.productProperty.author} </span>
                                <span> {createdAt} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row px-4 justify-content-between mb-1">
                        <h4> Team Members </h4>
                        <span className="spanx-4 rounded-0 py-1 btn btn-light"
                        onClick={this.showModalHandler.bind(this)}> Add Team </span>
                    </div>
                    <div className="border rounded">
                        {productEmployeesCard}
                    </div>
                </div>
            <AddStaffModal
                show={this.state.addStaffModal}
                onHide={this.showModalHandler.bind(this)}
                header={modalHead}
            > 
                {modalBody}
            </AddStaffModal>
            </div>
        )
    }
}

export default product
