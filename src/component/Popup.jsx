import {AiOutlineShareAlt,AiOutlineInfoCircle, AiOutlineClose} from 'react-icons/ai'

import useFetch from '../hooks/useFetch'
import ProfileDesc from './ProfileDesc'
import Tags from './Tags'

function Popup({id,setIsModalOpen}) {

    const {data:image} = useFetch(`/photos/${id}`);
    console.log(image)

    if(!image) return <div className='bg-black/80 fixed top-0 w-full h-full z-100'> <div className='flex w-[1024px] h-[723px] justify-center items-center bg-white dark:bg-[#232323] mx-auto'><span className='font-bold text-3xl tracking-widest text-black dark:text-white'>Loading...</span></div></div>

    const {likes,downloads,tags,urls,user,alt_description:altDesc,slug} = image

  return (
    <div className='mx-auto'>
        <div className='cursor-pointer shadow-md rounded-xl m-5 max-w-5xl mx-auto mt-15 bg-white' >
        <div className='flex justify-center items-center h-[500px] relative'>
        <img src={urls.regular} alt={altDesc} className="w-full h-full object-cover origin-cente" data-id={id} data-slug={slug} />
        
        <div className='flex flex-row justify-between items-center p-3 absolute bottom-0 w-full'>
          <div className='flex flex-row gap-6 justify-center items-center '>
            <button className='flex flex-row gap-1 justify-center items-center border-[1px] px-3 py-1 border-[#ECECEC] text-xs font-light text-white'>
              <AiOutlineShareAlt />
              <span>Share</span>
            </button>
            <button className='flex flex-row gap-1 justify-center items-center border-[1px] px-3 py-1 border-[#ECECEC] text-xs font-light text-white'>
              <AiOutlineInfoCircle />
              <span>Info</span>
            </button>
          </div>
          <button className='bg-green-600 px-4 py-2 text-xs font-bold text-white'>Download Image</button>
        </div>
        <AiOutlineClose className='absolute cursor-pointer -top-3 -right-3 z-200 text-[#4F4F4F] w-[24px] h-[24px] rounded-full bg-[#FFFFFFCC] p-1' onClick={()=>setIsModalOpen(false)}  />
        </div>
        <ProfileDesc user={user} likes={likes} downloads={downloads} includeSocial={true} />
        <Tags tags={tags}  />
        </div>
        
    </div>
  )
}

export default Popup