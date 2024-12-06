import { useState } from "react"
import "./forgot.css"
import {useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { forgot } from "../../redux/actions/profileAction"
import Spinner from 'react-bootstrap/Spinner';


const containerVeriance = {
    initial: {
        opacity: 0,
        y: -21
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            staggerChildren: .1,
        }
    }
}
function Forgot() {

    const [email,setEmail]=useState('')

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.profile)
    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(forgot(email))
    }
    return (

        <div className="forgot-section ">
            <div className="forgot-form p-5 col-lg-6 mx-3">
                <h2>Forgot Your Password</h2>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="email" className="p-2" id="inputEmail3"
                            placeholder="abc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                    </div>
                    
                    {
                        
                        loading?<div className="d-flex justify-content-center">
                        <Spinner animation="border" variant="success" /> 
                     </div>
                        :  <button type="submit" className="btn btn-primary ">
                        Send reset link
                    </button>
                    }
                    
                  
                </form>
            </div >
        </div >
    )
}

export default Forgot