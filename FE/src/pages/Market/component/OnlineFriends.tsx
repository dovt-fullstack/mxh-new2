import React from 'react'

function OnlineFriends() {
  return (
    <>
      <a href="timeline.html"> 
                <div className="w-10 h-10 relative">
                  <img src="src/assets/images/avatars/avatar-2.jpg" alt="" className="w-full h-full absolute inset-0 rounded-full" />
                  <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2" />
                </div> 
              </a>
    </>
  )
}

export default OnlineFriends
