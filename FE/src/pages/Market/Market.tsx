import { IonIcon } from "@ionic/react";
import Category from "./component/Category";
import ListProducts from "./component/ListProducts";
import SideList from "./component/SideList";
import OnlineFriends from "./component/OnlineFriends";
import OneSlide from "./component/OneSlide";
import Featured from "./component/Featured";
import PremiumPhotos from "./component/PremiumPhotos";
import ProMember from "./component/ProMember";
import Trends from "./component/Trends";
function Market(){
  return (
  <div>
    <div className="lg:flex 2xl:gap-12 gap-10 2xl:max-w-[1220px] max-w-[1065px] mx-auto" id="js-oversized">
      <div className="flex-1">
        <div className="lg:max-w-[680px] w-full">
          <div className="page-heading">
            <h1 className="page-title test"> Products </h1>
            <nav className="nav__underline">
              <ul className="group" uk-switcher="connect: #group-tabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"> 
                <li> <a href="#"> Suggestions</a> </li>
                <li> <a href="#"> Newest </a> </li>
                <li> <a href="#"> My products </a> </li>
              </ul> 
            </nav>
            <button type="button" className="absolute right-3 bottom-5"> <div className="w-7 h-7 bg-blue-600 rounded-full shadow grid place-items-center">  <IonIcon name="add" className="text-xl text-white" /> </div> </button>
          </div>
          {/* feature one slider */}
          <div className="relative" tabIndex={-1} uk-slider="auto play: true;finite: true">
            <div className="uk-slider-container pb-1">
              <ul className="uk-slider-items w-[calc(100%+14px)]" uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true">
              <OneSlide />
              <OneSlide />
              <OneSlide />
              <OneSlide />

              
              
              </ul>
            </div>
            {/* slide nav icons */}
            <div className="max-md:hidden">
              <a className="nav-prev !bottom-1/2 !top-auto" href="#" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /> </a>
              <a className="nav-next !bottom-1/2 !top-auto" href="#" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /></a>
            </div>
            {/* slide nav dots*/}
            <div className="flex justify-center">
              <ul className="inline-flex flex-wrap justify-center my-5 gap-2 uk-dotnav uk-slider-nav"> </ul>
            </div>
          </div>
          {/* feature two slider */}
          <div className="relative" tabIndex={-1} uk-slider="auto play: true;finite: true">
            <div className="sm:my-6 my-3 flex items-center justify-between border-t pt-3 dark:border-slate-800">
              <div>
                <h2 className="text-xl font-semibold text-black"> Featured </h2>
                <p className="font-normal text-sm text-gray-500 leading-6 hidden"> Find a group by browsing top categories. </p>
              </div>
              <div className="flex items-center gap-2 [&:has(a.uk-invisible)][&*>a]:bg-red-600">
                <a href="#" className="!block [&:has(.uk-invisible)]:opacity-20" uk-slider-item="previous"><IonIcon name="chevron-back-outline" /> </a> 
                <a href="#" className="!block" uk-slider-item="next"><IonIcon name="chevron-forward-outline" /> </a> 
                <a href="#" className="text-blue-500 sm:block hidden text-sm"> See all </a>
              </div>
            </div>
            <div className="uk-slider-container pb-1">
              <ul className="uk-slider-items w-[calc(100%+14px)]" uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true">
                <Featured />
                <Featured />
                <Featured />
                <Featured />
                
    
              </ul>
            </div>
          </div>
          {/* categories */}
          <div className="sm:mt-6 mt-3 flex items-center justify-between border-t pt-3 dark:border-slate-800">
            <div>
              <h2 className="text-xl font-semibold text-black"> Categories
                <p className="font-normal text-sm text-gray-500 leading-6"> Find a group by browsing top categories. </p>
              </h2></div> 
          </div>
          {/* categories slider*/}
          <div className="relative" tabIndex={-1} uk-slider="auto play: true;finite: true">
            <div className="py-5 uk-slider-container">
              <ul className="uk-slider-items w-[calc(100%+12px)]" uk-scrollspy="target: > li; cls: uk-animation-scale-up; delay: 20;repeat:true">     
              <>
  <li className="pr-3 md:w-1/3 w-auto" uk-scrollspy-class="uk-animation-fade">
    <div className="p-4 flex gap-3 justify-between bg-sky-600 rounded-md">
      <div>
        <h4 className="font-medium !text-white whitespace-nowrap">
          {" "}
          All Categories{" "}
        </h4>
        <p className="font-medium !text-white/80 text-sm mt-1 whitespace-nowrap">
          {" "}
          14 product{" "}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>
    </div>
  </li>
  <li className="pr-3 md:w-1/3 w-auto" uk-scrollspy-class="uk-animation-fade">
    <div className="p-4 flex gap-3 item-center justify-between bg-rose-500 rounded-md">
      <div>
        <h4 className="font-medium !text-white"> Building</h4>
        <p className="font-medium !text-white/80 text-sm mt-1"> 23 product </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    </div>
  </li>
  <li className="pr-3 md:w-1/3 w-auto" uk-scrollspy-class="uk-animation-fade">
    <div className="p-4 flex gap-3 item-center justify-between bg-teal-600 rounded-md">
      <div>
        <h4 className="font-medium !text-white"> Life style </h4>
        <p className="font-medium !text-white/80 text-sm mt-1"> 32 product </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
        />
      </svg>
    </div>
  </li>
  <li className="pr-3 md:w-1/3 w-auto" uk-scrollspy-class="uk-animation-fade">
    <div className="p-4 flex gap-3 item-center justify-between bg-sky-600 rounded-md">
      <div>
        <h4 className="font-medium !text-white"> Electronic </h4>
        <p className="font-medium !text-white/80 text-sm mt-1"> 14 product </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
        />
      </svg>
    </div>
  </li>
  <li className="pr-3 md:w-1/3 w-auto" uk-scrollspy-class="uk-animation-fade">
    <div className="p-4 flex gap-3 item-center justify-between bg-pink-600 rounded-md">
      <div>
        <h4 className="font-medium !text-white"> Building </h4>
        <p className="font-medium !text-white/80 text-sm mt-1"> 16 product </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
        />
      </svg>
    </div>
  </li>
</>

                
              </ul>
              {/* slide nav */}
              <div className="max-md:hidden">
                <button type="button" className="absolute -translate-y-1/2 bg-white shadow rounded-full top-1/2 -left-3.5 grid w-8 h-8 place-items-center dark:bg-dark3" uk-slider-item="previous"> <IonIcon name="chevron-back" className="text-2xl" /></button>
                <button type="button" className="absolute -right-2 -translate-y-1/2 bg-white shadow rounded-full top-1/2 grid w-8 h-8 place-items-center dark:bg-dark3" uk-slider-item="next"> <IonIcon name="chevron-forward" className="text-2xl" /> </button>
              </div>
              {/* slide nav dots*/}
              <div className="flex justify-center">
                <ul className="inline-flex flex-wrap justify-center my-5 gap-2 uk-dotnav uk-slider-nav"> </ul>
              </div>
            </div>
          </div>
          {/* Products title */}
          <div className="sm:my-6 my-3 flex items-center justify-between border-t pt-3 dark:border-slate-800">
            <div>
              <h2 className="text-xl font-semibold text-black"> Products </h2>
              <p className="font-normal text-sm text-gray-500 leading-6 hidden"> Find a group by browsing top categories. </p>
            </div>
            <a href="#" className="text-blue-500 sm:block hidden text-sm"> See all </a>
          </div>
          {/* list products */}
          
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-3" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
           <ListProducts />
           <ListProducts />
           <ListProducts />
           <ListProducts />
           <ListProducts />
           <ListProducts />

          </div>
          <div className="flex justify-center my-6">
            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="2xl:w-[380px] lg:w-[330px] w-full">
        <div className="lg:space-y-6 space-y-4 lg:pb-8 max-lg:grid sm:grid-cols-2 max-lg:gap-6" uk-sticky="media: 1024; end: #js-oversized; offset: 80">
          {/* peaple you might know */}
          <div className="box p-5 px-6">
            <div className="flex items-baseline justify-between text-black dark:text-white">
              <h3 className="font-bold text-base"> People you may know </h3>
              <a href="#" className="text-sm text-blue-500">See all</a>
            </div>
            <div className="side-list">
              <SideList />
              <SideList />
              <SideList />
              <SideList />
              <SideList />
              

              
              <button className="bg-secondery button w-full mt-2 hidden">See all</button>
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
                    <PremiumPhotos />
                    <PremiumPhotos />
                    <PremiumPhotos />
                  
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
              <OnlineFriends />
              <OnlineFriends />
              <OnlineFriends />
              <OnlineFriends />
              <OnlineFriends />
              <OnlineFriends />
              
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
                    <ProMember />
                    <ProMember />
                    <ProMember />
                    <ProMember />
                    <ProMember />

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
              <Trends />
              <Trends />
              <Trends />
              <Trends />
              
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
  )
}
export default Market

