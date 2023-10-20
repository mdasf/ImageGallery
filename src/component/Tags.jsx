
function Tags({tags}) {
  return (
    <div className='pb-6 px-6 dark:bg-[#232323]'>
        <h2 className='text-sm font-semibold text-slate-600 py-3 dark:text-[#E5E5E5]'>Related Tags</h2>
        <div className='flex flex-wrap gap-2'>
        {
            tags.map((tag)=>{
                return <>
                    <span className='font-montserrat text-xs capitalize px-6 py-2 tracking-wider bg-[#ECECEC]'>{tag?.title}</span>
                </>
            })
        }
        </div>
        
    </div>
  )
}

export default Tags