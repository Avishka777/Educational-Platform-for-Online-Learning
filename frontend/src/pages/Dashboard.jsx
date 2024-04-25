import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashCourse from '../components/DashCourse';
import DashUser from '../components/DashUser';
import DashPayment from '../components/DashPayment';
import DashNotification from '../components/DashNotification';
import DashComp from '../components/DashComp';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>

      {/* Profile */}
      {tab === 'profile' && <DashProfile />}

      {/* Dashboard */}
      {tab === 'dash' && <DashComp />}

      {/* Users */}
      {tab === 'users' && <DashUser />}

      {/* Courses */}
      {tab === 'courses' && <DashCourse />}

      {/* Payments */}
      {tab === 'payments' && <DashPayment />}

      {/* Notifications */}
      {tab === 'notifications' && <DashNotification />}

    </div>
  );
}