import Content from '../components/Content'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-9'>
        <Header />
      </div>
    </div>
  )
}

export default Dashboard
