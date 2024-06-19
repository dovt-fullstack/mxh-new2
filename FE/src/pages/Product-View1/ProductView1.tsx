import { IonIcon } from '@ionic/react'
import React from 'react'

function ProductView1() {
  return (
    <>
        <div className="max-w-[1065px] mx-auto -mt-7">
  {/* product preview */}
  <div className="flex max-lg:flex-col 2xl:gap-6 gap-6 md:p-4 rounded-lg box">
    {/* product image preview*/}
    <div className="lg:max-w-[680px] w-full">
      <div className="relative" uk-slideshow="animation: push; ratio: 7:5">
        <ul className="uk-slideshow-items overflow-hidden rounded-xl" uk-lightbox="animation: fade"> 
          <li className="w-full">
            <a className="inline" href="assets/images/product/product-1.jpg" data-caption="Caption 1"> 
              <img src="assets/images/product/product-1.jpg" alt="" className="w-full h-full absolute object-cover insta-0" />
            </a>
          </li>
          <li className="w-full">
            <a className="inline" href="assets/images/product/product-5.jpg" data-caption="Caption 2"> 
              <img src="assets/images/product/product-5.jpg" alt="" className="w-full h-full absolute object-cover insta-0" />
            </a>
          </li>
          <li className="w-full">
            <a className="inline" href="assets/images/product/product-10.jpg" data-caption="Caption 3"> 
              <img src="assets/images/product/product-10.jpg" alt="" className="w-full h-full absolute object-cover insta-0" />
            </a>
          </li> 
        </ul>
        {/* slide nav icons */}
        <div className="max-md:hidden">
          <a className="nav-prev m-6" href="#" uk-slideshow-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /> </a>
          <a className="nav-next m-6" href="#" uk-slideshow-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></a>
        </div>
        <ul className="flex justify-center gap-4 py-4 absolute w-full bottom-0">
          <li uk-slideshow-item={0}><a href="#"> <img src="assets/images/product/product-1.jpg" alt="" className="w-16 h-12 rounded" /> </a></li>
          <li uk-slideshow-item={1}><a href="#"> <img src="assets/images/product/product-5.jpg" alt="" className="w-16 h-12 rounded" /></a></li>
          <li uk-slideshow-item={2}><a href="#"> <img src="assets/images/product/product-10.jpg" alt="" className="w-16 h-12 rounded" /></a></li>
        </ul>
      </div> 
    </div>
    {/* product details */}
    <div className="flex-1 space-y-8"> 
      <div className="md:space-y-5 space-y-3 p-5 max-md:pt-0 md:pr-2">
        <div>
          <h3 className="text-lg font-semibold"> Long evening dress with beatuful neckline </h3>
          <p className="text-xs mt-2 font-light text-gray-900 dark:text-white"> Listed on 2 weeeks ago in Turkey</p>
        </div>
        <h1 className="text-2xl font-semibold"> $12.99 </h1>
        <div>
          <h4 className="text-sm font-medium"> Details </h4>
          <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
            <div>  Status </div>
            <div className="text-teal-600">  Instock </div> 
          </div>
        </div>
        <div className="flex gap-2 py-2">
          <button className="button bg-primary text-white flex-1 py-1">Add to cart </button>
          <button className="button bg-secondery px-3" uk-tooltip="title: Hello World; offset: 8"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </button>
          <button className="button bg-secondery px-3" uk-tooltip="title: Hello World; offset: 8"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-black font-light dark:text-white"> sed diam nonummy nibh euismod tincidunt volutpat laoreet dolore magna aliquam erat volutpat</p>
        <div>
          <h4 className="text-sm font-medium"> Seller </h4>
          <div className="flex gap-3 py-2 text-sm font-medium mt-2">
            <a href="timeline.html"> <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-9 h-9 rounded-full" /> </a>  
            <div className="flex-1">
              <a href="timeline.html"> <h4 className="text-black dark:text-white"> Monroe Parker </h4> </a>  
              <div className="text-xs text-gray-500 dark:text-white/80"> 2 hours ago </div>
            </div>
            <button type="button" className="button border2 px-3"> Follow </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* related items title */}
  <div className="sm:my-6 my-3 flex items-center justify-between">
    <div>
      <h2 className="text-xl font-semibold text-black"> Related items </h2>
      <p className="font-normal text-sm text-gray-500 leading-6 hidden"> Find a group by browsing top categories. </p>
    </div>
    <a href="#" className="text-blue-500 sm:block hidden text-sm"> See all </a>
  </div>
  {/* related items slider */}
  <div className="relative" tabIndex={-1} uk-slider="auto play: true;finite: true">
    <div className="uk-slider-container pb-1">
      <ul className="uk-slider-items w-[calc(100%+10px)]" uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true">
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-10.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Herbal </p> </a>
                <div className="text-xs line-clamp-1 mt-1">  Herbal Shampoo </div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-8.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Parfum </p> </a>
                <div className="text-xs line-clamp-1 mt-1"> Parfum Spray </div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-9.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Furniture </p> </a>
                <div className="text-xs line-clamp-1 mt-1">  Wood Chair</div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-3.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Electronic </p> </a>
                <div className="text-xs line-clamp-1 mt-1"> Gaming Mouse</div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-1.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Shampo </p> </a>
                <div className="text-xs line-clamp-1 mt-1"> Deep Cleanse</div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
        <li className="lg:w-1/5 md:w-1/4 sm:w-1/3 w-1/2 pr-3">
          <div className="card uk-transition-toggle">
            <a href="product-view-1.html">
              <div className="card-media sm:aspect-[2/1.7] h-36">
                <img src="assets/images/product/product-10.jpg" alt="" />
                <div className="card-overly" /> 
              </div> 
            </a>
            <div className="card-body flex justify-between">
              <div className="flex-1">
                <a href="product-view-1.html"><p className="card-text text-black font-medium line-clamp-1"> Herbal </p> </a>
                <div className="text-xs line-clamp-1 mt-1">  Herbal Shampoo </div>
              </div>
              <h4 className="card-title"> 19$ </h4>
            </div> 
          </div>
        </li> 
      </ul>
    </div>
    {/* slide nav icons */}
    <a className="nav-prev !bottom-1/2 !top-auto" href="#" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /> </a>
    <a className="nav-next !bottom-1/2 !top-auto" href="#" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></a>
  </div>
</div>

    </>
  )
}

export default ProductView1
