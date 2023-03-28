import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import photo from '../../images/login-form-img.jpg'
import ErrorModal from '../../components/modals/errorModal/ErrorModal'
import Navbar from '../../components/Navbar/Navbar';



export default function SignUpPage({ path }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false)
  const [confirmPass, setconfirmPass] = useState("")
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const accessInputs = (e) => {
    return setData({ ...data, [e.target.name]: e.target.value })
  }
  const closeModal = () => { setShowModal(false) }

  const registerUser = async (e) => {
    e.preventDefault();
    if (confirmPass.length < 1 || data.password.length < 1 || data.email.length < 1 || data.name.length < 1 || data.phone.length < 1) {
      alert("Please fill all the fields")
    }
    else if (data.password !== confirmPass) {
      setShowModal(true)
      setError('Password & confirm password are different')
    }
    else {
      const BASE_URL = process.env.REACT_APP_BACKEND_URL
      await axios.post(`${BASE_URL}/api/user/register`, data).then((response) => {
        navigate('/login')
        // console.log(response.data);
      }).catch((error) => {
        setShowModal(true);
        setError(error.response.data.message);
      });
    }
  }



  return (
    <>
      {
        showModal && (
          <ErrorModal message={error} closeModal={closeModal} />
        )
      }

      <div className='h-screen bg-teal-200 dark:bg-darkPage'>
        <Navbar path={path} />
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full mt-10'>
          <div className=''>
            <img className='w-full h-full object-cover overflow-hidden backdrop-saturate-500' src={photo} alt="" />

          </div>

          <div className='bg-darkPage flex flex-col justify-center py-10 bg-teal-600 dark:bg-darkBg '>
            <form className='max-w-[600px] w-full mx-auto rounded-lg p-8 px-8 bg-teal-900  dark:bg-gray-700' onSubmit={registerUser}>
              <h2 className='text-4xl text-darkText font-bold text-center dark:text-teal-500'>Register</h2>

              <div className='flex flex-col text-darkText py-2'>
                <label>Name</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="text" name='name' value={data.name} onChange={accessInputs} />
              </div>
              <div className='flex flex-col text-darkText py-2'>
                <label>email</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="email" name='email' value={data.email} onChange={accessInputs} />
              </div>
              <div className='flex flex-col text-darkText py-2'>
                <label>phone no.</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="tell" name='phone' value={data.phone} onChange={accessInputs} />
              </div>
              <div className='flex flex-col text-darkText py-2'>
                <label>password</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="password" name='password' value={data.password} onChange={accessInputs} />
              </div>
              <div className='flex flex-col text-darkText py-2'>
                <label>confirm password</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="password" name='confirmPass' value={confirmPass} onChange={
                  (e) => {
                    setconfirmPass(e.target.value)
                  }
                } />
              </div>

              {/* {error && (
            <div>
              <span className='text-rose-300'> **Please fill all the fields to continue</span>
            </div>
          )} */}

              <div>
                <h2 className='text-blue-100 '
                >
                  Already have an account ?
                  <Link to={'/login'} className='text-teal-400'>{" "}Login !!</Link>
                </h2>
              </div>

              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='w-2/3 my-5 py-2 font-semibold rounded-lg text-white bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-blue-500/40 hover:bg-teal-100 hover:text-blue-500  duration-200'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

