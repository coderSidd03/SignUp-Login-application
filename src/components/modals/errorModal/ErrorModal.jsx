import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export default function ErrorModal(props) {
  return (
    <>

      <div className='fixed bg-slate-500 inset-0 bg-opacity-20 backdrop-blur-md flex justify-center items-center'>

        <div className='h-[40%] w-[40%] bg-darkPage rounded-2xl'>
          <button
            className=' bg-red-700 text-white p-2 rounded-full ml-[90%] -mt-[25px] text-3xl duration-300 hover:text-red-500 hover:bg-white hover:border border-red-500 hover:shadow-lg hover:shadow-red-500'
            onClick={props.closeModal}
          >
            <AiOutlineClose />
          </button>


          <div className='bg-white rounded flex flex-col justify-center items-center mt-[15%]'>
            <h1 className='font-bold text-red-600 text-4xl'>ERROR !!</h1>
            <h1 className='font-bold w-full text-center text-black text-2xl'>{props.message}</h1>
          </div>
        </div>

      </div>
    </>
  )
}
