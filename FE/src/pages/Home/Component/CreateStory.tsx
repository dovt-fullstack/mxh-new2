import { useState } from 'react'
import { IonIcon } from '@ionic/react'
import StoryApi from '~/apis/story.api'
import axios from 'axios'

function CreateStory() {
  const [dataStory, setDataStory] = useState('')
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState<any>(null)
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('avatar', file)
    try {
      const { data } = await axios.post(`http://localhost:3000/upload-avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (data && dataStory) {
        setFileName(data.avatarFileName)
        createStory()
      }
    } catch (error) {
      console.error(error)
    }
  }
  const createStory = async () => {
    try {
      // Assuming axios is imported correctly
      console.log('click')
      const test = {
        content: fileName,
        text: dataStory,
        privacy: '1',
        tag: '1231323',
        music: 'ccc'
      }
      await axios.post('http://localhost:3000/api/v1/story/add', test, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoia2FuaXNkZXYtMjJjNzMtZjcwMy00YjE2LTg0N2QtZjYxYmFlMDUtMjAwMiIsImVtYWlsIjoia2FuaXNkZXZAZ21haWwuY29tIiwiaWF0IjoxNzE4ODA4NjEzLCJleHAiOjE3NTAzNDQ2MTN9.XUhy9EHOTREioJiZGHKIXEFzMMKARqGv34J0bMFrsb4` // Assuming token is defined elsewhere
        }
      })
    } catch (error) {
      console.error('Error creating story:', error)
    }
  }
  return (
    <div className='absolute'>
      <div className='uk-modal-dialog tt dark:bg-dark2 relative mx-auto w-full overflow-hidden rounded-lg bg-white p-7 shadow-xl md:w-[520px]'>
        <div className='-m-7 mb-0 border-b py-3 text-center dark:border-slate-700'>
          <h2 className='text-sm font-medium'> Tạo Trạng Thái </h2>
          {/* nút đóng */}
          <button type='button' className='button__ico uk-modal-close absolute right-0 top-0 m-2.5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <div className='mt-7 space-y-5'>
          <div>
            <label htmlFor='' className='text-base'>
              Bạn đang nghĩ gì?{' '}
            </label>
            <input onChange={(e) => setDataStory(e.target.value)} type='text' className='mt-3 w-full' />
          </div>
          <div>
            <div className="border1 relative h-72 w-full overflow-hidden rounded-lg bg-[url('../images/ad_pattern.png')] bg-repeat">
              <label
                htmlFor='createStatusUrl'
                className='absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 cursor-pointer flex-col items-center justify-center bg-gradient-to-t from-gray-700/60 pb-6 pt-10'
              >
                <input
                  onChange={(e: any) => setFile(e.target.files[0])}
                  id='createStatusUrl'
                  type='file'
                  className='hidden'
                  accept='image/png, image/jpeg'
                />
                <IonIcon name='image' className='text-3xl text-teal-600' />
                <span className='mt-2 text-white'>Chọn để tải ảnh lên </span>
              </label>
              <img
                id='createStatusImage'
                src='#'
                alt='Ảnh đã tải lên'
                style={{ display: 'none' }}
                className='absolute h-full w-full object-cover'
              />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-start gap-2'>
              <IonIcon
                name='time-outline'
                className='rounded-full bg-blue-50 text-3xl text-sky-600 dark:bg-transparent'
              />
              <p className='text-sm font-medium text-gray-500'>
                {' '}
                Trạng thái của bạn sẽ có sẵn <br /> trong <span className='text-gray-800'> 24 giờ</span>{' '}
              </p>
            </div>
            <button onClick={handleSubmit} type='button' className='button relative z-50 bg-blue-500 px-8 text-white'>
              {' '}
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStory
