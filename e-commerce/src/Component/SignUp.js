import React , {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import baseUrl from '../BaseUrl'
import {toast} from 'react-toastify'

const SignUp = () => {
  const Navigate = useNavigate()
   //////////////////////////////////////
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////////////////////////////
  const HandleSignUp = async (e) => {
e.preventDefault()
    if (!name || !email || !password || !phone) {
      return toast.warning("Please Fill out all input fields");
    }
    //////////////////////////////////////////////
       try {
         const res = await baseUrl.post('/user/signup', {
          name,
          email,
          password,
          phone,})

        if(res.data)
        {
         Navigate('/')
         toast.success(`${res.data}`)
          }
         
       } catch (error) {
         console.log("Hello" , error)
         toast.error(error.response.data)
       }
  };
  return (
    <>
      <div className="container">
        <h1 className="my-5 text-center">Create your account</h1>
        <div className="row ">
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={HandleSignUp}>
              <div className=" mb-2">
                <label>Enter your Name</label>
                <i className="fa-solid fa-users mx-1"></i>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mb-2">
                <label>Enter your Phone Number</label>
                <i class="fa-solid fa-phone mx-1"></i>
                <input
                  type="number"
                  placeholder="Phone No"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
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
                <button type="submit" className="btn btn-dark w-20" >Create Account</button>
                <span className='mx-1'>Already have an account?
                <Link to='/'>Log In</Link></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default SignUp
