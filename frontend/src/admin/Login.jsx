import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faSignIn } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [validation, setValidation] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigation('/dashboard')
        }
    }, [])
    
    const loginHandler = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)

        await axios.post('http://127.0.0.1:8000/api/login', formData)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            alert('Successfully login!')
            navigation('/dashboard')
        }).catch((error) => {
            setValidation(error.response.data);    
        })
    }
    return(
        <div>
            <div className="bg-white p-2">
                <h4 className="text-center">Mikhmonify</h4>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card"style={{marginTop:"3rem"}}>
                            <h4 className="card-header bg-gray"><FontAwesomeIcon icon={ faNetworkWired } /> MIKROTIK LABOR </h4>
                            <div className="card-body">
                                {
                                    validation.message && (
                                        <div className="alert alert-danger">
                                            {validation.message}
                                        </div>
                                    )
                                }
                                <form onSubmit={loginHandler}>
                                    <p>Username</p>
                                    <input 
                                        type="text"
                                        className="form-control border border-secondary mb-3"
                                        placeholder="Input username"
                                        name={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                     {
                                        validation.username && (
                                            <div className="alert alert-warning">
                                                {validation.username[0]}
                                            </div>
                                        )
                                    }
                                    <p>Password</p>
                                    <input 
                                        type="password"
                                        className="form-control border border-secondary mb-3"
                                        placeholder="******************"
                                        name={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {
                                        validation.password && (
                                            <div className="alert alert-warning">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                    <button 
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{width:"100%"}}
                                    >
                                        <FontAwesomeIcon icon={ faSignIn } /> Log In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
           <div className="bg-white px-3 p-2 py-5 text-center">
            <mark>&copy; All Right Reserved 2023</mark>
           </div>
        </div>
    )
}
export default Login;