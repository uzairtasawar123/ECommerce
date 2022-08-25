import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import baseUrl from '../BaseUrl'


const Login = () => {
  const Navigate  = useNavigate()
  //////////////////////////////////////
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////////////////////////////
  const HandleSignIn = async (e) => {
    e.preventDefault()
    if(!email || !password){
      return toast.warning("Please Fill out all input fields")
    }
    try {

      const res = await baseUrl.post('/user/login',{
        email,
        password
      })
      if(res.data){
        localStorage.setItem('userToken', JSON.stringify(res.data));
        Navigate('/home')
      }
      
    } catch (error) {
      toast.error(error.response.data)
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="my-5 text-center">Log In to your account</h1>
        <div className="row ">
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={HandleSignIn}>
              
              
              <div className=" mb-2">
                <label>Enter your Email</label>
                <i className="fa-solid fa-envelope mx-1"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your Password</label>
                <i className="fa-solid fa-key mx-1"></i>{" "}
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <input type="submit" className="btn btn-dark w-20" />
                <span className='mx-1'>Don't have an account?
                <Link to='/signup'>Sign Up</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
