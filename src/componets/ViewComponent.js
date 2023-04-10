import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CustomerService from '../services/CustomerService'

const ViewComponent = () => {
    const [id,setId]=useState()
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [address,setAddress]=useState("")
    const [mobileno,setMobileno]=useState();
    const [custo,setCusto]=useState([])
    const {idd}=useParams();
    
    useEffect(()=>{
         CustomerService.getCustomerByid(idd).then((pos)=>{
            console.log(pos)
               setId(pos.data.id)
               setName(pos.data.name)
               setSurname(pos.data.surname)
               setAddress(pos.data.address)
               setMobileno(pos.data.mobileno)
               setCusto(pos.data)
        }).catch((neg)=>{
            console.log(neg)
        })
    },[])
  return (
    <div>
        <div className='container'>
           
        <Link to={"/home"} className='btn btn-info' style={{marginLeft:"24%"}}>Home</Link>
            <diV className= "card col-md-6 offset-md-3 offset-md-3">
            
            <h3 className='text-center'>View Customer </h3><br></br>

           <div>
            <div style={{fontWeight:"bolder",fontSize:'x-large'}} className='text-center'>
                Customer id : {id}<br></br>
                Customer Name : {name}<br></br>
                Customer Surname :{surname}<br></br>
                Customer Address  :{address}<br></br>
                Customer MobileNo :{mobileno}<br></br>
                
            </div>
           </div>

          
          
    
            </diV>
            
            
        </div>
      
    </div>
  )
}

export default ViewComponent
