
import './App.css'
import Information from './components/cards/informationCard.jsx'
import Statistics from './components/cards/statisticsCard.jsx'
import Announcement from './components/cards/announcementCard.jsx'
import Activity from './components/cards/activityCard.jsx'

function App() {
  const announcements = [
    {
      message: `Meet HR Department`,
      time: 'Yesterday, 12:40 PM'
    },
    {
      message: `IT Department need two more talent for UI/UX position`,
      time: 'Tommorow, 1:48 PM'
    },
    {
      message: `Outing Scheduled for every department`,
      time: 'Yesterday, 6:40 PM'
    },

  ]

  return (
    <div className='content'>
      <div className='section1'>
        <div className='dashboard'>
          <p>Dashboard</p>
        </div>
        <div className='information'>
          <Information title={'Available Position'} data={24} message={'4 Urgently Needed'} />
          <Information title={'Job Open'} data={10} message={'4 Active Hiring'} />
          <Information title={'New Employee'} data={24} message={'4 Departments'} />
        </div>
        <div className='statistics'>
          <Statistics title={'Total Employee'} data={24} men={15} women={9} growth={'+5'} />
          <Statistics title={'Talent Request'} data={16} men={6} women={10} growth={'+2'} />
        </div>
        <div className='announcement'>
          <Announcement announcements={announcements} />
        </div>
      </div>
      <div>
        <div className='activity'>
          <Activity />
        </div>
      </div>
    </div>
  )
}

export default App
