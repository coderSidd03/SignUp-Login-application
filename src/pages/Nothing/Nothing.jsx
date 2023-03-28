import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Error from '../../images/error2.jpg'

export default function Nothing() {
  const [mouseOver, setMouseOver] = useState(false)
  return (
    <div className='h-screen bg-black'>
      <div className='px-9 flex justify-center items-center flex-col'>
        <img src={Error} width={1100}  alt="error" className='backdrop-saturated'/>
        <NavLink to="/">
          <button
            className="mt-5 text-2xl bg-slate-200 p-4 rounded-2xl shadow-lg shadow-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-teal-300 duration-300"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          >
            <div className='flex gap-3'>
              {mouseOver
                ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                </svg>

              }

              Go Back
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  )
}
