import React from 'react'
import { BiLike } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'

function ProfileDesc({user,likes, downloads=null,includeSocial}) {

    const {profile_image:profileImage,social,twitter_username:username,name} = user

   
  return (
    <div className={`flex flex-row justify-between w-full  p-3  ${includeSocial ? 'dark:bg-[#232323]' : 'dark:bg-[#141414]'}`}>
    <div className='flex flex-row gap-2 justify-center items-center '>
                 <div className='flex justify-center items-center w-[39px] h-[39px]  rounded-full overflow-hidden'>
                    <img src={profileImage.medium} alt="profileImage" className='w-full object-cover'  />
                </div>
                <div className='flex flex-col gap-[2px] shrink-0 justify-center '>
                    <span className='font-montserrat font-semibold text-xs dark:text-[#E5E5E5] '>{name}</span>
                    <span className='font-montserrat text-[10px] italic text-[#A7A7A7]'>{username ? `@${username}`:''}</span>
                </div>
                {includeSocial && (
                <div className='flex flex-row gap-8 ml-10'>
                    <div className='flex shrink-0 justify-center '>
                    {
                    social.instagram_username &&  (
                        <div className='flex shrink-0 justify-center text-[#A7A7A7] '>
                            <AiOutlineInstagram />
                            <span className='font-montserrat text-[10px] italic '>{`/${social.instagram_username}`}</span>
                        </div>
                        )
                     }
                </div>
                   {
                   social.twitter_username &&  (
                        <div className='flex shrink-0 justify-center text-[#A7A7A7]'>
                                <CiTwitter />
                                <span className='font-montserrat text-[10px] italic '>{`/${social.twitter_username}`}</span>
                            </div>
                        )
                    }
            </div>
            )

        }
        </div>

       {includeSocial ? ( <div className='flex flex-col md:flex-row gap-6 items-center justify-center text-[#858484]'>
            <span  className='text-xs font-bold'>{downloads > 1000 ? `${downloads/1000}K` : downloads} downloads</span>
        
        <div className='flex flex-row gap-1 justify-center items-center shrink-0 text-xs dark:text-[#A7A7A7]  '>
            <BiLike className='w-[14px] h-[14px]'/>
            <span className='font-bold'>{likes > 1000 ? `${likes/1000}K` : likes}</span>
        </div>
        </div>):(
             <div className='flex flex-row gap-2 justify-center items-center shrink-0 text-[10px] '>
             <BiLike className='w-[14px] h-[14px] dark:text-white' />
             <span className='font-bold text-[#4F4F4F] dark:text-white'>{likes > 1000 ? `${likes/1000}K` : likes}</span>
         </div>
        )}
</div>
  )
}

export default ProfileDesc