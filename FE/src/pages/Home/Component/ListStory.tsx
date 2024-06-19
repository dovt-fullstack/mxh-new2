import React, { useEffect, useState } from 'react';
import { Story } from '~/@types/story';
import storyApi from '~/apis/story.api';
import axios, { AxiosResponse } from 'axios';
import { IonIcon } from '@ionic/react';



function ListStory({ handelCheckToggle }: any) {
  const toggleStory = () => {
    handelCheckToggle(true)
  }
  return (
    <ul
      className='uk-slider-items w-[calc(100%+14px)]'
      uk-scrollspy='target: > li; cls: uk-animation-scale-up; delay: 20; repeat: true'
    >
      <li onClick={toggleStory} className='md:pr-3' uk-scrollspy-class='uk-animation-fade'>
        <div
          className='dark:bg-dark2 relative grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-dashed border-slate-300 bg-slate-200 md:h-16 md:w-16 dark:border-slate-700'

        >
          <IonIcon icon='camera' className='text-2xl' />
        </div>
      </li>
        <li key="" className='pr-2 duration-300 hover:-rotate-2 hover:scale-[1.15] md:pr-3'>
          <a href="/src/assets/images/avatars/avatar-lg-1.jpg" data-caption="Caption 1">
            <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow md:h-16 md:w-16 md:border-4 dark:border-slate-700'>
            <img
                src='/src/assets/images/avatars/avatar-2.jpg'
                alt=''
                className='absolute h-full w-full object-cover'
              />
            </div>
          </a>
        </li>

    </ul>
  );
}

export default ListStory;
