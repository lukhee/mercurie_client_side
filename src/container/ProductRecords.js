import React, { Component } from 'react'

import ProductRecordCard from '../components/products/productRecordCard'

class product extends Component {
    render() {
        return (
            <div className="container">
                <div style={{background: '#464159', color: "#ffffff"}} className="p-4 mb-4 row">
                    <div className="col-sm-4 text-center py-4 m-auto">
                        <i style={{fontSize: "60px", color: "#464159"}} className="fa fa-handshake-o p-4  rounded-circle bg-light border border-light" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-8 py-4">
                        <h1>Title Waoo</h1>
                        <p style={{color: "#d8d8f0ad", fontSize:"18px", linHeight: "1.6"}} className="pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="row justify-content-between px-3">
                            <span> Max. Jebason </span>
                            <span> 20/12/2020 </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row px-4 justify-content-between mb-1">
                        <h4> Team Members </h4>
                        <span className="spanx-4 py-1 btn btn-light"> Add Team </span>
                    </div>
                    <div className="border p-4 bg-light">
                        <ProductRecordCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default product
