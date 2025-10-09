
const Banner = () => {
  return (
    <div className="relative bg-[url('/beautybanner2.jpg')] bg-no-repeat bg-cover h-[80vh] px-[200px]">
      
      <div className="absolute inset-0 bg-black opacity-45">

      </div>
      
      <div className="relative flex-col text-white w-[50%] pt-[10%]">
        
        <span className="text-[30px] mt-3 ">
            Discover your Radiance with our Handpicked Beauty Essentials
        </span>
       
        <h1 className="text-[3x1] mt-3">Glow with Confidennce</h1>
       
        <div className="flex items-center mt-[20px]">
            <button className="bg-[#e48bcd] p-[10px] w-[200px] text-white cursor-pointer mr-9">Shop Now</button>
            <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer mr-9">CALL: (071) 344 8918</button>
        </div>
     
      </div>
    
    </div>
  )
}

export default Banner
