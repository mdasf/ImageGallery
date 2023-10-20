import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
function Sidebar() {
  return (
    <>
     <div className={`absolute top-0 right-0  w-[350px] ${isMenuOpen ? 'translate-x-0':'translate-x-full'} h-screen z-10 bg-slate-100 font-montserrat pr-4 py-10 md:p-0 transition-all ease-in-out`}>

<div className='flex justify-between items-center pb-10 px-4'>
   <span className='lg:hidden font-pattaya font-bold text-2xl'>ImageGallery</span>
  <AiOutlineClose className='right-0 w-[24px] h-[24px]  lg:hidden cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)} />
</div>
 <ul className='flex flex-col w-full md:flex-row gap-2 lg:gap-8 items-center'>

     <li className='text-sm font-bold w-full cursor-pointer hover:bg-[#fff] px-4 py-2'>Explore</li>
     <li className='text-sm font-bold w-full cursor-pointer hover:bg-[#fff] px-4 py-2'>Collection</li>
     <li className='text-sm font-bold w-full cursor-pointer hover:bg-[#fff] px-4 py-2 '>Community</li>
     <li className='flex gap-2  items-center text-sm font-bold lg:pl-20 w-full cursor-pointer hover:bg-[#fff] px-4 py-2 '>Dark Mode
         <div className={`relative flex items-center  py-1 cursor-pointer w-8 h-4  ${darkTheme ? 'bg-teal-400':'bg-[#858484]'} border-1 border-[#A7A7A7] rounded-[9.5px] transition-all ease-in`} onClick={handleTheme}>
             <div className={`w-3.5 h-3.5 bg-white rounded-full absolute ${darkTheme ? 'right-0':'left-0'}`} ></div>
         </div>
     </li>
 </ul>
 </div></>
  )
}

export default Sidebar