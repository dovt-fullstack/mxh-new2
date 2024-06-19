import React from 'react'

function PremiumPhotos() {
  return (
    <>
       <li className="w-1/2 pr-2">
      <a href="#">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative w-full h-40">
            <img src="src/assets/images/product/product-1.jpg" alt="" className="object-cover w-full h-full inset-0" />
          </div> 
          <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> $12 </div>
        </div>
        <div className="mt-3 w-full"> Chill Lotion </div>
      </a>
</li>

    </>
  )
}

export default PremiumPhotos
