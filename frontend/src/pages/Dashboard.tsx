import Content from '../components/Content'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4'>
        <SideBar />
      </div>
      <div className='col-span-9'>
        <Content />
      </div>
    </div>
  )
}

export default Dashboard
