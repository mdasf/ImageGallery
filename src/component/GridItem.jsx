import { useState } from 'react';
import {BiLike} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Popup from './Popup';
import ProfileDesc from './ProfileDesc'

  function GridItem({image,setIsModalOpen, setModalImageId}) {


    const {id,likes,urls,user,alt_description:altDesc} = image
    const navigate = useNavigate();

    const handleImageClick = (e)=>{
        const{id} = e.target.dataset
        console.log(id)
        // navigate(`/photos/${id}`)
      setIsModalOpen(true)
      setModalImageId(id);
    }
  return  <div className='cursor-pointer shadow-md rounded-xl ' >
        <div className='relative'>
        <img src={urls.small} alt={altDesc} className="w-full" data-id={id} onClick={handleImageClick} />
        
        </div>
        <ProfileDesc user={user} likes={likes} includeSocial={false} />
    </div>
 
  
}

export default GridItem