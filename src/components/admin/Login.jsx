import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { axiosInstanse } from '../../services';

export const AdminLogin = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()
  const submit = async(e) =>{
    e.preventDefault();
    try{
      let obj = {
        username,password
      }
      const res = await axiosInstanse.post('/admin/login',obj)
      console.log(res);
    if(res.status == 201){
      let {data} = res
      localStorage.setItem('ax_token',data.token)
      localStorage.setItem('ax_role',data.token)
      navigate('/user')
    }
    }
    catch(error){
      console.log(error);
    }
    
  }
  return (
    <div className='container'>
      <form onSubmit={submit}>
        <input type="text" name='username' onChange={(e) => setUsername(e.target.value)} />
        <input type="password" name='password' onChange={(e) =>setPassword(e.target.value)}/>
        <button>add</button>
      </form>
    </div>
  )
}

