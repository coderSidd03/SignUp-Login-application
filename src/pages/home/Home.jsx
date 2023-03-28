import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios';

export default function Home({ path }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);


  const logOut = async () => {
    const BASE_URL = process.env.REACT_APP_BACKEND_URL
    axios.get(`${BASE_URL}/api/user/logout`)
    setUser(null);
    navigate('/');
  }

  return (
    <>
      
        <div
          className='bg-blue-100 h-screen dark:bg-darkPage '
        >
          <Navbar path={path} />
          {user
            ?
            <div className='flex flex-col items-center '>
              <div className='bg-teal-200 w-full md:w-[50%] mt-4 py-10 dark:bg-teal-800'>
                <div className='bg-blue-400 w-full flex flex-col items-center dark:bg-blue-900'>
                  <label
                    className='text-2xl mt-7 p-4 border border-teal-400 border-lg rounded-lg text-white bg-blue-700 hover:bg-teal-600 hover:text-teal-100  hover:shadow-md hover:shadow-blue-800 duration-500 cursor-pointer font-bold dark:bg-darkBtnBg dark:text-rose-200 dark:border-rose-200 dark:hover:shadow-rose-200 dark:hover:text-darkBtnBg dark:hover:bg-rose-200'
                  >
                    : Logged in User :
                  </label>
                  <h2 className='primary mt-7'>User Name</h2>
                  {user && (<h3 className='primary'>{user.name}</h3>)}

                  <h2 className='primary mt-4'>Email id</h2>
                  {user && (<h3 className='primary'>{user.email}</h3>)}

                  <h2 className='primary mt-4'>contact</h2>
                  {user && (<h3 className='primary mb-10'>{user.phone}</h3>)}

                  <button
                    className='bg-rose-400 mb-5 px-4 md:w-1/4 py-2 rounded-2xl text-white hover:text-rose-500 hover:bg-rose-200 hover:font-bold hover:shadow-md hover:shadow-red-500 dark:bg-red-900 dark:text-rose-100 dark:shadow-red-500 dark:hover:bg-red-500 dark:hover:text-red-900 duration-200'
                    onClick={logOut}
                  >
                    Log out
                  </button>

                </div>
              </div>
            </div>

            :
            <div className='flex flex-col items-center bg-blue-300 p-24 mt-24 dark:bg-blue-900 '>
              <h1
                className='border px-10 py-5 border-teal-400 rounded-lg md:text-4xl bg-teal-200 cursor-pointer hover:font-bold hover:bg-teal-600 hover:text-white shadow-lg hover:shadow-blue-700 hover:scale-110 duration-500 dark:border-teal-50 dark:bg-purple-500 dark:text-blue-300 dark:shadow-purple-500 '
                onClick={() => { navigate('/login') }}
              >
                Please Login to use the app
              </h1>
            </div>
          }


        </div>

    </>
  )
}
// w-1/2 flex flex-col items-center