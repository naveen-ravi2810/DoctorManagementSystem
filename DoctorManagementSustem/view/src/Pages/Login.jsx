import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const navigate = useNavigate()
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const [Role, setRole] = useState('')
    async function handleSubmit(event){
        event.preventDefault()
        const response = await fetch('/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({'name':Name, 'password':Password, 'role':Role})
        })
        const data = await response.json()
        if(data.status){
            navigate('/dashboard',{replace:true})
        }
        else{
            alert(data.message)
            console.log(Name,Password,Role)
        }
    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='p-3 flex justify-between'>
            <form className='' onSubmit={handleSubmit}>
                <div className='flex gap-3 pt-2'>
                    <label className='text-2xl' htmlFor="username">UserName</label>
                    <input className='border-[1px] border-green-800 p-2' type="text" name='username' onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div className='flex gap-3 pt-2'>
                    <label className='text-2xl' htmlFor="password">Password</label>
                    <input className='border-[1px] border-green-800 p-2' type="password" name='passowrd' onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className='flex gap-3 justify-center pt-3'>
                    <label className='text-2xl' htmlFor="role">Role</label>
                    <select name="Role" defaultValue='' onChange={(e)=>setRole(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                    {/* <div><input type="radio" name='usertype' placeholder='User' onChange={(e)=>setRole(e.target.value)} required/> User</div>
                    <div><input type="radio" name='usertype' placeholder='Doctor' onChange={(e)=>setRole(e.target.value)} required/> Doctor</div>
                    <div><input type="radio" name='usertype' placeholder='Patient' onChange={(e)=>setRole(e.target.value)} required/> Patient</div> */}
                </div>
                <div className='flex justify-center pt-5'>
                    <input className='border-[1px] border-green-600 text-white bg-green-500 p-2 text-xl rounded-lg hover:animate-pulse' type="submit" value="Login" />
                </div>
            </form>
        </div>
    </div>
  )
}
