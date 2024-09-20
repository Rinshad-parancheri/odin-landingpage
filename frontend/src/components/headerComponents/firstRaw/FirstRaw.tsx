import HeaderFirtRawLeftPart from "./LeftPart"
import HeaderFirstRawRightPart from "./RightPart"

const FirstRaw = () => {
  return (
    <div>
      <div className='flex  justify-between items-center mb-8'>

        <div className='rightPart'>
          <HeaderFirtRawLeftPart />
        </div>
        <div>
          <HeaderFirstRawRightPart />

        </div>
      </div>
    </div>
  )
}

export default FirstRaw
