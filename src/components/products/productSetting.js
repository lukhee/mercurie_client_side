import React, { useState } from "react"
import styled from "styled-components"
import ProductForm from "../Util/CreateForm/ProductForm"
import { Form } from 'react-bootstrap'

const I = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
`

const ProductSetting = (props)=> {
    const [dropID, setDropID] = useState(0);
    const [name, setName] = useState("")
    const [errorMessage, setError] = useState(null)
    const DropIdSetter = (id)=> {
            setDropID(id)
    }

    const removeProduct = ()=> {
        if(name === props.productProps.title){
            props.deleteProduct()
        } else {
            setError("Product name is not the same")
        }
    }
    return (
        <div>
            <div className=" px-3 pb-3 border-bottom ">
                <div className="d-flex justify-content-between">
                    <span className="font-weight-bold"> Update Product </span>
                    <span  onClick={()=>DropIdSetter(1)}><I className="down"></I> </span>
                </div>
                <div className={dropID === 1? "d-block pt-3" : "d-none"}>
                    <ProductForm
                    update={true}
                    productProps={props.productProps}
                    handleChange={(e)=>props.inputChangeHandler(e)}
                    handleSubmit={(e)=>props.updateSubmit(e)}/>
                </div>
            </div>
            <div className="p-3 border-bottom mb-4"> 
                <div className="d-flex justify-content-between">
                    <span className="text-danger font-weight-bold"> Delete Product </span>
                    <span  onClick={()=>DropIdSetter(2)}><I className="down"></I> </span>
                </div>
                <div className={dropID === 2? "d-block pt-3" : "d-none"}>
                <div className="d-flex justify-content-between pt-2">
                        <Form className="w-50 rounded-0">
                            <Form.Control 
                            className="rounded-0 bg-light" size="sm" type="text" 
                            placeholder="enter product name" 
                            onChange={e => {
                            const name = e.target.value;
                            setName(name); // Doesn't work
                            }} />
                        </Form>
                        <button onClick={()=>removeProduct ()} className="btn btn-outline-danger btn-sm w-25 rounded-0"> Delete </button>
                    </div>
                </div>
                    <p className={errorMessage? "text-danger mb-0 d-block": "text-danger mb-0 d-none"}><small>{errorMessage}</small></p>
            </div>
        </div>
    )
}

export default ProductSetting
