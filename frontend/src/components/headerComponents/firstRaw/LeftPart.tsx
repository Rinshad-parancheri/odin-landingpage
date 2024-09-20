import { mdiMagnify } from '@mdi/js'
import FirstRawIcon from './HeaderIcon'

const HeaderFirtRawLeftPart = () => {
  return (
    <div className='flex'>
      <div className='grid place-items-center'>
        <FirstRawIcon icon={mdiMagnify} to='' />
      </div>
      <div>
        <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-200 lg:w-[50rem]  border border-gray-300 text-gray-900 text-sm rounded-[20px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2  " />

      </div>
    </div>
  )
}

export default HeaderFirtRawLeftPart
