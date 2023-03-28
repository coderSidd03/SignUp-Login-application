import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import photo from '../../images/loginImg.jpg'
import ErrorModal from '../../components/modals/errorModal/ErrorModal'
import { UserContext } from '../../contexts/UserContext'
import Navbar from '../../components/Navbar/Navbar';

const LoginPage = ({ path }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false)
  const [loginInfo, setloginInfo] = useState({ email: "", password: "" })

  const closeModal = () => { setShowModal(false) };

  const accessInputs = (e) => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    if (loginInfo.password.length < 1 || loginInfo.email.length < 1) {
      alert("Please fill all the fields")
    } else {
      const BASE_URL = process.env.REACT_APP_BACKEND_URL
      await axios.post(`${BASE_URL}/api/user/login`, {
        email: loginInfo.email,
        password: loginInfo.password
      }).then((response) => {
        alert("login success")
        setUser(response.data.user)
        navigate('/')
      }).catch((err) => {
        setShowModal(true);
        setError(err.response.data.message);
      });
    }
  };

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
          <div className='bg-teal-600 dark:bg-darkBg flex flex-col justify-center'>
            <form className='max-w-[600px] w-full mx-auto rounded-lg bg-teal-900  dark:bg-gray-700 p-8 px-8' onSubmit={loginUser}>
              <h2 className='text-4xl text-darkText font-bold text-center dark:text-teal-500'>Log In</h2>


              <div className='flex flex-col text-darkText py-2'>
                <label>email</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="email" name='email' value={loginInfo.email} onChange={accessInputs} />
              </div>

              <div className='flex flex-col text-darkText py-2'>
                <label>password</label>
                <input className='rounded-lg bg-teal-200 mt-2 p-2 focus:border-blue-500 focus:bg-teal-800 focus:outline-none text-black focus:text-white dark:bg-slate-900 dark:text-white dark:focus:border-teal-200 dark:focus:bg-blue-900' type="password" name='password' value={loginInfo.password} onChange={accessInputs} />
              </div>

              <div>
                <h2 className='text-blue-100 '
                >
                  Don't have an account ?
                  <Link to={'/register'} className='text-blue-400'>{" "}Register Now !!</Link>
                </h2>
              </div>

              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='w-2/3 my-5 py-2 font-semibold rounded-lg text-white bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-blue-500/40 hover:bg-teal-100 hover:text-blue-500  duration-200'
                >
                  Log in
                </button>
              </div>
            </form>
          </div>

          <div>
            <img className='w-full h-full object-cover backdrop-saturate-500' src={photo} alt="" />
          </div>
        </div>
      </div>
    </>

  )
}

export default LoginPage
