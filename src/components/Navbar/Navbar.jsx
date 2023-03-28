import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
import Logo from '../../images/nav-logo.png';
import axios from 'axios';

export default function Navbar({ path }) {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  const [theme, setTheme] = useState('light');
  const [btnTxt, setBtnTxt] = useState('to dark Mode')

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('dark', true);
      setBtnTxt('to light mode')
    } else {
      setTheme('light')
      localStorage.setItem('dark', false);
      setBtnTxt('to dark mode')
    }
  };

  useEffect(() => {
    if (localStorage.getItem("dark") === 'true') {
      document.documentElement.classList.add("dark");
      setTheme('dark')

      setBtnTxt('to light mode')
    } else {
      document.documentElement.classList.remove("dark");
      setTheme('light')
      setBtnTxt('to dark mode')
    }
  }, [theme])

  return (
    <>
      <div className='bg-cyan-400'>
        <nav class="p-5 bg-teal-500 shadow md:flex md:items-center md:justify-between dark:bg-darkBg">
          <div class="flex justify-between items-center ">
            <span class="text-2xl cursor-pointer border px-4 py-1 rounded-lg bg-teal-50 shadow-md shadow-white hover:text-white hover:bg-slate-900 dark:hover:bg-teal-400 dark:shadow-teal-400 dark:hover:text-slate-900 hover:font-bold duration-300 hover:scale-105">
              <Link to={'/'}>
                <img className="h-10 inline mr-2" src={Logo} alt='logo' />
                Auth App
              </Link>
            </span>

           
          </div>

          <ul className="flex items-center  md:z-auto md:static absolute gap-2 mt-3 bg-teal-500 md:bg-transparent w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100  transition-all ease-in duration-500 md:gap-5 dark:bg-darkBg"  >
            {path === 'login' && (
              <li>
                <Link
                  to={'/register'}
                  className='bg-blue-500 px-4 py-2 md:mt-0 sm:mt-3  rounded-2xl text-white hover:text-blue-500 hover:bg-teal-50 hover:font-bold hover:shadow-md hover:shadow-blue-100 dark:bg-darkBtnBg dark:text-teal-100 dark:shadow-darkBtnBg dark:hover:bg-teal-100 dark:hover:text-darkBtnBg duration-200'
                >
                  Sign up
                </Link>
              </li>
            )}

            {path === 'register' && (
              <li>
                <Link
                  to={'/login'}
                  className='bg-blue-500 px-4 py-2 rounded-2xl text-white hover:text-blue-500 hover:bg-teal-50 hover:font-bold hover:shadow-md hover:shadow-blue-100 dark:bg-darkBtnBg dark:text-teal-100 dark:shadow-darkBtnBg dark:hover:bg-teal-100 dark:hover:text-darkBtnBg duration-200 md:mt-0 sm:mt-2'
                >
                  Log in
                </Link>
              </li>
            )}

            {path === 'home' && (
              user
                ?
                <li>
                  <Link
                    className='bg-rose-400 mb-5 px-4 w-1/4 py-2 rounded-2xl text-white hover:text-rose-500 hover:bg-rose-200 hover:font-bold hover:shadow-md hover:shadow-red-500 dark:bg-red-900 dark:text-rose-100 dark:shadow-red-500 dark:hover:bg-red-500 dark:hover:text-red-900 duration-200'
                    onClick={() => {
                      const BASE_URL = process.env.REACT_APP_BACKEND_URL
                      axios.get(`${BASE_URL}/api/user/logout`)
                      setUser(null);
                      navigate('/');
                    }}
                  >
                    Log Out
                  </Link>
                </li>
                :
                <>
                  <li>
                    <Link
                      to={'/register'}
                      className='bg-blue-500 px-4 py-2 rounded-2xl text-white hover:text-blue-500 hover:bg-teal-50 hover:font-bold hover:shadow-md hover:shadow-blue-100 dark:bg-darkBtnBg dark:text-teal-100 dark:shadow-darkBtnBg dark:hover:bg-teal-100 dark:hover:text-darkBtnBg duration-200'
                    >
                      Sign up
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={'/login'}
                      className='bg-blue-500 px-4 py-2 rounded-2xl text-white hover:text-blue-500 hover:bg-teal-50 hover:font-bold hover:shadow-md hover:shadow-blue-100 dark:bg-darkBtnBg dark:text-teal-100 dark:shadow-darkBtnBg dark:hover:bg-teal-100 dark:hover:text-darkBtnBg duration-200'
                    >
                      Log in
                    </Link>
                  </li>
                </>

            )}

            <li>
              <Link
                className='bg-white px-4 py-2 rounded-md text-black hover:shadow-lg hover:text-white hover:bg-black dark:bg-blue-900 dark:text-teal-100 dark:hover:bg-teal-100 dark:hover:text-blue-900 duration-300'
                onClick={() => changeTheme()}
              >
                {btnTxt}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

