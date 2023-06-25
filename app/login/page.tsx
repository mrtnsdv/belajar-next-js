'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Alert } from '../components/Alert';
import { ToastContainer } from 'react-toastify';
import { ButtonPrimary } from '../components/Button'

const LoginPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = () => {
    if (username == "" || password == "") {
      return Alert.warningAlert({
        text: "Username atau password tidak boleh kosong"
      })
    }
    
   router.push('/employee')
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen w-screen md:w-8/12 mx-auto">
      <div className='hidden md:inline mb-12 text-start text-6xl font-bold text-primary-color'>
        Sistem <br/> Manajemen <br/> Pegawai
      </div>
      <div className='inline md:hidden text-center mb-8 text-3xl font-semibold text-primary-color'>
        Sistem Manajemen <br/> Pegawai
      </div>
      <div className="w-10/12 md:w-6/12 rounded bg-primary-color p-5 md:p-10 py-10 md:py-10">
        <div className="block mb-8 text-center text-2xl font-semibold">
          Silahkan Login
        </div>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="rounded w-full text-black" id="username"/>
        </div>
        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded w-full text-black" id="password" />
        </div>
        <ButtonPrimary title="Login User" onClick={ loginUser }/>
      </div>

      <ToastContainer />
    </div>
  )
}

export default LoginPage