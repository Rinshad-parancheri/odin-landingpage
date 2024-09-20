import { mdiBellRingOutline } from "@mdi/js"
import HeaderIcon from "./HeaderIcon"
import Avatar from "../Avatar"


const HeaderFirstRawRightPart = () => {
  return (
    <div className="flex gap-10 items-center">
      <div>
        <HeaderIcon icon={mdiBellRingOutline} to="/notificaitons" />
      </div>
      <div className="grid place-items-center">
        <Avatar size={50} />
      </div>
      <div className="text-2xl font-bold">
        USER Name
      </div>
    </div>
  )
}

export default HeaderFirstRawRightPart
