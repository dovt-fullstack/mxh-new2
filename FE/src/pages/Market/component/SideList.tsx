import React from 'react'

function SideList() {
  return (
    <>
        <div className="side-list-item">
                <a href="timeline.html">
                  <img src="src/assets/images/avatars/avatar-2.jpg" alt="" className="side-list-image rounded-full" />
                </a>
                <div className="flex-1">
                  <a href="timeline.html"><h4 className="side-list-title">  John Michael </h4></a>
                  <div className="side-list-info"> 125k Following </div>
                </div>
                <button className="button bg-primary-soft text-primary dark:text-white">follow</button>
              </div>
    </>
  )
}

export default SideList
