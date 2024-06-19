import React from 'react'

function ListProducts() {
  return (
    <>
             <div className="card uk-transition-toggle">
              <a href="/product-view-1">
                <div className="card-media sm:aspect-[2/1.7] h-36">
                  <img src="src/assets/images/product/product-10.jpg" alt="" />
                  <div className="card-overly" /> 
                </div> 
              </a>
              <div className="card-body flex justify-between">
                <div className="flex-1">
                  <p className="card-text text-black font-medium line-clamp-1"> Herbel </p>
                  <div className="text-xs line-clamp-1 mt-1"> Herbal Shampoo </div>
                </div>
                <h4 className="card-title"> 19$ </h4>
              </div>  
              <div className="absolute w-full bottom-0 bg-white/20 backdrop-blur-sm uk-transition-slide-bottom-small max-xl:h-full z-[2] flex flex-col justify-center">
                <div className="flex gap-3 py-4 px-3">
                  <button type="button" className="button bg-primary text-white flex-1">Chat</button>
                  <button type="button" className="button border bg-white !w-auto">View</button>
                </div>
              </div> 
            </div>
          
    </>
  )
}

export default ListProducts
