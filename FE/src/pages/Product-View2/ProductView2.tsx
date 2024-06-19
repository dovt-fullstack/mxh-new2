import { IonIcon } from '@ionic/react'
import React from 'react'

function ProductView2() {
  return (
    <>
        <div className="lg:flex 2xl:gap-12 gap-10 2xl:max-w-[1220px] max-w-[1065px] mx-auto" id="js-oversized">
  <div className="flex-1">
    {/* product preview */}
    <div className="rounded-lg box">
      <div className="relative" uk-slideshow="animation: push; ratio: 7:5">
        <ul className="uk-slideshow-items overflow-hidden rounded-t-xl" uk-lightbox="animation: fade"> 
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
          <a className="nav-prev" href="#" uk-slideshow-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /> </a>
          <a className="nav-next" href="#" uk-slideshow-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></a>
        </div>
        <ul className="flex justify-center gap-4 py-4 absolute w-full bottom-0">
          <li uk-slideshow-item={0}><a href="#"> <img src="assets/images/product/product-1.jpg" alt="" className="w-16 h-12 rounded" /> </a></li>
          <li uk-slideshow-item={1}><a href="#"> <img src="assets/images/product/product-5.jpg" alt="" className="w-16 h-12 rounded" /></a></li>
          <li uk-slideshow-item={2}><a href="#"> <img src="assets/images/product/product-10.jpg" alt="" className="w-16 h-12 rounded" /></a></li>
        </ul>
      </div>
      <div className="md:space-y-5 space-y-3 p-5">
        <div className="flex justify-between md:pr-4">
          <div>
            <h3 className="text-lg font-semibold"> Long evening dress with beatuful neckline </h3>
            <p className="text-xs mt-2 font-light text-gray-900 dark:text-white"> Listed on 2 weeeks ago in Hargiesa</p>
          </div>
          <h1 className="text-xl font-semibold"> $12.99 </h1>
        </div>
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
        <p className="text-sm text-black font-light dark:text-white"> sed diam nonummy nibh tincidunt volutpat laoreet dolore  tincidunt volutpat laoreet dolore  euismod tincidunt volutpat laoreet dolore magna aliquam erat volutpat</p>
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
    {/* related items title*/}
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
          <li className="sm:w-1/3 w-1/2 pr-3">
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
          <li className="sm:w-1/3 w-1/2 pr-3">
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
          <li className="sm:w-1/3 w-1/2 pr-3">
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
          <li className="sm:w-1/3 w-1/2 pr-3">
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
        </ul>
      </div>
      {/* slide nav icons */}
      <a className="nav-prev !bottom-1/2 !top-auto" href="#" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /> </a>
      <a className="nav-next !bottom-1/2 !top-auto" href="#" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></a>
    </div>
  </div>
  {/* sidebar */}
  <div className="2xl:w-[380px] lg:w-[330px] w-full">
    <div className="lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6" uk-sticky="media: 1024; end: #js-oversized; offset: 80">
      <div className="box p-5 px-6">
        <div className="flex items-baseline justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> People you may know </h3>
          <a href="#" className="text-sm text-blue-500">See all</a>
        </div>
        <div className="side-list">
          <div className="side-list-item">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="side-list-image rounded-full" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="side-list-title">  John Michael </h4></a>
              <div className="side-list-info"> 125k Following </div>
            </div>
            <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
          </div>
          <div className="side-list-item">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-3.jpg" alt="" className="side-list-image rounded-full" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="side-list-title"> Monroe Parker </h4></a>
              <div className="side-list-info"> 320k Following </div>
            </div>
            <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
          </div>  
          <div className="side-list-item">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-5.jpg" alt="" className="side-list-image rounded-full" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="side-list-title"> James Lewis</h4></a>
              <div className="side-list-info"> 125k Following </div>
            </div>
            <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
          </div>
          <div className="side-list-item">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-6.jpg" alt="" className="side-list-image rounded-full" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="side-list-title">  Alexa stella </h4></a>
              <div className="side-list-info"> 192k Following </div>
            </div>
            <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
          </div>
          <div className="side-list-item">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="side-list-image rounded-full" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="side-list-title"> John Michael </h4></a>
              <div className="side-list-info"> 320k Following </div>
            </div>
            <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
          </div>  
          <button className="bg-secondery button w-full mt-2 hidden">See all</button>
        </div>
      </div>
      {/* peaple you might know */}
      <div className="box p-5 px-6 border1 dark:bg-dark2 hidden">
        <div className="flex justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> Peaple You might know </h3>
          <button type="button"> <IonIcon name="sync-outline" className="text-xl" /> </button>
        </div>
        <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">
          <div className="flex items-center gap-3">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-7.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="font-semibold text-sm text-black dark:text-white">  Johnson smith</h4></a>
              <div className="mt-0.5"> Suggested For You </div>
            </div>
            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
          </div>
          <div className="flex items-center gap-3">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-5.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="font-semibold text-sm text-black dark:text-white"> James Lewis</h4></a>
              <div className="mt-0.5"> Followed by Johnson </div>
            </div>
            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
          </div>
          <div className="flex items-center gap-3">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4></a>
              <div className="mt-0.5"> Followed by Monroe</div>
            </div>
            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
          </div>
          <div className="flex items-center gap-3">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-3.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="font-semibold text-sm text-black dark:text-white">  Monroe Parker</h4></a>
              <div className="mt-0.5"> Suggested For You </div>
            </div>
            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
          </div> 
          <div className="flex items-center gap-3">
            <a href="timeline.html">
              <img src="assets/images/avatars/avatar-4.jpg" alt="" className="bg-gray-200 rounded-full w-10 h-10" />
            </a>
            <div className="flex-1">
              <a href="timeline.html"><h4 className="font-semibold text-sm text-black dark:text-white">  Martin Gray</h4></a>
              <div className="mt-0.5"> Suggested For You </div>
            </div>
            <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button>
          </div>
        </div>
      </div>
      {/* latest marketplace items */}
      <div className="box p-5 px-6 border1 dark:bg-dark2">
        <div className="flex justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> Premium Photos </h3>
          <button type="button"> <IonIcon name="sync-outline" className="text-xl" /> </button>
        </div>
        <div className="relative capitalize font-medium text-sm text-center mt-4 mb-2" tabIndex={-1} uk-slider="autoplay: true;finite: true">
          <div className="overflow-hidden uk-slider-container">
            <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">
              <li className="w-1/2 pr-2">
                <a href="#">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="relative w-full h-40">
                      <img src="assets/images/product/product-1.jpg" alt="" className="object-cover w-full h-full inset-0" />
                    </div> 
                    <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> $12 </div>
                  </div>
                  <div className="mt-3 w-full"> Chill Lotion </div>
                </a>
              </li>
              <li className="w-1/2 pr-2">
                <a href="#">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="relative w-full h-40">
                      <img src="assets/images/product/product-3.jpg" alt="" className="object-cover w-full h-full inset-0" />
                    </div> 
                    <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> $18 </div>
                  </div>
                  <div className="mt-3 w-full">  Gaming mouse </div>
                </a>
              </li>
              <li className="w-1/2 pr-2">
                <a href="#">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="relative w-full h-40">
                      <img src="assets/images/product/product-5.jpg" alt="" className="object-cover w-full h-full inset-0" />
                    </div> 
                    <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> $12 </div>
                  </div>
                  <div className="mt-3 w-full">  Herbal Shampoo </div>
                </a>
              </li>
            </ul>
            <button type="button" className="absolute bg-white rounded-full top-16 -left-4 grid w-9 h-9 place-items-center shadow dark:bg-dark3" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /></button>
            <button type="button" className="absolute -right-4 bg-white rounded-full top-16 grid w-9 h-9 place-items-center shadow dark:bg-dark3" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></button>
          </div>
        </div>
      </div>
      {/* online friends */}
      <div className="box p-5 px-6 border1 dark:bg-dark2">
        <div className="flex justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> Online Friends </h3>
          <button type="button"> <IonIcon name="sync-outline" className="text-xl" /> </button>
        </div>
        <div className="grid grid-cols-6 gap-3 mt-4">
          <a href="timeline.html"> 
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-2.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div> 
          </a>
          <a href="timeline.html"> 
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-3.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div>
          </a>
          <a href="timeline.html">  
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div> 
          </a>
          <a href="timeline.html"> 
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-5.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div> 
          </a>
          <a href="timeline.html"> 
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-6.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div> 
          </a>
          <a href="timeline.html"> 
            <div className="w-10 h-10 relative">
              <img src="assets/images/avatars/avatar-7.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
            </div> 
          </a>
        </div>
      </div>
      {/* Pro Members */}
      <div className="box p-5 px-6 border1 dark:bg-dark2">
        <div className="flex justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> Pro Members </h3>
        </div>
        <div className="relative capitalize font-normal text-sm mt-4 mb-2" tabIndex={-1} uk-slider="autoplay: true;finite: true">
          <div className="overflow-hidden uk-slider-container">
            <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">
              <li className="w-1/2 pr-2">
                <a href="timeline.html"> 
                </a><div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1"><a href="timeline.html">
                  </a><a href="timeline.html"> 
                    <div className="relative w-16 h-16 mx-auto mt-2">
                      <img src="assets/images/avatars/avatar-5.jpg" alt="" className="h-full object-cover rounded-full shadow w-full" />
                    </div>
                  </a>
                  <div className="mt-5 text-center w-full">
                    <a href="timeline.html"> <h5 className="font-semibold"> Martin Gray</h5> </a>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium"> 12K Followers</div>
                    <button type="button" className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                  </div>
                </div>
              </li>
              <li className="w-1/2 pr-2">
                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                  <a href="timeline.html"> 
                    <div className="relative w-16 h-16 mx-auto mt-2">
                      <img src="assets/images/avatars/avatar-4.jpg" alt="" className="h-full object-cover rounded-full shadow w-full" />
                    </div>
                  </a> 
                  <div className="mt-5 text-center w-full">
                    <a href="timeline.html"> <h5 className="font-semibold"> Alexa Park</h5> </a>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium"> 12K Followers</div>
                    <button type="button" className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                  </div>
                </div>
              </li>
              <li className="w-1/2 pr-2">
                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                  <a href="timeline.html"> 
                    <div className="relative w-16 h-16 mx-auto mt-2">
                      <img src="assets/images/avatars/avatar-4.jpg" alt="" className="h-full object-cover rounded-full shadow w-full" />
                    </div>
                  </a> 
                  <div className="mt-5 text-center w-full">
                    <a href="timeline.html"> <h5 className="font-semibold"> James Lewis</h5> </a>
                    <div className="text-xs text-gray-400 mt-0.5 font-medium"> 15K Followers</div>
                    <button type="button" className="bg-secondery block font-semibold mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                  </div>
                </div>
              </li>
            </ul>
            <button type="button" className="absolute -translate-y-1/2 bg-slate-100 rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center dark:bg-dark3" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /></button>
            <button type="button" className="absolute -right-4 -translate-y-1/2 bg-slate-100 rounded-full top-1/2 grid w-9 h-9 place-items-center dark:bg-dark3" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></button>
          </div>
        </div>
      </div>
      {/* Trends */}
      <div className="box p-5 px-6 border1 dark:bg-dark2">
        <div className="flex justify-between text-black dark:text-white">
          <h3 className="font-bold text-base"> Trends for you </h3>
          <button type="button"> <IonIcon name="sync-outline" className="text-xl" /> </button>
        </div>
        <div className="space-y-3.5 capitalize text-xs font-normal mt-5 mb-2 text-gray-600 dark:text-white/80">
          <a href="#">
            <div className="flex items-center gap-3 p"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 -mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <div className="flex-1">
                <h4 className="font-semibold text-black dark:text-white text-sm">  artificial intelligence </h4>
                <div className="mt-0.5"> 1,245,62 post </div>
              </div> 
            </div>
          </a>
          <a href="#" className="block">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 -mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <div className="flex-1">
                <h4 className="font-semibold text-black dark:text-white text-sm">  Web developers</h4>
                <div className="mt-0.5"> 1,624 post </div>
              </div> 
            </div>
          </a>
          <a href="#" className="block">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 -mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <div className="flex-1">
                <h4 className="font-semibold text-black dark:text-white text-sm">  Ui Designers</h4>
                <div className="mt-0.5"> 820 post </div>
              </div> 
            </div>
          </a>
          <a href="#" className="block">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 -mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <div className="flex-1">
                <h4 className="font-semibold text-black dark:text-white text-sm"> affiliate marketing </h4>
                <div className="mt-0.5"> 480 post </div>
              </div> 
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default ProductView2
