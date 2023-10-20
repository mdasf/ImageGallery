
function Loading() {
    //
  return (
    <div className="flex flex-col gap-2 justify-center items-center dark:bg-[#232323]"> 
        <img src="./src/assets/loading.gif" alt="loading gif" width={300} height={300}  />
        <h1 className="font-montserrat font-semibold text-xl max-w-[300px] text-center text-[#A7A7A7] dark:text-[#E5E5E5]">Loading some awesome Images...</h1>
    </div>
  )
}

export default Loading