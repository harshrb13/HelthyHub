import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { reset } from '../../redux/actions/profileAction'
import Spinner from 'react-bootstrap/Spinner';

function Reset() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { token } = useParams()

    const { loading } = useSelector(state => state.profile)

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(reset(password, confirmPassword, token))
    }
    return (
        <div className="forgot-section ">
            <div className="forgot-form p-5 col-lg-6 mx-3">
                <h2>Reset Your Password</h2>
                <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="password" className="p-2" autoComplete='false' placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <input type="password" className="p-2" autoComplete='false' placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    {

                        loading ? <div className="d-flex justify-content-center">
                            <Spinner animation="border" variant="success" />
                        </div>
                            : <button type="submit" className="btn btn-primary ">Reset</button>
                    }

                </form>
            </div >
        </div >
    )
}

export default Reset