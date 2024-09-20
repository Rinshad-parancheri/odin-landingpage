import LeftPart from './LeftPart'
import RightPart from './RightPart'

const SecondRaw = () => {
  return (
    <div className='flex justify-between '>
      <div>
        <LeftPart />
      </div>
      <div className='flex items-center'>
        <RightPart />
      </div>
    </div>
  )
}

export default SecondRaw
