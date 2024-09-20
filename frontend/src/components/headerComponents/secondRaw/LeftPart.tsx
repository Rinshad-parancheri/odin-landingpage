import Avatar from '../Avatar'

const LeftPart = () => {
  return (
    <div className='flex gap-4'>

      <div>
        <Avatar size={80} />
      </div>
      <div className='flex  font-bold flex-col  justify-center gap-1'>
        <p>hi there</p>
        <p className='text-2xl'>USerName (@userName)</p>
      </div>

    </div>
  )
}

export default LeftPart
