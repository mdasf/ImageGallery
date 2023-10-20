import {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar({setSearchQuery}) {

  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  const [text, setText] = useState('')
  const [darkMode, setDarkMode] = useState(
      localStorage.theme === 'dark' ? 'dark' : 'light'
  )

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

    const  toggleDarkMode = ()=> {
        setDarkMode(mode => mode === 'light'? 'dark':'light')
        localStorage.theme = darkMode === 'light'? 'dark':'light'
    }
   
    const handleSubmit= (event)=>{
      event.preventDefault()
      if(!text) return ''
      setSearchQuery(text)
      setText('')
    }

  return (
   <nav className='w-full dark:bg-[#232323]'>
    <div className='flex flex-col sm:flex-row gap-10 py-4 px-4 lg:px-0   max-w-7xl items-center mx-auto '>
        <p className='font-pattaya font-bold text-4xl dark:text-white cursor-pointer' onClick={()=>setSearchQuery('')}>ImageGallery</p>
        <form  onSubmit={handleSubmit} className='w-[90%] md:w-[40%] flex gap-2 items-center bg-[#FAFAFA] px-2 md:px-3 border-1 border-[#ECECEC] rounded-lg'>
            <FiSearch className='w-[17px] h-[18px] opacity-50 '/>
            <input type="text" className='w-full h-[43px] md:w-[420px] font-montserrat font-extralight text-sm focus:outline-none bg-[#FAFAFA]' placeholder='Search Images here' value={text} onChange={(e)=>setText(e.target.value)} />
        </form>
        <AiOutlineMenu className='w-[24px] h-[24px] opacity-80 hidden cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)} />

        <ul className=' hidden lg:flex flex-col md:flex-row gap-2 lg:gap-4 items-center dark:text-white'>

        <li className='text-sm font-bold cursor-pointer p-2'>Explore</li>
        <li className='text-sm font-bold cursor-pointer p-2'>Collection</li>
        <li className='text-sm font-bold cursor-pointer p-2 '>Community</li>
        <li className='flex gap-2 items-center text-sm font-bold lg:pl-20 cursor-pointer'>Dark Mode
            <div className={`relative flex items-center  py-1 cursor-pointer w-8 h-4  ${darkMode ==='dark'? 'bg-teal-400':'bg-[#858484]'} border-1 border-[#A7A7A7] rounded-[9.5px] transition-all ease-in`} onClick={toggleDarkMode}>
        <div className={`w-3.5 h-3.5 bg-white rounded-full absolute ${darkMode==='dark' ? 'right-0':'left-0'}`} ></div>
    </div>
</li>
</ul>
        
    </div>
   </nav>
  )
}

export default Navbar