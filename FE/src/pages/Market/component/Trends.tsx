import React from 'react'

function Trends() {
  return (
    <>
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
    </>
  )
}

export default Trends
