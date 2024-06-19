import React from 'react'

function Featured() {
  return (
    <>
      <li className="pr-4 sm:w-1/2 w-full">
                <div className="card flex gap-1">
                    <a href="/product-view-2">
                      <div className="card-media w-32 max-h-full h-full shrink-0">
                        <img src="src/assets/images/product/product-1.jpg" alt="" />
                        <div className="card-overly" />
                      </div> 
                    </a> 
                    <div className="card-body flex-1 py-4">
                      <a href="/product-view-2"> <h4 className="card-title"> Chill Lotion</h4> </a>
                      <a href="#"> <p className="card-text"> Herbel </p></a>
                      <div className="text-xl flex items-center justify-between mt-2"> 
                        <h4 className="card-title"> 39$ </h4>
                        <button type="button" className="button bg-secondery !w-auto rounded-fulld hidden">View</button>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" className="button bg-primary-soft text-primary dark:text-white flex-1">Chat</button>
                        <button type="button" className="button bg-secondery !w-auto"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
    </>
  )
}

export default Featured
