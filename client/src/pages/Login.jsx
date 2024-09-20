import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {  toast } from 'react-toastify';

const preData = {
  email:"",
  password:"",
}

const Login = () => {
  const {storeTokenInLS} = useAuth()
  const [user,setUser] = useState(preData)
  const navigate = useNavigate()

  const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })

    const res_data = await response.json()
    if(response.ok){
      toast("Login successfull")
      console.log(response)
      storeTokenInLS(res_data.token)
      setUser(preData)
      navigate('/')
    }
    else{
      toast(res_data.extraDetails?res_data.extraDetails:res_data.msg)
        setUser({ email: "", password: "" });
    }
  }
  return (
    <div>
      <div className="flex w-full py-20 flex-col lg:flex-row">
        <div className="card grid h-auto flex-grow place-items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  className="input input-bordered"
                  autoComplete="new-password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="card  grid h-auto flex-grow place-items-center">
        <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
