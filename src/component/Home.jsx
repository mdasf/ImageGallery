import {useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Gallery from './Gallery'



function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (<div className='relative dark:bg-[#232323] transition-all ease-in-out'>
    <Navbar setSearchQuery={setSearchQuery} />
    {searchQuery ? 
       <Gallery searchQuery={searchQuery}/>
    :
    <>
      <Hero setSearchQuery={setSearchQuery}  />
      <Gallery searchQuery={searchQuery}/>
    </> 
     }
  </div>)
  
}

export default Home