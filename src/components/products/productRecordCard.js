import React from 'react'

const productRecordCard = (props)=> {
    return (
        <div className="row justify-content-between px-3 border-bottom py-3 bg-light">
            <h5 className={(props.data.teamLead? 'underline1' : 'underline2' )}> {props.data.name} </h5>
            <button className={'btn px-4 btn-sm rounded-0' + ' ' + (props.data.teamLead? 'btn-warning' : 'btn-danger' )}> {props.data.teamLead? "Change": "Remove"} </button>
        </div>
    )
}

export default productRecordCard