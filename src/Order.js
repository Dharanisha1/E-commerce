import React from 'react'
import './Order.css'
import './Payment.css'
import {useState} from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

function Order()  {
    const [recp_name, setrecp_name] = useState('')
  
    const [recp_addr, setrecp_aadr] = useState('')

    const [recp_phone, setrecp_phone] = useState('')
    
    // const Recipi= () => {
    function handleSubmit(e){
            // e.preventDefault();
            console.log(e)
    
            axios.post("http://localhost:8080/addrecipient",{
                recp_name:e.recp_name,
                recp_addr:e.recp_addr,
                recp_phone:e.recp_phone
            })
              .then((response)=>{
                console.log(response.data);
                // alert('Succesfully update')
              } )
              .catch((err)=>{
                console.log(err)
                console.log(err.response)
              })
              }
        //   setInputData({...inputData,[e.target.name]:e.target.value})

   
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow flex-start'>
                <h2 className='text-center m-4'>Recipient Details</h2>
                <form >
                <div>
                    <label className='form-label'>
                        Recipient Name
                    </label>
                    <input type="text" className='form-control' placeholder='Enter Name' 
                    value={recp_name} 
                    onChange={(e)=> setrecp_name(e.target.value)} required
                    ></input>
                    
                </div>
                <div className='mb-3' >
                    <label  className='form-label'>
                        Recipient Address
                    </label>
                    <input 
                    id='address'
                    type="text"
                    className='form-control'
                    placeholder='Enter Address'
                   
                    value={recp_addr}
                    onChange={(e)=> setrecp_aadr(e.target.value)} required
                    ></input>
                    
                </div>
                <div className='mb-3'>
                    <label  className='form-label'>
                        Phone Number
                    </label>
                    <input 
                    id='number'
                    type="text"
                    className='form-control'
                    placeholder='Enter number'
                
                    value={recp_phone}
                    onChange={(e)=> setrecp_phone(e.target.value)} required
                    ></input>
                    
                </div>
                {/* <button  onClick={() => alert('Recipient updated successfull')} className='btn btn-outline-primary'>Submit</button> */}
                <button   className='btn btn-outline-primary' onClick={()=>{
                    let data={
                        recp_name:recp_name,
                        recp_addr:recp_addr,
                        recp_phone:recp_phone
                    }
                    handleSubmit(data)}}>Submit</button>
                </form>
            </div>
            {/* onClick={handleSubmit} */}
        </div>
    </div>
    
  )
}

export default Order;