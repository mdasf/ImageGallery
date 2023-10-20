import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'

function Hero({setSearchQuery}) {

    const [text, setText] = useState('')
    const handleSubmit= (event)=>{
      event.preventDefault()
      console.log(text)
      if(!text) return ''
      setSearchQuery(text)
      setText('')    
    }

  return (
    <section className="bg-[url('./assets/daniel-leone-v7daTKlZzaw-unsplash-1.png')] min-h-[450px] bg-cover bg-no-repeat font-montserrat w-full h-[450px]">
        <div className='max-w-[70%] w-full h-full flex flex-col justify-center items-center mx-auto'>
          <h1 className='font-bold text-center break-words text-white text-3xl'>Download High Quality Images</h1>
          <p className='text-center break-words text-[#C4C4C4] text-sm py-4'>Over 2.4 million+ stock Images by our talented community</p>
          <form action={`/${text}`}  onSubmit={handleSubmit} className='w-full max-w-[800px] mx-auto flex gap-2 items-center bg-white p-3 border-1 border-[#ECECEC] rounded-lg'>
              <FiSearch className='w-[17px] h-[18px] opacity-50'/>
              <input type="text" className='w-full font-montserrat font-extralight text-sm focus:outline-none bg-white ' placeholder='Search high resolution Images, categories, wallpapers' value={text} onChange={(e)=>setText(e.target.value)} />
          </form>
        </div>
    </section>
  )
}

export default Hero