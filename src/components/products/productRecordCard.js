import React from 'react'

const productRecordCard = ()=> {
    const teamLead = true
    return (
        <div className="row justify-content-between px-3">
            <h5> Name </h5>
            <button className={'btn'+' ' + 'btn-sm'+' '+'rounded-0' + ' ' + (!teamLead? 'btn-danger' : 'btn-warning' )}> {!teamLead? "Change": "Remove"} </button>
        </div>
    )
}

export default productRecordCard