import React, { useEffect, useState } from 'react'
import { Story } from '~/@types/story'
import storyApi from '~/apis/story.api'
import axios, { AxiosResponse } from 'axios'
import { IonIcon } from '@ionic/react'
import { createSearchParams, useNavigate } from 'react-router-dom'

function ListStory({ handelCheckToggle }: any) {
  const toggleStory = () => {
    handelCheckToggle(true)
  }
  const navigate = useNavigate()
  const [dataStory, setDataStory] = useState([])
  const auth = localStorage.getItem('access_token')
  const getStoryuser = async () => {
    const { data } = await axios.get('http://localhost:3000/api/v1/story/list', {
      headers: {
        Authorization: auth // Assuming token is defined elsewhere
      }
    })
    setDataStory(data.data.story)
    console.log(data.data.story, 'story data')
  }
  useEffect(() => {
    getStoryuser()
  }, [])
    const elements = document.querySelectorAll('.uk-lightbox.uk-overflow-hidden.uk-lightbox-panel.uk-open');

useEffect(() => {
  setInterval(() => {
      console.log(elements,'elements');
    },2000)
  }, [elements]);
  return (
    <>
    <div className='flex  gap-2'>
      <li onClick={toggleStory} className='md:pr-3' uk-scrollspy-class='uk-animation-fade'>
        <div className='dark:bg-dark2 relative grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-slate-300 bg-slate-200 md:h-16 md:w-16 dark:border-slate-700'>
          <IonIcon icon='camera' className='text-2xl' />
        </div>
      </li>
      <div className=' flex items-center gap-3'>
        {dataStory?.length > 1 ? (
          dataStory.map((items: any) => {
            return (
              <ul
                onClick={() =>
                  navigate({
                    search: createSearchParams({
                      id: items.story_id
                    }).toString()
                  })
                }
                key={items.story_id}
                className='uk-slider-items w-[calc(100%+14px)]'
                uk-scrollspy='target: > li; cls: uk-animation-scale-up; delay: 20; repeat: true'
              >
                <li key='' className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
                  <a href={'http://localhost:3000/' + items.content} data-caption={items.text}>
                    <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
                      <img
                        src={'http://localhost:3000/' + items.content}
                        alt=''
                        className='absolute object-cover'
                      />

                    </div>
                  </a>
                </li>
              </ul>
            )
          })
        ) : (
          <></>
        )}
      </div>
      </div>
      </>
  )
}

export default ListStory
