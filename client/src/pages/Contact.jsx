import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const preData = {
  username:"",
  email:"",
  message:""
}

const Login = () => {
  const {Api,authorizationToken} = useAuth()
  const [contact,setContact] = useState(preData)
  const navigate = useNavigate()

  const getUser = async()=>{
    try {
      const response = await fetch(`${Api}/auth/user`,{
        method:'GET',
        headers:{
          Authorization:authorizationToken
        }
      })

      if(response.ok){
        const data = await response.json()
        setContact({
          username:data.userData.username,
          email:data.userData.email
        })
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value

    setContact({
      ...contact,
      [name]:value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/form/contact',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(contact)
    })

    if(response.ok){
      alert("message sent successfully")
      console.log(contact)
      setContact(preData)
      navigate('/')
    }
    else{
      alert("message not sent")
    }
  }
  return (
    <div>
      <div className="flex w-full py-20 flex-col lg:flex-row">
      <div className="card  grid h-auto flex-grow place-items-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </div>
        <div className="card grid h-auto flex-grow place-items-center">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  className="input input-bordered"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" name="message"
                  value={contact.message}
                  onChange={handleInput} placeholder="Message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Contact</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
