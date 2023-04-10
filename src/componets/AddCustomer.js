import React, { useEffect, useState } from 'react'
import CustomerService from '../services/CustomerService';
import {Link, useNavigate, useParams}from 'react-router-dom'

function AddCustomer() {

    const [id,setId]=useState();
    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [address,setAddress]=useState('');
    const [mobileno,setMobileno]=useState();
    const history=useNavigate();
    const {idd}=useParams();
    
    

    const addCustomer=(e)=>{
        e.preventDefault();

        const customer={id,name,surname,address,mobileno}
        if(idd)
        {
             CustomerService.updatecust(idd,customer).then((res)=>{
              console.log(res)
              history("/")
             }).catch((nee)=>{
              console.log(nee)
             })
        }
        else{

          CustomerService.addCusttt(customer).then((res)=>{
            history("/")
           }).catch((nee)=>{
            console.log(nee)
           })
            
        }
        
    }
    useEffect(()=>{
      CustomerService.getCustomerByid(idd).then((response)=>{
        setId(response.data.id);
        setAddress(response.data.address);
        setMobileno(response.data.mobileno);
        setName(response.data.name)
        setSurname(response.data.surname);
      }).catch((neg)=>{
        console.log(neg);
      })
    },[])
    const title=()=>{
      if(idd)
      {
        return <h3 className='text-center'>Update Customer</h3>
      }
      else
      {
        return <h3 className='text-center'>Add Customer</h3>
      }
    }
  return (
   
    <div className='container'>
         <br></br>
      <div className='row'>
        <div className= "card col-md-6 offset-md-3 offset-md-3">
       {
        title()
       }
        <div className="card-body">
            <div>
                <form >
                   <div className='form-group mb-2'>
                    <label className='form-lable'>Id</label><br></br>
                    <input type='number' name='id' className='form-control' value={id} onChange={(e)=>{setId(e.target.value)}}></input>
                    <label className='form-lable'>First Name</label><br></br>
                    <input type='text' name='name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                    <label className='form-lable'>Last Name</label><br></br>
                    <input type='text' name='surname' className='form-control' value={surname} onChange={(e)=>{setSurname(e.target.value)}}></input>
                    <label className='form-lable'>City</label><br></br>
                    <input type='text' name='address' className='form-control' value={address} onChange={(e)=>{setAddress(e.target.value)}}></input>
                    <label className='form-lable'>Mobile No</label><br></br>
                    <input type='no' name='mobileno' className='form-control' value={mobileno}onChange={(e)=>{setMobileno(e.target.value)}}></input><br></br>
                    <button onClick={(e)=>{addCustomer(e)}} className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-danger'>Close</Link>
                   
                   </div>
                </form>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default AddCustomer
