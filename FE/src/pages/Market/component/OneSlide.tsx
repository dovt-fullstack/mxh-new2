import React from 'react'
import { IonIcon } from '@ionic/react'
function OneSlide() {
  return (
    <>
        <li className="pr-3 md:w-1/3 w-1/2" uk-scrollspy-class="uk-animation-fade">
              <div className="card">
                    <a href="/product-view-1">
                      <div className="card-media sm:aspect-[2/1.7] h-36">
                        <img src="src/assets/images/product/product-1.jpg" alt="" />
                        <div className="card-overly" />
                      </div>
                    </a>
                    <div className="card-body relative">
                      <a href="#"><span className="text-teal-600 font-semibold text-xs"> Herbel</span></a>
                      <a href="/product-view-1"><p className="card-text block text-black mt-0.5"> Chill Lotion </p></a>
                      <div className="-top-3 absolute bg-blue-100 font-medium px-2  py-0.5 right-2 rounded-full text text-blue-500 text-sm z-20">
                        $19
                      </div>
                    </div>
                  </div>
              </li>        
    </>
  )
}

export default OneSlide
